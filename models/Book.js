import mongoose from "mongoose";
const Schema = mongoose.Schema;

var bookSchema = new Schema ({
    title : {body:String, required:true},
    author: {body:String, required:true},
    summary: {body:String, required:true}
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;