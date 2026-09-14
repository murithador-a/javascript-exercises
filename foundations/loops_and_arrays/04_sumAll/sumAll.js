const sumAll = function(a, b) {
  // Check if both arguments are positive integers
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
    return "ERROR";
  }

  // Find the smaller and larger number
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  let sum = 0;

  // Add every number from start to end
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line

module.exports = sumAll;