import React,{useEffect,useCallback,useState} from 'react';
import {Text,View,StyleSheet,Dimensions, FlatList,Navigation,Image, TouchableOpacity,ScrollView} from 'react-native';
import Filter from './Filter';
import { getNews,getNewsSecond } from '../../helper/ApiService';
import Loader from '../Loader';
import ListItem from './ListItem';
import { hitApiSuccess } from "../../redux/action/TestAction";
import { useDispatch,useSelector } from "react-redux";

const HomeScreen=({navigation})=>{
     const dispatch = useDispatch();
     const data = useSelector(state => state.ApiReducer)

    const [news,setNews]= useState()
    const [category, setCategory]= useState("entertainment")
    const [modalVisible, setModalVisible] = useState(false);

        const callbackFunction = (childData) => {
             setCategory(childData)
            console.log(childData);
        }
        const secondCallback = (data) => {
            console.log(data);
            navigation.navigate('ScrollScreen',{articles : data});
        }

    useEffect(() => {
            setModalVisible(true);
            // getNews(category).then(response=> setNews(response));
           const data =  getNewsSecond(category)
           data.then(data => {
               dispatch(hitApiSuccess(data))
            // setNews(data) 
            setModalVisible(false)
           })
    }, [category])
        var x=1;
        return (
       <ScrollView>
           <View>
               <Loader
               showModal = {modalVisible}
               />
           <View>
               <Text style={styles.textStyle}> Today's News</Text>
               <Filter parentCallback = {callbackFunction} ></Filter>
           </View>
           <View style={{height:1, backgroundColor:'grey', margin:5}}></View>
           <View >
               <ListItem item = {data.apiData}
                    goToNextCallback = {secondCallback}></ListItem>
           </View>
           </View>
       </ScrollView>
   );
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        margin:10,
        color:'purple'
    }
})

export default HomeScreen;
