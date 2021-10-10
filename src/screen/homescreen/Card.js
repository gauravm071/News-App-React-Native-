import React, {useEffect, useCallback, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Navigation,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Card = props => {
  const item = props.article;
  console.log(item);
  return (
    <View>
      <View style={styles.card}>
        <Image
          style={{width: '96%', height: 150, margin: 8, borderRadius: 10}}
          source={{uri: item.urlToImage}}
        />
        <Text style={(styles.textStyle, {fontSize: 18, textAlign: 'center'})}>
          {item.title}
        </Text>
        <Text style={{margin: 10, fontSize: 16}}>
          source: {item.source.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: 6,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 10,
  },
});

export default Card;
