import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.emoji}>👋</Text>

        <Text style={styles.title}>
          Welcome, Rooheen
        </Text>

        <Text style={styles.subtitle}>
          Start your React Native Learning Journey
        </Text>

        <Text style={styles.description}>
          Learn React Native step by step with
          simple examples, hands-on practice,
          and mini projects.
        </Text>

        <Pressable
          style={styles.cameraButton}
          onPress={() => router.push("/camera")}
        >
          <Text style={styles.cameraButtonText}>
            📷 Open Camera
          </Text>
        </Pressable>

        <Text style={styles.sectionTitle}>
          Today's Learning
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            📱 Components
          </Text>

          <Text style={styles.cardDescription}>
            Learn how React Native components
            build your app interface.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            🎨 Styling
          </Text>

          <Text style={styles.cardDescription}>
            Practice layouts using Flexbox and
            StyleSheet.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            🧭 Navigation
          </Text>

          <Text style={styles.cardDescription}>
            Navigate between screens using
            Expo Router.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  emoji: {
    fontSize: 50,
    textAlign: "center",
    marginTop: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#60A5FA",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
  },

  description: {
    color: "#D1D5DB",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    lineHeight: 24,
    marginBottom: 30,
  },

  cameraButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 35,
  },

  cameraButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#1F2937",
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  cardDescription: {
    color: "#D1D5DB",
    fontSize: 15,
    lineHeight: 22,
  },
});