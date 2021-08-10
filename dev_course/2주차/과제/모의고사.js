function solution(answers) {

    const answer = [];

    const patterns = [
        [ 1, 2, 3, 4, 5 ],
        [ 2, 1, 2, 3, 2, 4, 2, 5 ],
        [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ]
    ]

    const count = [ 0, 0, 0 ];

    for ( let i = 0; i < answers.length; i++){

        if(answers[i] === patterns[0][i%5])  count[0]++;
        if(answers[i] === patterns[1][i%8])  count[1]++;
        if(answers[i] === patterns[2][i%10]) count[2]++;

    }

    let max = Math.max(...count);

    count.forEach((each, idx) => each === max ? answer.push(idx+1) : answer );

    return answer;
}