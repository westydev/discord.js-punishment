const mongoose = require("mongoose")
const { mongooseConnect } = require("../settings/Config")

async function connectMongo(){ 
if(!mongooseConnect) {  
    console.log("mongo link url does not exist.")
} else { 
  await mongoose.connect(mongooseConnect).then(x => console.log("MongoDB bağlantısı kuruldu!")).catch(err => console.log(err));
 }
}

module.exports = { connectMongo };