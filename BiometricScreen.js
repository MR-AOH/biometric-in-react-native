import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

export default function BiometricScreen() {
  const authenticateWithBiometric = async () => {
    try {
      const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

      if (isBiometricAvailable) {
        const supportedTypes =
          await LocalAuthentication.supportedAuthenticationTypesAsync();

        if (
          supportedTypes.includes(
            LocalAuthentication.AuthenticationType.FINGERPRINT
          )
        ) {
          // Fingerprint authentication for Android
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: "Authenticate to access your account.",
          });

          if (result.success) {
            alert("Authentication Successful");
          } else {
            alert("Authentication Failed");
          }
        } else if (
          supportedTypes.includes(
            LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
          )
        ) {
          // Face ID authentication for iOS
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: "Authenticate to access your account.",
            disableDeviceFallback: true, // Prevents fallback to PIN/passcode
          });

          if (result.success) {
            alert("Authentication Successful");
          } else {
            alert("Authentication Failed");
          }
        } else {
          alert("Biometric authentication is not available on this device.");
        }
      } else {
        alert("Biometric hardware is not available on this device.");
      }
    } catch (error) {
      console.error("Biometric authentication error:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 20 }}>Biometric Authentication Example</Text>
      <TouchableOpacity
        onPress={authenticateWithBiometric}
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Authenticate with Biometric</Text>
      </TouchableOpacity>
    </View>
  );
}
