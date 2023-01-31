import clearContent from './clearContent.js';
import addMenu from './addMenu.js';
import shadeWord from './shadeWord';

const menuPage = () => {
    clearContent();
    const tab = document.getElementById('menu');
    shadeWord(tab);

    const content = document.getElementById('content');
    //sections
    const title = document.createElement('h2');
    const appetizer = document.createElement('div');
    const entree = document.createElement('div');
    const dessert = document.createElement('div');
    const appetizerTitle = document.createElement('h3');
    const entreeTitle = document.createElement('h3');
    const dessertTitle = document.createElement('h3');

    title.setAttribute('class','title');
    appetizer.setAttribute('class','appetizer');
    entree.setAttribute('class','entree');
    dessert.setAttribute('class','dessert');
    appetizer.setAttribute('class','entry');
    entree.setAttribute('class','entry');
    dessert.setAttribute('class','entry');

    //adding titles
    title.innerHTML = 'Menu'
    appetizerTitle.innerHTML = 'Appetizer';
    entreeTitle.innerHTML = 'Entree';
    dessertTitle.innerHTML = 'Dessert';
    appetizer.append(appetizerTitle);
    entree.append(entreeTitle);
    dessert.append(dessertTitle);

    //adding menu
    addMenu(appetizer, 'French Fries', 'potatoes cut up and deep fried', 4);
    addMenu(appetizer, 'Potato Wedge', 'potatoes cut up and deep fried', 4);
    addMenu(entree, 'Baked Potato','potato baked with toppings added', 11);
    addMenu(dessert, 'Sweet Potato Cake', 'sweet potato cheese cake', 7);

    
    content.append(title, appetizer, entree, dessert);
}

export default menuPage;