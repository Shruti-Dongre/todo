import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Note extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        
        <Text style={styles.noteText}>{this.props.val.note}
        </Text>
        
        <TouchableOpacity style={styles.remove}
          onPress={this.props.removeFunc}>
            <Icon name='md-remove-circle' color='red' size={40}/>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position:'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2
  },
  
  noteText:{
    paddingLeft: 20,
    borderLeftWidth:10
  },
  
  remove:{
    position: 'absolute',
    justifyContent: 'center',
    alignItem: 'center',
    padding: 10,
    top: 10,
    right: 10
  },
});