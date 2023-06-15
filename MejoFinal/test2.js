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

            isValid = /^(1|0)*(0)*(1)*((111|00|101))(1|0)*((101|01|000))(1|0)*((101|000))*$/.test(inputString);

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
            isValid = /^(0|1)+$/.test(inputValue);
        if (!isValid) {
            input.value = inputValue.slice(0, -1);
        }};


// transition
const test2 = new DFA(
  ["0", "1"],
  ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'],
  "q0",
  ["q8"],
  {
   "q0.0":"q1", "q0.1":"q2", 
   "q1.0":"q5", "q1.1":"q2",
   "q2.0":"q4", "q2.1":"q3",
   "q3.0":"q4", "q3.1":"q5",
   "q4.0":"q5", "q4.1":"q5",
   "q5.0":"q6", "q5.1":"q5",
   "q6.0":"q7", "q6.1":"q8",
   "q7.0":"q8", "q7.1":"q8",
   "q8.0":"q8", "q8.1":"q8",
  }
)

//Simulation
const simulateDFA = document.querySelector('.simulateDFA');

simulateDFA.addEventListener('click', async function() {
  var userInput = document.getElementById("inputString").value;
    var result = test2.execute(userInput);  //validating
    for (let index = 0; index < test2.path.length; index++) {
      const state = test2.path[index];
      let current_state = document.getElementById(state)
      if (test2.path.length-1 === index){
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