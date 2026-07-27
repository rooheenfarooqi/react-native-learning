import { CameraView, useCameraPermissions } from "expo-camera";
import { Stack, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<"front" | "back">("back");
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [noCamera, setNoCamera] = useState(false);

  // Checking permission
  if (!permission) {
    return (
      <View
        testID="checking-permission-screen"
        accessibilityLabel="checking-permission-screen"
        style={styles.container}
      >
        <Text style={styles.title}>Checking camera permission...</Text>
      </View>
    );
  }

  // Permission denied
  if (!permission.granted) {
    const permanentlyDenied = permission.canAskAgain === false;

    return (
      <>
        <Stack.Screen options={{ title: "Camera" }} />

        <View
          testID="camera-permission-screen"
          accessibilityLabel="camera-permission-screen"
          style={styles.container}
        >
          <Text
            testID="permission-icon"
            accessibilityLabel="permission-icon"
            style={styles.icon}
          >
            📷
          </Text>

          <Text
            testID="permission-title"
            accessibilityLabel="permission-title"
            style={styles.title}
          >
            Camera Permission Required
          </Text>

          <Text
            testID="permission-description"
            accessibilityLabel="permission-description"
            style={styles.description}
          >
            {permanentlyDenied
              ? "Camera permission has been permanently denied. Please enable it from your device settings."
              : "This feature requires camera access to preview the live camera feed."}
          </Text>

          {permanentlyDenied ? (
            <Pressable
              testID="open-settings-button"
              accessibilityLabel="open-settings-button"
              style={styles.button}
              onPress={() => Linking.openSettings()}
            >
              <Text style={styles.buttonText}>Open Settings</Text>
            </Pressable>
          ) : (
            <Pressable
              testID="allow-camera-button"
              accessibilityLabel="allow-camera-button"
              style={styles.button}
              onPress={requestPermission}
            >
              <Text style={styles.buttonText}>Allow Camera Access</Text>
            </Pressable>
          )}

          <Pressable
            testID="go-back-button"
            accessibilityLabel="go-back-button"
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>← Go Back</Text>
          </Pressable>
        </View>
      </>
    );
  }

  // No camera available
  if (noCamera) {
    return (
      <>
        <Stack.Screen options={{ title: "Camera" }} />

        <View
          testID="no-camera-screen"
          accessibilityLabel="no-camera-screen"
          style={styles.container}
        >
          <Text style={styles.icon}>📷</Text>

          <Text
            testID="no-camera-title"
            accessibilityLabel="no-camera-title"
            style={styles.title}
          >
            No Camera Available
          </Text>

          <Text style={styles.description}>
            This device does not have an available camera.
          </Text>

          <Pressable
            testID="no-camera-back-button"
            accessibilityLabel="no-camera-back-button"
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </Pressable>
        </View>
      </>
    );
  }

  // Camera failed
  if (cameraError) {
    return (
      <>
        <Stack.Screen options={{ title: "Camera Error" }} />

        <View
          testID="camera-error-screen"
          accessibilityLabel="camera-error-screen"
          style={styles.container}
        >
          <Text style={styles.icon}>⚠️</Text>

          <Text style={styles.title}>Camera Error</Text>

          <Text style={styles.description}>{cameraError}</Text>

          <Pressable
            testID="retry-button"
            accessibilityLabel="retry-button"
            style={styles.button}
            onPress={() => setCameraError(null)}
          >
            <Text style={styles.buttonText}>Retry</Text>
          </Pressable>

          <Pressable
            testID="camera-error-back-button"
            accessibilityLabel="camera-error-back-button"
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text
              testID="camera-error-back-text"
              accessibilityLabel="camera-error-back-text"
              style={styles.backText}
            >
              ← Go Back
            </Text>
          </Pressable>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.cameraContainer}>
        <CameraView
          testID="camera-preview"
          accessibilityLabel="camera-preview"
          style={StyleSheet.absoluteFillObject}
          facing={facing}
          onMountError={(error) => {
            const message = error.message.toLowerCase();

            if (
              message.includes("camera") &&
              (message.includes("not available") ||
                message.includes("no camera") ||
                message.includes("unavailable"))
            ) {
              setNoCamera(true);
            } else {
              setCameraError(error.message);
            }
          }}
        />

        {/* Back */}
        <Pressable
          testID="back-button"
          accessibilityLabel="back-button"
          style={styles.overlayBackButton}
          onPress={() => router.back()}
        >
          <Text
            testID="back-button-text"
            accessibilityLabel="back-button-text"
            style={styles.overlayButtonText}
          >
            ← Back
          </Text>
        </Pressable>

        {/* Flip */}
        <Pressable
          testID="flip-camera-button"
          accessibilityLabel="flip-camera-button"
          style={styles.flipButton}
          onPress={() =>
            setFacing((current) => (current === "back" ? "front" : "back"))
          }
        >
          <Text
            testID="flip-button-text"
            accessibilityLabel="flip-button-text"
            style={styles.overlayButtonText}
          >
            🔄 Flip
          </Text>
        </Pressable>

        {/* Capture */}
        <Pressable
          testID="capture-button"
          accessibilityLabel="capture-button"
          style={styles.captureButton}
          onPress={() =>
            Alert.alert(
              "Coming Soon",
              "Capture functionality is not part of this task.",
            )
          }
        >
          <Text
            testID="capture-icon"
            accessibilityLabel="capture-icon"
            style={styles.captureText}
          >
            📷
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  icon: {
    fontSize: 72,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },

  button: {
    width: "100%",
    backgroundColor: "#0A84FF",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  backButton: {
    marginTop: 18,
  },

  backText: {
    color: "#0A84FF",
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

  flipButton: {
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },

  overlayButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  captureButton: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#0A84FF",
  },

  captureText: {
    fontSize: 32,
  },
});
