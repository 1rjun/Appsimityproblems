/*
Author:Arjun Singh,
pentagon: this method takes the pentagon value and returns true and false
*/

// this formula checks is it pentagon or not
function pentagon(x){
    var result = Math.sqrt(24*x+1);
    return result%6 ===5;
}


function main(){
    var result = 0;
    var check = true;
    var i =1;

    // this is for the outer loop 
    // and it will use to check out the all the pentagon values difference within the inner loops pentagon
    while(check){
        i+=1;
        var n = ((3*i)-1)*i/2; // value of pentagon[j]
        for(var j=i-1;j>0;j--){
            // this inner loop is the values of pentagon[k]
            var m = ((3*j)-1)*j/2;
            if(pentagon(n-m)&&pentagon(n+m)){
                // will check if pentagon[j] - pentagon[k] and pentagon[j] + pentagon[k] are also pentagon if yes 
                // then it will minimize their difference
                result = n-m; // this is the pentagon difference values

                // set the check value to false inorder to exit from outer loop
                check = false;

                //get out from the inner loop
                break;
            }
        }
    }

// show the result
console.log(result);
}

main();