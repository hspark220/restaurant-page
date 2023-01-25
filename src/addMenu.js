const addMenu = (div, dishName, dishDescription, dishCost) => {
    const dishH4 = document.createElement('h4');
    const dishP = document.createElement('p');
    dishH4.innerHTML = dishName;
    dishP.innerHTML = `${dishDescription} : $${dishCost}`;
    div.append(dishH4, dishP);

};

export default addMenu;