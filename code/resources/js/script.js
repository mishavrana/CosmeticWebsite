const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.add('click-animation');


    // Remove the class after the animation has finished
    setTimeout(function() {
      button.classList.remove('click-animation');
    }, 100);
  });
});

buttons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    button.classList.add('hover-shadow');
  });

  button.addEventListener('mouseleave', function() {
    button.classList.remove('hover-shadow');
  });
});


