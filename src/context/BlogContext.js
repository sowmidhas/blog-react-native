import React, {useState} from 'react';
import jsonServer from '../api/jsonServer';

const BlogContext = React.createContext();

export const BlogProvider = ({children})=>{
    const [blogPosts, setBlogPosts] = useState([]);

    const getBlogPosts = ()=>{
    
        const getpost = async ()=>{
            const response = await jsonServer.get('/blogposts');
            setBlogPosts(response.data);
        }
        getpost();
        
    }

    const addBlogPost = (title,content, callback)=>{
    
        const putpost = async (title,content,callback)=>{
            await jsonServer.post('/blogposts',{
                title,
                content
            });
            if (callback){
                callback();
            }
        }
        putpost(title,content,callback);

    };

    const deleteBlogPost = (id)=>{

        const delpost = async (id)=>{
            await jsonServer.delete(`/blogposts/${id}`);
            getBlogPosts();
        }

        delpost(id);
        // const posts = blogPosts.filter( post => post.id !== id )
        // setBlogPosts(posts)
    };

    const editBlogPost = (id,title, content, callback)=>{
        const editpost = async (id ,title,content,callback)=>{
            await jsonServer.put(`/blogposts/${id}`, {title, content});

            getBlogPosts();

            if (callback){
                callback();
            }
        }

        editpost(id, title,content, callback);
        
        // const posts = blogPosts.map( post => post.id===id ? {id, title, content} : post);
        // setBlogPosts(posts);
        // callback();
    };

    return(
        <BlogContext.Provider value={{data: blogPosts, addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}}>
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;