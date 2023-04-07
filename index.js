function animateBars() {
    const bars = document.querySelectorAll('.skill-bar-progress');
    bars.forEach(bar => {
      const value = bar.dataset.value;
      bar.style.width = value + '%';
    });
  }
  
  window.onload = animateBars;
  window.onresize = animateBars;
{
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      console.log('Button clicked!');
    });
}

