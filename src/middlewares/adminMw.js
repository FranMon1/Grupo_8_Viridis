
function adminMw (req, res, next) {
    let adminLogged = req.session.userLogged;
    if(adminLogged) {
        if(adminLogged.email == "admin@admin.com") {
            next()
        }
    } else {
        res.redirect('../')
    }
   
}

module.exports = adminMw