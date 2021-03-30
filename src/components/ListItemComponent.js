import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {deleteIcon, editIcon} from '../assets/index';

const ListItem = ({userId, id, title, data, updateItem, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => updateItem(title, data, userId, id)}>
          <Image source={editIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteItem(id)}>
          <Image source={deleteIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.data}>{data}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#E67E22',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  data: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  topBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginHorizontal: 5,
  },
});

export default ListItem;
