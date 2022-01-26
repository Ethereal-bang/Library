const Genre = require('../models/genre');
const Book = require("../models/book");

const async = require("async");

exports.genre_list = (req, res, next) => {
    Genre.find()
        .sort("name")
        .exec((err, genre_list) => {
            if (err) return next(err);
            res.render("genre_list", { title: "Genre List", genre_list })
        })
}