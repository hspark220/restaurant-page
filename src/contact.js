import clearContent from './clearContent.js';
import shadeWord from './shadeWord.js';

const contactPage = () => {
    clearContent();
    const tab = document.getElementById('contact');
    shadeWord(tab);

    const content = document.getElementById('content');
    
    const title = document.createElement('h2');
    const number = document.createElement('p');
    const location = document.createElement('p');

    title.innerHTML = "Contact Us";
    number.innerHTML = "phone number: xxx-xxx-xxxx";
    location.innerHTML = "location: 123 street name, city, state, 12345";

    content.append(title, number, location);
    
}


export default contactPage;