#!/usr/bin/env node

/**
 * Roll The Dice - Cross Platform Startup Script
 * Works on macOS, Linux and Windows
 * 
 * Usage: node start.js
 */

const { exec } = require('child_process');
const path = require('path');
const os = require('os');

const indexPath = path.join(__dirname, 'index.html');
const platform = os.platform();

console.log('🎲 Roll The Dice Starting...');
console.log(`📍 Platform detected: ${platform}`);

let openCommand;

switch (platform) {
    case 'darwin': // macOS
        openCommand = `open "${indexPath}"`;
        break;
    case 'win32': // Windows
        openCommand = `start "" "${indexPath}"`;
        break;
    case 'linux': // Linux
        openCommand = `xdg-open "${indexPath}"`;
        break;
    default:
        console.log('❌ Unsupported platform');
        console.log(`📄 Please open manually: ${indexPath}`);
        process.exit(1);
}

exec(openCommand, (error) => {
    if (error) {
        console.log('⚠️  Could not open browser automatically');
        console.log(`📄 Please open this file in your browser: ${indexPath}`);
        process.exit(1);
    }
    
    console.log('✅ Opened successfully in your default browser');
    console.log('\n🎮 Controls:');
    console.log('   • Click "Roll Dice" button');
    console.log('   • Press Spacebar on keyboard');
});