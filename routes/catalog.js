const express = require('express');
const router = express.Router();

// 导入控制器模块
const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookinstanceController');

/// 藏书路由 ///

// GET 获取藏书编目主页
router.get('/', book_controller.index);

// GET 请求添加新的藏书。注意此项必须位于显示藏书的路由（使用了 id）之前。
// router.get('/book/create', book_controller.book_create_get);

// POST 请求添加新的藏书
// router.post('/book/create', book_controller.book_create_post);

// GET 请求删除藏书
// router.get('/book/:id/delete', book_controller.book_delete_get);

// POST 请求删除藏书
// router.post('/book/:id/delete', book_controller.book_delete_post);

// GET 请求更新藏书
// router.get('/book/:id/update', book_controller.book_update_get);

// POST 请求更新藏书
// router.post('/book/:id/update', book_controller.book_update_post);

// GET 请求藏书
// router.get('/book/:id', book_controller.book_detail);

// GET 请求完整藏书列表
router.get('/books', book_controller.book_list);

/// 藏书副本、藏书种类、作者的路由与藏书路由结构基本一致，只是无需获取主页 ///
// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
// router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

// POST request for creating BookInstance.
// router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

// GET request to delete BookInstance.
// router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);

// POST request to delete BookInstance.
// router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance.
// router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);

// POST request to update BookInstance.
// router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
// router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;
