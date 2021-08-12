import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const BlogForm = ({onSubmit, initialValues})=>{
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] =useState(initialValues.content);

    
    return(
        <View>
            <Text style={styles.textStyle}>Enter title :</Text>
            <TextInput style={styles.inputStyle} value={title} onChangeText={(newTitle)=>setTitle(newTitle)} />
            <Text style={styles.textStyle} >Enter content :</Text>
            <TextInput style={styles.inputStyle} value={content} onChangeText={(newContent)=>setContent(newContent)} />
            <Button title='save' onPress={()=>onSubmit(title, content)}/>
        </View>
    )
};

const styles= StyleSheet.create({
    
    textStyle:{
        fontSize: 20,
        margin: 5
    },
    inputStyle:{
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 20,
        margin: 5,
        marginBottom: 25,
        padding:5
    }
});

export default BlogForm;