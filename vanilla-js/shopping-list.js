const addButton = document.querySelector('.addButton');
var input = document.querySelector('.inputValue');
const collection = document.querySelector('.collection');
var clearAll = document.querySelector('.clear-items');

class item{
    constructor(itemName){
        //create item div
        this.createDiv(itemName);
    }
    createDiv(itemName){

      //parent 
        const inputItem = document.createElement('div');
        inputItem.classList.add('collection-item', 'row');
        
        //title
        const title = document.createElement('div');
        title.classList.add('col','s5');
        title.innerHTML = itemName;

        inputItem.appendChild(title);

      //price holder
        const priceholder = document.createElement('div');
        priceholder.classList.add('col', 's2');
        priceholder.classList.add('price');

        //make price input
        let price = document.createElement('input');
        price.setAttribute('type','text');
        price.setAttribute('value', Math.ceil(Math.random()*100) + ' RON');
        priceholder.appendChild(price);

        inputItem.appendChild(priceholder);

        //remove
        const removeHolder = document.createElement('div');
        removeHolder.classList.add('col', 's1');

        //make remove button
        let removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fa fa-remove"></i>';
        removeButton.classList.add('removeButton');
        removeHolder.appendChild(removeButton);

        inputItem.appendChild(removeHolder);
        

        collection.appendChild(inputItem);

       removeButton.addEventListener('click', () => this.remove(inputItem));
    }

    remove(item){
      collection.removeChild(item);
    }

    clear(items){
      clearAll.addEventListener('click', () => this.remove(items));
    }

}

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
