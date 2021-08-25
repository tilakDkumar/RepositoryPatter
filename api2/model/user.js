const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
firstname:{
    type:String,
    require:true
},
lastname:{
    type:String,
    require:true
},
mobile:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
linkdin:{
    type:String,
    require:true
},
addressLine_1:{
    type:String,
    require:true
},
addressLine_2:{
    type:String,
    require:true
},
state:{
    type:String,
    require:true
},
city:{
    type:String,
    require:true
},
zipcode:{
    type:String,
    require:true
},
country:{
    type:String,
    require:true
}



})

module.exports =mongoose.model("User", User);
