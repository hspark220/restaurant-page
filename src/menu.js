import clearContent from './clearContent.js';
import addMenu from './addMenu.js';

const menuPage = () => {
    clearContent();
    const content = document.createElement('div');
    content.setAttribute('id','content');
    //sections
    const title = document.createElement('h2');
    const appetizer = document.createElement('div');
    const entree = document.createElement('div');
    const dessert = document.createElement('div');

    title.setAttribute('class','title');
    appetizer.setAttribute('class','appetizer');
    entree.setAttribute('class','entree');
    dessert.setAttribute('class','dessert');

    //adding titles
    title.innerHTML = 'Menu'
    appetizer.innerHTML = '<h3>Appetizer<h3>';
    entree.innerHTML = '<h3>Entree<h3>';
    dessert.innerHTML = '<h3>Dessert<h3>';

    //adding menu
    addMenu(appetizer, 'French Fries', 'potatoes cut up and deep fried', 4);
    addMenu(entree, 'Baked Potato','potato baked with toppings added', 11);
    addMenu(dessert, 'Sweet Potato Cake', 'cheese cake flavored with sweet potato', 7);


    content.append(title, appetizer, entree, dessert);
    document.body.append(content);
}

export default menuPage;