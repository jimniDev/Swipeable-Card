# Swipeable Card

## Overview

This repository contains a reusable **Swipeable Card Component** built with **React**. The component enables users to interact with content using swipe gestures, providing an intuitive and modern user experience. It is designed to be lightweight, customizable, and easily integrable into existing React projects.

The Swipeable Card Component is ideal for use cases such as:
- Music or media recommendation systems.
- Product browsing in e-commerce applications.
- Tinder-style card swiping interfaces.

---

## Features

- **Swipe Gestures**: Swipe left or right to interact with content.
- **Customizable Actions**: Define behavior for swipe gestures (e.g., like/dislike).
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Smooth Animations**: Leverages CSS transitions for fluid and engaging interactions.
- **State Management**: Uses React state to track and update the current card stack.

---

## Demo

![Swipeable Card Demo](https://user-images.githubusercontent.com/demo-placeholder.gif)

---

## Folder Structure

---

## Development Process

### Key Features
1. **Mouse and Touch Events**:
   - Listens for swipe gestures using `onMouseDown`, `onMouseMove`, and `onMouseUp` for desktop.
   - Supports touch events with `onTouchStart`, `onTouchMove`, and `onTouchEnd` for mobile.

2. **Custom Swipe Logic**:
   - Calculates swipe direction and triggers user-defined callbacks (e.g., "like" or "dislike").
   - Detects thresholds for valid swipe gestures to prevent accidental interactions.

3. **Smooth Animations**:
   - CSS animations provide natural movement as cards swipe off-screen.
   - React state is used to update and reset animations dynamically.

4. **Integration**:
   - Cards can display any content, including images, text, or custom React components.

---

## Usage

### Installation
Clone the repository:
```bash
git clone https://github.com/jimniDev/Swipeable-Card.git
cd Swipeable-Card
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm start
```

Open the application in your browser:
```
http://localhost:3000
```

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests with improvements or new features.

---

## License

This project is licensed under the [MIT License](LICENSE).
