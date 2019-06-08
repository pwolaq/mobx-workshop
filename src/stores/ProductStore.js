import { observable } from 'mobx';
import {SORT_BY_NAME, SORT_BY_PRICE} from "../components/ProductList";

const getSortStrategy = sortBy => {
    if (sortBy === SORT_BY_NAME) {
        return (a, b) => a.name.localeCompare(b.name);
    } else if (sortBy === SORT_BY_PRICE) {
        return (a, b) => a.price - b.price;
    }

    return () => 0;
};

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

    buyProduct = id => this.products.find(product => product.id === id).isSold = true

    sort = sortBy => {
        this.sortReverse = this.sortBy === sortBy ? !this.sortReverse : false;
        this.sortBy = sortBy;
    };

    search = e => this.searchBy = e.currentTarget.value;

    getProducts = () => {
        const sortStrategy = getSortStrategy(this.sortBy);
        const searchBy = this.searchBy.toLowerCase();
        const filteredProducts = searchBy !== '' ? this.products.filter(product => product.name.toLowerCase().includes(searchBy)) : this.products;
        return this.sortReverse ? filteredProducts.sort(sortStrategy).reverse() : filteredProducts.sort(sortStrategy);
    }
}

const store = new ProductStore();
export default store;
