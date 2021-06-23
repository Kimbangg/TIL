// 초고수 
function solution(files) {
     return files.sort((a, b) => {

        const headerA = a.match(/^\D+/)[0].toLowerCase();
        const headerB = b.match(/^\D+/)[0].toLowerCase();
        console.log(headerA);
        console.log(headerB);
        
        // B값이 더 크면 순서를 바꾼다
        if (headerA < headerB) {
          return -1;
        }
         // A값이 더 크면 순서를 유지한다.
        if (headerA > headerB ) {
          return 1;
        }
        
         // 숫자와 대응하는 자리의 값들을 찾는다.
         // 이후 앞자리가 0이면, ""로 바꾼다.
        const numberA = a.match(/\d+/)[0].replace(/^0+/, "");
        const numberB = b.match(/\d+/)[0].replace(/^0+/, "");

        return numberA - numberB;
    });
}


    // 현실적인 답 ===================================================

function solution(files) {
  let answer = [];
  const reg = /(\d+)/g; 
    
  for (let i = 0; i < files.length; i++) {
    answer.push({ index: i, value: files[i].split(reg) }); 
  }

  answer.sort((a, b) => {

    const headerA = a.value[0].toLowerCase();
    const headerB = b.value[0].toLowerCase();
      
    if ( headerA < headerB ) return -1;
    else if ( headerA > headerB ) return 1;
      
    const numberA = parseInt(a.value[1]);
    const numberB = parseInt(b.value[1]);
      
    if ( numberA < numberB ) return -1;
    else if ( numberA > numberB ) return 1;
    
    else {
      if ( a.index < b.index ) return -1;
      else return 1;
    }

  });
    
  return answer.map((each) => each.value.join(""));
  
}