document.addEventListener('DOMContentLoaded', function () {
document.getElementById('frm-register').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value; 

    //send the request to the server
    const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    alert(data.message);

});
});

document.getElementById('frm-login').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value; 

    //send the request to the server
    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    alert(data.message + 'Welcome ' + data.name + ' of email address: ' + data.email);

       
});
   // Select buttons and content sections
   const homeBtn = document.getElementById('homeBtn');
   const servicesBtn = document.getElementById('servicesBtn');
   const contactBtn = document.getElementById('contactBtn');
   const aboutBtn = document.getElementById('aboutBtn');
   const prescriptionBtn = document.getElementById('prescriptionBtn');

   const homeContent = document.getElementById('homeContent');
   const servicesContent = document.getElementById('servicesContent');
   const contactContent = document.getElementById('contactContent');
   const aboutContent = document.getElementById('aboutContent');
   const prescriptionContent = documentt.getById('prescriptionContent');
   const registrationContent = document.getElementById('registrationContent');
   const virtualConsultationContent = document.getElementById('virtualConsultationContent');

   // Handle content toggling
   function toggleContent(button, contentId) {
       // Hide all content
       homeContent.style.display = 'none';
       servicesContent.style.display = 'none';
       contactContent.style.display = 'none';
       aboutContent.style.display = 'none';
       prescriptionContent.style.display = 'none';
       registrationContent.style.display = 'none';
       virtualConsultationContent.style.display = 'none';

       // Show the relevant content
       document.getElementById(contentId).style.display = 'block';

       // Toggle active class on buttons
       homeBtn.classList.remove('active');
       servicesBtn.classList.remove('active');
       contactBtn.classList.remove('active');
       aboutBtn.classList.remove('active');
       prescriptionBtn.classList.remove('active');

       button.classList.add('active');
   }

   // Add event listeners to the buttons
   homeBtn.addEventListener('click', () => toggleContent(homeBtn, 'homeContent'));
   servicesBtn.addEventListener('click', () => toggleContent(servicesBtn, 'servicesContent'));
   contactBtn.addEventListener('click', () => toggleContent(contactBtn, 'contactContent'));
   aboutBtn.addEventListener('click', () => toggleContent(aboutBtn, 'aboutContent'));
   prescriptionBtn.addEventListener('click', () => toggleContent(prescriptionBtn, 'prescriptionContent'));

   // Call home button click to show Home by default
   homeBtn.click();
