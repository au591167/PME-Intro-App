# Second Assignment: Advanced React Native Components

## 🎯 Learning Objectives
- Understand and implement more complex React Native components
- Learn about navigation between screens
- Practice state management with multiple components
- Work with lists and data display
- Implement user interactions with feedback

## 📋 Exercise Requirements

### 1. Create a New Screen with Navigation
- Add a new screen component called `UserListScreen`
- Implement navigation from the main screen to the user list screen
- Use React Navigation to handle screen transitions
- Add a button on the main screen to navigate to the user list

### 2. User List Component
- Create a list of at least 5 mock users with:
  - Name
  - Email
  - Profile image (use placeholder images)
  - Status (online/offline)
- Implement a FlatList to display the users
- Add a search functionality to filter users by name

### 3. User Detail Component
- Create a UserDetail component that shows when a user is tapped
- Display detailed information about the selected user
- Include a back button to return to the user list

### 4. Interactive Features
- Add a "Favorite" toggle for each user
- Implement a pull-to-refresh functionality
- Add haptic feedback when interacting with user items
- Show loading states when fetching data

### 5. Theme Integration
- Ensure all components work with both light and dark themes
- Use the existing theme system from the first assignment
- Add appropriate colors for the new components

## 🛠️ Technical Implementation

### File Structure
```
app/
├── (tabs)/
│   ├── index.tsx          (main screen)
│   ├── user-list.tsx      (new user list screen)
│   └── _layout.tsx        (update navigation)
└── components/
    ├── UserCard.tsx       (user list item)
    ├── UserDetail.tsx     (user detail modal)
    └── SearchBar.tsx       (search functionality)
```

### Required Dependencies
Make sure these are in your package.json:
```json
{
  "@react-navigation/native-stack": "^7.3.25",
  "react-native-flatlist-refresh": "^1.0.0"
}
```

## 📝 Step-by-Step Guide

### Step 1: Set Up Navigation
1. Install required navigation packages
2. Update the navigation structure to include the new screen
3. Add navigation types for TypeScript support

### Step 2: Create User Data
1. Create a mock user data array with sample users
2. Define TypeScript interfaces for User type
3. Add placeholder images for user avatars

### Step 3: Build User List Screen
1. Implement FlatList with user data
2. Create UserCard component for each list item
3. Add search functionality with debouncing

### Step 4: Implement User Details
1. Create modal or separate screen for user details
2. Pass user data through navigation params
3. Add back navigation functionality

### Step 5: Add Interactive Features
1. Implement favorite toggle with local state
2. Add pull-to-refresh with simulated loading
3. Integrate haptic feedback for user interactions

## 🎨 Design Requirements

### User Card Design
- Circular avatar image
- User name in bold
- Email address in smaller text
- Online status indicator (green dot)
- Favorite heart icon
- Consistent spacing and padding

### User Detail Design
- Larger avatar image
- All user information displayed
- Edit button (non-functional for now)
- Clean, modal-like appearance

### Search Bar Design
- Rounded corners
- Clear icon to reset search
- Placeholder text
- Theme-responsive styling

## 🧪 Testing Checklist

- [ ] Navigation works between main screen and user list
- [ ] User list displays all mock users correctly
- [ ] Search functionality filters users properly
- [ ] User detail screen shows correct information
- [ ] Favorite toggle works and persists
- [ ] Pull-to-refresh shows loading state
- [ ] All components work in both light and dark themes
- [ ] Haptic feedback works on user interactions
- [ ] No TypeScript errors
- [ ] No console errors during operation

## 💡 Bonus Challenges

1. **Advanced**: Implement real-time online status updates
2. **Advanced**: Add user editing functionality
3. **Expert**: Integrate with a real API for user data
4. **Expert**: Add user authentication flow

## 📚 Resources

- [React Navigation Documentation](https://reactnavigation.org/)
- [FlatList React Native Docs](https://reactnative.dev/docs/flatlist)
- [Expo Haptics Documentation](https://docs.expo.dev/versions/latest/sdk/haptics/)

## ⏰ Time Estimate
- Beginner: 4-6 hours
- Intermediate: 2-4 hours
- Advanced: 1-2 hours

## 🎓 Learning Outcomes
After completing this assignment, you should be able to:
- Create multi-screen React Native applications
- Implement complex list views with filtering
- Handle user interactions with proper feedback
- Manage application state across multiple components
- Build theme-responsive UI components

Remember to test your application on both iOS and Android (or web) to ensure cross-platform compatibility!
