import { parentDir } from "../config.js";
import path from "path";

export const homePage = (req, res) => {
  res.sendFile(path.join(parentDir, "public", "Pages", "homepage.html"));
};

export const landingPage = (req, res) => {
  res.sendFile(path.join(parentDir, "public", "Pages", "index.html"));
};

export const loginPage = (req, res) => {
  res.sendFile(path.join(parentDir, "public", "Pages", "login.html"));
};

export const registerPage = (req, res) => {
  res.sendFile(path.join(parentDir, "public", "Pages", "register.html"));
};
