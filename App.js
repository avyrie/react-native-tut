import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert, TextInput } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { v1 as uuidv1 } from 'uuid'

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv1(), text: 'Milk'},
    {id: uuidv1(), text: 'Eggs'},
    {id: uuidv1(), text: 'Bread'},
    {id: uuidv1(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const editItem = (item, newItem) => {
    if(!newItem.text) {
      Alert.alert('Hey Dummy', 'Text field cannot be blank' )
    } else {
      let newItems = [...items];
      const index = newItems.findIndex(items => items === item);
      newItems[index] = Object.assign(newItems[index], { text: newItem});
      setItems(newItems)
    }
}

  const addItem = text => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: uuidv1(), text}, ...prevItems];
      });
    }
  }

  const submitAndClear = (text) => {
    TextInput.value='';
  };

  return (
    // <View style={styles.container}>
    <View style={styles.container}>
      <Header />

      <FlatList
        data={items}
        renderItem={({item}) => (
        <ListItem item={item}
        deleteItem={deleteItem} editItem={editItem} />
          )} />

      <AddItem addItem={addItem} submitAndClear={submitAndClear}/>
   
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
    paddingBottom: 60,
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