import React, { Component } from 'react';
import { View, Text, WebView, Button, Share } from 'react-native';


export default class MainPage extends Component {
    share = () => {
        Share.share({
            message:"Something to be shared !!",
            title: "Share"
        },{
            
        })
    }

    render() {
        return(
            <View style={{flex: 1}}>
            <WebView  source={{uri: "https://www.edutubebd.com/file_resource/2091288073life_is_what_you_make_it.pdf"}} />
            <Button title={"Share"} onPress={() => this.share()}/>
            </View>
        )
    }
}