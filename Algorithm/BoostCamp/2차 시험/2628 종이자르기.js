function solution() {
  let hori_max = 0;
  let verti_max = 0;

  for (let i = 0; i < cut_location.length; i++) {
    if (cut_location[i][0] === 0) {
      if (verti_max < cut_location[i][1]) verti_max = cut_location[i][1];
    } else {
      if (hori_max < cut_location[i][1]) hori_max = cut_location[i][1];
    }
  }

  if (verti_max < Math.floor(width / 2)) {
    verti_max = height - verti_max;
  }

  if (height < Math.floor(height / 2)) {
    hori_max = width - hori_max;
  }

  console.log((hori_max + 1) * (verti_max + 1));
}

const [width, height] = [10, 8];

const cut_location = [
  [0, 3],
  [1, 4],
  [0, 2],
];

solution();
