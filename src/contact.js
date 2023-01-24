import clearContent from './clearContent.js';

const contactPage = () => {
    clearContent();
    const content = document.createElement('div');
    content.setAttribute('id','content');
    content.append('this is contact');
    document.body.append(content);
}


export default contactPage;