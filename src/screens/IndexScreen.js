import React, {useContext, useEffect} from 'react';
import {Text, StyleSheet, View, FlatList, Button, TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';


const IndexScreen = ({navigation})=>{
    const {data, deleteBlogPost, getBlogPosts} = useContext(BlogContext);

    useEffect(()=>{
        getBlogPosts();

        const listener = navigation.addListener('didFocus', ()=>{
            getBlogPosts();
        });

        return ()=>{
            listener.remove();
        };
    },[]);

    return(
        <View>
            
            <FlatList data={data}
            keyExtractor={(blogPost)=>blogPost.title}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('Show', {id: item.id})} >
                        <View style={styles.viewStyle}>
                            <Text style={styles.textStyle}>{item.title}</Text>
                            <TouchableOpacity onPress={()=> deleteBlogPost(item.id)} >
                                <Feather name='trash' style={styles.iconStyle} />
                            </TouchableOpacity>
                    
                        </View>
                    </TouchableOpacity>)
            }} />

        </View>
    )
};

IndexScreen.navigationOptions = ({navigation})=>{
    return {
        headerRight: ()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                <Feather name="plus" style={styles.iconStyle} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    viewStyle:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        borderBottomWidth:1,
        borderColor:'gray'
    },
    textStyle:{
        fontSize:20
    },
    iconStyle:{
        fontSize: 30
    }
});

export default IndexScreen;