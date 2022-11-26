import axios from 'axios'

const POST_API_BASE_URL = "http://localhost:2001/posts"

class PostServices {
   getAllPosts() {
      return axios.get(POST_API_BASE_URL)
   }

   savePost(post) {
      return axios.post(POST_API_BASE_URL, post)
   }
}

export default new PostServices()
