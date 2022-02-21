import Axios from 'axios'

const URL = 'http://localhost:8000/posts'

export const fetchPosts = () => Axios.get(URL) 