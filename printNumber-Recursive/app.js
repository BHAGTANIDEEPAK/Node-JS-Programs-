// Recursive function to print numbers from start to end with a delay
function printNumbersRecursive(start, end) {
    // Base case: If start is greater than end, stop recursion
    if (start > end) {
        return;
    }

    // Print the current number
    console.log(start);

    // Call the function recursively with the next number after a delay
    setTimeout(() => {
        printNumbersRecursive(start + 1, end);
    }, 2000); // 2 seconds delay
}

// Call the function to print numbers from 1 to 20 with a delay of 2 seconds
printNumbersRecursive(1, 20);
