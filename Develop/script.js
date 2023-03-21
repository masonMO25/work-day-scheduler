const $timeBlocks = $('.time-block');

const todayDate = dayjs().format('dddd hh:mma');
$('#currentDay').html(todayDate);

$(document).ready(function () {    
  $('.saveBtn').on('click', function () {
    const text = $(this).siblings('.description').val();
    const time = $(this).parent().data('hour');
    localStorage.setItem(time, text);
  });
   
  function updateTimeBlocks() {
    const timeNow = dayjs().hour();

    $timeBlocks.each(function () {
      const $block = $(this);
      const blockHour = $block.data('hour');

      $block.toggleClass('past', blockHour < timeNow);
      $block.toggleClass('present', blockHour === timeNow);
      $block.toggleClass('future', blockHour > timeNow);
    });
  }

  updateTimeBlocks();
});

$timeBlocks.each(function () {
  const $description = $(this).find('.description');
  const hour = $(this).data('hour');
  $description.val(localStorage.getItem(hour));
});
