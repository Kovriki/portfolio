$(document).ready(function() {
    $('.about-bar, .ab').click(function(){
        $('.about-wrapper').addClass('open');
        $('.contact-wrapper').removeClass('open');
        $('.project-wrapper').addClass('p-close');
        $('.grey').addClass('open');
        $('.blue').removeClass('open');

        $('.subtitle1').removeClass('title');
        $('.subtitle1').addClass('rotate');
        $('.subtitle2').removeClass('rotate');
        $('.subtitle2').addClass('title');
        $('.subtitle3').removeClass('title');
        $('.subtitle3').addClass('rotate');
      });
    $(".contact-bar, .cn").click(function(){
        $('.contact-wrapper').addClass('open');
        $('.about-wrapper').addClass('open');
        $('.project-wrapper').addClass('p-close');
        $('.grey').addClass('open');
        $('.blue').addClass('open');

        $('.subtitle1').removeClass('title');
        $('.subtitle1').addClass('rotate');
        $('.subtitle2').removeClass('title');
        $('.subtitle2').addClass('rotate');
        $('.subtitle3').removeClass('rotate');
        $('.subtitle3').addClass('title');
      });
      $(".project-bar, .pj").click(function(){
        $('.about-wrapper').removeClass('open');
        $('.contact-wrapper').removeClass('open');
        $('.project-wrapper').removeClass('p-close');
        $('.grey').removeClass('open');
        $('.blue').removeClass('open');

        $('.subtitle1').removeClass('rotate');
        $('.subtitle1').addClass('title');
        $('.subtitle2').removeClass('title');
        $('.subtitle2').addClass('rotate');
        $('.subtitle3').removeClass('title');
        $('.subtitle3').addClass('rotate');
      });


      $('#list0').click(function(){
        $('#ww0').removeClass('hide');
        $('#load, #ww1, #ww2, #ww3, #ww4, #ww5, #ww6, #ww7, #ww8, #ww9, #ww10, #ww11, #ww12').addClass('hide');
      });
      $('#list1').click(function(){
        $('#ww1').removeClass('hide');
        $('#load, #ww0, #ww2, #ww3, #ww4, #ww5, #ww6, #ww7, #ww8, #ww9, #ww10, #ww11, #ww12').addClass('hide');
      });
      $('#list2').click(function(){
        $('#ww2').removeClass('hide');
        $('#load, #ww0, #ww1, #ww3, #ww4, #ww5, #ww6, #ww7, #ww8, #ww9, #ww10, #ww11, #ww12').addClass('hide');
      });
      $('#list3').click(function(){
        $('#ww3').removeClass('hide');
        $('#load, #ww0, #ww1, #ww2, #ww4, #ww5, #ww6, #ww7, #ww8, #ww9, #ww10, #ww11, #ww12').addClass('hide');
      });
      $('#list4').click(function(){
        $('#ww4').removeClass('hide');
        $('#load, #ww0, #ww1, #ww2, #ww3, #ww5, #ww6, #ww7, #ww8, #ww9, #ww10, #ww11, #ww12').addClass('hide');
      });
      $('#list5').click(function(){
        $('#ww5').removeClass('hide');
        $('#load, #ww0, #ww1, #ww2, #ww4, #ww3, #ww6, #ww7, #ww8, #ww9, #ww10, #ww11, #ww12').addClass('hide');
      });
      $('#list6').click(function(){
        $('#ww6').removeClass('hide');
        $('#load, #ww0, #ww1, #ww2, #ww4, #ww5, #ww3, #ww7, #ww8, #ww9, #ww10, #ww11, #ww12').addClass('hide');
      });
      $('#list7').click(function(){
        $('#ww7').removeClass('hide');
        $('#load, #ww0, #ww1, #ww2, #ww3, #ww4, #ww5, #ww6, #ww8, #ww9, #ww10, #ww11, #ww12').addClass('hide');
      });
      $('#list8').click(function(){
        $('#ww8').removeClass('hide');
        $('#load, #ww0, #ww1, #ww2, #ww3, #ww4, #ww5, #ww6, #ww7, #ww9, #ww10, #ww11, #ww12').addClass('hide');
      });
      $('#list9').click(function(){
        $('#ww9').removeClass('hide');
        $('#load, #ww0, #ww1, #ww2, #ww3, #ww4, #ww5, #ww6, #ww8, #ww7, #ww10, #ww11, #ww12').addClass('hide');
      });
      $('#list10').click(function(){
        $('#ww10').removeClass('hide');
        $('#load, #ww0, #ww1, #ww2, #ww3, #ww4, #ww5, #ww6, #ww8, #ww9, #ww7, #ww11, #ww12').addClass('hide');
      });
      $('#list11').click(function(){
        $('#ww11').removeClass('hide');
        $('#load, #ww0, #ww1, #ww2, #ww3, #ww4, #ww5, #ww6, #ww8, #ww9, #ww10, #ww7, #ww12').addClass('hide');
      });
      $('#list12').click(function(){
        $('#ww12').removeClass('hide');
        $('#load, #ww0, #ww1, #ww2, #ww3, #ww4, #ww5, #ww6, #ww8, #ww9, #ww10, #ww7, #ww11').addClass('hide');
      });



  });





//catagory index
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var myCategory = document.getElementById("button-wrapper");
var indexs = myCategory.getElementsByClassName("index");
for (var i = 0; i < indexs.length; i++) {
    indexs[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Hover to show Image
$(document).ready(function() {
    $('.work-title').hover(function(){
        $('.h-img').removeClass('hide');
      });
    $('.work-title').click(function(){
        $('.h-img').addClass('hide');
    });
  });


  //ticker
var tickerSlider = document.querySelector('.ticker-slider');
var tickerContents = document.querySelectorAll('.ticker-content');
var widthElement = tickerContents[0];
var offset = 0;

var normalSpeed = 2;
var slowSpeed = 0.75;
var speed = normalSpeed;
var targetSpeed = speed;

function onTickerSliderMouseEnter() {
  targetSpeed = slowSpeed;
}

function onTickerSliderMouseLeave() {
  targetSpeed = normalSpeed;
}

tickerSlider.addEventListener('mouseenter', onTickerSliderMouseEnter);
tickerSlider.addEventListener('mouseleave', onTickerSliderMouseLeave);

function tickerTick() {
  if (widthElement.clientWidth) {
    if (speed != targetSpeed) {
      speed = speed + (targetSpeed - speed) * 0.05;
    }
    offset = (offset + speed) % widthElement.clientWidth;
    for (var i = 0; i < tickerContents.length; i += 1) {
      tickerContents[i].style.left = '-' + offset + 'px';
    }
  }
  requestAnimationFrame(tickerTick);
}
tickerTick();
