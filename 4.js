/*
4. Write a function that checks if two given strings
are anagrams of each other.
*/
function checkStrings(firstStr, secondStr) {
  firstStr = firstStr.toLowerCase().replace(/[^a-z0-9]/g, "");
  secondStr = secondStr.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (firstStr.length !== secondStr.length) return false;

  const charCount = {};
  for (let char of firstStr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  console.log(charCount)

  for (let char of secondStr) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(checkStrings("arae", "raae")); 
console.log(checkStrings("hello", "world")); 