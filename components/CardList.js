import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator} from 'react-native'
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
