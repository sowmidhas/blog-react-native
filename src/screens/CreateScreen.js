import React, { useContext} from 'react';
import {View,  StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';
import BlogForm from '../components/BlogForm'

const CreateScreen = ({navigation})=>{
    
    const {addBlogPost} = useContext(BlogContext);
    return(
        <View style={styles.viewStyle}>
            <BlogForm onSubmit={(title,content)=> {addBlogPost(title,content, ()=>navigation.navigate('Index'))}}
             initialValues={{title:'', content:''}}/>    
        </View>
    )
};

const styles= StyleSheet.create({
    
    viewStyle:{
        padding:10
    }
});

export default CreateScreen;