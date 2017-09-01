//General styling
$('body').css({'width': '80%', 'margin': '5% auto', 'font-family': 'Lato'});

$('ul').css('list-style', 'none');

$('.changeText').append('<button class="doneEditing">done editing</button><span class="timeStamp"> </span>');

$('.timeStamp').css({'font-size': '.25em', 'margin-top': '2%', 'display': 'block'});

$('.paragraphContents, .changeText:not(.edit)').css('display', 'none');

$('.doneEditing').hide();

$('.paragraphHeader').mouseover(function() {
  $(this).css('cursor', 'pointer');
});

//Adding a new entry
$('<button class="addNew">add new</button>').insertBefore('ul')

$('.addNew').click(function(){
  $('.addNew').toggle();
  $('<ul class="new"><li><input class="newTitle" placeholder="title"></input></li><li><textarea class="newEntry" placeholder="new entry"></textarea></li><li><button class="saveNew">save</button></li></ul>').insertBefore('.entries')
  $('ul').css('list-style', 'none');

  $('.newTitle, .newEntry, .saveNew').css('display', 'block');

  $('.saveNew').click(function(){
    let newTitle = $('.newTitle').val();
    let newEntry = $('.newEntry').val();

    //Add newest list item to top of ul
    $('<li><span>' + newTitle + '</span><p>'+ newEntry + '</p>').insertBefore('.entry:eq(0)').addClass('entry');
    $('span').eq(0).addClass('paragraphHeader');
    $('p').eq(0).addClass('paragraphContents');
    $('<span>'+newTitle+ '</span>').addClass('paragraphHeader');
    let newParagraph = $(newEntry).addClass('paragraphContents');
  });
});



//Append an edit button and a div that tells the user when the paragraph is in edit mode to each entry
$('.edit').appendTo('.paragraphContents');

//Add changeText buttons to each paragraph
$('.paragraphContents').append($('.changeText'));

//Toggle paragraph view
$('.paragraphHeader').click(function revealP(e) {
  $(this).next('p.paragraphContents').toggle();
  e.preventDefault();
});

//Create variables for timestamp on posts and edits
let date = new Date();
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

//When the edit button is clicked, remove button and reveal styling buttons instead
$('.edit').click(function(e) {
  $(this).closest('.paragraphContents').attr('contenteditable', 'true');
  $('.changeStyle, .doneEditing, .timeStamp').attr('contenteditable', 'false');
  $(this).toggle();
  $(this).next('.changeText').toggle();
  $('.doneEditing').show();

  //Edit button reveals change style buttons then allows changes to be made
  $('.changeStyle').click(function textAlter() {
    let name = ($(this).attr('id'));
    let selectedText = window.getSelection();
    let range = selectedText.getRangeAt(0).cloneRange();
    let tag = document.createElement(name);

    range.surroundContents(tag);
    selectedText.addRange(range);
  });

  //When the user is done editing, they can click the 'done editing button' to close the styling tools
  $('.doneEditing').click(function() {
    $('.timeStamp').empty().append('Last edited at' + time + ' on ' + date);
    $('.changeText, .editMode, .doneEditing').css('display', 'none');
    $('.edit').css('display', 'inline-block');
  });
});

//When the user is done editing, they can click the 'done editing button' to close the styling tools

//Array for color style options
// const colors = ['#4CAF50', '#FD4F29', '#1B75E2', '#E2821B', '#643BBB'];
//
// let colorSquares = $('.colorSquare');

// let i = 0;
// colorSquares.each(function() {
//   $(this).css('background-color', colors[i]);
//   i = (i + 1) % colors.length;
/* ^ Honestly, I don't know why this works.
    We're reassigning i to be the remainder of itself plus one divided by the length of the array. I don't see how it relates; I'll have to dig deeper. This was just a gem found on Stack Overflow */
// });

//Color palette is normally hidden until the 'color' button is clicked
// $('#colorPalette').css('display', 'none');
//
// $('#color').on('click', function changeColor() {
//   $('#colorPalette').toggle();
// });
