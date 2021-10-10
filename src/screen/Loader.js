import React, { useState } from "react";
import { ActivityIndicator, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const Loader = ({showModal}) => {
    return (
      <View style={styles.centeredView}>
        <Modal
          
          transparent={true}
          visible={showModal}
        //   onRequestClose={() => {
        //     Alert.alert("Modal has been closed.");
        //     setModalVisible(!modalVisible);
        //   }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ActivityIndicator size="large"  color="#0000ff"/>
              <Text style={styles.modalText}>Loading...</Text>

              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!showModal)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0,0,0,0.5)',
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginTop: 15,
      textAlign: "center"
    }
  });
  
  export default Loader;