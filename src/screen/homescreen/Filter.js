import React,{useEffect,useCallback,useState} from 'react';
import {Text,View,Button, FlatList,Navigation,Image,ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

const Filter =(props)=>{
 const [count, setCount] = useState(0);
 const sendData = (category) => {
        props.parentCallback(category);
    }
return (
    <ScrollView horizontal style={{margin:5}}   showsHorizontalScrollIndicator={false}>
            <View style={{flex:1, flexDirection:'row'}}>
                <View >
                    <TouchableOpacity 
                    style={styles.buttonStyle}
                     onPress={() => {
                         sendData("entertainment")
                    }}>
                     <Text style={{color:'white'}}>ENTERTAINMENT</Text>
                     </TouchableOpacity>
                </View>
                <View >
                    
                <TouchableOpacity 
                    style={styles.buttonStyle}
                     onPress={() => {
                         sendData("health")
                    }}>
                     <Text style={{color:'white'}}>HEALTH</Text>
                     </TouchableOpacity>
                </View>
                <View >
                    
                <TouchableOpacity 
                    style={styles.buttonStyle}
                     onPress={() => {
                         sendData("science")
                    }}>
                     <Text style={{color:'white'}}>SCIENCE</Text>
                     </TouchableOpacity>
                </View>
                <View >
                    
                <TouchableOpacity 
                    style={styles.buttonStyle}
                     onPress={() => {
                         sendData("sports")
                    }}>
                     <Text style={{color:'white'}}>SPORTS</Text>
                     </TouchableOpacity>
                </View>
                <View >
                    
                <TouchableOpacity 
                    style={styles.buttonStyle}
                     onPress={() => {
                         sendData("technology")
                    }}>
                     <Text style={{color:'white'}}>TECHNOLOGY</Text>
                     </TouchableOpacity>
                </View>
        </View>
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    buttonStyle:{
        width: 130,
        margin:4,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20,
        backgroundColor: 'orange',
    }
})

export default Filter;