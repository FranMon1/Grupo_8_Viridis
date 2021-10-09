const usersController = {
    login: (req, res) =>{
        res.send("src/login");
    },

    register: (req, res) =>{
        res.send("src/register");
    }
};




module.exports = usersController;

