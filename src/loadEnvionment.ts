import dotenv from "dotenv";
dotenv.config();

const environment = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_PRIVATE_KEY,
};

export default environment;
