import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions = { addblogpost : (dispatch) => { return () => {} } }
    //so actions have key in this case say addblogpost the key have value function that will be called with dispatch which will return a function will do something to the state value

    const boundactions = {};
    for (let key in actions) {
      boundactions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundactions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
