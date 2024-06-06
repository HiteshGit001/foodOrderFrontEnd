import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Routes, { navigationRef } from './util/routes';
import Layout from './components/Layout/Layout';
import { Provider } from 'react-redux'
import { store } from './store/store';

const Stack = createNativeStackNavigator();

export default function App() {
  const component = (ele) => {
    return <Provider store={store}>
      <Layout>
        <ele.component />
      </Layout>
    </Provider>
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {
          Routes.map((ele) => {
            return (
              <Stack.Screen name={ele.name}
                component={() => component(ele)}
                options={{ title: ele.name }}
              />
            )
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
