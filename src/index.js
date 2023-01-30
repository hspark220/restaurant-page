import aboutPage from './about.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';



const restaurant = (() => {
    //header
    const _header = document.createElement('header');
    const _footer = document.createElement('footer');

    _footer.setAttribute('id','footer');

    //navigation
    const _nav = document.createElement('div');
    _nav.setAttribute('id', 'nav');

    //content
    const _content = document.createElement('div');
    _content.setAttribute('id','content');
    
    const _title = document.createElement('h1');
    const _aboutBtn = document.createElement('input');
    const _menuBtn = document.createElement('input');
    const _contactBtn = document.createElement('input');
    
    _title.innerHTML = "Potato Work";
    _aboutBtn.setAttribute('type', 'button');
    _aboutBtn.setAttribute('id','about');
    _menuBtn.setAttribute('type', 'button');
    _menuBtn.setAttribute('id','menu');
    _contactBtn.setAttribute('type', 'button');
    _contactBtn.setAttribute('id','contact');

    
    _aboutBtn.value = 'about';
    _menuBtn.value = 'menu';
    _contactBtn.value = 'contact';

    _aboutBtn.addEventListener('click', aboutPage);
    _menuBtn.addEventListener('click', menuPage);
    _contactBtn.addEventListener('click', contactPage);

    const copyright = document.createElement('small');
    copyright.setAttribute('id','copyright');
    copyright.innerHTML = '©heonsoo';

    const runPage = () => {
        document.body.append(_header, _content,_footer);
        _header.append(_title, _nav);
        _nav.append(_aboutBtn, _menuBtn, _contactBtn);
        //_footer.append(copyright);
        aboutPage();
    };
    
    return {runPage};
})();

restaurant.runPage();