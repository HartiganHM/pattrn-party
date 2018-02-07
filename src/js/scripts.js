const toggleActiveTab = (event) => {
  const clickedTab = event.target.closest('.tab-header');

  if (!$(clickedTab).hasClass('.active-tab-header')) {
    $('.tab-header').removeClass('active-tab-header')
    $(clickedTab).addClass('active-tab-header')

    toggleActiveContent(clickedTab);
  }
}

const toggleActiveContent = (tab) => {
  const clickedContent = $(tab).siblings('.tab-content')[0]

  if (!$(clickedContent).hasClass('.active-content')) {
    $('.tab-content').removeClass('active-content')
    $(clickedContent).addClass('active-content')
  }
}

$('.tab-header').click((event) => toggleActiveTab(event))