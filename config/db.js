module.exports={
    "URI":"mongodb+srv://dbadmin:Ripudaman%40121@cluster0.z9efi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"}


    // For production environment never expose your connection string.
let URI = "mongodb+srv://dbadmin:Ripudaman%40121@cluster0.z9efi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//Database setup
let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the Database
    mongoose.connect(URI);

    let mongoDB = mongoose.connection;
   
    mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDB.once('open', ()=>{
        console.log('Connected to MongoDB...');
    });

    return mongoDB;
}