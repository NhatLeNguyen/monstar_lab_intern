// Chunk array.
// 	[input]: [1, 2, 3, 4, 5];

// 	Chunk(arr, 2);
// 	[output]: [[1, 2], [3, 4], [5]];

function Chunk(arr, size) {
  return arr.reduce((result, item) => {
    const lastChunk = result[result.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      result.push([item]);
    } else {
      lastChunk.push(item);
    }
    return result;
  }, []);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Chunk(arr, 3));
