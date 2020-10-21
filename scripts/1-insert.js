// Insert document customers
db.customers.insertOne({
    _id: "mangrupa",
    name: "Mangrupa Project"
});

// Insert document products
db.products.insertMany([
    {
        _id: 1,
        name: "Seblak Gaul",
        price: new NumberLong(7000)
    },
    {
        _id: 2,
        name: "Lotek Metal",
        price: new NumberLong(9000)
    }
]);

// Insert document orders
db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong(8000),
    items: [
        {
            product_id: 1,
            price: new NumberLong(7000),
            quantity: new NumberInt(2)
        },
        {
            product_id: 2,
            price: new NumberLong(9000),
            quantity: new NumberInt(2)
        }
    ]
})