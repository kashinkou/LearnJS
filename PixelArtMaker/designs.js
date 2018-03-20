// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(function(){

	function makeGrid() {
		$('table').children().remove();
		let row = $('#inputHeight').val();
		let col = $('#inputWidth').val();
		// console.log('r = ' + row);
		// console.log('c = ' + col);
		for (var i = 0; i < row; i++) {
			$('table').append('<tr><td></td></tr>');
			for (var j = 0; j < col-1; j++) {
				$('table').find('tr').last().append('<td></td>')
			}
		}
	}

	//canvas
	$('input[type="submit"]').click(function(e){
		e.preventDefault();
		makeGrid();
	})
	
	//draw
	$('table').on('click','td', function(){
		let color = $('#colorPicker').val();
		$(this).css('background-color', color);
	})
})

