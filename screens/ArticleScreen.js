import { StyleSheet, SafeAreaView, Text } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>article screen</Text>
    </SafeAreaView>
  );
};
