# Maestro Camera Permission Test

## Overview

This project includes a Maestro end-to-end test for the camera permission screen.

## Prerequisites

- Node.js
- Expo CLI
- Expo Go
- Maestro CLI
- Android device with USB debugging enabled

## Running the App

Start the Expo development server:

```bash
npx expo start
```

Open the project in Expo Go by scanning the QR code.

## Running the Maestro Test

Run:

```bash
maestro test .maestro/camera_permission.yaml
```

## Test Coverage

The test verifies:

- App launches successfully
- Camera screen opens
- Camera permission explanation is displayed
- Allow Camera Access button is visible

## Limitation

Expo Go does not provide deterministic control over Android permission dialogs. Because of this, permission denial and system permission dialogs cannot be reliably automated. These scenarios require an Expo Development Build or standalone application.