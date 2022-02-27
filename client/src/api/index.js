import Axios from 'axios'

const URL = 'https://bloggermern.herokuapp.com/posts'

export const fetchPosts = () => Axios.get(URL) 
export const createPost = (newPost) => Axios.post(URL,newPost)
export const updatePost = (id,updatedPost) => Axios.patch(`${URL}/${id}`, updatedPost)
export const deletePost = (id) => Axios.delete(`${URL}/${id}`)
export const likePost = (id)=>Axios.patch(`${URL}/${id}/likePost`)