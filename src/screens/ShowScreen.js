import React, {useContext} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BlogContext from '../context/BlogContext';
import {Entypo} from '@expo/vector-icons';

const ShowScreen = ({navigation})=>{
    const id = navigation.getParam('id');
    const {data} =useContext(BlogContext);

    const blogpost = data.find((post)=> post.id === id)

    return(
        <View>
            <Text style={styles.textStyle} >Title: {blogpost.title}</Text>
            <Text style={styles.textStyle} >Content: {blogpost.content}</Text>

        </View>
    )
};

ShowScreen.navigationOptions = ({navigation})=>{
    return {
        headerRight: ()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <Entypo name='edit'  size={24}   />
            </TouchableOpacity>
        ),
    };
};

const styles= StyleSheet.create({
    textStyle:{
        fontSize: 20,

    },
    
});

export default ShowScreen;