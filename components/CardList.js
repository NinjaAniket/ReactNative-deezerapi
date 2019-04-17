import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Button, Icon, Text } from 'react-native-elements';

export default class CardList extends Component {

    renderAlbums() {
        const { data, imageKey, titleKey }=this.props;
        return data.map((album, index) => {
            return (
                <Card 
                    // key={album[id]}
                    // key={album.id}
                    title={album[titleKey]}
                    image={{uri: album[imageKey]}}
                    >
                       <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                        {console.log(album)}
                </Card>
            )
        })
    }
  render() {
    return  this.renderAlbums()
  }
}

const styles = StyleSheet.create({})
