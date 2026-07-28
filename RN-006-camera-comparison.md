# RN-006 Research

# Runtime Camera Hardware Comparison

### expo-camera vs react-native-vision-camera (v5)

**Author:** Rooheen Farooqi  
**Project:** React Native Camera Exploration  
**Task:** RN-006 Research

---

## Objective

The purpose of this research is to compare **expo-camera** and **react-native-vision-camera (v5)** based on how much information each library can provide about a device's **actual camera hardware at runtime**.

The comparison focuses on:

- Available cameras
- Available lenses
- Photo sizes
- Video resolutions
- Frame rates (FPS)
- Whether FPS depends on the selected resolution
- High frame-rate support
- Exact APIs
- Expo Go vs Development Build requirements

---

# Versions Tested

| Library                    | Version |
| -------------------------- | ------- |
| Expo SDK                   | 54      |
| expo-camera                | ~17.x   |
| react-native-vision-camera | v5      |

> **Note**
>
> Vision Camera introduced major API changes in v5. Many older tutorials reference APIs from previous versions and are no longer compatible.

---

# Runtime Hardware Comparison

| Capability                  | expo-camera                               | react-native-vision-camera (v5)             |
| --------------------------- | ----------------------------------------- | ------------------------------------------- |
| Enumerate camera devices    | **Not available**                         | ✅ `Camera.getAvailableCameraDevices()`     |
| Lens information            | ⚠️ iOS only (`getAvailableLensesAsync()`) | ✅ Available through camera device metadata |
| Select specific lens        | Limited (front/back + iOS lenses)         | ✅ Yes                                      |
| Supported picture sizes     | ✅ `getAvailablePictureSizesAsync()`      | Available through camera formats            |
| Supported video resolutions | Limited (`videoQuality` presets only)     | ✅ Available through `device.formats`       |
| Available FPS               | Not available                             | ✅ `minFps` / `maxFps`                      |
| FPS tied to resolution      | Not available                             | ✅ Yes                                      |
| High FPS support            | Not exposed                               | ✅ Supported when hardware supports it      |
| Detailed hardware metadata  | Limited                                   | Extensive                                   |

---

# Exact APIs

## expo-camera

| Information                 | API                                      |
| --------------------------- | ---------------------------------------- |
| Picture sizes               | `getAvailablePictureSizesAsync()`        |
| Available lenses            | `getAvailableLensesAsync()` _(iOS only)_ |
| Lens updates                | `onAvailableLensesChanged`               |
| Selected lens               | `selectedLens`                           |
| Video quality               | `videoQuality`                           |
| Supported cameras           | **Not available**                        |
| Supported FPS               | **Not available**                        |
| Supported video resolutions | **Not available (only quality presets)** |

---

## react-native-vision-camera (v5)

| Information      | API                                  |
| ---------------- | ------------------------------------ |
| Camera devices   | `Camera.getAvailableCameraDevices()` |
| Camera formats   | `device.formats`                     |
| Photo resolution | Format properties                    |
| Video resolution | `videoWidth` / `videoHeight`         |
| Frame rates      | `minFps` / `maxFps`                  |
| Lens information | Camera device metadata               |
| High FPS support | Format with higher `maxFps`          |

---

# What expo-camera Can Discover

During the research, the following runtime capabilities were identified:

### Available picture sizes

```ts
getAvailablePictureSizesAsync();
```

Returns every picture size supported by the current camera.

---

### Available lenses (iOS)

```ts
getAvailableLensesAsync();
```

Returns the lenses available for the currently selected camera.

Lens changes can also be observed using

```ts
onAvailableLensesChanged;
```

and selected using

```ts
selectedLens;
```

---

### Video quality

expo-camera allows selecting predefined quality presets through

```ts
videoQuality;
```

Examples include

- 2160p
- 1080p
- 720p
- 480p

However, it **does not expose the actual list of hardware-supported video resolutions**.

---

### Runtime limitations

expo-camera does **not** expose:

- camera device list
- hardware camera metadata
- supported FPS
- supported camera formats
- FPS/resolution combinations

---

# What Vision Camera Can Discover

Vision Camera exposes considerably more information about the underlying camera hardware.

A camera device contains multiple **Formats**, and each format describes one hardware-supported configuration.

Each format can expose information such as:

- photo resolution
- video resolution
- minimum FPS
- maximum FPS
- HDR capability
- stabilization support
- pixel format

Because each format represents a real hardware configuration, the library knows exactly which frame rates are supported at each resolution.

---

# FPS and Resolution

This is one of the biggest differences between the two libraries.

## expo-camera

No runtime API exists to determine

- supported FPS
- supported FPS for a given resolution

Only predefined quality options are available.

---

## react-native-vision-camera

Every camera format includes:

- video resolution
- minimum FPS
- maximum FPS

This means FPS is directly tied to a specific hardware format.

For example, one format may support

- 1920×1080 @ 30 FPS

while another supports

- 1920×1080 @ 60 FPS

or

- 1280×720 @ 120 FPS

depending on the device.

---

# Expo Go vs Development Build

| Library                    | Expo Go          | Development Build |
| -------------------------- | ---------------- | ----------------- |
| expo-camera                | ✅ Supported     | Optional          |
| react-native-vision-camera | ❌ Not supported | ✅ Required       |

Vision Camera relies on native modules that are not included in Expo Go.

Using Vision Camera requires an Expo Development Build (or Bare React Native).

---

# Overall Comparison

| Category                     | Better Choice |
| ---------------------------- | ------------- |
| Fast setup                   | expo-camera   |
| Works inside Expo Go         | expo-camera   |
| Runtime hardware discovery   | Vision Camera |
| Camera metadata              | Vision Camera |
| Camera format selection      | Vision Camera |
| High FPS support             | Vision Camera |
| Advanced camera applications | Vision Camera |

---

# Recommendation

For this project, the goal is to understand the **device's actual camera hardware at runtime** rather than simply capture photos or videos.

While **expo-camera** provides a straightforward API that works directly in Expo Go and is well suited for basic camera functionality, it exposes only limited runtime hardware information. It can report supported picture sizes and, on iOS, available lenses, but it does not provide access to camera formats, supported frame rates, or the relationship between frame rates and resolutions.

**react-native-vision-camera (v5)** provides significantly richer access to the underlying camera hardware. It exposes camera devices, formats, resolutions, frame-rate ranges, lens metadata, and high-frame-rate capabilities, making it the more suitable choice for applications that require hardware-aware camera functionality.

**Recommendation:** For applications focused on advanced camera capabilities, runtime hardware inspection, or future features such as AI, computer vision, or high-performance video capture, **react-native-vision-camera (v5)** is the recommended library. For simpler applications that prioritise rapid development and Expo Go compatibility, **expo-camera** remains an excellent choice.
