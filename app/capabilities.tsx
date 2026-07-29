import { Stack } from "expo-router";
import { useEffect } from "react";
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {
    useCameraDevices,
    useCameraPermission,
} from "react-native-vision-camera";

export default function CapabilitiesScreen() {
  const { hasPermission, requestPermission } = useCameraPermission();
  const devices = useCameraDevices();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);
  

  if (!hasPermission) {
    return (
      <>
        <Stack.Screen options={{ title: "Camera Capabilities" }} />

        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" />
          <Text style={styles.text}>Requesting camera permission...</Text>
        </SafeAreaView>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: "Camera Capabilities" }} />

      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Available Cameras</Text>

        <FlatList
          data={devices}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const photoResolutions = item.getSupportedResolutions("photo");
            const videoResolutions = item.getSupportedResolutions("video");

            return (
              <View style={styles.card}>
                <Text style={styles.heading}>
                  {item.localizedName ||
                    `${item.position.toUpperCase()} Camera`}
                </Text>

                <Text>ID: {item.id}</Text>
                <Text>Position: {item.position}</Text>
                <Text>Manufacturer: {item.manufacturer}</Text>

                <Text>Flash: {item.hasFlash ? "Yes ✅" : "No ❌"}</Text>
                <Text>Torch: {item.hasTorch ? "Yes ✅" : "No ❌"}</Text>

                <Text>
                  Photo HDR: {item.supportsPhotoHDR ? "Yes ✅" : "No ❌"}
                </Text>

                <Text>
                  Low Light Boost:{" "}
                  {item.supportsLowLightBoost ? "Yes ✅" : "No ❌"}
                </Text>

                <Text>
                  Focus Lock: {item.supportsFocusLocking ? "Yes ✅" : "No ❌"}
                </Text>

                <Text>
                  Focus Metering:{" "}
                  {item.supportsFocusMetering ? "Yes ✅" : "No ❌"}
                </Text>

                <Text>
                  Exposure Metering:{" "}
                  {item.supportsExposureMetering ? "Yes ✅" : "No ❌"}
                </Text>

                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Supported FPS Ranges
                </Text>

                {item.supportedFPSRanges.map((range, index) => (
                  <Text key={`fps-${index}`}>
                    • {range.min} - {range.max} FPS
                  </Text>
                ))}

                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Supported Pixel Formats
                </Text>

                {item.supportedPixelFormats.map((format, index) => (
                  <Text key={`format-${index}`}>• {format}</Text>
                ))}

                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Supported Photo Resolutions
                </Text>

                {photoResolutions.map((resolution, index) => (
                  <Text key={`photo-${index}`}>
                    • {resolution.width} × {resolution.height}
                  </Text>
                ))}

                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  Supported Video Resolutions
                </Text>

                {videoResolutions.map((resolution, index) => (
                  <Text key={`video-${index}`}>
                    • {resolution.width} × {resolution.height}
                  </Text>
                ))}
              </View>
            );
          }}
          ListEmptyComponent={
            <Text style={styles.text}>No cameras found.</Text>
          }
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },

  card: {
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 10,
  },

  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
});
