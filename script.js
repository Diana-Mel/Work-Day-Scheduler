// 1. Show the current date at the top
//      Use moment api and format today date
//      Add it to the `currentDay` element
    var todaysDate = moment().format("dddd, DD MMMM YYYY")
    var todaysHour = moment().format("HH")
    console.log(todaysHour)


    var dateFormat = $('#currentDay').text(todaysDate + ', Hour: ' + todaysHour)

// 2. Colour code each block based on the current time
//      Create variables to target each time block
var saveButton = $('.saveBtn')
var blockEl = $('.row')
var textArea = $('.description')

//      In the html add the data-hour which represent which hour each element is
    
    textArea.each(function() {
        hour = $(this).attr('data-hour');
        console.log(hour)

        for (let i = 0; i < hour.length; i++) {
            if (hour < todaysHour){
                $(this).css('background-color', 'grey')
            } else if (hour === todaysHour){
                $(this).css('background-color', 'red')
            }else if (hour > todaysHour){
                $(this).css('background-color', 'green')
            }      
        }
    })

// 3. Save input to local storage

//  This function attackes a click event on each button.     
    saveButton.on('click', function(event){

//  Stops the page from reloading      
    event.preventDefault();

//  Selects the element with the class decription  
    var userInput = $(this).siblings(".description").val();
//  Selects the parent element with its id attribute     
    var hourSaved = $(this).parent().attr("id");

//   
    var input = []
//  Takes the data already logged in the local storage
    var alreadyInStorage = localStorage.getItem("User schedule")
    
//  If statement that checks if there is any data in the storage and stores it in variable. 
    if (alreadyInStorage !== null) {
      input = JSON.parse(alreadyInStorage);
    }
//  Loop that checks if old data matches new data and updates it    
    for (i = 0; i < input.length; i++) {
        if (input[i].time === hourSaved) {
        input[i].todo = userInput;
        localStorage.setItem("User schedule", JSON.stringify(input));
        return;
        }
    }
//  Creates an object array   
    input.push({ time: hourSaved, todo: userInput })
//    Stores input in the local storage    
    localStorage.setItem("User schedule", JSON.stringify(input));

})

// 4. Load input from local storage when page load/refresh if there's any data in local storage
      function inputLocalStorage() {
        var alreadySaved = localStorage.getItem("user schedule")
//        
        if (alreadySaved !== null) {
          alreadySaved = JSON.parse(alreadySaved);
        } else {
          return;
        };
        
        for (i = 0; i < blockEl.length; i++) {
            var hourFromId = blockEl[i].getAttribute("id");
            for (j = 0; j < alreadySaved.length; j++) {
              var timeSaved = alreadySaved[j].time;
              var todoSaved = alreadySaved[j].todo;
              if (hourFromId === timeSaved) {
                blockEl[i].children[1].value = todoSaved;
              }
            }
        }
    }
    inputLocalStorage()
