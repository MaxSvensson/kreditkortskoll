const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
    html: {
        required:true,
        type: String
    },
    name: {
        type: String,
        required:true,
    },
    imgUrl: {
        type: String
    },
    status: {
        type: String,
        default:'privat'
    },
    description: {
        type: String,
    },
    date: {
        type: String
    }
})
 

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);


module.exports = BlogPost;