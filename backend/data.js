import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Admin',
            email: 'admin123@gmail.com',
            password: bcrypt.hashSync('admin123'),
            isAdmin: true
        },
        {
            name: 'user',
            email: 'user123@gmail.com',
            password: bcrypt.hashSync('user123'),
            isAdmin: false,
        }
    ],
    products : [
        {
            //_id: '1',
            name: 'Organic Cucumber – 300g',
            slug: 'cucumber',
            category: 'Vegitables',
            image: './images/v4.png',
            price: 225.00,
            rating: 4.5,
            numReviews: 10,
            countInStock: 5,
            description: 'Eggplants are a nutrient-dense food, meaning they contain a good amount of vitamins, minerals and fiber in few calories.',
        },
        {
           // _id: '2',
            name: 'Keepwell Organic Chickpea Flour – 400g',
            slug: 'Chickpea-Flour',
            category: 'Grains',
            image: './images/g2.jpg',
            price: 800.00,
            rating: 5.0,
            numReviews: 10,
            countInStock: 8,
            description: 'Keepwell Organic Chickpea Flour is also known as Besan Flour. Naturally dense flour with good binding tendencies.',
        },
        {
           // _id: '3',
            name: 'Organic Pineapple – 500g',
            slug: 'pineapple',
            category: 'Fruits',
            image: './images/f1.jpg',
            price: 850.00,
            rating: 4.0,
            numReviews: 20,
            countInStock: 2,
            description: 'Pineapple and its compounds have been linked to many health benefits, including aiding digestion, boosting immunity and speeding up recovery from surgery, among others.',
        },
        {
            //_id: '4',
            name: 'Organic Dairy Milk – Low Fat – 1L',
            slug: 'milk',
            category: 'Diary',
            image: './images/d1.jpg',
            price: 900.00,
            rating: 5.0,
            numReviews: 30,
            countInStock: 15,
            description: 'Living Planet Organic Dairy Milk.',
        }, 
        {
            name: 'Organic Black-Eyed White Beans – 500g',
            slug: 'beans',
            category: 'Grains',
            image: './images/g1.jpg',
            price: 1100.00,
            rating: 5.0,
            numReviews: 30,
            countInStock: 0,
            description: '',
        }, 
        {
            name: 'Organic Brinjal – 300g',
            slug: 'brinjal',
            category: 'Vegitables',
            image: './images/v5.jpg',
            price: 380.00,
            rating: 4.0,
            numReviews: 21,
            countInStock: 15,
            description: 'Eggplants are a nutrient-dense food, meaning they contain a good amount of vitamins, minerals and fiber in few calories.',
        }, 
        {
            name: 'Organic Beetroot – 300g',
            slug: 'beetroot',
            category: 'Vegitables',
            image: './images/v2.jpg',
            price: 320.00,
            rating: 2.0,
            numReviews: 10,
            countInStock: 20,
            description: '',
        }, 
        
    ]
};

export default data;