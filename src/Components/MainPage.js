import React, { Component } from "react";
import { View, Text, WebView, Button, Share, Platform } from "react-native";

export default class MainPage extends Component {
  share = () => {
    Share.share({
      title: "Share",
      message: "https://www.edutubebd.com/file_resource/2091288073life_is_what_you_make_it.pdf"
    });
  };

  static navigationOptions = {
    headerBackTitle: null,
    title: "PDF Share and View",
    headerStyle: { backgroundColor: "#244F8C", borderBottomColor: "#244F8C" },
    headerTitleStyle: { color: "white", alignSelf: "center", fontSize: 15 },
    headerTintColor: "white"
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
