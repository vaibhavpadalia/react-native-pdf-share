import React, { Component } from "react";
import { View, Text, WebView, Button, Share, Platform } from "react-native";

export default class MainPage extends Component {
  share = () => {
    Share.share({
      title: "Share",
      message: "https://www.edutubebd.com/file_resource/2091288073life_is_what_you_make_it.pdf"
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri:
              "http://docs.google.com/gview?embedded=true&url=https://www.edutubebd.com/file_resource/2091288073life_is_what_you_make_it.pdf"
          }}
        />
        <Button title={"Share"} onPress={() => this.share()} />
      </View>
    );
  }
}
