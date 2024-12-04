import React from "react"
import { StatusBar, View, Text } from "react-native"
import { Home } from "@/src/screens/Home"

export default function RootLayout() {
   return (
      <>
         <StatusBar animated barStyle="light-content" backgroundColor="#0D0D0D" translucent />
         <Home />
      </>
   )
}
