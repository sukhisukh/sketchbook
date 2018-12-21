var marker = "rgba(0,0,0,1)";
var markerWidth = 1;
var lastEvent;
var mouseDown = false;

var context = $('#canvas')[0].getContext('2d');
var $canvas = $('#canvas');

$canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	if(mouseDown){
		$(this).css('cursor', 'crosshair');
		context.beginPath();
		context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
		context.lineTo(e.offsetX,e.offsetY);
		context.lineWidth = markerWidth;
		context.strokeStyle = marker;
		context.lineCap = 'round';

		context.stroke();

		lastEvent = e;
	}
}).mouseup(function(){
	mouseDown = false;
});

var changeWidth = function(){
	markerWidth = $('#marker').val();
};

$('#marker').change(changeWidth);

var clearCanvas = function(){
	context.clearRect(0,0,980,500);
};

$('#colorPicker').on('click','li',function(){
	marker = $(this).css('background-color');
});

$('#clearCanvas').on('click',clearCanvas);