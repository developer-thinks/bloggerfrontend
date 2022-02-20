import Posts from "../models/Posts.js"

export const getPosts = async (req,res)=>{
    try {
        const posts = await Posts.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const createPost = async (req, res)=>{
    const posts = req.body;
    const newPost = new Posts(posts)
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}