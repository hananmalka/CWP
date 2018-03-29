// let canvasElement = document.createElement('div');
// canvasElement.id = 'canvas';
// document.body.appendChild(canvasElement);

export default class ElementSelection {

    initDraw() {
        function setMousePosition(e) {
            let ev = e || window.event; //Moz || IE
            if (ev.pageX) { //Moz
                mouse.x = ev.pageX + window.pageXOffset;
                mouse.y = ev.pageY + window.pageYOffset;
            } else if (ev.clientX) { //IE
                mouse.x = ev.clientX + document.body.scrollLeft;
                mouse.y = ev.clientY + document.body.scrollTop;
            }
        }

        let mouse = {
            x: 0,
            y: 0,
            startX: 0,
            startY: 0
        };
        let element = null
        let elementsContainerToRemove = null;

        document.onmousemove = function(e) {
            setMousePosition(e);
            if (element !== null) {
                element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
                element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
                element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
                element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
            }
        };

        document.onclick = function(e) {
            if (element !== null) {
                document.body.style.cursor = "default";
                console.log("finished.");
                elementsContainerToRemove = document.caretRangeFromPoint(mouse.x, mouse.y);
                if (confirm('Are you sure you want to remove this element?')) {
                    // elementsContainerToRemove.endContainer.childNodes[0]. = 'none'
                    // for (let i = 1; i < elementsContainerToRemove.length; i++) {
                    //     if (elementsContainerToRemove[i - 1].)
                    //     }
                    // elementToRemove.style.display = 'none';
                } else {
                    document.body.getElementsByClassName('rectangle').item(0).remove();
                }
                element = null;

            } else {
                console.log("begun.");
                mouse.startX = mouse.x;
                mouse.startY = mouse.y;
                element = document.createElement('canvas');
                element.className = 'rectangle';
                element.style.left = mouse.x + 'px';
                element.style.top = mouse.y + 'px';
                document.body.appendChild(element);
                document.body.style.cursor = "crosshair";
            }
        };
    }
}


document.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("default " + event.type + " prevented")
});


initDraw();