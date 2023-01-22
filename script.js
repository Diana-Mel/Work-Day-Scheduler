// 1. Show the current date at the top
//      Use moment api and format today date
//      Add it to the `currentDay` element
    var todaysDate = moment().format("dddd, DD MMMM YYYY")
    var todaysHour = moment().format("HH")
    console.log(todaysHour)

    $('#currentDay').text(todaysDate + ', Hour: ' + todaysHour)

// 2. Colour code each block based on the current time
//      Create variables to target each time block
    var hour9am = $('#9am')
    var hour10am = $('#10am')
    var hour11am = $('#11am')
    var hour12pm = $('#12pm')
    var hour1pm = $('#1pm')
    var hour2pm = $('#2pm')
    var hour3pm = $('#3pm')
    var hour4pm = $('#4pm')
    var hour5pm = $('#5pm')
    var hour6pm = $('#6pm')
//      In the html add the data-hour which represent which hour each element is
    timeblocks = $('.description')
    timeblocks.each(function() {
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
//      create variable (an array) called inputs that will store all of the input data
//      Add event listener to all save button
//          Add event.preventDefault inside the click event listener
//          Push the input value to inputs array with the format of { time: xx, input: xxx }
//              Get the input value
//              Get the hour value
//              Push to the inputs array if the hour entry not exist yet in the array
//              Replace the existing entry if the hour entry exist in the array
//          Save inputs variable to local storage
//              Stringify the inputs array
//          Show feedback message to the user (optional)
//          The feedback need to be dissappeared automatically
//
//      Example of inputs array format
//      var inputs = [{
//        time: 9,
//        input: 'Meeting',
//      },{
//        time: 10,
//        input: 'Coffee',
//      },...];
// 4. Load input from local storage when page load/refresh if there's any data in local storage
//      var localStorageInput = get data from local storage
//      check if localStorageInput exist, if it is
//          var parsedLocalStorageInput = parse localStorageInput
//          populate the inputs with the value from parsedLocalStorageInput
//          inputs.forEach(function(input) {
//              input => {
//                time: 9,
//                input: 'Meeting',
//              }
//              $('.timeblock[data-hour="' + input.time + '"] textarea').val(input.input)
//          })
//      if theres no data in local storage, do nothing

// Extra, add hover effect on the save button

