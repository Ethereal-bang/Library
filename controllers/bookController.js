const Book = require("../models/book");
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

const async = require('async');

module.exports.index = (req, res) => {
    // res.send('未实现：站点首页')
    async.parallel({    // 并行执行操作
        book_count: function (callback) {
            Book.count({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function (callback) {
            BookInstance.count({}, callback);
        },
        book_instance_available_count: function (callback) {
            BookInstance.count({status: 'Available'}, callback);
        },
        author_count: function (callback) {
            Author.count({}, callback);
        },
        genre_count: function (callback) {
            Genre.count({}, callback);
        },
    }, function (err, results) {
        res.render('index', {title: 'Local Library Home', error: err, data: results});
    })
}

exports.book_list = function(req, res, next) {
    Book.find({}, 'title author')
        .populate('author') // ?指定作者author字段 — 这将用完整的作者信息，替换存储的书本作者 id。
        .exec(function (err, list_books) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('book_list', { title: 'Book List', book_list: list_books });
        });

};