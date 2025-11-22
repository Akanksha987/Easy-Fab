# 🧩 Tube Joint Visualizer

An interactive 3D desktop application for creating, visualizing, and manipulating joints between rectangular tubes at various angles.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![Three.js](https://img.shields.io/badge/Three.js-0.160.0-black.svg)
![Electron](https://img.shields.io/badge/Electron-28.0.0-47848f.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Running the Application](#-running-the-application)
- [Building & Packaging](#-building--packaging)
- [Usage Guide](#-usage-guide)
- [Project Structure](#-project-structure)
- [Development Workflow](#-development-workflow)
- [Troubleshooting](#-troubleshooting)
- [Technologies Used](#-technologies-used)

---

## ✨ Features

### Core Functionality
- ✅ **Interactive 3D Visualization**: Create and manipulate rectangular/square tubes in 3D space
- ✅ **Tube Customization**: Configure width, height, length, thickness, and color
- ✅ **Joint Management**: Connect tubes at various angles (30°, 45°, 90°, 135°, or custom)
- ✅ **Real-time Manipulation**: Drag, rotate, and position tubes interactively
- ✅ **Multiple Tubes**: Build complex assemblies with unlimited tubes

### Visual Controls
- ✅ **Wireframe/Solid Toggle**: Switch between wireframe and solid view modes
- ✅ **Joint Highlighting**: Visual indicators for connection points
- ✅ **Camera Controls**: Orbit, pan, and zoom with intuitive mouse controls
- ✅ **Grid Reference**: 3D grid for spatial orientation
- ✅ **Axis Gizmo**: Visual orientation helper in bottom-right corner

### User Experience
- ✅ **Undo/Redo System**: Full history management for all operations
- ✅ **Tube Selection**: Click to select and highlight tubes
- ✅ **Preset Angles**: Quick snap to standard angles (0°, 30°, 45°, 90°, 135°)
- ✅ **Color Picker**: Custom color for each tube
- ✅ **Tube List**: Overview and management of all created tubes

---

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (version 14.0 or higher)
   - Download: [https://nodejs.org/](https://nodejs.org/)
   - Recommended: LTS (Long Term Support) version
   - Includes npm (Node Package Manager)

2. **Git** (optional, for version control)
   - Download: [https://git-scm.com/](https://git-scm.com/)

### Verify Installation

Open your terminal/command prompt and run:

```bash
node --version
# Should output: v14.0.0 or higher

npm --version
# Should output: 6.0.0 or higher
```

If you see version numbers, you're ready to proceed! ✅

---

## 📦 Installation & Setup

### Option 1: From ZIP File

1. **Extract the ZIP file** to your desired location
   ```
   tube-joint-visualizer.zip → tube-joint-visualizer/
   ```

2. **Open Terminal/Command Prompt**
   - **Windows**: Press `Win + R`, type `cmd`, press Enter
   - **macOS**: Press `Cmd + Space`, type `Terminal`, press Enter
   - **Linux**: Press `Ctrl + Alt + T`

3. **Navigate to project folder**
   ```bash
   cd path/to/tube-joint-visualizer
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will:
   - Download all required packages (~200MB)
   - Create `node_modules` folder
   - Take 2-5 minutes depending on internet speed

   **Expected output:**
   ```
   added 1500+ packages in 3m
   ```

### Option 2: From GitHub Repository

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tube-joint-visualizer.git
   cd tube-joint-visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## 🚀 Running the Application

### Development Mode - Browser (Recommended for Testing)

Run the application in your web browser with hot-reload:

```bash
npm start
```

**What happens:**
- ✅ Development server starts on `http://localhost:3000`
- ✅ Browser opens automatically
- ✅ Changes auto-reload when you edit code
- ✅ Console shows any errors

**To stop:** Press `Ctrl + C` in terminal

### Development Mode - Desktop Application (Electron)

Run the application as a standalone desktop app:

```bash
npm run electron:dev
```

**What happens:**
- ✅ React dev server starts
- ✅ Electron window opens (not in browser)
- ✅ Works like a native desktop application
- ✅ Hot-reload enabled

**First launch may take 1-2 minutes** ⏳

**To stop:** Press `Ctrl + C` in terminal or close the window

---

## 📦 Building & Packaging

### Step 1: Create Production Build

First, create an optimized production build of the React application:

```bash
npm run build
```

**What happens:**
- ✅ Code is minified and optimized
- ✅ Creates a `build/` folder with static files
- ✅ Takes 30-60 seconds

**Expected output:**
```
Creating an optimized production build...
Compiled successfully!

File sizes after gzip:
  50.2 KB  build/static/js/main.abc123.js
  1.2 KB   build/static/css/main.def456.css

The build folder is ready to be deployed.
```

### Step 2: Package as Executable

Now package the application into a standalone executable for your platform(s):

#### For Windows Only:
```bash
npm run electron:build -- --win
```

**Output:** `dist/Tube Joint Visualizer Setup X.X.X.exe`

#### For macOS Only:
```bash
npm run electron:build -- --mac
```

**Output:** `dist/Tube Joint Visualizer-X.X.X.dmg`

#### For Linux Only:
```bash
npm run electron:build -- --linux
```

**Output:** `dist/Tube Joint Visualizer-X.X.X.AppImage`

#### For All Platforms:
```bash
npm run build:electron
```

**Outputs:**
- Windows: `.exe` installer
- macOS: `.dmg` disk image
- Linux: `.AppImage` executable

**Note:** Building for all platforms takes 5-10 minutes and requires ~500MB disk space

### Step 3: Locate Your Executable

After packaging completes, find your executable(s) in the `dist/` folder:

```
tube-joint-visualizer/
└── dist/
    ├── Tube Joint Visualizer Setup 1.0.0.exe     (Windows ~80MB)
    ├── Tube Joint Visualizer-1.0.0.dmg           (macOS ~85MB)
    └── Tube Joint Visualizer-1.0.0.AppImage      (Linux ~90MB)
```

### Step 4: Test the Executable

**Windows:**
1. Navigate to `dist/` folder
2. Double-click `Tube Joint Visualizer Setup.exe`
3. Follow installation wizard
4. Launch the application

**macOS:**
1. Navigate to `dist/` folder
2. Double-click `Tube Joint Visualizer.dmg`
3. Drag app to Applications folder
4. Open from Applications

**Linux:**
1. Navigate to `dist/` folder
2. Make executable: `chmod +x Tube-Joint-Visualizer-1.0.0.AppImage`
3. Run: `./Tube-Joint-Visualizer-1.0.0.AppImage`

### Step 5: Distribute Your Application

**Upload to Google Drive:**
1. Compress the executable if needed
2. Upload to Google Drive
3. Right-click → Get link → Anyone with the link can view
4. Copy the shareable link

**Alternative Distribution:**
- GitHub Releases
- Dropbox
- OneDrive
- Direct file transfer

---

## 🎮 Usage Guide

### Getting Started

1. **Launch the application** using one of the methods above
2. You'll see:
   - Control panel on the left (purple gradient header)
   - 3D canvas on the right with a grid

### Adding Your First Tube

1. In the **"Add New Tube"** section:
   - Select tube type: Rectangular or Square
   - Set dimensions:
     - Width: 5
     - Height: 5 (auto-matches width for square tubes)
     - Length: 10
     - Thickness: 0.5
   - Choose a color with the color picker
2. Click **"Add Tube"** button
3. A tube appears in the 3D canvas! 🎉

### Camera Controls (3D View Navigation)

| Action | How To |
|--------|--------|
| **Rotate View** | Left-click + drag on canvas |
| **Pan View** | Right-click + drag on canvas |
| **Zoom In/Out** | Scroll mouse wheel |
| **Reset View** | Refresh the page |

### Manipulating Tubes

#### Selecting a Tube
- Click on any tube in the 3D canvas
- Selected tube turns **yellow/gold**
- Tube name highlights in the tube list

#### Moving a Tube
- Click and drag the selected tube
- Tube follows your mouse in 3D space
- Release to drop in new position

#### Rotating a Tube

**Method 1: Preset Angles**
1. Select a tube
2. In **"Joint Controls"**, click preset buttons:
   - 0° | 30° | 45° | 90° | 135°

**Method 2: Manual Rotation**
1. Select a tube
2. Use the rotation sliders:
   - Rotation X: Pitch (tilt up/down)
   - Rotation Y: Yaw (turn left/right)
   - Rotation Z: Roll (rotate around length)
3. Drag sliders or type values

#### Removing a Tube
- Click the **×** button on the tube in the tube list
- Or select tube and press Delete key

### View Options

**Wireframe Mode:**
- Toggle the **"Wireframe Mode"** checkbox
- Shows tubes as wire outlines
- Great for seeing inside structures

**Joint Highlights:**
- Toggle the **"Show Joint Highlights"** checkbox
- Shows red spheres at tube connection points
- Appears only on selected tubes

### Undo/Redo

- Click **↶ Undo** to reverse last action
- Click **↷ Redo** to restore undone action
- Supports unlimited history
- Buttons disable when no more history available

### Building Complex Assemblies

1. Add multiple tubes with different:
   - Colors (for easy identification)
   - Sizes (for realistic structures)
   - Orientations (using rotation)
2. Position tubes close to each other
3. Rotate to desired angles
4. Use joint highlights to verify connections

### Clearing Your Work

- Click **"Clear All Tubes"** to remove everything
- This action can be undone!

---

## 📁 Project Structure

```
tube-joint-visualizer/
├── public/                          # Static files & Electron
│   ├── electron.js                  # Electron main process
│   ├── index.html                   # HTML template
│   └── favicon.ico                  # App icon
│
├── src/                             # React application source
│   ├── components/                  # React components
│   │   ├── Canvas3D.jsx            # 3D rendering (Three.js)
│   │   ├── ControlPanel.jsx        # Main control container
│   │   ├── TubeControls.jsx        # Tube creation controls
│   │   ├── JointControls.jsx       # Rotation/angle controls
│   │   ├── ViewControls.jsx        # View options & history
│   │   └── TubeList.jsx            # Tube list display
│   │
│   ├── utils/                       # Helper functions
│   │   ├── tubeGeometry.js         # Geometry calculations
│   │   └── jointCalculations.js   # Joint position logic
│   │
│   ├── hooks/                       # Custom React hooks
│   │   └── useTubeManager.js       # State management
│   │
│   ├── App.jsx                      # Main app component
│   ├── App.css                      # Application styling
│   ├── index.js                     # Entry point
│   └── index.css                    # Global styles
│
├── node_modules/                    # Dependencies (auto-generated)
├── build/                           # Production build (auto-generated)
├── dist/                            # Packaged executables (auto-generated)
│
├── .gitignore                       # Git ignore rules
├── package.json                     # Project configuration
├── package-lock.json               # Dependency lock file
├── README.md                        # This file
```

---

## 💻 Development Workflow

### Available Scripts

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `npm install` | Install dependencies | First time setup, after pulling changes |
| `npm start` | Run in browser (dev) | Development & testing |
| `npm run electron:dev` | Run as desktop app (dev) | Testing Electron features |
| `npm run build` | Create production build | Before packaging |
| `npm run electron:build` | Package for current OS | Creating executable |
| `npm run build:electron` | Package for all OS | Final distribution |
| `npm test` | Run tests | Testing (if tests exist) |

### Git Workflow

This project follows semantic commit conventions:

```bash
# Feature commits
git commit -m "feat: add tube rotation control"
git commit -m "feat: implement undo/redo system"

# Bug fixes
git commit -m "fix: correct joint angle calculation"
git commit -m "fix: resolve tube selection bug"

# Documentation
git commit -m "docs: update README with packaging steps"

# Styling/formatting
git commit -m "style: improve control panel layout"

# Refactoring
git commit -m "refactor: extract geometry calculations to utils"

# Maintenance
git commit -m "chore: update dependencies"
```

### Making Changes

1. **Create a feature branch** (optional)
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make your changes** to the code

3. **Test thoroughly**
   ```bash
   npm start
   # Test in browser
   npm run electron:dev
   # Test in Electron
   ```

4. **Commit with clear message**
   ```bash
   git add .
   git commit -m "feat: add export to STL feature"
   ```

5. **Push to GitHub**
   ```bash
   git push origin main
   ```

### Code Organization Best Practices

- ✅ Keep components small and focused
- ✅ Put reusable logic in `utils/`
- ✅ Use custom hooks for complex state
- ✅ Follow existing naming conventions
- ✅ Comment complex algorithms
- ✅ Keep files under 300 lines

---

## 🐛 Troubleshooting

### Installation Issues

#### Problem: `npm: command not found`
**Cause:** Node.js not installed or not in PATH

**Solution:**
1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Install with default settings
3. Restart your terminal
4. Verify: `node --version`

#### Problem: `npm install` fails with permission errors (Mac/Linux)
**Cause:** Insufficient permissions

**Solution:**
```bash
sudo chown -R $USER ~/.npm
sudo chown -R $USER ./node_modules
npm install
```

#### Problem: `npm install` shows warnings about deprecated packages
**Cause:** Normal - some dependencies use older packages

**Solution:**
- Warnings are usually safe to ignore
- App will still work correctly
- Only errors (not warnings) need fixing

### Running Issues

#### Problem: Browser shows blank white screen
**Cause:** JavaScript error or missing dependencies

**Solution:**
1. Open browser console (F12)
2. Look for red error messages
3. Try:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   npm start
   ```

#### Problem: `Port 3000 is already in use`
**Cause:** Another app using the same port

**Solution:**
```bash
# Windows - Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux - Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

#### Problem: Electron window doesn't open
**Cause:** Electron not properly installed or path issues

**Solution:**
```bash
npm install electron --save-dev
npm run electron:dev
```

#### Problem: 3D canvas is black or not rendering
**Cause:** WebGL issues or Three.js not loaded

**Solution:**
1. Check if browser supports WebGL: [get.webgl.org](https://get.webgl.org/)
2. Update graphics drivers
3. Try different browser (Chrome recommended)
4. Reinstall Three.js:
   ```bash
   npm install three @react-three/fiber @react-three/drei --force
   ```

### Building/Packaging Issues

#### Problem: `npm run build` fails
**Cause:** Syntax errors or missing dependencies

**Solution:**
1. Check terminal for specific error
2. Fix any syntax errors in code
3. Ensure all imports are correct
4. Try:
   ```bash
   npm run build -- --verbose
   ```

#### Problem: `electron-builder` fails on Windows
**Cause:** Missing Windows build tools

**Solution:**
```bash
npm install --global windows-build-tools
npm run electron:build -- --win
```

#### Problem: Built executable won't run
**Cause:** Various - missing dependencies, antivirus, permissions

**Solution:**
1. **Windows:** Check Windows Defender didn't block it
2. **macOS:** Allow in System Preferences > Security
3. **Linux:** Make executable: `chmod +x *.AppImage`
4. Run from terminal to see error messages

#### Problem: Build creates huge executable (>200MB)
**Cause:** Normal - includes Node.js, Chromium, and all dependencies

**Solution:**
- This is expected for Electron apps
- Can't significantly reduce size without losing functionality
- Consider using compression for distribution

### Runtime Issues

#### Problem: Tubes won't appear after clicking "Add Tube"
**Cause:** State management or rendering issue

**Solution:**
1. Check browser console (F12) for errors
2. Verify tube appears in tube list
3. Try zooming out (might be too close)
4. Refresh the application

#### Problem: Can't select or drag tubes
**Cause:** Event handler issues or tube position

**Solution:**
1. Click directly on the tube (not near it)
2. Check if tube is visible (not behind camera)
3. Try wireframe mode to see all edges
4. Zoom and rotate view to find tube

#### Problem: Rotation sliders don't work
**Cause:** Tube not properly selected

**Solution:**
1. Click the tube to select it (should turn yellow)
2. Check if tube name is highlighted in list
3. Try clicking preset angle buttons instead

### Performance Issues

#### Problem: App runs slowly with many tubes
**Cause:** Too many objects being rendered

**Solution:**
- Limit to 20-30 tubes for best performance
- Use wireframe mode for better performance
- Close other applications
- Restart the app

#### Problem: Camera movement is laggy
**Cause:** Rendering performance

**Solution:**
- Reduce number of tubes
- Close unused applications
- Update graphics drivers
- Try on a different computer

---

## 🛠️ Technologies Used

### Core Technologies
- **React** (18.2.0) - UI framework
- **Three.js** (0.160.0) - 3D graphics library
- **Electron** (28.0.0) - Desktop application framework

### React & 3D Libraries
- **@react-three/fiber** (8.15.0) - React renderer for Three.js
- **@react-three/drei** (9.95.0) - Useful helpers for R3F

### Build Tools
- **React Scripts** (5.0.1) - Build configuration
- **Electron Builder** (24.9.1) - Application packaging
- **Concurrently** (8.2.2) - Run multiple npm commands
- **Wait-on** (7.2.0) - Wait for resources before starting

### Development Tools
- **Cross-env** (7.0.3) - Cross-platform environment variables

---