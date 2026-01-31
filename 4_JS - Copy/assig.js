let input = "presumtuous";

function countVowels(input) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        if (vowels.includes(input[i])) {
            count++;
            
        }
    }
    return count;
}

console.log(countVowels(input));
