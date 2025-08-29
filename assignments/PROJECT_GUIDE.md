# Project Structure Guide - Expo React Native App

## 📁 Project Overview

This is a modern Expo React Native application with TypeScript, file-based routing, and cross-platform support.

## 🏗️ Directory Structure Explained

### `/app` - Application Routes
```
app/
├── _layout.tsx          # Root layout with theme provider
├── +not-found.tsx       # 404 error page
└── (tabs)/              # Tab-based navigation
    ├── _layout.tsx      # Tab navigator configuration
    ├── index.tsx        # Home screen (default tab)
    └── explore.tsx      # Explore/learn screen
```

### `/components` - Reusable UI Components
```
components/
├── Collapsible.tsx      # Expandable/collapsible section
├── ExternalLink.tsx     # Link that opens in browser
├── HapticTab.tsx        # Tab with haptic feedback
├── HelloWave.tsx        # Animated waving hand component
├── ParallaxScrollView.tsx # Scroll view with parallax effect
├── ThemedText.tsx       # Text component with theme support
├── ThemedView.tsx       # View component with theme support
└── ui/                  # UI-specific components
    ├── IconSymbol.ios.tsx
    ├── IconSymbol.tsx
    ├── TabBarBackground.ios.tsx
    └── TabBarBackground.tsx
```

### `/hooks` - Custom React Hooks
```
hooks/
├── useColorScheme.ts    # Light/dark theme detection
├── useColorScheme.web.ts # Web-specific theme detection
└── useThemeColor.ts     # Theme-aware color selection
```

### `/constants` - App Constants
```
constants/
└── Colors.ts           # Color definitions for light/dark themes
```

### `/assets` - Static Resources
```
assets/
├── fonts/
│   └── SpaceMono-Regular.ttf
└── images/
    ├── adaptive-icon.png
    ├── favicon.png
    ├── icon.png
    ├── partial-react-logo.png
    ├── react-logo.png
    ├── react-logo@2x.png
    ├── react-logo@3x.png
    └── splash-icon.png
```

## 🔧 Key Configuration Files

### `package.json` - Dependencies & Scripts
- **Expo**: ~53.0.22 (main framework)
- **React Native**: 0.79.6
- **React Navigation**: For tab and stack navigation
- **TypeScript**: For type safety
- **Scripts**: Start commands for different platforms

### `app.json` - Expo Configuration
- App name, version, and orientation
- Icons and splash screens
- Platform-specific settings
- Plugins (router, splash screen)
- Experiments (typed routes)

### `tsconfig.json` - TypeScript Configuration
- Extends Expo's base config
- Type checking settings
- Path aliases (@/ for src)

## 🎨 Theming System

### Light/Dark Mode Support
The app automatically detects system theme preference using:
- `useColorScheme()` hook
- ThemeProvider from React Navigation
- Color definitions in `constants/Colors.ts`

### Themed Components
- `ThemedText`: Text that adapts to theme
- `ThemedView`: View with theme-aware background
- Custom hooks for theme-aware colors

## 🧭 Navigation System

### File-Based Routing
- Routes are defined by file structure in `/app`
- `(tabs)` creates a tab navigator
- Each `.tsx` file becomes a screen

### Navigation Types
- **Stack Navigation**: For modal-like screens
- **Tab Navigation**: Bottom tab interface
- **Deep Linking**: URL-based navigation

## 🎭 Animation System

### React Native Reanimated
- Used in `HelloWave.tsx` for waving animation
- Powerful animation library for smooth UI
- Platform-specific optimizations

### Parallax Effects
- `ParallaxScrollView` provides scrolling effects
- Different behavior on iOS vs other platforms

## 📱 Platform Support

### Cross-Platform Development
- **iOS**: Native iOS app
- **Android**: Native Android app  
- **Web**: Responsive web application

### Platform-Specific Code
- Files with `.ios.tsx` and `.android.tsx` extensions
- Platform module for conditional rendering
- Different styling and behavior per platform

## 🚀 Development Workflow

### Starting Development
```bash
npm install    # Install dependencies
npm start      # Start development server
```

### Platform Commands
```bash
npm run android  # Android emulator
npm run ios      # iOS simulator  
npm run web      # Web browser
```

### Reset Project
```bash
npm run reset-project  # Clean slate for new development
```

## 🛠️ Built-in Features

### Expo SDK Integration
- **expo-font**: Custom font loading
- **expo-image**: Optimized image handling
- **expo-haptics**: Vibration feedback
- **expo-blur**: Visual blur effects
- **expo-web-browser**: External link handling

### Developer Experience
- Hot reloading for instant updates
- TypeScript for better development
- ESLint for code quality
- Expo DevTools for debugging

## 🔍 Learning Pathways

### Beginner Level
1. Modify existing screens (`app/(tabs)/`)
2. Change colors and styling
3. Add simple components
4. Understand file-based routing

### Intermediate Level  
1. Create new screens/routes
2. Implement navigation between screens
3. Add custom hooks
4. Work with APIs and state

### Advanced Level
1. Platform-specific components
2. Complex animations
3. Native module integration
4. Performance optimization

## 📚 Next Steps

1. **Explore Components**: Study each component in `/components`
2. **Modify Screens**: Make changes to existing screens
3. **Add Features**: Implement new functionality
4. **Deploy**: Learn to build and deploy to app stores

This project provides an excellent foundation for learning modern React Native development with Expo. Start by exploring and modifying the existing code, then gradually build more complex features as you become comfortable with the framework.
