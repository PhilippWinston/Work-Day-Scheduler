// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var today = dayjs();
  console.log(today);
  $("#currentDay").text(today.format("MMM D, YYYY"));

  $(".time-block").each(function (index) {
    let hourBlock = $(this).attr("id");
    var storedText = localStorage.getItem(hourBlock);

    if ( storedText !== null) {
       $(this).find('textarea').val(storedText)
    }
    hourBlock = hourBlock.substr(5);
    // console.log(hourBlock);
    const hourBlockNum = parseInt(hourBlock);
    console.log(hourBlockNum);
    const currentHour = dayjs().hour()

    // console.log(currentHour)
    if (currentHour > hourBlockNum) {
      console.log("that hour has past");
      $(this).addClass("past");
    } else if (currentHour < hourBlockNum) {
      console.log("this hour is coming");
      $(this).addClass("future");
    } else {
      console.log("this is the hour");
      $(this).addClass("present");
    }
$(this).find( "button" ).click(function(){
  let text = $(this).parent().find('textarea').val()
  console.log(text)
  let hourId = $(this).parent().attr('id')
  console.log(hourId)

  localStorage.setItem(hourId, text);
  

})

  });
  
});
