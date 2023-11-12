//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

const p = document.querySelectorAll('p')
function triangleCalFn(input) {
    let semiPerimeter = (input[0] + input[1] + input[2]) / 2
    let triangleCal = Math.sqrt(semiPerimeter * ((semiPerimeter - input[1]) * (semiPerimeter - input[0]) * (semiPerimeter - input[2])))
    const x = `The value input is : ${input[0]}, ${input[1]}, ${input[2]} `
    p[0].innerText = (`The value input is : ${input[0]}, ${input[1]}, ${input[2]}`)
    console.log(x);

    p[1].innerText = (`This triangle area is: ` + triangleCal)
    console.log(`This triangle area is: ${triangleCal} `);
    return triangleCal
}

let numsInput = prompt('pls enter 3 amont of numbers with , sign between for triangle calculation')
console.log(numsInput);
let splitNums = (numsInput.split(','))
console.log(splitNums);
const numsArr = []
for (let i = 0; i < splitNums.length; i++) {
    numsArr.push(Number(splitNums[i]))
    console.log(numsArr);
}

triangleCalFn(numsArr)