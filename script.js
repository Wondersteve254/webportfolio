const button = document.querySelector('#hire-me-btn');
button.addEventListener('click', function() {
  const form = document.querySelector('#myForm');
  form.style.display = 'block';
});



const hireMeBtn = document.querySelector('#hire-me-btn');
const hireMeModal = document.querySelector('#hire-me-modal');
const closeBtn = document.querySelector('.close');

hireMeBtn.addEventListener('click', function() {
  hireMeModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  hireMeModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === hireMeModal) {
    hireMeModal.style.display = 'none';
  }
});

const form1 = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  // Do something with the form data, such as sending an email
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  form.reset();
  hireMeModal.style.display = 'none';
});





