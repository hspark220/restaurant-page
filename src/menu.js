import clearContent from './clearContent.js';

const menuPage = () => {
    clearContent();
    const content = document.createElement('div');
    content.setAttribute('id','content');
    content.append('this is menu');
    document.body.append(content);
}

export default menuPage;