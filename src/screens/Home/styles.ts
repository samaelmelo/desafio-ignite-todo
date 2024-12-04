import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
   },

   body: {
      flex: 1,
      backgroundColor: "#1A1A1A",
      padding: 25,
   },

   form: {
      width: "100%",
      marginInline: "auto",
      flexDirection: "row",
      justifyContent: "center",
      gap: 10,
      marginTop: -55,
   },

   input: {
      flex: 1,
      height: 54,
      borderRadius: 5,
      backgroundColor: "#262626",
      fontSize: 16,
      paddingLeft: 20,
      color: "#F2F2F2",
   },

   button: {
      height: 52,
      width: 52,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1E6F9F",
      borderRadius: 5,
   },

   wrapperCounts: {
      marginTop: 10,
      height: 60,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderColor: "#333333",
   },

   containerCounts: {
      flexDirection: "row",
      gap: 10,
      alignContent: "center",
   },

   created: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#4EA8DE",
   },

   done: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#8284FA",
   },

   amount: {
      color: "#D9D9D9",
      fontSize: 12,
      fontWeight: "bold",
      backgroundColor: "#333333",
      padding: 2,
      paddingInline: 8,
      borderRadius: 50,
   },

   containerEmpty: {
      height: 180,
      justifyContent: "center",
      alignItems: "center",
   },

   notTasks: {
      marginTop: 15,
      color: "#808080",
      fontWeight: "bold",
   },

   createTask: {
      color: "#808080",
   },
})
