import React from 'react';
import {Text,View,StyleSheet, FlatList,TouchableOpacity, Image} from 'react-native';
import Card from "./Card"

const  ListItem=(props)=>{
    // console.log("prahat_test---->",JSON.stringify(props));
    const goToNext=(data)=>{
        // console.log(data);
        props.goToNextCallback(data)
    }
    const news= props.item
    var x=0;
    return (
        <View>
            <FlatList
                    data={news}
                    keyExtractor={(item) => x++}
                    renderItem={({item}) =>
                    <TouchableOpacity
                    onPress={()=>{
                        
                        goToNext(item)
                    }}
                    >
                    {/* <View style={{margin:10, borderColor:'grey', padding:10, elevation:5, borderRadius:10, borderWidth:2}}>

                    <Image style={{width:"100%", height:200}} source={{uri:item.urlToImage}}/>
                    <Text style={styles.textStyle,{fontSize:18, textAlign:'center'}} > 
                    {item.title}
                    </Text>
                    <Text style={{margin:10, fontSize:16}} > 
                    source: {item.source.name}
                    </Text>
                    </View> */}

                    <Card  article={item} >
                    </Card>
                </TouchableOpacity>
                    }
                />
            
        </View>
    );
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:18,
        fontStyle:'normal',
        margin:10
    }
})
export default ListItem;