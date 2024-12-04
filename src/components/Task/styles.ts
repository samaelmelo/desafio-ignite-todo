import { StyleSheet } from "react-native"

const textContent = {
   width: 270,
   color: "#F2F2F2",
   fontSize: 14,
}

export const styles = StyleSheet.create({
   wrapperTask: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
      borderRadius: 5,
      marginTop: 10,
      padding: 10,
      backgroundColor: "#262626",
      height: 64,
   },

   wrapperCheckBox: {
      borderColor: "#4EA8DE",
      borderWidth: 2,
      borderRadius: 50,
      width: 18,
      height: 18,
   },

   selected: {
      borderColor: "#5E60CE",
      borderWidth: 2,
      borderRadius: 50,
      width: 18,
      height: 18,
   },

   background: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor: "#5E60CE",
      borderRadius: 50,
   },

   content: {
      ...textContent,
   },

   buttonTrash: {
      height: 18,
      width: 18,
   },

   marked: {
      ...textContent,
      textDecorationLine: "line-through",
      color: "#808080",
   },
})
