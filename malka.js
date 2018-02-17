var selectedArea = document.createElement('div');
selectedArea.className = 'selectionBox';
selectedArea.style.position = 'absolute';
selectedArea.style.top = 0;
selectedArea.style.left = 0;
selectedArea.style.height = 0;
selectedArea.style.width = 0;
selectedArea.style.border = '1px solid red';

document.body.appendChild(selectedArea);

var mouse_down = false;
var start_pos_x = 0;
var start_pos_y = 0;
var end_pos_x = 0;
var end_pos_y = 0;

function addCssRule(cssText) {
	var style;
	style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = cssText;
	} else {
		style.appendChild(document.createTextNode(cssText));
	}
	document.head.appendChild(style);
};

var mouse_down = false;

$(function() {
    $('html').mousedown(function(e) {
        mouse_down = true;

        start_pos_x = e.pageX;
        start_pos_y = e.pageY;
    });

    $('html').mousemove(function(e) {
        end_pos_x = e.pageX;
        end_pos_y = e.pageY;

        if(mouse_down) {
            draw(start_pos_x, start_pos_y, end_pos_x, end_pos_y);
        }
    });

    $('html').mouseup(function(e) {
        end_pos_x = e.pageX;
        end_pos_y = e.pageY;

        if(mouse_down) {
            draw(start_pos_x, start_pos_y, end_pos_x, end_pos_y);
        }

        mouse_down = false;
		
		var elements = rectangleSelect('*', start_pos_x, start_pos_y, end_pos_x, end_pos_y);
		alert('Are you sure you want to remove all this elements:?' + elements);
		if(confirm) {
			addCssRule('elements[0] { display: none !important; }');
			//elements[0].remove();
			addCssRule('div[class^="selectionBox"] { display: none !important; }');
		}
    });
});

function draw(x1, y1, x2, y2) {
    $('.selectionBox').css({
        'left': x1 + 'px',
        'top': y1 + 'px',
        'width': (x2 - x1) + 'px',
        'height': (y2 - y1) + 'px'
    });
}

function rectangleSelect(selector, x1, y1, x2, y2) {
    var elements = [];
    jQuery(selector).each(function() {
        var $this = jQuery(this);
        var offset = $this.offset();
        var x = offset.left;
        var y = offset.top;
        var w = $this.width();
        var h = $this.height();

        if (x >= x1 
            && y >= y1 
            && x + w <= x2 
            && y + h <= y2) {
            // this element fits inside the selection rectangle
            elements.push($this.get(0));
        }
    });
    return elements;
}



