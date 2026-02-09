import express from "express";
import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

const app = express();

app.use(cors({origin:"http://localhost:5173"}))
app.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res) => {


  res.json({ 
    message: "Welcome to productify API",
    endpoints: {
      users: "/api/users",
      products: "/api/products"
    },
  })
})

app.listen(ENV.PORT,() => {
  console.log("app run in port 3000")
})