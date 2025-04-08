const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this.field = field;
    this.position = { x: 0, y: 0 };
  }

  isPositionValid(x, y) {
    return (
      this.field.length > y && this.field[0].length > x && y >= 0 && x >= 0
    );
  }

  changePosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  updateCurrentPosition(value) {
    this.field[this.position.y][this.position.x] = value;
  }

  print() {
    let output = "";
    for (let i = 0; i < this.field.length; i++) {
      const arrayLine = this.field[i];
      let line = "";
      for (let j = 0; j < arrayLine.length; j++) {
        line = line + arrayLine[j];
      }

      line = line + "\n";
      output = output + line;
    }

    process.stdout.write(output);
  }

  static generateField(height, width, percentage) {
    const field = new Array(height)
      .fill(fieldCharacter)
      .map(() => new Array(width).fill(fieldCharacter));

    console.log("initialize field array");

    let numLoops = Math.floor(height * width * ((100 - percentage) / 100));
    console.log(`loops to insert wholes ${numLoops}`);
    while (numLoops !== 0) {
      const randomX = Math.floor(Math.random() * width);
      const randomY = Math.floor(Math.random() * height);
      field[randomY][randomX] = hole;
      numLoops--;
    }

    console.log(`loops to insert wholes ${numLoops}`);

    const randomHatX = Math.floor(Math.random() * width) + 1;
    const randomHAtY = Math.floor(Math.random() * height) + 1;
    field[randomHAtY][randomHatX] = hat;

    console.log("completes");

    field[0][0] = pathCharacter;

    return field;
  }
}
const field = Field.generateField(100, 400, 90);
const myField = new Field(field);

let gameOver = false;

//Helper functions

const handleMovement = (x, y) => {
  if (myField.isPositionValid(x, y)) {
    myField.changePosition(x, y);
    switch (myField.field[y][x]) {
      case fieldCharacter:
        myField.updateCurrentPosition(pathCharacter);
        break;
      case hat:
        console.log("You found the hat. You won");
        gameOver = true;
        break;
      case hole:
        console.log("You Fell into a hole. You Lost");
        gameOver = true;
        break;
    }
  } else {
    console.log("Out of field scope. You Lost.");
    gameOver = true;
  }
};

while (!gameOver) {
  myField.print();
  const userInput = prompt("Which way? ");
  switch (userInput.toLowerCase()) {
    case "u":
      handleMovement(myField.position.x, myField.position.y - 1);
      break;
    case "d":
      handleMovement(myField.position.x, myField.position.y + 1);
      break;
    case "l":
      handleMovement(myField.position.x - 1, myField.position.y);
      break;
    case "r":
      handleMovement(myField.position.x + 1, myField.position.y);
      break;
    default:
      console.log("Invalid input: (choose between: U, D, L, R)");
  }
}
