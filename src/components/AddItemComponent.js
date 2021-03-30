import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {setData} from '../services/Home/action';

class AddItemComponent extends Component {
  constructor({navigation, props}) {
    super(props);
    this.navigation = navigation;
    this.state = {
      id: '',
      title: '',
      body: '',
    };
  }

  changeId = id => {
    this.setState({id: id});
  };

  changeTitle = title => {
    this.setState({title: title});
  };

  changeData = data => {
    this.setState({body: data});
  };

  AddBtn = () => {
    const {title, body, id} = this.state;
    const DATA = {title: title, userId: id, body: body};
    Alert.alert('Are you Sure?', 'Do you want to add this Item ?', [
      {
        text: 'Yes',
        onPress: () => {
          this.setState({title: '', id: '', body: ''});
          this.props.setData(DATA);
          this.navigation.goBack();
        },
        style: 'default',
      },
      {text: 'Cancel', style: 'cancel'},
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => this.navigation.goBack()}>
          <Text style={styles.cancelBtnTxt}>X</Text>
        </TouchableOpacity>
        <Text style={styles.headerTxt}>New Post</Text>
        <View style={styles.txtInputWrapper}>
          <TextInput
            style={styles.txtInput}
            placeholder="userid"
            value={this.state.id}
            onChangeText={text => this.changeId(text)}
          />
          <TextInput
            style={styles.txtInput}
            value={this.state.title}
            placeholder="title"
            onChangeText={text => this.changeTitle(text)}
          />
          <TextInput
            multiline
            maxLength={500}
            value={this.state.data}
            style={[styles.txtInput, styles.data]}
            placeholder="data"
            onChangeText={text => this.changeData(text)}
          />
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={this.AddBtn}>
          <Text style={styles.addBtnTxt}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: '5%',
  },
  headerTxt: {
    fontSize: 30,
    color: '#E67E22',
  },
  txtInputWrapper: {
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  txtInput: {
    fontSize: 16,
    borderColor: '#E67E22',
    borderWidth: 1,
    width: '90%',
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: 'justify',
  },
  data: {
    height: 180,
  },
  cancelBtn: {
    marginRight: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#E67E22',
    padding: 5,
    borderRadius: 15,
  },
  cancelBtnTxt: {
    fontSize: 20,
    color: 'white',
  },
  addBtn: {
    height: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E67E22',
    borderRadius: 10,
  },
  addBtnTxt: {
    fontSize: 24,
    color: 'white',
  },
});

const mapDispatchToProps = dispatch => ({
  setData: data => dispatch(setData(data)),
});

export default connect(null, mapDispatchToProps)(AddItemComponent);
