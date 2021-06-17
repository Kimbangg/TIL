function findLocation(alphabet) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i].includes(alphabet)) {
      x = i;
      y = keyboard[i].indexOf(alphabet);
    }
  }
  return [x, y];
}

function solve() {
  let count = 0;

  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i].includes(left)) {
      xl = i;
      yl = keyboard[i].indexOf(left);
    }

    if (keyboard[i].includes(right)) {
      xr = i;
      yr = keyboard[i].indexOf(right);
    }
  }

  for (let i = 0; i < target.length; i++) {
    count += 1;

    const [row, col] = findLocation(target[i]);

    if (vowel.includes(target[i])) {
      if (xr === row && yr === col) {
        continue;
      }

      count += Math.abs(xr - yr) + Math.abs(row - col);

      xr = row;
      yr = row;
    } else {
      if (xl === row && yl === col) {
        console.log(target[i]);
        console.log("jump");
        continue;
      }

      count += Math.abs(xl - yl) + Math.abs(row - col);

      xl = row;
      yl = col;
    }
  }
  console.log(count);
}

let [xl, yl, xr, yr] = [0, 0, 0, 0];

const [left, right] = ["z", "o"];
const target = "zoac";

const keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
const vowel = "yuiophjklbnm";

solve();
