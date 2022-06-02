import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  item: {
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const english_lavendar = '#AA767C';
const glossy_grape = '#A799B7';

const App = () => {
  return (
    <FlatList
      style={{backgroundColor: english_lavendar}}
      ListHeaderComponent={
        <>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              padding: 10,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              backgroundColor: english_lavendar,
            }}>
            Sarah Pettigrew AD340
          </Text>
          <Text
            style={{
              padding: 10,
              fontSize: 22,
              marginHorizontal: 20,
              backgroundColor: glossy_grape,
              borderRadius: 10,
            }}>
            This app is for learning React Native while taking AD340 Spring 2022
          </Text>
        </>
      }
      data={[
        {key: 'Movies'},
        {key: 'Traffic Cameras'},
        {key: 'Traffic Maps'},
        {key: 'Other'},
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    />
  );
};

export default App;
