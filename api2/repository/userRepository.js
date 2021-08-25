const  mongoose = require('mongoose')

class UserRepository {
    constructor(){}

    save(user,cb){
        console.log('saving user in the repository '+user);
        user.save(function (mayHaveError){
            cb(mayHaveError)
        })
    }

}


module.exports = UserRepository;