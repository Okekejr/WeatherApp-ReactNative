import { StyleSheet, View, ImageBackground } from "react-native";
import Search from "./components/Search";

export default function App() {
  const localImage = require("./assets/image/default.jpg");
  return (
    <ImageBackground
      source={localImage}
      resizeMode="cover"
      style={styles.container}
    >
      <Search />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
