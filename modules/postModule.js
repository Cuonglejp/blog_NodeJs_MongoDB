const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type: String
    },
    content: {
        type: String
    }
});

const Post = new mongoose.model("Post", postSchema);

module.exports = {schema: postSchema, module: Post};
