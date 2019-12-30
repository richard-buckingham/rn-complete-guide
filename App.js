import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
    //setCourseGoals([...courseGoals, enteredGoal]);
    // use the functional form of setCourseGoals to make sure I have the latest state
    setCourseGoals(courseGoals => [...courseGoals, enteredGoal]);
    setEnteredGoal("");
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
      <ScrollView>
        {courseGoals.map(goal => {
          return (
            <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
            </View>
          );
        })}
      </ScrollView>
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
  },
  listItem: {
    padding: 10,
    marginVertical: 6,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
