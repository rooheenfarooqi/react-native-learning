# React Native Learning

A React Native learning repository created during my internship to explore mobile application development using Expo, React Native, and Native APIs. This repository contains all the tasks completed during the learning process, along with the concepts and technologies learned in each task.

---

# Technologies Used

- React Native
- Expo SDK 54
- Expo Router
- TypeScript
- React Native Vision Camera
- Expo Camera
- React Native Safe Area Context
- Maestro (E2E Testing)
- Android Studio
- EAS Development Build
- Git
- GitHub

---

# Project Structure

```text
my-first-app/
│
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── explore.tsx
│   │   └── index.tsx
│   │
│   ├── _layout.tsx
│   ├── camera.tsx
│   ├── capabilities.tsx
│   └── modal.tsx
│
├── assets/
│   └── images/
│
├── components/
│   ├── ui/
│   ├── external-link.tsx
│   ├── haptic-tab.tsx
│   ├── hello-wave.tsx
│   ├── parallax-scroll-view.tsx
│   ├── themed-text.tsx
│   └── themed-view.tsx
│
├── constants/
├── hooks/
├── scripts/
│
├── .maestro/
│   ├── camera_permission.yaml
│   └── test_tap.yaml
│
├── app.json
├── eas.json
├── package.json
├── tsconfig.json
├── README.md
└── MAESTRO.md
```

---

# Internship Learning Journey

## Task 1 – React Native Environment Setup

### Objective

Set up a React Native development environment using Expo.

### Work Completed

- Installed Node.js
- Installed Expo
- Created a React Native project
- Configured Expo Router
- Successfully ran the application on Android
- Explored the project structure

### Technologies Used

- React Native
- Expo
- Expo Router
- TypeScript

### Learning Outcomes

- React Native project structure
- Expo workflow
- File-based routing
- Running applications on Android devices

---

# Task 2 – Navigation & Routing

### Objective

Learn navigation using Expo Router.

### Work Completed

- Created multiple screens
- Added navigation between screens
- Learned Stack Navigation
- Understood file-based routing

### Technologies Used

- Expo Router

### Learning Outcomes

- Screen navigation
- Routing
- Stack layouts
- Project organization

---

# Task 3 – Camera Permission & Preview (RN-005)

### Objective

Request camera permission and display a live camera preview.

### Work Completed

- Requested camera permission
- Displayed live camera preview
- Implemented camera switching
- Added camera permission handling
- Added error handling for:
  - Permission denied
  - Permanently denied permission
  - Camera unavailable
  - Retry option
  - Open Settings option
- Prevented blank screens and crashes

### Technologies Used

- Expo Camera
- React Native
- Expo Linking

### Learning Outcomes

- Runtime permissions
- Camera lifecycle
- Error handling
- Native device permissions

---

# Task 4 – Git & GitHub Workflow

### Objective

Learn professional version control workflow.

### Work Completed

- Created Git repository
- Used Git branches
- Added and committed changes
- Pushed changes to GitHub
- Updated .gitignore
- Removed unnecessary tracked files

### Technologies Used

- Git
- GitHub

### Learning Outcomes

- Branching
- Commits
- Push/Pull
- Repository management

---

# Task 5 – Camera Library Research (RN-006)

### Objective

Research React Native camera libraries and compare their capabilities.

### Work Completed

Compared:

- Expo Camera
- React Native Vision Camera

Researched:

- Camera permissions
- Camera formats
- Camera resolutions
- FPS support
- Native API access
- Expo Go limitations
- Development Builds
- Hardware capability detection

### Technologies Used

- Expo Camera
- React Native Vision Camera

### Learning Outcomes

- Native APIs
- Camera hardware
- Runtime capability detection
- Expo limitations
- Development Builds

---

# Task 6 – Vision Camera Integration

### Objective

Configure Vision Camera using Native Development Builds.

### Work Completed

- Installed React Native Vision Camera
- Installed Nitro Modules
- Built Android Development Build using EAS
- Configured required permissions
- Verified native module functionality

### Technologies Used

- React Native Vision Camera
- Nitro Modules
- EAS Build

### Learning Outcomes

- Native Modules
- JSI
- Hybrid Objects
- Android native integration

---

# Task 7 – Camera Capability Screen (RN-007)

### Objective

Display camera hardware capabilities dynamically using native APIs.

### Work Completed

Developed a Camera Capability screen that retrieves runtime camera information directly from the device.

Implemented:

- Detection of all available cameras
- Front camera detection
- Back camera detection
- Multiple camera support
- Flash support
- Torch support
- HDR support
- Low Light Boost support
- Focus Lock support
- Focus Metering support
- Exposure Metering support
- Supported FPS ranges
- Supported Pixel Formats
- Supported Photo Resolutions
- Supported Video Resolutions

All camera information is obtained dynamically using Vision Camera's native APIs without hardcoding values.

### Technologies Used

- React Native Vision Camera
- Native Camera APIs
- TypeScript
- React Native

### Learning Outcomes

- Native hardware capability detection
- Camera devices
- Runtime APIs
- FPS ranges
- Pixel formats
- Camera resolutions
- Hybrid Objects

---

# Task 8 – Maestro End-to-End Testing

### Objective

Learn automated mobile application testing.

### Work Completed

- Installed Maestro
- Created test flows
- Tested camera permission screen
- Learned deterministic testing
- Executed automated UI tests

### Technologies Used

- Maestro

### Learning Outcomes

- End-to-End Testing
- Mobile automation
- UI testing
- Test flows

---

# Skills Acquired

Through these tasks I gained practical experience in:

- React Native Development
- Expo SDK
- Expo Router
- TypeScript
- Native Mobile APIs
- Camera Integration
- Runtime Permissions
- React Native Vision Camera
- Native Modules
- JSI & Hybrid Objects
- Android Development
- Git & GitHub
- EAS Development Builds
- Mobile UI Development
- Error Handling
- End-to-End Testing with Maestro

---

# Future Improvements

This repository will continue to grow as more internship tasks and React Native concepts are completed, including additional native integrations, testing, and advanced mobile application features.

---

# Author

**Rooheen Farooqi**

BS Computer Science  
Institute of Space Technology (IST)

React Native Learning Repository
