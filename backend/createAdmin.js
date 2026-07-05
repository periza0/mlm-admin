const bcrypt = require("bcryptjs");
require("dotenv").config();

const connectDB = require("./config/db");
const Admin = require("./models/Admin");

async function createAdmin() {
  await connectDB();

  const hashedPassword =
    await bcrypt.hash("mlm12345", 10);

  await Admin.create({
    name: "Maninder",
    password: hashedPassword,
  });

  console.log("Admin Created");

  process.exit();
}

createAdmin();
