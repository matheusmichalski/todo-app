import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
export default function RootLayout() {
  return (
  <Tabs>
    <Tabs.Screen name="index" options={
      {
        title: "Home",
        tabBarIcon: () => (
          <MaterialIcons name="home" size={6} color="black" />
        )
      }
    }  />
    <Tabs.Screen name="about" options={
      {
        title: "Sobre nós",
      }
    } />
   </Tabs> 
  )
};
