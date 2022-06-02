import React from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const App = () => {
  return (
    <ScrollView>
      <Text>Sarah Pettigrew AD340</Text>
      <View>
        <Text>This app is for learning React Native in AD340 Spring 2022</Text>
      </View>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </ScrollView>
  );
};

export default App;
