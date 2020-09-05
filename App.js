import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screen/IndexScreen";
import React from "react";
import { Provider } from "./src/Context/BlogContext";
import ShowScreen from "./src/screen/ShowScreen";
import CreateScreen from "./src/screen/CreateScreen";
import EditScreen from "./src/screen/EditScreen";

const naviagtor = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defualtNavigationOptions: {
      title: "blog",
    },
  }
);

const App = createAppContainer(naviagtor);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
