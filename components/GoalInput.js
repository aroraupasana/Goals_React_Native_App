import {
  StyleSheet,
  Button,
  View,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
function GoalItem(props) {
  const [goal, setGoal] = useState("");

  function goalInputHandler(text) {
    setGoal(text);
  }

  function addGoalHandler() {
    props.onAddGoal(goal);
    setGoal("");
    props.onCancel();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Add Goal"
          style={styles.inputBox}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },
  inputBox: {
    width: "80%",
    borderWidth: 1,
    marginRight: 8,
    padding: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    padding: 20,
    width: "40%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
