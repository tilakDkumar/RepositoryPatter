const User = require('../model/user')
const sendJsonResponse = require('../config/sendJsonResponse')
const userRepository = require('../repository/userRepository')

class userControler{
    constructor(){}

    createUser(req,res,next){
        const userData = req.body;

        const user  = new User({
            firstname:userData.firstname,
            lastname:userData.lastname,
            mobile:userData.mobile,
            email:userData.email,
            linkdin:userData.linkdin,
            addressLine_1:userData.addressLine_1,
            addressLine_2:userData.addressLine_2,
            state:userData.state,
            city:userData.city,
            zipcode:userData.zipcode,
            country:userData.country
        });

        const repo = new userRepository();

        repo.save(user,mayHaveError =>{
            var _returnStatusCode = 501;
            var _returnContent = { message: '' };

            if(!mayHaveError){
                console.log('save without error');
                _returnStatusCode = 200;
                _returnContent = user;
            }else{
                console.log("error occure while submiting")
            }
            sendJsonResponse(res, _returnStatusCode, _returnContent);
        })
    }
    
}


module.exports = userControler;