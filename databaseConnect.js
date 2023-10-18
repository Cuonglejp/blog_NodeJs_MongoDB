const mongoose = require("mongoose");
const postModule = require("./modules/postModule").module;
require("dotenv").config();

class ConnectingDB {
    constructor(){
        //Get connection string
        this.connectionStr = process.env.MONGO_CONNECTION_STR;

        //Connect to database
        mongoose.connect(this.connectionStr);

        console.log("Connected to DB successfully");
    }

    async getAllPost(){
        try{
            var listAllPost = await postModule.find();
            console.log("Get all post succesfully");
            return listAllPost;
        }
        catch(err){
            console.log("'Get_All_Post' Error: " + err.message);
        }
    }

    async getOnePost(idOfPost){
        try{
            var post = await postModule.findOne({_id : idOfPost});

            console.log("Get post '"+post.title+"' succesfully");
            
            return post;
        }
        catch(err){
            console.log("'Get_Post_"+ idOfPost +"' Error: " + err.message);
        }
    }

    async addPost(postTitle, postContent){
        try{
            var post = new postModule({
                title: postTitle,
                content: postContent
            });

            await post.save();

            console.log("Added post '"+postTitle+"' succesfully");
        }
        catch(err){
            console.log("'Add_Post_"+ postTitle +"' Error: " + err.message);
        }
    }

    async deletePost(postId){
        try{
            await postModule.deleteOne({_id: postId});

            console.log("Deleted post '"+postId+"' succesfully");
        }
        catch(err){
            console.log("'Delete_Post_"+ postId +"' Error: " + err.message);
        }
    }
};

module.exports = ConnectingDB;
