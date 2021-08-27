/**
 * const arrayToSum = [1,2,'3',[45,'76',32,[4,78,0,'-45']],3,[[true, false, 23, 45, [[[25,67,1,-687,34,[[[[45,52,100,[[[33,25]]]],0.5]],3.45]]],78,2]]],[[0.05,'23.3',[45,32,'B','2', '45']], {}]]
 */
 const arrayToSum = (array, sum = 0) => {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (Array.isArray(array[i])) {
      sum = arrayToSum(value, sum);
    } else {
      if (Number(value)) {
        sum += Number(value);
      }
    }
  }
  return sum;
};

console.log(
    arrayToSum([
      1,
      2,
      "3",
      [45, "76", 32, [4, 78, 0, "-45"]],
      3,
      [
        [
          true,
          false,
          23,
          45,
          [[[25, 67, 1, -687, 34, [[[[45, 52, 100, [[[33, 25]]]], 0.5]], 3.45]]], 78, 2],
        ],
      ],
      [[0.05, "23.3", [45, 32, "B", "2", "45"]], {}],
    ]),
);

// Covert function arrayTosum to a generator and make necessary changes to make it work
// please console.log the result

const sumArrayElements = (arr) =>{
    var sum = 0;

    function * ArrayToSum  (array, sum = 0)  {
      for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (Array.isArray(array[i])) {
          yield* ArrayToSum(value, sum);
        } else {
          if (Number(value)) {
            yield (sum + Number(value) );
          }
        }
      }
      return sum;
    };
    let result = 0;
    const mySum = ArrayToSum(arr);

    for(let element of mySum){
      result += element;
    }
    return result;
}
console.log(
    sumArrayElements(
        [
          1,
          2,
          "3",
          [45, "76", 32, [4, 78, 0, "-45"]],
          3,
          [
            [
              true,
              false,
              23,
              45,
              [[[25, 67, 1, -687, 34, [[[[45, 52, 100, [[[33, 25]]]], 0.5]], 3.45]]], 78, 2],
            ],
          ],
          [[0.05, "23.3", [45, 32, "B", "2", "45"]], {}],
        ]
    )
);
