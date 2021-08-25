const UserRepository = require('../repository/userRepo')


class userControler {
    constructor() { }


    createUser(req, res, next) {
        let { id, firstname, lastname, mobile, email, linkdin, addressLine_1, addressLine_2, state, city, zipcode, country
        } = req.body;
        var qry = "INSERT INTO user(id,firstname,lastname,mobile,email,linkdin,addressLine_1,addressLine_2,state,city,zipcode,country) values(?,?,?,?,?,?,?,?,?,?,?,?)";
        var param = [id, firstname, lastname, mobile, email, linkdin, addressLine_1, addressLine_2, state, city, zipcode, country];


        this.repo.save(qry, param, res)
    }

    getUser(req, res, next) {
        var qry = "select * from user";
        const repo = new UserRepository();
        repo.get(qry, res);
    }


    updateUser(req, res, next) {
        let { id, firstname } = req.body;
        var qry = "update user  SET  firstname=? where id=?";
        var param = [id, firstname];
        const repo = new UserRepository();
        repo.update(qry, param, res);

    }
}

module.exports = userControler;


