import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 6,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

GoalItem.propTypes = {};

export default GoalItem;
