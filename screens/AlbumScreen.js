import React from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';
import {Card, Button, Text, Icon} from 'react-native-elements';
import  * as actions from '../actions';
import SearchList from '../components/SearchList';
import CardList from '../components/CardList';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Album Screen',
  };

  

  constructor() {
    super();
    this.state = {
      albums: [],
      isFetching: false
    }
       

  }

  searchTracks(artist) {
    this.setState({isFetching: true});
    
    actions.searchTracks(artist)
    .then((albums) => this.setState({albums, isFetching: false}))
    .catch(err => this.setState({albums: [], isFetching: false}))
  }

  componentWillMount() {
    if (this.state.isFetching === true && this.state.albums.length === 0) {
      return <Text>NOt found</Text>
    }
  }

  renderAlbumView() {
    const  {albums, isFetching} = this.state;

    return (
      <ScrollView style={styles.container}>
        <SearchList submitSearch={(artist) => this.searchTracks(artist)}/>

        {albums.length > 0 && !isFetching &&
         <CardList 
         data={albums} 
         imageKey={'cover_big'}
         title={'title'}
         // id={'id'}
         />
        }

        { albums.length===0 && isFetching && 
        <View style={[styles.containerLoader, styles.horizontalLoader]}>
               <ActivityIndicator size="large" color="#0000ff" />
               <Text>Hold on a second!</Text> 
        </View> }
       
      </ScrollView>
    );
  }
  render() {
    
    return this.renderAlbumView();
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontalLoader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
