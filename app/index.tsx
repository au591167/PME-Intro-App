import { useState } from "react";
import { Button, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { ThemedText } from "./components/ThemedText";
import { ThemedView } from "./components/ThemedView";

export default function Index() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [showPersonalGreeting, setShowPersonalGreeting] = useState(false);

  const handleThemeChange = (value: boolean) => {
    setIsDarkTheme(value);
  };

  const handleSubmit = () => {
    setGreeting(`Hello, ${name}!`);
    setShowPersonalGreeting(true);
    
    // Hide the personal greeting after 3 seconds
    setTimeout(() => {
      setShowPersonalGreeting(false);
    }, 3000);
  };

  const PersonalGreeting = ({ style }: { style?: any }) => {
    return (
      <ThemedView style={[style, { alignItems: 'center' }]}>
        <ThemedText type="title" style={styles.personalContainer}>Hello, {name}!</ThemedText>
        <ThemedText style={styles.personalText}>Welcome to the React Native App.</ThemedText>
      </ThemedView>
    )
  }

  const textColor = isDarkTheme ? '#fff' : '#000';
  const backgroundColor = isDarkTheme ? '#1a1a1a' : '#fff';
  const borderColor = isDarkTheme ? '#555' : '#ccc';
  const inputBackground = isDarkTheme ? '#333' : '#fff';
  const placeholderColor = isDarkTheme ? '#aaa' : '#555';
  const themedBackground = isDarkTheme ? '#333' : '#f0f0f0';

  return (
    <ScrollView
      style={{
      flex: 1,
      backgroundColor: backgroundColor,
      }}
      contentContainerStyle={{
      alignItems: "center",
      padding: 20,
      }}
    >
      {/* Header Section */}
      <ThemedView style={[styles.section, { borderColor: borderColor, backgroundColor: themedBackground }]}>
        <ThemedText type="title" style={{ color: textColor }}>
          Welcome to My React Native App
        </ThemedText>
        <ThemedText style={{ color: textColor, textAlign: 'center', marginTop: 10 }}>
          This application showcases various React Native components and features
        </ThemedText>
      </ThemedView>
      {/* Features List Section */}
      <ThemedView style={[styles.section, { borderColor: borderColor, backgroundColor: themedBackground }]}>
        <ThemedText type="subtitle" style={{ color: textColor }}>
          Features Showcased
        </ThemedText>
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ color: textColor }}>• Buttons with event handling</Text>
          <Text style={{ color: textColor }}>• Form inputs and state management</Text>
          <Text style={{ color: textColor }}>• Alert dialogs</Text>
          <Text style={{ color: textColor }}>• Theme switching</Text>
          <Text style={{ color: textColor }}>• Dynamic styling</Text>
          <Text style={{ color: textColor }}>• Component organization</Text>
          <Text style={{ color: textColor }}>• Scroll functionality</Text>
        </View>
      </ThemedView>
      {/* Button Demo Section */}
      <ThemedView style={[styles.section, { borderColor: borderColor, backgroundColor: themedBackground }]}>
        <ThemedText type="subtitle" style={{ color: textColor }}>
          Button Component
        </ThemedText>
        <ThemedText style={{ color: textColor, marginBottom: 10 }}>
          Demonstrates basic button functionality with alert dialogs
        </ThemedText>
        <Button title={"Test Button"} onPress={() => alert("Button Pressed!")} />
      </ThemedView>

      {/* Themed View Section */}
      <ThemedView style={[styles.section, {
        borderColor: borderColor,
        backgroundColor: themedBackground
      }]}>
        <ThemedText type="subtitle" style={{ color: textColor }}>
          Themed Container
        </ThemedText>
        <ThemedText style={{ color: textColor, marginBottom: 10 }}>
          This container changes color based on the selected theme
        </ThemedText>
        <Button
          title={"Press Me"}
          onPress={() => alert(`The current theme is: ${isDarkTheme ? 'Dark' : 'Light'}`)}
        />
      </ThemedView>

      {/* Theme Switch Section */}
      <ThemedView style={[styles.section, { borderColor: borderColor, backgroundColor: themedBackground }]}>
        <ThemedText type="subtitle" style={{ color: textColor }}>
          Theme Switching
        </ThemedText>
        <ThemedText style={{ color: textColor, marginBottom: 10 }}>
          Toggle between light and dark themes to see dynamic styling
        </ThemedText>
        <View style={styles.switchContainer}>
          <ThemedText style={{ color: textColor }}>
            {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
          </ThemedText>
          <Switch value={isDarkTheme} onValueChange={handleThemeChange} style={{ marginLeft: 10 }} />
        </View>
      </ThemedView>

      {/* Form Demo Section */}
      <ThemedView style={[styles.section, { borderColor: borderColor, backgroundColor: themedBackground }]}>
        <ThemedText type="subtitle" style={{ color: textColor }}>
          Form Input Demo
        </ThemedText>
        <ThemedText style={{ color: textColor, marginBottom: 10 }}>
          Enter your name and submit to see a personalized greeting
        </ThemedText>
        <TextInput
          style={{
            height: 40,
            borderColor: borderColor,
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            color: textColor,
            backgroundColor: inputBackground,
            borderRadius: 5,
          }}
          placeholder="Enter your name"
          placeholderTextColor={placeholderColor}
          value={name}
          onChangeText={setName}
        />
        <Button title="Submit" onPress={handleSubmit} />
        {showPersonalGreeting && <PersonalGreeting style={[styles.personalContainer, {borderColor: borderColor, backgroundColor: themedBackground, marginTop: 10 }]} />}
      </ThemedView>

      <ThemedView style={[styles.section, { borderColor: borderColor, backgroundColor: themedBackground }]}>
        <ThemedText type="subtitle" style={{ color: textColor, fontSize: 12 }}>
          This is the end of the demo application.
        </ThemedText>
        <ThemedText type="subtitle" style={{ color: textColor, fontSize: 12 }}>
          Thank you for exploring the features!
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    width: "90%",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  personalContainer: {
  backgroundColor: '#abdff0ff',
  padding: 16,
  borderRadius: 8,
  marginBottom: 16,
  width: "90%",
},
personalText: {
  fontSize: 16,
  textAlign: 'center',
  color: '#ffffffff', // Light theme text color
  },
});
