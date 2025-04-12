// Example demonstrating the use of 'continue' in a loop

for (let i = 0; i < 11; i++) {
    // When i equals 5
    if (i == 5) {
        console.log("detected"); // Log a message
        continue; // Skip the rest of the loop body for this iteration
    }

    // This line will not run when i == 5
    console.log(i);
}
