import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../Context/BlogContext";
import BlogPostForm from "../component/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editblogpost } = useContext(Context);

  const blogpost = state.find((blogpost) => blogpost.id === id);

  return (
    <BlogPostForm
      initialvalues={{ title: blogpost.title, content: blogpost.content }}
      onSubmit={(title, content) => {
        editblogpost(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

const Styles = StyleSheet.create({});

export default EditScreen;
