import Axios from 'axios'

const URL = 'http://localhost:8000/posts'

export const fetchPosts = () => Axios.get(URL) 
export const createPost = (newPost) => Axios.post(URL,newPost)
export const updatePost = (id,updatedPost) => Axios.patch(`${URL}/${id}`, updatedPost)