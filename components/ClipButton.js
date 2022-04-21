import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const ClipButton = ({ onPress, enabled }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {enabled ? (
        <FontAwesome5 name={"bookmark"} solid size={40} color="gray" />
      ) : (
        <FontAwesome5 name={"bookmark"} size={40} color="gray" />
      )}
    </TouchableOpacity>
  );
};

export default ClipButton;
