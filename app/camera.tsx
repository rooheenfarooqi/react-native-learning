import { CameraView, useCameraPermissions } from "expo-camera";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  // Permission is still loading
  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>Checking camera permission...</Text>
      </View>
    );
  }

  // Permission not granted
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Camera Permission Required</Text>

        <Text style={styles.description}>
          This app needs access to your camera to show the live preview.
        </Text>

        <Pressable style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Allow Camera Access</Text>
        </Pressable>
      </View>
    );
  }

  // Permission granted → Show live camera preview
  return <CameraView style={StyleSheet.absoluteFillObject} facing="back" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
