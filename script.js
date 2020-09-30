var currentDate = $("#currentDay");
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour1 = $("#hour-13");
var hour2 = $("#hour-14");
var hour3 = $("#hour-15");
var hour4 = $("#hour-16");
var hour5 = $("#hour-17");
var saveBtn = $(".saveBtn");
var textInput = $(".description");



// add current day and date with moments to #currentDay;
currentDate.text(moment().format("LLLL"));

// check all time elements and apply past present future classes
var militaryTime = moment().format("HH")
const timeEls = document.querySelectorAll(".hour");
var row = document.querySelectorAll(".row time-block");

    for (var i = 0; i < timeEls.length; i++) {
        if (timeEls[i].textContent > militaryTime){
        //   add present class
            $(row).attr("class", "future");
        }//   else if.... 
        else if (timeEls[i].textContent < militaryTime){
            $(row).attr("class", "past");
        }
        
        else {
            $(row).attr("class", "present");
        }
        
    };

    // add event listner for all our submit buttons
const btnEls = document.querySelectorAll(".saveBtn");
	for (var i = 0; i < btnEls.length; i++) {
        btnEls[i].addEventListener("click", function(e){
            console.log(e)
            console.log( e.target.id)
          // parse id to remove the word hour and add the word text
          var hourNum = e.target.id.substring(4);
          console.log(hourNum)
          // use new text var/string to find the element that contains user input
          var textNum = "text" + hourNum;
          console.log(textNum)
          var userInput = $(`#${textNum}`);
          console.log(userInput)
          
            //   if (typeof localStorage.getItem(hourNum) == 'string') {
            //       userInput = localStorage.getItem(hourNum);
            //   } 
            //   else {
            //       userInput = $(`#${textNum}`);
            //       $(localStorage.setItem(e.target.id, userInput.val()))
            //       };
            if(hourNum && userInput){
                localStorage.setItem(e.target.id, userInput.val());
                
            }
        })
           
       
    };
        console.log(localStorage.key(1));

    
      

        for(var i=0; i<localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            // alert(`${userInput}: ${localStorage.getItem(key)}`);
            $(".description").text += `${key}: ${value}`;
            
          };
  

   

    
    
    
    
          
          
     
    


let storage = {
    hour09: "",
    hour10: "",
    hour11: "",
    hour12: "",
    hour13: "",
    hour14: "",
    hour15: "",
    hour16: "",
    hour17: "",
};
