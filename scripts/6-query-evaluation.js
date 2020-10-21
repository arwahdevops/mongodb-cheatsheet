// select * from products where price > 1000000
db.products.find({
    $expr: {
        $gt: ["$price", 1000000]
    }
});

// select * from customers where toUpper(_id) = 'MANGRUPA'
db.customers.find({
    $expr: {
        $eq: [
            { $toUpper: "$_id" }, 
            "MANGRUPA"
        ]
    }
});

// select * from products where name is not null and category is not null
db.products.find({
    $jsonSchema: {
        required: [ "name", "category"]
    }
});

// select * from products where name is not null and type(name) = 'string' and type(price) = 'long'
db.products.find({
    $jsonSchema: {
        required: [ "name"],
        properties: {
            name: {
                bsonType: "string"
            },
            price: {
                bsonType: "long"
            }
        }
    }
});

// select * from products where price % 5 = 0
db.products.find({ 
    price: { 
        $mod: [5, 0]
    } 
});

// select * from products where name like "%seblak%"
db.products.find({
    name: {
        $regex: /seblak/,
        $options: "i"
    }
});

// select * from products where name like "Seblak%"
db.products.find({
    name: {
        $regex: /^Seblak/
    }
});

// create text index on products
db.products.createIndex({
    name: "text"
});

// select * from products where (name like "%seblak%" or name like "%metal%")
db.products.find({
    $text: {
        $search: "seblak metal"
    }
});

// select * from products where name like "%seblak metal%"
db.products.find({
    $text: {
        $search: '"seblak metal"'
    }
});

// select * fro customers where _id = "mangrupa"
db.customers.find({
    $where: function(){
        return this._id == "mangrupa";
    }
});