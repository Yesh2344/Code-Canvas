# Minor edit
class ColorPalette {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.colors = this.generateColors(10); // Generate 10 colors
        this.selectedColor = '#000000'; // Default color
        this.render();
    }

    generateColors(numColors) {
        const colors = [];
        for (let i = 0; i < numColors; i++) {
            colors.push(this.getRandomColor());
        }
        return colors;
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        this.colors.forEach(color => {
            const swatch = document.createElement('div');
            swatch.classList.add('colorSwatch');
            swatch.style.backgroundColor = color;
            swatch.addEventListener('click', () => this.selectColor(color));
            this.element.appendChild(swatch);
        });
    }

    selectColor(color) {
        this.selectedColor = color;
        console.log(`Selected color: ${color}`);
    }

    getSelectedColor() {
        return this.selectedColor;
    }
}