function sel() {
// Get the container element
var btnContainer = document.getElementById("gender");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
} 
}

function next() {

    var main=document.getElementById('one');
    main.style.display='none';

    var calculator=document.getElementById('two');
    calculator.style.display='block';
    }

function back() {

    var main=document.getElementById('one');
    main.style.display='flex';
    
    var calculator=document.getElementById('two');
    calculator.style.display='none';
    }

function back__calc() {

    var main=document.getElementById('one');
    main.style.display='none';
    
    var calculator=document.getElementById('two');
    calculator.style.display='none';

    var calculator=document.getElementById('three');
    calculator.style.display='flex';
    }

window.onload = () => {
    let button = document.querySelector("#submit")

    // Function for BMI Calculator
    button.addEventListener("click", calculatorBMI)
};


function calculatorBMI() {

    // Getting input from user into height variable.
    let height = parseInt(document.querySelector("#cm").value);

    // Getting input from user into weight variable. 
    let weight = parseInt(document.querySelector("#kg").value);

    // Getting input from user into goal variable. 
    let goal = parseInt(document.querySelector("#gl").value);

    // Getting input from user into age variable. 
    let age = parseInt(document.querySelector("#ag").value);

    let result = document.querySelector("#result");
  
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height) || height < 120 && height > 300) 
    alert ("Provide a valid Height!") ;
        
    else if (weight === "" || isNaN(weight) || weight < 40 && weight > 300) 
    alert ("Provide a valid Weight!") ;

    else if (goal === "" || isNaN(goal) || goal < 40 && goal > 300) 
        alert("Provide a valid Goal!");

    else if (age === "" || isNaN(age) || age < 2 && age > 120) 
        alert("Provide a valid Age!");
  
    // If both input is valid, calculate the bmi
    else {
        // Hide Card One
        var main=document.getElementById('one');
        main.style.display='none';

        //Hide Card Two
        var calculator=document.getElementById('two');
        calculator.style.display='none';

        // Display Card Three
        var calculator=document.getElementById('three');
        calculator.style.display='flex';

        // Fixing upto 1 decimal places
        let bmi = (weight / ((height * height) / 10000)).toFixed(1);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Your BMI</br> Under Weight : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
            `Your BMI</br> Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Your BMI</br> Over Weight : <span>${bmi}</span>`;
    }
}

