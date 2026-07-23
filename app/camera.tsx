import { CameraView, useCameraPermissions } from "expo-camera";
import { Stack, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<"front" | "back">("back");

  // Permission is loading
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
      <>
        <Stack.Screen
          options={{
            title: "Camera Preview",
          }}
        />

        <View style={styles.container}>
          <Text style={styles.icon}>📷</Text>

          <Text style={styles.title}>Camera Permission Required</Text>

          <Text style={styles.description}>
            This feature requires camera access to preview the live camera feed.
          </Text>

          {/* Back Button */}
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>← Back</Text>
          </Pressable>

          {/* Allow Camera Button */}
          <Pressable
            style={styles.button}
            onPress={requestPermission}
          >
            <Text style={styles.buttonText}>
              Allow Camera Access
            </Text>
          </Pressable>
        </View>
      </>
    );
  }

  // Permission granted → Show live camera preview
  return (
  <>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
    />

    <View style={styles.cameraContainer}>
       <CameraView
        style={StyleSheet.absoluteFillObject}
        facing={facing}
        />

      <Pressable
        style={styles.overlayBackButton}
        onPress={() => router.back()}
      >
        <Text style={styles.overlayBackText}>← Back</Text>
      </Pressable>
      <Pressable
      style={styles.flipButton}
      onPress={() =>
    setFacing((current) =>
      current === "back" ? "front" : "back"
    )
  }
>
  <Text style={styles.flipText}>🔄 Flip</Text>
</Pressable>
    </View>
  </>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },

  icon: {
    fontSize: 70,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#555",
  },

  backButton: {
    marginBottom: 15,
  },

  backText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#0A84FF",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  cameraContainer: {
  flex: 1,
},

overlayBackButton: {
  position: "absolute",
  top: 60,
  left: 20,
  backgroundColor: "rgba(0,0,0,0.6)",
  paddingHorizontal: 16,
  paddingVertical: 10,
  borderRadius: 20,
},

overlayBackText: {
  color: "white",
  fontSize: 16,
  fontWeight: "600",
},
flipButton: {
  position: "absolute",
  top: 60,
  right: 20,
  backgroundColor: "rgba(0,0,0,0.6)",
  paddingHorizontal: 16,
  paddingVertical: 10,
  borderRadius: 20,
},

flipText: {
  color: "white",
  fontSize: 16,
  fontWeight: "600",
},
});