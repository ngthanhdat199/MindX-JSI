
function mapFunc() {
    // input: mảng A = [1, 2, 3] -> length = 3
    // output: mảng B = [2, 4, 6] -> length = 3
    
    let arrayA = [1, 2, 3];
    // let arrayB = [];
    // for (let i = 0; i < arrayA.length; i++) {
        //     arrayB[i] = arrayA[i] * 2;
        // }
        
    // map
    let arrayB = arrayA.map(d => {
        let x = d * 2;
        let y = x + 1;
        let z = y - 1;
        return z;
    });
}

function filterFunc() {
    // input: mảng A = [1, 2, 3] -> length = 3
    // output: mảng B = [1, 2] -> length = 2
    let arrayA = [1, 2, 3];

    console.log(arrayA);

    // let arrayB = [];
    // for (let i = 0; i < arrayA.length; i++) {
    //     if (arrayA[i] < 3) {
    //         arrayB.push(arrayA[i]);
    //     }
    // }

    let arrayB = arrayA.filter(d => d < 3);
    console.log(arrayB);
}

function findFunc() {
    // input: mảng A = [1, 2, 3] -> length = 3
    // output: mảng B = [1] -> length = 1
    let arrayA = [1, 2, 3];

    console.log(arrayA);

    // let arrayB = [];
    // for (let i = 0; i < arrayA.length; i++) {
    //     if (arrayA[i] < 3) {
    //         arrayB.push(arrayA[i]);
    //     }
    // }

    let arrayB = arrayA.find(d => d < 3);
    console.log(arrayB);
}

findFunc();


// filterFunc();