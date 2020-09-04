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
var row = $(".row time-block");


// add current day and date with moments to #currentDay;
currentDate.text(moment().format("LLLL"));

//     function readFromLocalStorage ()
// function readFromLocalStorage(){
    // <!-- this is to look for anything saved previously in local storage -->
//         use for loop

//             - read value from time property
//             - assign as text back in element (using its class (.description) and id (specific to each hour)
//             - check current hour vs time slot (to determine color of text area: gray, red or white
//                 - assign proper class (.past .present .future) based on comparison to current hour (<,>, === or <=, >=, ===)
// }

//     function writeToLocalStorage ()
// function writeToLocalStorage(){
    //     <!-- this is to save a value from the text area to local storage, using the hour as the key when save button is clicked -->
//         add click event to save button class to run function
            // saveBtn.on("click", function() {
            //     alert("You clicked the button");
            //     console.log(saveBtn)
            // });
//             - read text from text area (class = "description", should be parent of save button)
//             - read schedule hour
//             - trim text, trim schedule hour
//             - send to local storage

// }
//     call readFromLocalStorage(); 
// readFromLocalStorage();


// check all time elements and apply past present future classes
var militaryTime = moment().format("HH")
const timeEls = document.querySelectorAll(".hour");
console.log(militaryTime)

    for (var i = 0; i < timeEls.length; i++) {
        if (timeEls[i].textContent > militaryTime){
        //   add present class
            $(row).attr("class", "future");
        }
     //   else if....
        else if (timeEls[i].textContent < militaryTime){
            $(row).attr("class", "past");
        }
        
        if (timeEls[i].textContent === militaryTime) {
            $(row).attr("class", "future");
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
        localStorage.setItem(e.target.id, userInput.val());
          
      })
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
