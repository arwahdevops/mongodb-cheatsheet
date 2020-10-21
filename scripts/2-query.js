// select *  from customers where _id = 'mangrupa'
db.customers.find({
    _id: "mangrupa"
});

// select * from customers where name = 'Mangrupa Project'
db.customers.find({
    name: "Mangrupa Project"
});

// select * from products where price = 2000
db.products.find({
    price: 7000
});

// select * from orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});