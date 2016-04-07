var $svg = $('svg');
var $lines = $('.lines');
var $engage = ('.engage');
var $btn = ('.btn');

$('svg').on('click', function (e) {
  $('engage').toggleClass('engaged');
  $('svg').toggleClass('is-pressed');
});
