//General styling
$('body').css({'width': '80%', 'margin': '5% auto', 'font-family': 'Lato'});
$('ul').css('list-style', 'none');
$('.paragraphContents').css('display', 'none');
$('.paragraphHeader').mouseover(function() {
  $(this).css('cursor', 'pointer');
});
$('.changeText:not(.edit)').css('display','none');

//Append an edit button and a div that tells the user when the paragraph is in edit mode to each entry
$('.edit').appendTo('p');

$('p').append('<div class="editMode">edit mode</div>');
$('.editMode').css({'display':'none', 'margin':'5% auto 0 auto'});

//Add changeText buttons to each paragraph
$('.paragraphContents').append($('.changeText'));

//Toggle paragraph view
$('.paragraphHeader').click(function revealP(e) {
  $(this).next('p.paragraphContents').toggle();
  e.preventDefault();
});

//When the edit button is clicked, remove button and reveal styling buttons instead
$('.edit').on('click', function(){
  $(this).closest('.paragraphContents').attr('contenteditable', 'true');
  $('.changeStyle').attr('contenteditable', 'false');
  $(this).toggle();
  $('.editMode, .changeText').toggle();

  //Edit button reveals change style buttons then allows changes to be made
  $('.changeStyle').click(function textAlter() {
    let name = ($(this).attr('id'));
    let selectedText = window.getSelection();
    let range = selectedText.getRangeAt(0).cloneRange();
    let tag = document.createElement(name);

    range.surroundContents(tag);
    selectedText.addRange(range);

  });
});

//Array for color style options
const colors = ['#4CAF50', '#FD4F29', '#1B75E2', '#E2821B', '#643BBB'];

let colorSquares = $('.colorSquare');

let i = 0;
colorSquares.each(function() {
  $(this).css('background-color', colors[i]);
  i = (i + 1) % colors.length;
  /* ^ Honestly, I don't know why this works.
    We're reassigning i to be the remainder of itself plus one divided by the length of the array. I don't see how it relates; I'll have to dig deeper. This was just a gem found on Stack Overflow */
});

//Color palette is normally hidden until the 'color' button is clicked
$('#colorPalette').css('display', 'none');

$('#color').on('click', function changeColor() {
  $('#colorPalette').toggle();
});
