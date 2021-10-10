import React,{useState,useEffect} from 'react';
import {Button,ScrollView,Dimensions,TouchableOpacity,Alert,StyleSheet,Text,View,Image, FlatList} from 'react-native';
import Card from './homescreen/Card'

var Device_Width = Dimensions.get('window').width ;
const ScrollScreen = ({route}) =>{
    const {articles}= route.params
    return (
        <View >
            <View style={styles.card}>
            <Text style={{textAlign:'center', fontSize:25, margin:10, fontWeight:'bold', color:'purple'}}> News Details </Text>
            <Image style={{width:"100%", height:200, padding:10}}  source={{uri:articles.urlToImage}} />
            <Text style={styles.textStyle}>{articles.source.name} </Text>
            <Text style={{color:'#CC08DC',fontSize:18, textAlign:'center' }}>{articles.title} </Text>
            
            </View>
            <View>
            <Text style={{color:'green', textAlign:'center', fontSize:20, fontWeight:'bold', marginTop:20}}>
                Description 
            </Text>
            <Text style={{fontSize:18, textAlign:'center', margin:10, fontStyle:'italic'}}>{articles.description} </Text>
                </View>
                <View style={{ margin:10, fontSize:16}}>
                    <Text style={{color:'grey'}}>
                        Author: {articles.author}
                    </Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:18,
        margin:10,
        textAlign:'center'
    },
    card:{
            borderColor:6,
            elevation:6,
            borderRadius:10,
            backgroundColor:'white',
            shadowOffset:{width:1, height:1},
            shadowColor:'#333',
            shadowOpacity:0.3,
            shadowRadius:2,
            marginHorizontal:4,
            marginVertical:6,
            marginLeft:8,
            marginRight:8,
            marginTop:10
    }
})
export default ScrollScreen;