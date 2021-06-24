function solution(target) {
  let layer = 1;

  while (target > layer) {
    target -= layer;
    layer += 1;
  }

  if (target % 2 === 0) {
    console.log(`${target}/${layer - target + 1}`);
  } else {
    console.log(`${layer - target + 1}/${target}`);
  }
}

const target = 14;
solution(target);
