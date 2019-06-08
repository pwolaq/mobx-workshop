import { observable } from 'mobx';

class ProductStore {
    @observable products = [
        { id: 0, name: 'Apple', isSold: false },
        { id: 1, name: 'Coffee', isSold: false },
        { id: 2, name: 'Strawberry', isSold: false },
        { id: 3, name: 'Banana', isSold: false },
    ]
}

const store = new ProductStore();
export default store;
