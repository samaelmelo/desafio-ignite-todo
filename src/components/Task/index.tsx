import { Text, TextInput, View, Image, Pressable } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

type IProps = {
   onRemove: () => void
   onCompletTask: () => void
   item: {
      description: string
      done: boolean
   }
}

export const Task = ({ item, onRemove, onCompletTask }: IProps) => {
   const [isChecked, setIsChecked] = useState(false)

   const handleSelect = () => {
      setIsChecked((prevState) => !prevState)
      onCompletTask()
   }

   return (
      <View style={styles.wrapperTask}>
         <Pressable style={isChecked ? styles.selected : styles.wrapperCheckBox} onPress={handleSelect}>
            {isChecked && (
               <View style={styles.background}>
                  <Image source={require("@/src/assets/correct.png")} />
               </View>
            )}
         </Pressable>

         <Text style={isChecked ? styles.marked : styles.content}>{item.description}</Text>

         <Pressable onPress={onRemove}>
            <Image source={require("@/src/assets/trash.png")} style={styles.buttonTrash} />
         </Pressable>
      </View>
   )
}
