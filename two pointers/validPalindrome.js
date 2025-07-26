const validPalindrome = (str) => {
  let l = 0,
    r = str.length - 1;

  while (l < r) {
    while (l < r && !isAlphaNum(str[l])) {
      l++;
    }

    while (l < r && !isAlphaNum(str[r])) {
      r--;
    }

    if (str[l].toLowerCase() !== str[r].toLowerCase()) return false;
    l++;
    r--;
  }

  return true;
};

const isAlphaNum = (char) => {
  return (
    char >= "a" ||
    char <= "z" ||
    char >= "A" ||
    char <= "Z" ||
    char >= "0" ||
    char <= "9"
  );
};
