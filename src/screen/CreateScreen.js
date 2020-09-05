import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../Context/BlogContext";
import BlogPostForm from "../component/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addblogposts } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addblogposts(title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
};

const Styles = StyleSheet.create({});

export default CreateScreen;
