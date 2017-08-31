//general styling
$('body').css({'border': 'solid,red,2px', 'width': '80%', 'margin': '5% auto', 'font-family': 'Lato'});
$('ul').css('list-style', 'none');
$('.paragraphContents').css('display', 'none');
$('.paragraphHeader').mouseover(function() {
  $(this).css('cursor', 'pointer');
});
$('#colorPalette').css('display', 'none');

//toggle paragraph view
$('.paragraphHeader').click(function revealP(e) {
  $(this).next("p.paragraphContents").toggle();
  e.preventDefault();
})

//add changeText buttons to each paragraph
$('.paragraphContents').after($('.changeText'));

//array for color style options
const colors = ['#4CAF50', '#FD4F29', '#1B75E2', '#E2821B', '#643BBB'];

let colorSquares = $('.colorSquare');

let i = 0;
colorSquares.each(function() {
  $(this).css('background-color', colors[i]);
  i = (i + 1) % colors.length;
  /* ^ honestly, i don't know why this works.
    we're reassigning i to be the remainder of itself plus one divided by the length of the array. i don't see how it relates; i'll have to dig deeper. this was just a gem found on stackoverflow */
});

//default state for text color palette
$('#colorPalette').css('display', 'none');

//toggle to reveal and close color palette
$('#color').on('click', function changeColor() {
  $('#colorPalette').toggle();
});

//function for changing text to bold, italic, etc.

// $('p, .changeText').each(function() {
//   $(this).wrapAll('<div class="mainContainer"/>');
// });

$('.changeStyle').click(function textAlter() {
  let name = ($(this).attr('id'));
  let selectedText = window.getSelection();
  let range = selectedText.getRangeAt(0).cloneRange();
  let tag = document.createElement(name);

  range.surroundContents(tag);
  selectedText.addRange(range);

});

//COLOR PALETTE ON HOLD

//   if ($('.mainContainer .colorPalette').click) {
//     function changeTheColor() {
//       console.log('color click!');
//       //will produce the rgb value of the color
//       let desiredColor = $(this).css('background-color');
//       //have to change it to string in order for css to recognize it
//       let colorVal = desiredColor.toString();
//       $(range).css('color', colorVal);
//     }
//   }
// });
