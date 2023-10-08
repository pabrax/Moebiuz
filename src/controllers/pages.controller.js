import {parentDir} from "../config.js"
import path from "path"


export const homePage = (req, res) => {
    res.sendFile(path.join(parentDir, 'public', 'Pages', 'homepage.html'))
}

export const landingPage = (req, res) => {
    res.sendFile(path.join(parentDir, 'public', 'Pages', 'index.html'))
}