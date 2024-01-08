console.log('js ok');

const shoppingList = ['Pane', 'Uova', 'Latte', "Olio extravergine d'oliva", 'Sale', 'Zucchero', 'Farina 0', 'Farina 00', 'Lievito secco', 'Lievito per dolci', 'Caffè', 'Cacao amaro'];
const container = document.querySelector('.container');


let mailList = '<ul>';
let elementList = '';
let i = 0;
// for (let i = 0; i < shoppingList.length; i++) {
//     elementList += `<li>${shoppingList[i]}</li>`;
// }

while (i < shoppingList.length) {
    elementList += `<li><input type="checkbox"><label for="vehicle1">${shoppingList[i]}</label></li>`
    i++
}
mailList += `${elementList}</ul>`;

container.innerHTML = mailList;