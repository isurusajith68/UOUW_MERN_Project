import User from "../model/User.js";

export const staffRegister = async (req, res) => {
  const {
    username,
    email,
    phoneNumber,
    slmcNumber,
    dob,
    address,
    idNumber,
    role,
  } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      phoneNumber,
      slmcNumber,
      dob,
      address,
      idNumber,
      role,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
