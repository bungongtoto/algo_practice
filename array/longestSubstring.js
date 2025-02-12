
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set(); // To store unique characters
    let left = 0; // Left pointer of the sliding window
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]); // Remove leftmost character
            left++; // Move left pointer forward
        }
        
        charSet.add(s[right]); // Add new character to the set
        maxLength = Math.max(maxLength, right - left + 1);
        console.log(maxLength)
    }

    return maxLength;
};


console.log(lengthOfLongestSubstring("dvdf"));
