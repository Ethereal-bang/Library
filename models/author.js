const mongoose = require('mongoose');
const moment = require("moment");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: {type: String, required: true, max: 100},   // 姓氏
    family_name: {type: String, required: true, max: 100},  // 名字
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});

// 虚拟属性name：表示作者全名
AuthorSchema
    .virtual('name')
    .get(function () {  // 这样在模板中使用全名更方便
        return this.family_name + ', ' + this.first_name;
    });

// 虚拟属性lifespan：作者寿命
AuthorSchema
    .virtual('lifespan')
    .get(function () {
        return this.date_of_birth ? moment(this.date_of_birth).format('YYYY-MM-DD') : '';    });

// 虚拟属性url：作者 URL
AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
        // _id：使用文档id为每个模型记录定义唯一url
    });
    // 模板中需获取特定作者的连接时可使用该属性

// 导出 Author 模型
module.exports = mongoose.model('Author', AuthorSchema);
