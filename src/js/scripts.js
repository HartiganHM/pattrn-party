const toggleActiveTab = event => {
  const clickedTab = event.target.closest('.tab-header');

  if (!$(clickedTab).hasClass('.active-tab-header')) {
    $('.tab-header').removeClass('active-tab-header');
    $(clickedTab).addClass('active-tab-header');

    toggleActiveContent(clickedTab);
    toggleMobileHeaderSymbol(clickedTab);
  }
};

const toggleActiveContent = tab => {
  const clickedContent = $(tab).siblings('.tab-content')[0];

  if (!$(clickedContent).hasClass('.active-content')) {
    $('.tab-content').removeClass('active-content');
    $(clickedContent).addClass('active-content');
  }
};

const toggleMobileHeaderSymbol = tab => {
  const clickedMobileHeaderSymbol = $(tab).children()[1];

  if (clickedMobileHeaderSymbol.innerText === '+') {
    document
      .querySelectorAll('.mobile-tab-indicator')
      .forEach(tab => (tab.innerText = '+'));
    clickedMobileHeaderSymbol.innerText = '−';
  }
};

const toggleHeaderDropdown = event => {
  $('.header-dropdown').slideToggle()
}

$('.tab-header').click(event => toggleActiveTab(event));
$('.menu-text').click(event => toggleHeaderDropdown(event));
