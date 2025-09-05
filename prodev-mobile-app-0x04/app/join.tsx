import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Join() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Join us and explore the best deals worldwide</Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput placeholder="Enter your full name" style={styles.formControl} />

        <Text style={styles.formLabel}>Email</Text>
        <TextInput placeholder="Enter your email" style={styles.formControl} />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
            style={styles.passwordControl}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Text>{passwordVisible ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Primary Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Footer → navigate to signin */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/signin")}>
          <Text style={styles.signupSubTitleText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
