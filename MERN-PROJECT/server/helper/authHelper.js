import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hashPassword(password, saltRounds);
    return hashedPassword;
  } catch (err) {
    console.error(err);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return comparePassword(password, hashedPassword);
};
