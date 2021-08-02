/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let i=0 , j = 0;
    let count = 1;
    // const resultMatrix = Array.from({length:n}).map(()=>new Array(n).fill(0));
    const resultMatrix = new Array(n).fill(null).map(()=>new Array(n).fill(0));

    if(n%2===1){
        resultMatrix[n>>1][n>>1] = n*n;
    }

    for(let loop=0;loop<(n>>1);loop++){
        i = j =loop;
        for(j=loop;j<n-loop-1;j++){
            resultMatrix[i][j]=count++;
        }
        for(i=loop;i<n-loop-1;i++){
            resultMatrix[i][j]=count++;
        }
        for(j=n-loop-1;j>loop;j--){
            resultMatrix[i][j]=count++;
        }
        for(i=n-loop-1;i>loop;i--){
            resultMatrix[i][j]=count++;
        }
    }

    return resultMatrix;
};