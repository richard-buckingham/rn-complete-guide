import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  // const addGoalHandler = () => {
  //   console.log(enteredGoal);
  //   //setCourseGoals([...courseGoals, enteredGoal]);
  //   // use the functional form of setCourseGoals to make sure I have the latest state
  //   setCourseGoals(currentGoals => [
  //     ...currentGoals,
  //     { id: Math.random().toString(), value: enteredGoal }
  //   ]);
  //   setEnteredGoal("");
  // };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal..."
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
        {/* <Text>{enteredGoal}</Text> */}
        {/* <Text>{courseGoals}</Text> */}
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "75%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});
