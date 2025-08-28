# First Exercise: Customize the Welcome Screen

## 🎯 Objective
Modify the home screen to personalize it and understand basic React Native concepts.

## 📋 Steps to Complete

### 1. Change the Welcome Message
Open `app/index.tsx` and modify the welcome text:

```tsx
// Change this line:
<ThemedText type="title">Welcome!</ThemedText>

// To something like:
<ThemedText type="title">Hello, [Your Name]!</ThemedText>
```

### 2. Add Your Own Step
Add a new step container after the existing ones:

```tsx
<ThemedView style={styles.stepContainer}>
  <ThemedText type="subtitle">Step 4: Your First Change</ThemedText>
  <ThemedText>
    You just modified this app! Try changing the colors or adding more content.
  </ThemedText>
</ThemedView>
```

### 3. Customize Colors
Modify the header background color in the `ParallaxScrollView`:

```tsx
// Change these colors to your preference
headerBackgroundColor={{ light: '#FF6B6B', dark: '#4ECDC4' }}
```

### 4. Add a Personal Touch
Create a simple personalized component. Add this above the return statement:

```tsx
function PersonalGreeting() {
  return (
    <ThemedView style={styles.personalContainer}>
      <ThemedText style={styles.personalText}>
        🚀 Starting my React Native journey!
      </ThemedText>
    </ThemedView>
  );
}
```

Then add it to the JSX:
```tsx
<PersonalGreeting />
```

Add the corresponding styles:
```tsx
personalContainer: {
  backgroundColor: '#E8F4F8',
  padding: 16,
  borderRadius: 8,
  marginBottom: 16,
},
personalText: {
  fontSize: 16,
  textAlign: 'center',
},
```

## 🎨 Creative Challenges

### Easy Level
- Change the React logo to a different image
- Modify the text colors throughout the app
- Add emojis to make it more fun

### Medium Level
- Create a counter component with + and - buttons
- Add a toggle for light/dark mode
- Implement a simple form with name input

### Advanced Level
- Fetch and display data from a public API
- Add navigation to a new screen
- Implement local storage for user preferences

## 🔍 Learning Points

### Concepts You'll Practice:
- **JSX**: Understanding React's syntax for UI
- **Components**: Creating and using React components
- **Props**: Passing data to components
- **Styling**: Using React Native's StyleSheet
- **State**: Managing component state (if you do the counter challenge)

### Expo Specific:
- File-based routing structure
- Hot reloading during development
- Cross-platform compatibility

## 📝 Expected Outcome

After completing this exercise, you should:
- Feel comfortable modifying existing React Native code
- Understand how to create and style components
- See immediate visual feedback from your changes
- Have a personalized version of the starter app

## 🆘 Troubleshooting Tips

1. **Save your file** - Expo will automatically reload
2. **Check for syntax errors** - TypeScript will highlight issues
3. **Restart the development server** if changes don't appear
4. **Use console.log()** for debugging

## 🎯 Next Steps After This Exercise

1. Explore the `components/` directory to understand reusable components
2. Check out `hooks/useColorScheme.ts` to understand theming
3. Look at `app/explore.tsx` to see more complex examples
4. Try adding a new tab/screen to the app

Remember: The goal is to experiment and learn. Don't worry about breaking things - that's how you learn! 💪
