import clearContent from './clearContent.js';

const aboutPage = () => {
    clearContent();
    const content = document.createElement('div');
    content.setAttribute('id','content');
    content.append('this is about');
    document.body.append(content);
}

export default aboutPage;