const header = require('./config/header')
require('./routes/user')


header.app.listen("3000", () => {
    console.log("server connected to port 3000")
})