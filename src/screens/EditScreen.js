import React,{ useContext} from 'react';
import { StyleSheet, View} from 'react-native';
import BlogContext from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const EditScreen = ({navigation})=>{
    const id = navigation.getParam('id');
    const {data, editBlogPost} = useContext(BlogContext);

    const blogpost = data.find((post)=> post.id === id);

    
    return(
        <View style={styles.viewStyle}>
            <BlogForm initialValues={{title:blogpost.title, content:blogpost.content}}
            onSubmit={( title, content)=> editBlogPost(id, title,content, ()=>navigation.pop())} />         
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle:{
        padding:10
    }
});

export default EditScreen;