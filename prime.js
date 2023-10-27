// A prime number is a natural number greater than 1, which is only divisible by 1 and itself.
function isPrime(n) { 
    // Corner case 
    if (n <= 1) 
        return false; 

    // Check from 2 to n-1 
    for (let i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 

    return true; 
} 

// Driver Code 

isPrime(47) 
    ? console.log("Prime number") 
    : console.log("Not a prime number"); 
