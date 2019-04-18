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
       
  this.renderIcons = this.renderIcons.bind(this);
  }

  renderIcons() {

    return (

    <View style={styles.iconStyles}>
         <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} /> 

         <Icon onPress={() => {}}
            raised
            name='thumbs-up'
            type='font-awesome'
            color='#f50'
            size={30}
        />


         <Icon onPress={() => {this.props.navigation.navigate('DetailScreen')}}
            raised
            name='headset'
            type='ionicons'
            color='#f50'
            size={30}
        />
    </View>
  )
}
 //search tracks
  searchTracks(artist) {
    this.setState({isFetching: true, albums: []});
    
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
         imageKey={'cover_medium'}
         titleKey={'title'}
         bottomView={this.renderIcons()}
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
  },
  iconStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
