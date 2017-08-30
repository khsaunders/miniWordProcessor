console.log('connected');
//general styling
$('body').append('<div>', {'id': 'container'});
$('p', 'button',
  'div').wrapAll('#container');
$('#container').css({'border': 'solid,red,2px', 'width': '80%', 'margin': '5% auto', 'font-family': 'Lato'});
$('#colorPalette').css('display', 'none');

//array for color style options
const colors = ['#4CAF50', '#FD4F29', '#1B75E2', '#E2821B', '#643BBB'];

for (i=0; i>= colors.length; i++){
  let backgroundColor = colors.length[i];
  $('.colorSquare').css({'background-color': backgroundColor, 'width': '20px', 'border': 'none', 'outline': 'none'});
}

//default state for text color palette
$('#colorPalette').css('display', 'none');

//toggle to reveal and close color palette
$('#color').on('click', function changeColor(){
 $('#colorPalette').toggle();
});

//function for changing text to bold, italic, etc.
$('.changeStyle').on('click', function letterStyle(){
    let name = ($(this).attr('id'));
    console.log(name);
    let selectedText = window.getSelection();
    let range = selectedText.getRangeAt(0).cloneRange();
    let tag = document.createElement(name);

    range.surroundContents(tag);
    selectedText.addRange(range);
    console.log(tag)
});

//button to trigger editing mode
$('document').ready(function(){
  $('#paragraph').attr('contenteditable', 'true');
});
