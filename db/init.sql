create table products (
    product_id serial primary key, 
    name varchar(40),
    description varchar(80),
    price int, 
    image_url text
)