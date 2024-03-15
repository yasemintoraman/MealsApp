import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return ( 
    //fragment tags
    <> 
      <StatusBar style='light' /> 
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
