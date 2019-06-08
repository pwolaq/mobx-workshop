import { observable } from 'mobx';

class ProductStore {
    @observable products = [
        {id: 0, name: 'Apple', tags: ['Fruit'], price: 15, isSold: false},
        {id: 1, name: 'Coffee', tags: ['Beverage'], price: 10, isSold: false},
        {id: 2, name: 'Golden Apple', tags: ['Fruit', 'Valuable'], price: 50, isSold: false},
        {id: 3, name: 'Banana', tags: ['Fruit'], price: 5, isSold: false},
    ];

    @observable sortBy = null;

    @observable sortReverse = false;

    @observable searchBy = '';
}

const store = new ProductStore();
export default store;
