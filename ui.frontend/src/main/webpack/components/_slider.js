//Custom range slider component made by LR//
(function() {
    "use strict";
    
    var slider = document.getElementById("slRange");
    var output = document.getElementById("rangevalue");
    output.innerHTML = "$" + Number(slider.value).toFixed(2); 
    
    // Update the current slider value 
    slider.oninput = function() {
      output.innerHTML = "$" +  this.value;
      document.getElementById('rangevalue').innerHTML = "$" + Number(slider.value).toFixed(2);
    };

    const rangeInputs = document.querySelectorAll('input[type="range"]');
    const numberInput = document.querySelector('input[type="number"]');

    function handleInputChange(e) {
      let target = e.target;
      if (e.target.type !== 'range') {
        target = document.getElementById('slRange');
      } 
      const min = target.min;
      const max = target.max;
      const val = target.value;
      
      target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    }
    
    rangeInputs.forEach(input => {
      input.addEventListener('input', handleInputChange);
    });
    numberInput.addEventListener('input', handleInputChange);
   
}());




