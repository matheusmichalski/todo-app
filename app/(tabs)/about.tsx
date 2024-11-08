import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Sobre nós</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
  }
})
