import { Server } from "http";
import { prisma } from "./config/db";
import http from "http";
import app from "./app";
import dotenv from "dotenv";
let server: Server | null = null;

dotenv.config();

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("DB Connection Done");
  } catch (err) {
    console.log(`Prisma DB connection failed ${err}`);
    process.exit(1);
  }
}

async function startServer() {
  try {
    await connectDB();
    server = http.createServer(app);
    server.listen(process.env.PORT, () => {
      console.log(`Server runs at PORT:- ${process.env.PORT}🌐 `);
    });
  } catch (err) {
    console.log("Server failed to run", err);
  }
}

(async () => {
  await startServer();
})();
