  $(document).ready(function() {
    $('.levels a.first').click(function() {
      $('.first').addClass('active');
      $('.second').removeClass('active');
      $('#map_level_1').addClass('active');
      $('#map_level_2').removeClass('active');
      $('#map_level_2 .canvas').css('transform', 'scale(1)');
      $('#map_2').css('transform', 'translate3d(0px, 0px, 0px)');
      dragItem = document.querySelector("#map_1");
      container = document.querySelector("#map_level_1");
      draggble();
      active = false;
      currentX = undefined;
      currentY = undefined;
      initialX = undefined;
      initialY = undefined;
      xOffset = 0;
      yOffset = 0;
    });
    $('.levels a.second').click(function() {
      $('.first').removeClass('active');
      $('.second').addClass('active');
      $('#map_level_1').removeClass('active');
      $('#map_level_2').addClass('active');
      $('#map_level_1 .canvas').css('transform', 'scale(1)');
      $('#map_1').css('transform', 'translate3d(0px, 0px, 0px)');
      dragItem = document.querySelector("#map_2");
      container = document.querySelector("#map_level_2");
      draggble();
      active = false;
      currentX = undefined;
      currentY = undefined;
      initialX = undefined;
      initialY = undefined;
      xOffset = 0;
      yOffset = 0;
    });

  $('.plus').click(function() {
    var map_level_1 = $('#map_level_1');
    var map_level_2 = $('#map_level_2');
    if ($(map_level_1).css('display') == 'block') {
      var canvas = $(map_level_1).children()[0];
      var scaleInfo = $(canvas)[0].attributes[1].value;
      scaleInfo = scaleInfo.match(/scale\(([^&][0-9]*[.,]?[0-9]*)\)/m, '')[1];
      scaleInfo = parseFloat(scaleInfo);
      var scale = scaleInfo + 0.3;
    	$(canvas).css('transform', 'scale(' + scale + ')');
    } else if ($(map_level_2).css('display') == 'block') {
      var canvas = $(map_level_2).children()[0];
      var scaleInfo = $(canvas)[0].attributes[1].value;
      scaleInfo = scaleInfo.match(/scale\(([^&][0-9]*[.,]?[0-9]*)\)/m, '')[1];
      scaleInfo = parseFloat(scaleInfo);
      var scale = scaleInfo + 0.3;
    	$(canvas).css('transform', 'scale(' + scale + ')');
    }
  });
  $('.minus').click(function() {
    var map_level_1 = $('#map_level_1');
    var map_level_2 = $('#map_level_2');
    if ($(map_level_1).css('display') == 'block') {
      var canvas = $(map_level_1).children()[0];
      var map_1 = $(canvas).children()[0];
      var scaleInfo = $(canvas)[0].attributes[1].value;
      scaleInfo = scaleInfo.match(/scale\(([^&][0-9]*[.,]?[0-9]*)\)/m, '')[1];
      scaleInfo = parseFloat(scaleInfo);
      var scale = scaleInfo - 0.3;
      if (scale > 1) {
        $(canvas).css('transform', 'scale(' + scale + ')');
      } else if (scale > 0.4) {
        $(map_1).addClass('animate');
        $(canvas).css('transform', 'scale(' + scale + ')');
        $(map_1).css('transform', 'translate3d(0px, 0px, 0px)');
        setTimeout(function() {
          $(map_1).removeClass('animate');
        }, 300);
        active = false;
        currentX = undefined;
        currentY = undefined;
        initialX = undefined;
        initialY = undefined;
        xOffset = 0;
        yOffset = 0;
      }
    } else if ($(map_level_2).css('display') == 'block') {
      var canvas = $(map_level_2).children()[0];
      var map_2 = $(canvas).children()[0];
      var scaleInfo = $(canvas)[0].attributes[1].value;
      scaleInfo = scaleInfo.match(/scale\(([^&][0-9]*[.,]?[0-9]*)\)/m, '')[1];
      scaleInfo = parseFloat(scaleInfo);
      var scale = scaleInfo - 0.3;
      if (scale > 1) {
        $(canvas).css('transform', 'scale(' + scale + ')');
      } else if (scale > 0.4) {
        $(map_2).addClass('animate');
        $(canvas).css('transform', 'scale(' + scale + ')');
        $(map_2).css('transform', 'translate3d(0px, 0px, 0px)');
        setTimeout(function() {
          $(map_2).removeClass('animate');
        }, 300);
        active = false;
        currentX = undefined;
        currentY = undefined;
        initialX = undefined;
        initialY = undefined;
        xOffset = 0;
        yOffset = 0;
      }
    }
  });


  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;

  var dragItem = document.querySelector("#map_1");
  var container = document.querySelector("#map_level_1");

  function draggble() {
    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }
      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {
        e.preventDefault();

        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
  };
});
