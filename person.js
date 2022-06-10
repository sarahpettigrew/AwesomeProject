import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  Linking,
} from 'react-native';
const Person = ({navigation, route}) => {
  const {itemId, person} = route.params;
  console.log('begin return');

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: 300,
      height: 400,
    },
    name: {
      fontSize: 40,
    },
  });

  return (
    <View style={{flex: 1, padding: 24}}>
      <View style={styles.container}>
        <Image
          source={{
            uri: person.image,
          }}
          style={styles.img}
        />
        <Text style={styles.name}>
          {person.firstname} {person.lastname}
        </Text>
        <Text>Username: {person.username}</Text>
        <Text onPress={() => Linking.openURL('mailto:' + person.email)}>
          {person.email}
        </Text>
        <Text
          style={{color: 'blue', textDecorationLine: 'underline'}}
          onPress={() => Linking.openURL(person.website)}>
          {person.website}
        </Text>
      </View>
    </View>
  );
};

export default Person;
