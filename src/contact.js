import clearContent from './clearContent.js';

const contactPage = () => {
    clearContent();
    const content = document.createElement('div');
    content.setAttribute('id','content');
    
    const title = document.createElement('h2');
    const number = document.createElement('p');
    const location = document.createElement('p');

    title.innerHTML = "Contact Us";
    number.innerHTML = "phone number: xxx-xxx-xxxx";
    location.innerHTML = "location: 123 street name, city, state, 12345";

    content.append(title, number, location);
    document.body.append(content);
}


export default contactPage;