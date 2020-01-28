import { Book } from './model/book';

export const BOOKS: Book[] = [
    { id: 11, name: 'Dr Nice', description: '',
        author: {id : 1, name: '', surname: '', country: ''},
        bookCategory: {id: 12, name: 'Narco', description: ''},
        bookType: {id: 12, name: 'Narco', description: ''}
    },
    { id: 12, name: 'Narco', description: '',
        author: {id : 1, name: '', surname: '', country: ''},
        bookCategory: {id: 12, name: 'Narco', description: ''},
        bookType: {id: 12, name: 'Narco', description: ''}
    },
];
