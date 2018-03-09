/*
Author: Arjun Singh
method used:2,
sieveofsundrem(limit): returns the prime number
checkpermutation(primenum1,primenum2): return true if permuation of two exists else return false,
main():main method
*/

// algorithm to find out all the prime numbers within a limit
function sieveofsundrem(limit){

    // we will half the limit of given prime number limit according to the algorithm
    var nNew = (limit-2)/2;

    //now we create an empty error which will store the boolean values 
    var marked = [];

    // new_primes  is the array which used for storing the prime numbers 
    var new_primes = [];

    // prime_sum is store all the prime number sums
    prime_sum = [];
    // lets give falsy value to our all elements and put them inside our array,

    // we will only loop i=1 to nNew+1,because it will help to find out the primes
    for(var i=1;i<nNew+1;i++){
 
    marked.push(false);

    // everything is set false here
    }
    for(var i=1;i<nNew;i++){

        //this is the main loop which will point out the numbers helpful to find out the primes
        for(var j=1;(i+j+2*j*i)<=nNew;j++){

            //the values inside the marked array set to true, and they will not give us any prime
            marked[i+j+2*j*i] = true;
        }
    }
    // will add the first prime number which is 2
    new_primes.push(2);
    for(var i=1;i<nNew;i++){
        if(marked[i]==false){
            // here we print the prime numbers by checking the faly values of marked
            // console.log(2*i+1);

            //now we push every prime numbers inside the new_primes list
            new_primes.push(2*i+1);
        }
    }
    return new_primes;
}

// this function will take two prime numbers and check whether the numbers are permutation of each other or not
function checkpermutaion(primenum1, primenum2 ){
    // store the first prime num as a string
    var primenum1 = String(primenum1);

    // store the second prime num as a string
    var primenum2 = String(primenum2);

    //check whether length of these prime nums matches or not
    if (primenum1.length == primenum2.length){
        // store the length of string in a variable len 
        var len = primenum1.length;
        // lets split each char of string and convert it in the form of array
        primechar1arr =  primenum1.split("");
        primechar2arr = primenum2.split("");
        //lets sort them 
        primechar1arr.sort();
        primechar2arr.sort();

        // join them in the form of the string agains
        primechar1arr = primechar1arr.join('');
        primechar2arr = primechar2arr.join('');
        //check them if they matches or not
        if(primechar1arr==primechar2arr){
            return true;
        }
        else{
            return false;
        }

    }
    else{
        // length doesnt matches it means they are not permuataions of each other
        return false;
    }
}

// main function
function main(){
    // limit variable 
    var limit = 10000;

    //this variable is used to print the output result
    var output =0;
    var primes =[];
    // lets collect all the prime numbers which lies within the limit by calling sieve of sundrem prime
     primes = sieveofsundrem(limit);

    //Now we have the all prime numbers inside primes array

    //lets loop through all the prime numbers 
    for(var i=0;i<primes.length;i++){
        for(var j=i+1;j<primes.length;j++){

            var k = primes[j] + (primes[j]-primes[i]);

            // check k is less than limit and k is prime numbers
            if ((k<limit)&&(primes.includes(k))){
                // now we need to check primes[i],primes[j] and primes[i],k are permuation of each other
                if((checkpermutaion(primes[i],primes[j]))&&(checkpermutaion(primes[i],k))){
                    output = String(primes[i]) + String(primes[j]) + String(k);
                    break; // break will get us out of the loop
                }

            }

        }
        if ((output.length)<=12){
            // this function will check out the the length of the output and then assign the output value
            output = output
        }
    }
    // this will be our final answer
    console.log(output);

}

main();