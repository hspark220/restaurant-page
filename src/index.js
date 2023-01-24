

const restaurant = () => {
    //header
    const header = document.createElement('header');

    //navigation
    const _nav = document.createElement('div');
    _nav.setAttribute('id', 'nav');
    
    const _aboutBtn = document.createElement('input');
    const _menuBtn = document.createElement('input');
    const _contactBtn = document.createElement('input');
    _aboutBtn.setAttribute('type', 'button');
    _aboutBtn.setAttribute('id','about');
    _menuBtn.setAttribute('type', 'button');
    _menuBtn.setAttribute('id','menu');
    _contactBtn.setAttribute('type', 'button');
    _contactBtn.setAttribute('id','contact');

    header.appendChild(_nav);
    _nav.append(_aboutBtn, _menuBtn, _contactBtn);
    _aboutBtn.value = 'about';
    _menuBtn.value = 'menu';
    _contactBtn.value = 'contact';

    const _clearContent = () => {
        const content = document.getElementById('content');
        while(content.firstChild) {
            content.removeChild(content.firstChild());
        }
        
    }

    return header
}

document.body.append(restaurant());