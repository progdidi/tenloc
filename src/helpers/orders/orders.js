import mosc from './images/moscow.png';
import dubai from './images/dubai.png';
import zelen from './images/zelen.png';

const orders = [
    {
        id: 1, 
        img: mosc,
        city: 'Москва',
        name: 'Билет в Третьяковскую галерею',
        date: '12.08.2024',
        amount: 2,
        price: 1000,
        currency: '₽'
    },

    {
        id: 2, 
        img: dubai,
        city: 'Дубаи',
        name: 'Многогранный Дубай: насыщенный день в мегаполисе',
        date: '12.08.2024',
        amount: 2,
        price: 250,
        currency: '$'
    },

    {
        id: 3, 
        img: zelen,
        city: 'Зеленоград',
        name: 'Куршская коса + Зеленоградск, Светлогорск и Янтарный',
        date: '12.08.2024',
        amount: 2,
        price: 1000,
        currency: '₽'
    }
]

export {orders}