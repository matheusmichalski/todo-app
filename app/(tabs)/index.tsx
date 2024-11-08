import { useState } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView} from "react-native";

export default function Index() {
   const [tasks, setTasks] = useState([
    {id: 1, title: "Estudar React", done: false},
    {id: 2, title: "Estudar React Native", done: false},
    {id: 3, title: "Estudar Expo", done: false},
   ])

   const updateTask = (id: number) => {
    const task = tasks.find(task => task.id === id)
    if (task) {
      task.done = !task.done
      setTasks([...tasks])
    }
   }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style = {styles.myTasks}>Minhas Tarefas em React</Text>
      <ScrollView style = {styles.taskList}> 
        {tasks.map((task) => (
          <Text key={task.id} style = {styles.taskList}
             onPress={() => updateTask(task.id)}>
              {task.done ? " (Concluído) " : ""}
              {task.title}
            </Text>
        ))}
        </ScrollView>

      <View>
      </View>
        <Pressable style = {styles.button}>
          <Text style={styles.buttonText}>Alternar</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  myTasks: {
    width: "100%",
    marginTop: 25,
    marginLeft: 30,
  },


  button: {
    backgroundColor: "black",
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    borderRadius: 10,
  },
  
  buttonText: {
    color: "white",
    fontSize: 20,
  },


  taskList: {
    width: "100%",
    padding: 20,
  },

  taskItem: {
    width: "100%",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  }

})
