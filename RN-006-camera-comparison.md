# RN-006 Research

## Runtime Camera Hardware Capabilities: `expo-camera` vs `react-native-vision-camera`

**Author:** Rooheen Farooqi  
**Task:** RN-006 Research  
**Project:** React Native Camera Exploration  
**Date:** July 2026

---

# Objective

The goal of this research is to compare **expo-camera** and **react-native-vision-camera** to determine how much information each library can provide about a device's **actual camera hardware at runtime**.

The comparison focuses on:

- Available cameras
- Camera lenses
- Photo sizes
- Video resolutions
- Frame rates (FPS)
- Whether FPS is tied to a specific resolution
- High frame rate support
- Exact APIs used
- Expo Go vs Development Build support

---

# Versions Tested

| Library                    | Version                   |
| -------------------------- | ------------------------- |
| Expo SDK                   | 54                        |
| expo-camera                | ~17.x (Expo SDK 54)       |
| react-native-vision-camera | v5 API (latest major API) |

> **Note:** Vision Camera introduced major API changes in v5. Older tutorials and blog posts often reference deprecated APIs that no longer compile.

---

# Feature Comparison

| Feature                                  | expo-camera                               | react-native-vision-camera (v5)                                                  |
| ---------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------- |
| List available cameras                   | ❌ Not available                          | ✅ `Camera.getAvailableCameraDevices()`                                          |
| Camera lens information                  | ⚠️ iOS only (`getAvailableLensesAsync()`) | ✅ Available through camera device information                                   |
| Available photo sizes                    | ✅ `getAvailablePictureSizesAsync()`      | ⚠️ Determined through supported camera formats (no direct API)                   |
| Available video resolutions              | ❌ Not available                          | ✅ Available from device formats                                                 |
| Available frame rates (FPS)              | ❌ Not available                          | ✅ Available from format (`minFps` / `maxFps`)                                   |
| FPS tied to resolution                   | ❌ Not available                          | ✅ Yes. Every camera format defines both its resolution and supported FPS range. |
| High frame rate support (60/120/240 FPS) | ❌ Not available                          | ✅ Supported if the selected camera format supports it                           |
| Runtime hardware information             | Limited                                   | Extensive                                                                        |

---

# Exact APIs

## expo-camera

| Information             | API                                      |
| ----------------------- | ---------------------------------------- |
| Available picture sizes | `getAvailablePictureSizesAsync()`        |
| Available lenses        | `getAvailableLensesAsync()` _(iOS only)_ |
| Available cameras       | **Not available**                        |
| Video resolutions       | **Not available**                        |
| Frame rates             | **Not available**                        |
| High frame rate support | **Not available**                        |

---

## react-native-vision-camera (v5)

| Information       | API                                                             |
| ----------------- | --------------------------------------------------------------- |
| Available cameras | `Camera.getAvailableCameraDevices()`                            |
| Camera formats    | `device.formats`                                                |
| Video resolution  | `format.videoWidth` / `format.videoHeight`                      |
| Frame rates       | `format.minFps` / `format.maxFps`                               |
| High FPS support  | Select a format whose `maxFps` supports the required frame rate |
| Lens information  | Available from the camera device metadata                       |

---

# FPS and Resolution Relationship

A significant difference between the two libraries is how frame rates are handled.

### expo-camera

The library does not expose runtime information about supported frame rates or their relationship to different resolutions.

### react-native-vision-camera

Each supported camera **Format** represents a hardware-supported configuration.

A format includes:

- Video resolution
- Photo resolution
- Minimum FPS
- Maximum FPS
- HDR support
- Stabilization support

This means that supported FPS values are **directly tied to a specific camera format and resolution**, matching the capabilities exposed by the underlying Android Camera2 or iOS AVFoundation APIs.

---

# Expo Go vs Development Build

| Library                    | Expo Go            | Development Build |
| -------------------------- | ------------------ | ----------------- |
| expo-camera                | ✅ Fully supported | Optional          |
| react-native-vision-camera | ❌ Not supported   | ✅ Required       |

Vision Camera uses native modules that are not included in Expo Go. A custom **Expo Development Build** (or Bare React Native project) is required.

---

# Summary

### expo-camera

### Advantages

- Easy to integrate
- Works immediately with Expo Go
- Suitable for basic camera functionality
- Provides picture size information

### Limitations

- Cannot enumerate camera hardware
- No runtime video format information
- No FPS information
- No high-frame-rate capability discovery

---

### react-native-vision-camera

### Advantages

- Provides detailed runtime camera hardware information
- Enumerates available camera devices
- Exposes camera formats
- Reports supported resolutions
- Reports supported frame rates
- Supports hardware capability discovery
- Supports high frame rate cameras

### Limitations

- Requires a Development Build
- More complex setup than expo-camera

---

# Recommendation

For applications that only require camera preview, photo capture, and video recording, **expo-camera** is the better choice because it integrates seamlessly with Expo Go and has a simpler development workflow.

For applications that need to understand the device's actual camera hardware—such as detecting available cameras, supported resolutions, frame rates, high-frame-rate recording, or selecting optimal camera formats—**react-native-vision-camera (v5)** is the recommended library.

Since this project is exploring runtime camera capabilities and hardware information, **react-native-vision-camera (v5)** is the recommended option because it exposes significantly more camera metadata and hardware capabilities than **expo-camera**, making it more suitable for advanced camera applications.

---
