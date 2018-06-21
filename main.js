import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Note from './Note';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }
  render() {
    let notes = this.state.noteArray.map((val, key)=>{
      return <Note key={key} keyval={key} val={val}
              removeFunc = { ()=> this.remove(key) } />
    });
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              -TODO NOTE-
            </Text>
          </View>
          
          <ScrollView style={styles.scrollContainer}>
          {notes}
          </ScrollView>
        </View>
        
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholder='>note'
            placeholderTextColor='black'
            >
          </TextInput>
        </View>
        
        <TouchableOpacity style={styles.add} onPress={this.addFunc.bind(this)}>
          <Icon name='md-add-circle' color='#00ff00' size={61}/>
        </TouchableOpacity>
      </View>
    );
  }
  
  addFunc() {
    if (this.state.noteText){
      this.state.noteArray.push({
        'note': this.state.noteText
      });
    }
    this.setState({noteArray: this.state.noteArray})
    this.setState({noteText: ' '})
    }
    
  remove(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray})
  }
  }
const styles = StyleSheet.create({
   container: {
   flex: 1,
   justifyContent: 'flex-start',
   paddingTop: StatusBar.currentHeight
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5
  },
  headerText: {
    color: '#EC33FF',
    fontSize: 18,
    paddingTop: StatusBar.currentHeight
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  textInput: {
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 10,
    alignSelf: 'stretch',
    color: '#000',
    borderTopWidth: 2,
    boderTopColor: '#000'
  },
  add: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#ffffff'
  },
});