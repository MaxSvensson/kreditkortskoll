import axios from '../config/axios';
import { Blog } from '../interfaces/Blog';

export const getBlogs = async () : Promise<{blogs? : Blog[], error? : boolean}> => { 
  try {
    // Fetching cards
    const res = await axios.get(`/blog`);
    console.log(res)
    let blogs = res.data as Blog[];

    // Check for cards
    if(!blogs) throw new Error();

    // Return cards
    return {
        blogs,
        error:false
    }
  } catch (error) {

    // Error, return
    return {
      error: true
    }

  }
}

export const getBlog = async (name : string) : Promise<{blog? : Blog, error? : boolean}> => { 
  try {

    // Fetching cards
    const res = await axios.get(`/blog`);
    let blogs = res.data as Blog[];

    const blog = blogs.find(blog => blog.name === name)

    // Check for cards
    if(!blog) throw new Error();

    // Return cards
    return {
        blog,
        error:false
    }
  } catch (error) {

    // Error, return
    return {
      error: true
    }

  }
}