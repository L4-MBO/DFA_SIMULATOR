//Dropdown for the reg-ex
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = Array.from(dropdown.querySelectorAll('.menu li'));
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');

      options.forEach(option => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});

//Clear Button
const clearButton = document.querySelector('.clearbutton');

clearButton.addEventListener('click', function() {
    var inputField = document.getElementById("inputString");
    inputField.value = "";
});

//Show CFG
const showCFG = document.querySelector('.showCFG');
var isClicked = true;

showCFG.addEventListener('click', function() {
  var cfgElement = document.querySelector('.CFG1');
  
  if(isClicked){
    cfgElement.classList.add('show');
    cfgElement.classList.remove('hide');
    cfgElement.classList.add('showCFG1');
    isClicked = false;
  }else{
    cfgElement.classList.remove('show');
    cfgElement.classList.add('hide');
    isClicked = true;
  }
  
});

//validate 
const validateString = document.querySelector('.validateString');

validateString.addEventListener('click', function() {
        var inputString = document.getElementById("inputString").value;
        var alertElement = document.querySelector('.alert');
        var alerteElement = document.querySelector('.alerte');
        var isValid = false;

        isValid = /^((bab|bbb)b*a*(a*|b*)(ab)*(aba)(bab|aba)*bb(a|b)*(bab|aba)(a|b)*)$/.test(inputString);

            if (isValid) {     
              alertElement.classList.add('show');
              alertElement.classList.remove('hide');
              alertElement.classList.add('showAlert');

              setTimeout(function() {
                alertElement.classList.remove('show');
                alertElement.classList.add('hide');
              }, 2000);
              
                document.getElementById("inputString").style.backgroundColor = "#6a994e";
            } else {              
              alerteElement.classList.add('showe');
              alerteElement.classList.remove('hidee');
              alerteElement.classList.add('showAlerte');

              setTimeout(function() {
              alerteElement.classList.remove('showe');
              alerteElement.classList.add('hidee');
              }, 3000);

                document.getElementById("inputString").style.backgroundColor = "#ce4257";
            }
        
            setTimeout(function() {
                document.getElementById("inputString").style.backgroundColor = "white"; 
            }, 3000);
    });

//lockInput
    function lockInput(event) {
        var input = event.target;
        var inputValue = input.value;
        var isValid = false;
        isValid = /^(a|b)+$/.test(inputValue);
        if (!isValid) {
            input.value = inputValue.slice(0, -1);
        }};


// transition
const test3 = new DFA(
  ["a", "b"],
  ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16','q17','q18', 'q19', 'q20', 'q21','q22'],
  "q0",
  ["q21"],
  {
    "q0.a":"q22", "q0.b":"q1", 
    "q1.a":"q2", "q1.b":"q2",
    "q2.a":"q22", "q2.b":"q3",
    "q3.a":"q4", "q3.b":"q3",
    "q4.a":"q4", "q4.b":"q5",
    "q5.a":"q6", "q5.b":"q7",
    "q6.a":"q10", "q6.b":"q11",
    "q7.a":"q8", "q7.b":"q7",
    "q8.a":"q23", "q8.b":"q9",
    "q9.a":"q6", "q9.b":"q23", 
    "q10.a":"q23", "q10.b":"q12",
    "q11.a":"q6", "q11.b":"q16",
    "q12.a":"q13", "q12.b":"q24",
    "q13.a":"q10", "q13.b":"q15",
    "q14.a":"q24", "q14.b":"q13",
    "q15.a":"q14", "q15.b":"q24",
    "q16.a":"q18", "q16.b":"q17",
    "q17.a":"q19", "q17.b":"q17",
    "q18.a":"q18", "q18.b":"q20",
    "q19.a":"q18", "q19.b":"q21",
    "q20.a":"q21", "q20.b":"q17",
    "q21.a":"q21", "q21.b":"q21",
    "q22.a":"q22", "q22.b":"q22",
    "q23.a":"q23", "q23.b":"q23",
    "q24.a":"q24", "q24.b":"q24",
  }
)

//Simulation
const simulateDFA = document.querySelector('.simulateDFA');

simulateDFA.addEventListener('click', async function() {
  var userInput = document.getElementById("inputString").value;
    var result = test3.execute(userInput);  //validating
    for (let index = 0; index < test3.path.length; index++) {
      const state = test3.path[index];
      let current_state = document.getElementById(state)
      if (test3.path.length-1 === index){
        if (!result){
          current_state.classList.add("invalid_state")   
          await sleep(1000)
          current_state.classList.remove("invalid_state")
          await sleep(500)
        } else {
          current_state.classList.add("valid_state")
          await sleep(1000)
          current_state.classList.remove("valid_state")
          await sleep(500)
        }} else {
          current_state.classList.add("valid_state")
          await sleep(1000)
          current_state.classList.remove("valid_state")
          await sleep(500)
        }
    }
  }
  );

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.showPDA');
  var image = document.querySelector('.popup-image');

  button.addEventListener('click', function() {
    image.style.display = 'block';
  });

  image.addEventListener('mouseout', function() {
    image.style.display = 'none';
  });
});