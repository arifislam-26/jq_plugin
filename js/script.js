// // Js
      wow = new WOW(
{
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       10,          // default
  mobile:       true,       // default
  live:         true        // default
})
wow.init();

// aos

  AOS.init({
    offset: 120,
    delay: 50,
    duration: 500,
    easing: 'linear'
  });


// // jq
 $(document).ready(function(){

//   // counterUp

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

// // SimpleCounter

  $('#count-example').jQuerySimpleCounter({
  start:  100,
  end:    1,
});

  $('.counter-demo').counter({
    val: '00001',
    triggerEvent: 'mouseover',
    triggerElement: '.jcpo-plusone-custom'
});

// // parallaxmouse

  $(window).parallaxmouse({
  elms: [
      {el: $('#layer-1'), rate: 0.2},
      {el: $('#layer-2'), rate: 0.2},
      {el: $('#layer-3'), rate: 0.2},
      {el: $('#layer-4'), rate: 0.2},
      {el: $('#layer-5'), rate: 0.2},
  ]
});

// mixitup

  var mixer = mixitup('.world', {
    
    animation: {
        duration: 300
    }
});


  // particles

  $('#particles').particleground({
  minSpeedX: 0.1,
  maxSpeedX: 0.7,
  minSpeedY: 0.1,
  maxSpeedY: 0.7,
  directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
  directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
  density: 10000, // How many particles will be generated: one particle every n pixels
  dotColor: '#666666',
  lineColor: '#666666',
  particleRadius: 7, // Dot size
  lineWidth: 1,
  curvedLines: false,
  proximity: 100, // How close two dots need to be before they join
  parallax: true,
  parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
  onInit: function() {},
  onDestroy: function() {}
});



	}) 

