import {__dirname} from "../config.js"
import path from "path"


export const homePage = (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Pages', 'homepage.html'))
}

export const landingPage = (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Pages', 'Landing.html'))
}