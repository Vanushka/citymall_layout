  $(document).ready(function() {
    if ($( window ).width() <= 1440) {
      $('#map_2').css({'width': 500, 'height': 600});
    }
    $('.levels a.first').click(function() {
      $('.first').addClass('active');
      $('.second').removeClass('active');
      $('#map_level_1').addClass('active');
      $('#map_level_2').removeClass('active');
      $('#map_level_2 .canvas').css('transform', 'translate3d(0px, 0px, 0px) scale(1)');
      container = document.querySelector("#map_level_1");
      dragItem = document.getElementsByClassName('canvas');
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
      $('#map_level_1 .canvas').css('transform', 'translate3d(0px, 0px, 0px) scale(1)');
      container = document.querySelector("#map_level_2");
      dragItem = document.getElementsByClassName('canvas');
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
      var width = parseFloat(scaleInfo.match(/width\:( [0-9]*[0-9]*?[0-9])*/, '')[1]);
      var height = parseFloat(scaleInfo.match(/height\:( [0-9]*[0-9]*?[0-9])*/, '')[1]);
      var translate3d_1 = parseFloat(scaleInfo.match(/translate3d\((\-?[0-9]*[\.,]?[0-9]*)px, (\-?[0-9]*[\.,]?[0-9]*)px, ([0-9]*[\.,]?[0-9]*)px\)*/, '')[1]);
      var translate3d_2 = parseFloat(scaleInfo.match(/translate3d\((\-?[0-9]*[\.,]?[0-9]*)px, (\-?[0-9]*[\.,]?[0-9]*)px, ([0-9]*[\.,]?[0-9]*)px\)*/, '')[2]);
      scaleInfo = scaleInfo.match(/scale\(([^&][0-9]*[.,]?[0-9]*)\)/, '')[1];
      scaleInfo = parseFloat(scaleInfo);
      var scale = scaleInfo + 0.3;
      $(canvas).addClass('animate');
    	$(canvas).css({'transform':'translate3d(' + translate3d_1 + 'px, ' + translate3d_2 + 'px, 0px) scale(' + scale + ')','width': ''+ width + 'px;', 'height': '' + height + 'px;'});
      setTimeout(function() {
        $(canvas).removeClass('animate');
      }, 300);
    } else if ($(map_level_2).css('display') == 'block') {
      var canvas = $(map_level_2).children()[0];
      var scaleInfo = $(canvas)[0].attributes[1].value;
      var width = parseFloat(scaleInfo.match(/width\:( [0-9]*[0-9]*?[0-9])*/, '')[1]);
      var height = parseFloat(scaleInfo.match(/height\:( [0-9]*[0-9]*?[0-9])*/, '')[1]);
      var translate3d_1 = parseFloat(scaleInfo.match(/translate3d\((\-?[0-9]*[\.,]?[0-9]*)px, (\-?[0-9]*[\.,]?[0-9]*)px, ([0-9]*[\.,]?[0-9]*)px\)*/, '')[1]);
      console.log(translate3d_1);
      var translate3d_2 = parseFloat(scaleInfo.match(/translate3d\((\-?[0-9]*[\.,]?[0-9]*)px, (\-?[0-9]*[\.,]?[0-9]*)px, ([0-9]*[\.,]?[0-9]*)px\)*/, '')[2]);
      scaleInfo = scaleInfo.match(/scale\(([^&][0-9]*[.,]?[0-9]*)\)/, '')[1];
      console.log(width);
      scaleInfo = parseFloat(scaleInfo);
      var scale = scaleInfo + 0.3;
      $(canvas).addClass('animate');
    	$(canvas).css({'transform':'translate3d(' + translate3d_1 + 'px, ' + translate3d_2 + 'px, 0px) scale(' + scale + ')','width': ''+ width + 'px;', 'height': '' + height + 'px;'});
      setTimeout(function() {
        $(canvas).removeClass('animate');
      }, 300);
    }
  });

  $('.minus').click(function() {
    var map_level_1 = $('#map_level_1');
    var map_level_2 = $('#map_level_2');
    if ($(map_level_1).css('display') == 'block') {
      var canvas = $(map_level_1).children()[0];
      var scaleInfo = $(canvas)[0].attributes[1].value;
      var width = parseFloat(scaleInfo.match(/width\:( [0-9]*[0-9]*?[0-9])*/, '')[1]);
      var height = parseFloat(scaleInfo.match(/height\:( [0-9]*[0-9]*?[0-9])*/, '')[1]);
      var translate3d_1 = parseFloat(scaleInfo.match(/translate3d\((\-?[0-9]*[\.,]?[0-9]*)px, (\-?[0-9]*[\.,]?[0-9]*)px, ([0-9]*[\.,]?[0-9]*)px\)*/, '')[1]);
      var translate3d_2 = parseFloat(scaleInfo.match(/translate3d\((\-?[0-9]*[\.,]?[0-9]*)px, (\-?[0-9]*[\.,]?[0-9]*)px, ([0-9]*[\.,]?[0-9]*)px\)*/, '')[2]);
      scaleInfo = scaleInfo.match(/scale\(([^&][0-9]*[.,]?[0-9]*)\)/, '')[1];
      scaleInfo = parseFloat(scaleInfo);
      var scale = scaleInfo - 0.3;
      if (scaleInfo > 1.3) {
        $(canvas).addClass('animate');
        $(canvas).css({'transform':'translate3d(' + translate3d_1 + 'px, ' + translate3d_2 + 'px, 0px) scale(' + scale + ')','width': ''+ width + 'px;', 'height': '' + height + 'px;'});
        setTimeout(function() {
          $(canvas).removeClass('animate');
        }, 300);
      } else if (scale == 1) {
        $(canvas).addClass('animate');
        translate3d_1 = 0;
        translate3d_2 = 0;
        $(canvas).css({'transform':'translate3d(' + translate3d_1 + 'px, ' + translate3d_2 + 'px, 0px) scale(' + scale + ')','width': ''+ width + 'px;', 'height': '' + height + 'px;'});
        setTimeout(function() {
          $(canvas).removeClass('animate');
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
      var scaleInfo = $(canvas)[0].attributes[1].value;
      var width = parseFloat(scaleInfo.match(/width\:( [0-9]*[0-9]*?[0-9])*/, '')[1]);
      var height = parseFloat(scaleInfo.match(/height\:( [0-9]*[0-9]*?[0-9])*/, '')[1]);
      var translate3d_1 = parseFloat(scaleInfo.match(/translate3d\((\-?[0-9]*[\.,]?[0-9]*)px, (\-?[0-9]*[\.,]?[0-9]*)px, ([0-9]*[\.,]?[0-9]*)px\)*/, '')[1]);
      var translate3d_2 = parseFloat(scaleInfo.match(/translate3d\((\-?[0-9]*[\.,]?[0-9]*)px, (\-?[0-9]*[\.,]?[0-9]*)px, ([0-9]*[\.,]?[0-9]*)px\)*/, '')[2]);
      scaleInfo = scaleInfo.match(/scale\(([^&][0-9]*[.,]?[0-9]*)\)/, '')[1];
      scaleInfo = parseFloat(scaleInfo);
      var scale = scaleInfo - 0.3;
      if (scaleInfo > 1.3) {
        $(canvas).addClass('animate');
        $(canvas).css({'transform':'translate3d(' + translate3d_1 + 'px, ' + translate3d_2 + 'px, 0px) scale(' + scale + ')','width': ''+ width + 'px;', 'height': '' + height + 'px;'});
        setTimeout(function() {
          $(canvas).removeClass('animate');
        }, 300);
        console.log(scale);
      } else if (scale == 1) {
        $(canvas).addClass('animate');
        translate3d_1 = 0;
        translate3d_2 = 0;
        $(canvas).css({'transform':'translate3d(' + translate3d_1 + 'px, ' + translate3d_2 + 'px, 0px) scale(' + scale + ')','width': ''+ width + 'px;', 'height': '' + height + 'px;'});
        setTimeout(function() {
          $(canvas).removeClass('animate');
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


  var container = document.querySelector("#map_level_2");
  var dragItem = container.children[0];

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
        active = true;
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
      if (el.length == undefined) {
        elScale = el.style.cssText;
      } else if (el.length == 2) {
        if (document.getElementById('map_level_1').className == 'active') {
          el = el[0]
          elScale = el.style.cssText;
        } else if (document.getElementById('map_level_2').className == 'active') {
          el = el[1]
          elScale = el.style.cssText;
        }
      }
      var elScale = parseFloat(elScale.match(/scale\(([^&][0-9]*[.,]?[0-9]*)\)/, '')[1]);
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0) scale(" + elScale + ")";
    }
  };

  draggble();

  $('svg#map_2').click(function(e) {
    var id = e.target.id;
    console.log(id);
    var x = $('#'+id).offset().top;
    var y = $('#'+id).offset().left;
    console.log(x, y);
    $('.popup-map-info').offset({top: x - 390, left: y - 130});
  });
});
