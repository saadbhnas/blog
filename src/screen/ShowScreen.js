import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../Context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogid = state.find(
    (blogpost) => blogpost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text> {blogid.title} </Text>
      <Text> {blogid.content} </Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const Styles = StyleSheet.create({});

export default ShowScreen;
