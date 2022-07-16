function findLongestWord(array) {
    let longestWord = "";

    array.forEach(function (word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

let word = findLongestWord(['java', 'javascript', 'python', 'html', 'css']); 
console.log(word);