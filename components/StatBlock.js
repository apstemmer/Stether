import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class StatBlock extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
        <Text style={styles.content}>{this.props.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    color:'#025268',
    fontWeight:'600',
    fontSize:30,
    margin: 10,
  },
  container:{
    backgroundColor: '#333',
    flex: 1,
    flexDirection: 'column',
    height: 150,
    borderBottomWidth:3,
    borderColor:'black',
  },
  content:{
    marginLeft: 10,
    fontSize: 50,
    color:'white'
  }
});

// {
//   title:{
//     color:'#025268'
//   },
//   container:{
//     backgroundColor: '#222',
//     height: '150',
//   },
//   content:{
//     fontWeight: '400',
//   }
// }
