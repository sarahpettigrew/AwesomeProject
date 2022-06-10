import React from 'react';
import People from './people.js';
import Person from './person.js';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import people from './people';
const english_lavendar = '#AA767C';
const glossy_grape = '#A799B7';
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        style={{
          backgroundColor: english_lavendar,
        }}
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
                marginBottom: 50,
                backgroundColor: glossy_grape,
                borderRadius: 10,
              }}>
              This app is for learning React Native while taking AD340 Spring
              2022
            </Text>
          </>
        }
        data={[
          {key: 'People'},
          {key: 'Traffic Cameras'},
          {key: 'Traffic Maps'},
          {key: 'Other'},
        ]}
        renderItem={({item}) => (
          <View style={styles.title}>
            <Button
              color="#A799B7"
              title={item.key}
              onPress={() => {
                try {
                  const routes = navigation.getState().routeNames;
                  if (routes.includes(item.key)) {
                    navigation.navigate(item.key);
                  } else {
                    ToastAndroid.show(
                      'This page does not exist yet!',
                      ToastAndroid.LONG,
                    );
                    console.log('no page found');
                  }
                } catch (error) {
                  console.log(error);
                }
              }}>
              {item.key}
            </Button>
          </View>
        )}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="People" component={People} />
        <Stack.Screen name="Person Details" component={Person} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
