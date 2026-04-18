/**
 * Roll The Dice - World Class Application
 * Version: 2.0.0
 * Author: Roll The Dice Team
 * License: MIT
 * 
 * A high quality virtual dice roller with realistic physics and animations.
 * Supports mouse clicks and keyboard controls.
 */

class DiceApp {
    constructor() {
        this.diceElement = document.getElementById('dice');
        this.rollButton = document.getElementById('rollButton');
        this.dots = document.querySelectorAll('.dot');
        this.historyList = document.getElementById('historyList');
        this.totalRollsElement = document.getElementById('totalRolls');
        this.isRolling = false;
        this.rollHistory = [];

        // Standard dice face patterns (dot positions)
        this.dicePatterns = {
            1: [5],
            2: [1, 9],
            3: [1, 5, 9],
            4: [1, 3, 7, 9],
            5: [1, 3, 5, 7, 9],
            6: [1, 3, 4, 6, 7, 9]
        };

        this.init();
    }

    init() {
        this.bindEvents();
        this.showDiceValue(1);
    }

    bindEvents() {
        // Button click handler
        this.rollButton.addEventListener('click', () => this.rollDice());

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !this.isRolling) {
                e.preventDefault();
                this.rollDice();
            }
        });
    }

    clearDots() {
        this.dots.forEach(dot => dot.classList.remove('visible'));
    }

    showDiceValue(value) {
        this.clearDots();
        this.dicePatterns[value].forEach(index => {
            document.getElementById(`dot${index}`).classList.add('visible');
        });
    }

    rollDice() {
        if (this.isRolling) return;

        this.isRolling = true;
        this.rollButton.disabled = true;
        this.diceElement.classList.add('rolling');
        this.clearDots();

        let rollCount = 0;
        const rollInterval = setInterval(() => {
            this.clearDots();
            const randomValue = Math.floor(Math.random() * 6) + 1;
            this.showDiceValue(randomValue);
            rollCount++;
        }, 80);

        setTimeout(() => {
            clearInterval(rollInterval);
            const finalResult = Math.floor(Math.random() * 6) + 1;
            this.showDiceValue(finalResult);
            this.diceElement.classList.remove('rolling');
            this.rollButton.disabled = false;
            this.isRolling = false;

            // Add to history
            this.addToHistory(finalResult);

            // Dispatch custom event for external integrations
            window.dispatchEvent(new CustomEvent('diceRolled', { 
                detail: { value: finalResult } 
            }));
        }, 700);
    }

    addToHistory(value) {
        this.rollHistory.unshift({
            value: value,
            time: new Date().toLocaleTimeString()
        });

        // Update counter
        this.totalRollsElement.textContent = this.rollHistory.length;

        // Remove empty state if exists
        const emptyState = this.historyList.querySelector('.empty-state');
        if (emptyState) {
            emptyState.remove();
        }

        // Create history item
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <span class="roll-number">🎲 ${value}</span>
            <span class="roll-time">${new Date().toLocaleTimeString()}</span>
        `;

        // Insert at the top
        this.historyList.insertBefore(historyItem, this.historyList.firstChild);

        // Keep only last 50 rolls
        while (this.historyList.children.length > 50) {
            this.historyList.removeChild(this.historyList.lastChild);
        }
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.diceApp = new DiceApp();
    console.log('✅ Roll The Dice App initialized successfully');
});