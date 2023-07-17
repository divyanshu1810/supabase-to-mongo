export const RESPONSES = {
  HEALTH_CHECK: {
    code: 200,
    message: {
      success: true,
      description: "Server is running",
    },
  },
  GETIMAGES: {
    code: 200,
    message: {
      success: true,
      description: "All images fetched successfully",
    },
  },
  UPLOADIMAGE: {
    code: 200,
    message: {
      success: true,
      description: "Image uploaded successfully",
    },
  },
  UPLOADIMAGES: {
    code: 200,
    message: {
      success: true,
      description: "Images uploaded successfully",
    },
  },
  UPLOADIMAGETOMONGO: {
    code: 200,
    message: {
      success: true,
      description: "Image URL uploaded successfully to MongoDB",
    },
  },
  UPLOADIMAGESTOMONGO: {
    code: 200,
    message: {
      success: true,
      description: "Image URLs uploaded successfully to MongoDB",
    },
  },
  GETIMAGESFROMMONGO: {
    code: 200,
    message: {
      success: true,
      description: "All images fetched successfully from MongoDB",
    },
  },
  NOFILEUPLOADED: {
    code: 400,
    message: {
      success: false,
      description: "File not found",
    },
  },
};

export const PUBLIC_URL = "/storage/v1/object/public/";
