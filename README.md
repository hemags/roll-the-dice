# 🎲 Roll The Dice

World class virtual dice roller application with realistic physics and animations.

## ✨ Features

- ✅ Realistic physical dice with standard dot patterns
- ✅ 3D depth effects and shadows
- ✅ Smooth realistic rolling animation
- ✅ Mouse and keyboard (Spacebar) controls
- ✅ Fully responsive design
- ✅ Works on all modern browsers
- ✅ Cross platform support (macOS, Linux, Windows)
- ✅ Zero dependencies

## 🚀 Quick Start

### Option 1: Using startup script (requires Node.js)
```bash
node start.js
```

### Option 2: Manual
Just open `index.html` directly in any modern web browser.

## 📁 Project Structure

```
roll-the-dice/
├── index.html              # Main HTML file
├── src/
│   ├── css/
│   │   └── style.css       # Stylesheet with responsive design
│   └── js/
│       └── app.js          # ES6 Class based application
├── start.js                # Cross platform startup script
├── README.md               # This file
└── docs/
    └── requirements.md     # Original requirements
```

## 🎮 Controls

| Action | Description |
|--------|-------------|
| Click "Roll Dice" button | Roll the dice |
| Press Spacebar | Roll the dice |

## 🔧 Technical Details

- **Architecture**: Modular ES6 Class based design
- **Animations**: CSS Keyframe animations with realistic physics
- **Performance**: 60fps animations, GPU accelerated
- **Accessibility**: Proper ARIA attributes, keyboard navigation
- **Responsive**: Works on mobile, tablet and desktop

## 📝 API

The application dispatches a custom event when dice is rolled:

```javascript
window.addEventListener('diceRolled', (e) => {
    console.log('Dice rolled:', e.detail.value);
});
```

## 📄 License

MIT License - Free for personal and commercial use.

---

Made with ❤️ for everyone who needs a good dice roller