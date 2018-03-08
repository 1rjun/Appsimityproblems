/*
Author:Arjun Singh,
function used:4

sieveofsundrem(limit):only takes one argument and return new_primes array of prime numbers

mostconsecutiveprime(limit,primes,sum_primes): takes three argument and return most consecutive sum of prime_number
below a limit

conseutiveprime_number(limit,primes): takes two argument and limit and primes,where limit is the given number
and primes are array of all prime numbers,it return nothing but it will prints the main output which contains 
the most consecutive prime number below limit

*/


// function which gives the prime numbers back in the form of array of prime numbers below a particular limit
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

// this is our main algorithm which will check out the prime number
function mostconsecutiveprime(limit,primes,sum_prime){

    // max is used in checking the most consecutive largest prime below limit,we initialize it -1
    var max = -1;
    //consum is the consecutive sum of prime number variable initialize as consum
    var consum =0

    // prime_number initialize as -1
    var prime_number = -1;
    for(var i=0;i<=primes[i];i++){
        // here we loop through from i=0 to primes[i] means a particular value of primes array 
        for(var j=0;j<i;j++)
        //nested loop though j=o to i 
        {
            if(sum_prime[i]-sum_prime[j]>=limit){
                //the condition will break because we cant expect the the consecutive sum more than limit i.e 1 million 
                break;
            }
            // this calculate the consecutive prime number using the cumulative sum
            var consum = sum_prime[i] - sum_prime[j];
            // this will check if given consum lies in primes list 
            if (primes.includes(consum)){
                // this loop will check max < i-j+1 ,max initialize as -1 ,so it means if anything goes down
                // below -1 then it never executed
                if (max < i-j+1)
                {	max = i-j+1;
                    // here we set up the prime_number
					prime_number = consum;
				}
                
            }
        }

    }
    return prime_number;
}

// store all the consecutive prime number sum
function consecutiveprime_number(limit,primes){

    //sum_prime array will take the all sum of consecutive prime number 
    var sum_prime = [];
    //first value of sum_prime is initialize 0
    sum_prime[0] = 0;

    // in order to put the consecutive prime number inside the sum_prime ,we will loop through i=1 to primes length 
    for(var i=1;i<primes.length+1;i++){
        // here we add the consecutive prime numbers from 0 to legth of prime numbers
        sum_prime[i] = primes[i-1]+sum_prime[i-1];
    }

    // this is the main output value which will get the most consecuite prime number 
    var output= mostconsecutiveprime(limit,primes,sum_prime);

    // here we print the output
    console.log(output);
}

// This is the main function
function main(){
    // this it the limit of the all prime numbers which lies under this
    var limit = 1000000;
    //primes will store the all the prime number and primes is an array
    var primes = sieveofsundrem(limit);
    //this function is the consecutive_prime_number 
    consecutiveprime_number(limit,primes);
}

main();
