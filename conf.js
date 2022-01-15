require("dotenv").config();

module.exports = {
    env: {
        REACT_APP_GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY,
        REACT_APP_USERNAME = process.env.REACT_APP_USERNAME,
        REACT_APP_PASS = process.env.REACT_APP_PASS
    },
}