// select * from customers where _id = 'mangrupa'
db.customers.find({
    _id: {
        $eq: "mangrupa"
    }
});

// select * from products where price > 1000
db.products.find({
    price: {
        $gt: 1000
    }
});

// insert product documents
db.products.insertMany([
    {
        _id: 3,
        name: "Basreng",
        price: new NumberLong(6000),
        category: "food"
    },
    {
        _id: 4,
        name: "Iphone XR",
        price: new NumberLong(10000000),
        category: "handphone"
    },
    {
        _id: 5,
        name: "Alienware xnxx",
        price: new NumberLong(25000000),
        category: "laptop"
    }
]);

// select * from products where category in ('handphone', 'laptop') and price > 5000000
db.products.find({
    category: {
        $in: ["handphone", "laptop"]
    },
    price: {
        $gt: 5000000
    }
});