import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialvalues }) => {
  const [title, settitle] = useState(initialvalues.title);
  const [content, setcontent] = useState(initialvalues.content);

  return (
    <View>
      <Text style={Styles.lebal}> enter blog title </Text>
      <TextInput
        style={Styles.input}
        value={title}
        onChangeText={(text) => settitle(text)}
      />
      <Text style={Styles.lebal}> enter blog content </Text>
      <TextInput
        style={Styles.input}
        value={content}
        onChangeText={(text) => setcontent(text)}
      />
      <Button title="save blog post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialvalues: {
    title: "",
    content: "",
  },
};

const Styles = StyleSheet.create({
  input: {
    fontSize: 16,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  lebal: {
    fontSize: 18,
    marginLeft: 5,
    marginBottom: 5,
  },
});

export default BlogPostForm;
