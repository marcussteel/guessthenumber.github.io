const checkinput = document.querySelector(".btn-primary");
const expression = document.querySelector(".expression");
const attempts = document.querySelector(".attempts");
const inputText = document.querySelector("#inputguess");

let numberOfAttempts = 0;
let userEntered = 0;
let userEnteredbfr = 0;
numberis = Math.floor(Math.random() * 100);
console.log("number is", numberis);

checkinput.addEventListener("click", (e) => {
    if (inputText.value) {
        if (checkisOneToHundred()) {
            numberOfAttempts += 1;

            userEnteredbfr = userEntered;
            userEntered = inputText.value;
            console.log("user entered:", userEntered);
            console.log("user entered bf:", userEnteredbfr);
            checknumber();


            inputText.value = "";
            e.preventDefault();


        }




    }

})

function checknumber() {
    if (userEntered > numberis) {
        console.log("enter higher");

            inputText.placeholder = ` enter lower`;
            expression.innerHTML = `You entered   ${userEntered}`;
            attempts.innerHTML = `Number of Attempts:   ${numberOfAttempts}`;
            
        }


   
     else     if (userEntered < numberis) {
        console.log("enter lower");

            inputText.placeholder = ` enter higher`;
            expression.innerHTML = `You entered   ${userEntered}`;
            attempts.innerHTML = `Number of Attempts:   ${numberOfAttempts}`;

        }
        else     if (userEntered == numberis) {
            console.log("Congraculations!!  You did it");
    
                inputText.placeholder = ` Congraculations!!  You did it `;
                expression.innerHTML = `Congraculations!!  You did it`;
                attempts.innerHTML = `Number of Attempts:   ${numberOfAttempts}`;
    
            }
 }




function checkisOneToHundred() {
    if (inputText.value < 1 || inputText.value > 100) {
        alert("please enter between 1 - 100");
        inputText.value = "";
        return false;


    } else if (isFloat(+inputText.value)) {
        alert("please enter an integer number");
        inputText.value = "";
        return false;

    } else return true;

}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}