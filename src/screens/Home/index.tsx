import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native"
import { styles } from "./styles"
import { Header } from "@/src/components/Header"
import { Task } from "@/src/components/Task"
import { useState } from "react"

type ITasks = {
   description: string
   done: boolean
}

export const Home = () => {
   const [tasks, setTasks] = useState<Array<ITasks>>([])
   const [taskName, setTaskName] = useState("")

   const handleTaskAdd = () => {
      setTasks((prevState) => [
         ...prevState,
         {
            description: taskName,
            done: false,
         },
      ])
      setTaskName("")
   }

   const handleCompletTask = (task: string) => {
      setTasks((prevState) => {
         return prevState.map((item) => (item.description === task ? { ...item, done: !item.done } : item))
      })
   }

   const handleTaskRemove = (task: string) => {
      setTasks((prevState) => {
         return prevState.filter((item) => item.description !== task)
      })
   }

   const amountDone = tasks.reduce((acc, task) => {
      return task.done ? acc + 1 : acc
   }, 0)

   return (
      <View style={styles.wrapper}>
         <Header />

         <View style={styles.body}>
            <View style={styles.form}>
               <TextInput
                  style={styles.input}
                  placeholder="Adicione uma nova tarefa"
                  placeholderTextColor="#808080"
                  onChangeText={setTaskName}
                  value={taskName}
               />
               <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                  <Image source={require("@/src/assets/plus.png")} />
               </TouchableOpacity>
            </View>

            <View style={styles.wrapperCounts}>
               <View style={styles.containerCounts}>
                  <Text style={styles.created}>Criadas</Text>
                  <Text style={styles.amount}>{tasks.length}</Text>
               </View>
               <View style={styles.containerCounts}>
                  <Text style={styles.done}>Concluídas</Text>
                  <Text style={styles.amount}>{amountDone}</Text>
               </View>
            </View>

            <FlatList
               data={tasks}
               keyExtractor={(item) => item.description.slice(0, 5).replaceAll(" ", "")}
               renderItem={({ item }) => (
                  <Task
                     item={item}
                     onCompletTask={() => handleCompletTask(item.description)}
                     onRemove={() => handleTaskRemove(item.description)}
                  />
               )}
               ListEmptyComponent={() => (
                  <View style={styles.containerEmpty}>
                     <Image source={require("@/src/assets/file.png")} />
                     <Text style={styles.notTasks}>Você ainda não tem tarefas cadastradas</Text>
                     <Text style={styles.createTask}>Crie tarefas e organize seus itens a fazer</Text>
                  </View>
               )}
            />
         </View>
      </View>
   )
}
