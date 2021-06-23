function solution(n) {
    let answer = 0;
    const nums_arr = Array.from({ length : n }, (v, i) => i + 1);
    
    // 슬라이딩 윈도우를 위한 변수들
    let end = 0;
    let sum = 0;
    
    for ( let start = 0; start < n; start++ ) {
        
        while ( sum < n && end < nums_arr.length ) {
            sum += nums_arr[end];
            end += 1;
        }
        
        if ( sum === n ) {
            answer += 1;
        }
        
        sum -= nums_arr[start];
        
    }
    
    
    return answer;
}