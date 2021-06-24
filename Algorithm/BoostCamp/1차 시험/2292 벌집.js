function solution() {
  if (target === 1) {
    return 1;
  }

  let layer = 1; // room
  let jump = 6; // plus
  let layer_max_count = 1; // first

  while (layer_max_count < target) {
    layer_max_count += jump;
    layer += 1;
    jump += 6;
  }

  console.log(layer);
}

const target = 19;
solution(target);
