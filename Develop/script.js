let todayDate = dayjs().format('dddd hh:mma');

$("#currentDay").html(todayDate);

$(document).ready(function () {    
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
   
    function findTime() {
        let timeNow = dayjs().hour();

        $(".time-block").each(function () {
            const currentTime = parseInt($(this).attr("id").split("hour-")[1]);

            if (currentTime < timeNow) {
                $(this).removeClass("future present");
                $(this).addClass("past");
            }
            else if (currentTime === timeNow) {
                $(this).removeClass("past future");
                $(this).addClass("present");
            }
            else if (currentTime > timeNow) { 
                $(this).removeClass("past present");
                $(this).addClass("future");
            } else {
                console.log("Error");
            }
        })
    };

    findTime();
})