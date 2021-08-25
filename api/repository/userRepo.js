const conn = require('../config/conn')
const helper = require('../config/helper')



class UserRepository {
    constructor() { }

    /****************Save user Form ********* */
    save(qry, param, res) {
        let apiPromise = new Promise((resolve, reject) => {
            conn.get().execute(qry, param, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            });
        })
        apiPromise.then((result) => {
            if (result !== undefined) {
                helper.apiResponse(res, 1, "sucessfully Registerd")
            } else {
                helper.apiResponse(res, -1, "Error")
            }
        }).catch((error) => {
            console.log(error)
            helper.apiResponse(res, 2, error)
        })

    }

    /***************************** */
    get(qry,res){
        let apiPromise = new Promise((resolve,reject)=>{
            conn.get().execute(qry,(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    console.log("result==>",result)
                    resolve(result)
                }
            })
        })
        apiPromise.then((result)=>{
            if(result !==undefined){
                helper.apiResponse(res,1,"List of users",result)
            }else{
                helper.apiResponse(res,-1,"error")
            }
        }).catch((error)=>{
            console.log("error",error)
            helper.apiResponse(res,2,error)
        })
    }
    /*********************************** */
    update(qry,param,res){
        let apiPromise = new Promise((resolve,reject)=>{
            conn.get().execute(qry,param,(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    console.log("result==>",result)
                    resolve(result)
                }
            })
        })
        apiPromise.then((result)=>{
            if(result !==undefined){
                helper.apiResponse(res,1,"Update Sucessfully",result)
            }else{
                helper.apiResponse(res,-1,"error")
            }
        }).catch((error)=>{
            console.log("error",error)
            helper.apiResponse(res,2,error)
        })
    }

    
}



module.exports = UserRepository;