import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const AddItem = ({title, addItem, submitAndClear}) => {
    let [text, setText] = useState('');

    const onChange = (textVal) => {
        setText(textVal);
    }

  return (
    <View>
        <TextInput clearButtonMode='always' placeholder="Add Item" style={styles.input} onChangeText={onChange}/>
        <TouchableOpacity style={styles.btn} onPress={() => 
        addItem(text)}>
            <Text style={styles.btnText}><Icon name="plus" size={20} /> Add Item</Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    input: {
        paddingLeft: 25,
        height: 60, 
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },

});

export default AddItem;