import { Text, View, Image } from "react-native"
import { styles } from "./styles"

export const Header = () => {
   return (
      <View style={styles.header}>
         <Image source={require("@/src/assets/Logo.png")}  />
      </View>
   )
}
