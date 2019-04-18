import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator} from 'react-native'
import { Card, Button, Icon, Text } from 'react-native-elements';

export default class CardList extends Component {

    renderAlbums() {
        const { data, imageKey, titleKey, bottomView }=this.props;
        return data.map((album, index) => {
            return (
                <Card 
                    // key={album[id]}
                    // key={album.id}
                    title={album[titleKey]}
                    image={{uri: album[imageKey]}}
                    key={album.id}
                    >
                        {console.log(album)}
                    {bottomView(album)}
                </Card>
            )
        })
    }
  render() {
        const {data} = this.props;
    if(data && data.length > 0) {
          return  this.renderAlbums()
    }
    else {
        return <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>     
    }
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }
})
