import React, {useEffect, useState} from 'react';
import Person from './person.js';
import {FlatList, Text, View, Button} from 'react-native';
const People = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/users?_quantity=10')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: 'green',
              textAlign: 'center',
              paddingBottom: 10,
            }}>
            People:
          </Text>
          <FlatList
            data={data.data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Button
                title={item.id + '. ' + item.firstname + ' ' + item.lastname}
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate('Person Details', {
                    itemId: item.id,
                    person: item,
                  });
                }}></Button>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default People;
