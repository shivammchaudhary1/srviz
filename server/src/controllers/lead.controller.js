import Lead from "../models/lead.model.js";
import User from "../models/user.model.js";

const createLead = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Input validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, email, phone, message) are required",
      });
    }

    // Check for existing lead and user in parallel
    const [existingLead, existingUser] = await Promise.all([
      Lead.findOne({ email: email.toLowerCase().trim() }),
      User.findOne({ email: email.toLowerCase().trim() }),
    ]);

    // if (existingLead) {
    //   return res.status(409).json({
    //     success: false,
    //     message: "A lead with this email already exists",
    //   });
    // }

    // Create new lead
    const newLead = await Lead.create({
      userId: existingUser?._id,
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: {
        lead: newLead,
      },
    });
  } catch (error) {
    console.error("Create lead error:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "A lead with this email already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private (Admin only)
const getAllLeads = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,

      search,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    // Build filter object
    const filter = {};

    if (status) {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ];
    }

    // Calculate pagination
    const pageNumber = Math.max(1, parseInt(page));
    const limitNumber = Math.max(1, Math.min(100, parseInt(limit))); // Max 100 per page
    const skip = (pageNumber - 1) * limitNumber;

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === "desc" ? -1 : 1;

    // Get leads with pagination
    const [leads, totalLeads] = await Promise.all([
      Lead.find(filter).sort(sort).skip(skip).limit(limitNumber).lean(),
      Lead.countDocuments(filter),
    ]);

    // Calculate pagination info
    const totalPages = Math.ceil(totalLeads / limitNumber);
    const hasNextPage = pageNumber < totalPages;
    const hasPrevPage = pageNumber > 1;

    res.status(200).json({
      success: true,
      message: "Leads retrieved successfully",
      data: {
        leads,
        pagination: {
          currentPage: pageNumber,
          totalPages,
          totalLeads,
          limit: limitNumber,
          hasNextPage,
          hasPrevPage,
        },
      },
    });
  } catch (error) {
    console.error("Get all leads error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

export { createLead, getAllLeads };
