import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Card, Button, Text, Icon} from 'react-native-elements';
import  * as actions from '../actions';
import CardList from '../components/CardList';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Album Screen',
  };

  

  constructor() {
    super();
    this.state = {
      albums: []
    }
        actions.searchTracks('eminem').then((albums) => this.setState({albums}))
        debugger;

  }



  render() {
    const  {albums} = this.state;

    return (
      <ScrollView style={styles.container}>
        <CardList 
          data={albums} 
          imageKey={'cover_big'}
          title={'title'}
          // id={'id'}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
