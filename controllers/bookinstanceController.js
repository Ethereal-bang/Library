const BookInstance = require("../models/bookinstance"); // 引入模型

// Display list of all BookInstances.
exports.bookinstance_list = function(req, res, next) {
    BookInstance.find()
        .populate('book')   // 因为bookInstance中book字段是其他文档的引用
        // 有上述语句才能取到bookInstance中的book字段，以及book文档中字段
        .exec(function (err, list_bookinstances) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
        });

};