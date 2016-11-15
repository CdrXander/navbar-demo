$('.menu-toggle').on('mouseenter', function () {
  $(this).find('.dropdown-menu').slideDown()
})
$('.menu-toggle').on('mouseleave', function () {
  $(this).find('.dropdown-menu').slideUp()
})
