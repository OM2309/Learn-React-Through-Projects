import User from "../models/userModel.js";

export const create = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    if (!fname || !lname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required parameters",
      });
    }

    const userData = new User({
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    });

    const savedUser = await userData.save();
     res.status(201).json({
      user: savedUser,
      message: "Created successfully"
    });
    // Use return to exit the function after sending the response
  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).json({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      // Check if userData is empty
      return res.status(404).json({
        success: false,
        message: "Data not available",
      });
    }

    return res.status(200).json(userData); // Use return to exit the function after sending the response
  } catch (error) {
    console.error("Error in fetching data:", error);
    return res.status(500).json({
      success: false,
      message: "Error in fetching data",
      error: error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById({ _id: id });

    if (!userExist) {
      // Check if userData is empty
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json(userExist);
  } catch (error) {
    console.error("Error in fetching one data:", error);
    return res.status(500).json({
      success: false,
      message: "Error in fetching data",
      error: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    const id = req.params.id;

    const userExist = await User.findById(id);

    if (!userExist) {
      // Check if userExist is empty
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update the user properties only if they are provided in the request body
    userExist.fname = fname || userExist.fname;
    userExist.lname = lname || userExist.lname;
    userExist.email = email || userExist.email;
    userExist.password = password || userExist.password;

    await userExist.save(); // Save the updated user

    res.json({
      success: true,
      message: "User updated successfully",
      user: {
        id: userExist._id,
        fname: userExist.fname,
        lname: userExist.lname,
        email: userExist.email,
        password: userExist.password,
      },
    });
  } catch (error) {
    console.error("Error in updating data:", error);
    return res.status(500).json({
      success: false,
      message: "Error in updating data",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById({ _id: id });

    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    await User.findByIdAndDelete({ _id: id });
    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error in deleteing data:", error);
    return res.status(500).json({
      success: false,
      message: "Error in delteing data",
      error: error.message,
    });
  }
};
