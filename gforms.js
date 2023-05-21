(function() {
  'use strict';

  var spanElement = document.querySelector("span.M7eMe");
  var searchString = spanElement.innerHTML;
  
  var inputAreas = document.querySelectorAll("div[data-params]");
  var urlPrefillParams = new URLSearchParams();

  var regex = /\[\"([^"]*)\"\]/g; // Regular expression pattern

  inputAreas.forEach((inputArea) => {
    try {
      var areaParams = inputArea.getAttribute("data-params");
      
      if (areaParams.includes(searchString)) {
        var startIndex = areaParams.indexOf("true,[]") + 7; // Add 7 to skip "true,[]"
        var dataAfterParams = areaParams.slice(startIndex);

        var match;
        while ((match = regex.exec(dataAfterParams)) !== null) {
          var foundMatch = match[1];
          console.log("Found in data params:", foundMatch);
        }
      } else {
        console.log("Not found in data params:", areaParams);
      }
    } catch (error) {
      console.error(error);
    }
  });
})();


