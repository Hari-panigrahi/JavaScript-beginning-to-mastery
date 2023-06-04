//Function inside function

const app = () => {  //main function

    const myFunc = () => {                           //sub function 1
        console.log("hello from myFunc")
    }

    const addTwo = (num1,num2) => {                  //sub function 1
        return num1 + num2 ;
    }

    const multi = (num1,num2) => num1 * num2;        //sub function 1   

    console.log("inside app");                       //<-- this is for main function    

    myFunc();   //  <-- calling the SUB function under the main function 

    console.log(addTwo(2,3)); //  <-- calling the SUB function under the main function 

    console.log(multi(3,3));

}

app();  //  <---- calling the MAIN (first-primary) function

//-------------------------
//OUTPUT - inside app
//         hello from myFunc
//         5
//         9




// step1))  first call the first function
// step2))  secondly call the function under the main function like - myFunc() and addTwo(2,3) 