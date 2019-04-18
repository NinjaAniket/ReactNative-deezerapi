import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import * as actions from '../actions';

export default class DetailScreen extends Component {


  state = {
    tracks: []
  }
componentDidMount(){
  const album=this.props.navigation.getParam('albumInfo', {}); //get data from albumscreen
  actions.getAlbumTracks(album.id).then(tracks => {
    this.setState({tracks})
  })
  .catch(err => console.log(err))
}
  render() {
    return (
      <View>
        <Text> {album.title} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
