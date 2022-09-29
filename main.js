let arrayOfCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let arrayOfColors = [];

for (let i = 0; i < 6; i++) {
  arrayOfColors.push(
    arrayOfCodes[Math.floor(Math.random() * arrayOfCodes.length)]
  );
}

let finalColor = `#${arrayOfColors.join("")}`;

console.log(finalColor);

document.body.append(finalColor);
document.body.style.backgroundColor = finalColor;
