import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';


export default class SearchList extends Component {

    state={
        value: ''
    }

    onChange(value) {
        this.setState({value})
    }

    componentDidMount(){
        this.input.focus();
    }

    onSubmitSearch(){

        const { submitSearch } = this.props;
        submitSearch(this.state.value)
    }
  render() {
    return (
      <React.Fragment>
          <Input 
                placeholder='Search Artist'
                shake={true}
                onChangeText={(e) => this.onChange(e)}
                ref={input=>this.input=input}
           />
           <TouchableOpacity>
                <Button 
                onPress={() => this.onSubmitSearch()}
                title='Search' 
                type='outline' />
           </TouchableOpacity>
      </React.Fragment>
    )
  }
}
