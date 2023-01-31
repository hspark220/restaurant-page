import clearContent from './clearContent.js';
import shadeWord from './shadeWord.js';

const contactPage = () => {
    clearContent();
    const tab = document.getElementById('contact');
    shadeWord(tab);

    const content = document.getElementById('content');
    const contact = document.createElement('div');
    contact.setAttribute('class','contact-container');
    
    const title = document.createElement('h2');
    const number = document.createElement('p');
    const location = document.createElement('p');
    const email = document.createElement('p');

    title.innerHTML = "Contact Us";
    number.innerHTML = "phone number: xxx-xxx-xxxx";
    location.innerHTML = "location: 123 street name, city, state, 12345";
    email.innerHTML = "email at <strong>potatowork@potato.com</strong>";

    contact.append(title, number, email, location);
    content.append(contact);
    
}


export default contactPage;