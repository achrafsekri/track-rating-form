const mongoose=require('mongoose');

const ratingsSchema=new mongoose.Schema({
    genre:String,
    comment:String,
    trackRating:[{genre:String,track_id:String,rating:Number}],
})
const surveySchema=new mongoose.Schema({
    name:String,
    country:String,
    email:String,
    ratings:Array,
})

module.exports=mongoose.model("Survey",surveySchema)