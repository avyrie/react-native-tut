import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem, editItem}) => {
  const [text, setText] = useState('');
  const [isEditing, setEdit] = useState(false);

  const handleEdit = () => {
    editItem(item, text);
    setText('');
    setEdit(false);
  }

  return (
    
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        {isEditing
          ? <TextInput placeholder={item.text} value={text} onChangeText={setText} style={styles.listItemText}/>
          : <Text style={styles.listItemText}>{item.text}</Text>
          }
          {isEditing
            ? <Icon 
            style={styles.editBtn}
            name="save" 
            onPress={handleEdit} />
            : <Icon 
            style={styles.editBtn}
            name="edit" 
            onPress={() => setEdit(true)} />
          }
        
        <Icon 
        name="remove" 
        size={20} 
        color="firebrick"
        onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        paddingLeft: 25,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText:  {
        fontSize: 18,
        flex: 1,
    },
    editBtn: {
      fontSize: 20,
      color: 'purple',
      padding: 15,
    }
});

export default ListItem;