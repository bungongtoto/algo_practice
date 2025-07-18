const findLongestRegex = (x, y, z) => {
  if (x === z || y === z) {
    return -1;
  }

  let candidates = new Map();
  // select potentail candidates
  for (let i = 0; i < x.length; i++) {
    if (z[i] !== x[i] && z[i] !== y[i]) {
      candidates.set(i, z[i]);
    }
  }

  // convert candidates to array for sorting
  candidates = [...candidates];

  let selectedCandidate;

  if (candidates.length === 0) {
    return -1;
  } else if (candidates.length === 1) {
    selectedCandidate = candidates[0];
  } else {
    candidates.sort((a, b) => a[1] - b[1]);
    selectedCandidate = candidates[0];
  }

  let result = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < x.length; i++) {
    if (i === selectedCandidate[0]) {
      result.push("[" + alphabet.replace(selectedCandidate[1], "") + "]");
      continue;
    }

    result.push("[" + alphabet + "]");
  }

  return result.join("");
};

console.log(findLongestRegex("AERB", "ATRC", "AGCB"));
