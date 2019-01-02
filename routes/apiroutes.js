
import * as bookController from "../controllers/bookController";
const router = require("express").Router();


// Todo: Add routes here:
// /api/books (get) - Should return all saved books as JSON.
router.route("/api/books")
.get(bookController.findSaved)
.post(bookController.saveBook)
// /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.

router.route("/api/books/:id")
.delete(bookController.removeBook)
// * (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined

router.route("*")
.get()

