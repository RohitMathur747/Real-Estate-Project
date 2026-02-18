import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  //hash the password
  const hashedPassword = await bcrypt.hashSync(password, 10);

  console.log(hashedPassword);

  //console.log("Register endpoint hit");
};

export const login = (req, res) => {
  console.log("Login endpoint hit");
};

export const logout = (req, res) => {
  console.log("Logout endpoint hit");
};
