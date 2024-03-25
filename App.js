import { useState } from "react";
import { StyleSheet, View, FlatList, Button, StatusBar } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import "react-native-devsettings";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        text: goalText,
        id: Math.random().toString(),
      },
    ]);
  }

  function onDeleteHandler(id) {
    setGoals((goals) => {
      return goals.filter((item) => item.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function closeGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View>
          <Button
            title="Add new Goal"
            color="#a065ec"
            onPress={startAddGoalHandler}
          />
        </View>
        {modalIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            onCancel={closeGoalHandler}
            visible={modalIsVisible}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelete={onDeleteHandler}
                  id={itemData.item.id}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },

  dummyText: { margin: 16, borderWidth: 2, padding: 16, borderColor: "red" },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    borderColor: "red",
    padding: 10,
  },
  modalButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
