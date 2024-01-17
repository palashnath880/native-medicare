import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  Button,
  ImageBackground,
  Modal,
  Pressable,
  Alert,
  RefreshControl,
  StatusBar,
} from "react-native";
const image1 = require("./assets/images/image-1.jpg");

export default function App() {
  const [open, setOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      style={{ paddingTop: 50 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <StatusBar
        backgroundColor={"#000000"}
        animated={true}
        hidden={true}
        showHideTransition={"slide"}
      />
      <ImageBackground source={image1}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hey Palash</Text>
        <Button title="Open Modal" onPress={() => setOpen(true)} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Image Check</Text>
      </ImageBackground>
      <Modal
        visible={open}
        animationType="fade"
        onRequestClose={() => setOpen(false)}
        presentationStyle="overFullScreen"
      >
        <View style={{ height: 300 }}>
          <Pressable onPress={() => Alert.alert("Press on modal Text")}>
            <Text>Hello Palash, How are you?</Text>
          </Pressable>
          <Button title="Close" onPress={() => setOpen(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
}
