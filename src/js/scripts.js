const toggleActiveTab = (event) => {
  const clickedTab = event.target.closest('.tab-header');

  if (!$(clickedTab).hasClass('.active-tab-header')) {
    $('.tab-header').removeClass('active-tab-header')
    $(clickedTab).addClass('active-tab-header')
  }
}

$('.tab-header').click((event) => toggleActiveTab(event))