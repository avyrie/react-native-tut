import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = text => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: 5, text}, ...prevItems];
      });
    }
  }

  return (
    // <View style={styles.container}>
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>

      <FlatList
        data={items}
        renderItem={({item}) => (
        <ListItem item={item}
        deleteItem={deleteItem} />
          )} />
   
      {/* <Header title='Shopping List'/> */}
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/women/12.jpg' }} style={styles.img} /> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  // text: {
  //   color: 'darkslateblue',
  //   fontSize: 30,
  // },
  // img: {
  //   width: 100, 
  //   height: 100,
  //   borderRadius: 50,
  // }

});

export default App;