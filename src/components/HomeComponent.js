import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {getData, deleteData} from '../services/Home/action';
import ListItem from './ListItemComponent';
import {addIcon} from '../assets/index';

class Home extends Component {
  constructor({navigation, props}) {
    super(props);
    this.navigation = navigation;
  }

  componentDidMount() {
    this.props.getData();
  }

  deleteItem = id => {
    Alert.alert('Delete List Item', 'Do you want to delete this item?', [
      {
        text: 'Yes',
        onPress: () => this.props.deleteData(id),
        style: 'destructive',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  updateItem = (title, data, userId, id) => {
    this.navigation.navigate('UpdateItemComponent', {
      title,
      data,
      userId,
      id,
    });
  };

  renderItem = ({item}) => (
    <ListItem
      userId={item.userId}
      id={item.id}
      title={item.title}
      data={item.body}
      updateItem={this.updateItem}
      deleteItem={this.deleteItem}
    />
  );

  render() {
    const {data: listData} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => this.navigation.navigate('AddItemComponent')}>
            <Image source={addIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={listData}
          renderItem={item => this.renderItem(item)}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  topBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  icon: {
    height: 40,
    width: 40,
  },
});

const mapStateToProps = state => ({
  data: state.home.data,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  deleteData: id => dispatch(deleteData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
