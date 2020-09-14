# Sequelize
belajar library sequelize
Project untuk belajar MySQL Sequalize Preparation: create new database "computer_store" create new folder "computer_store" and enter to those directory using "cd computer_store" run "npm init --y" to initialize package.json

create js file called "server.js" and make new folders called "router" and "image" install "nodemon" library to run your js file

install globally sequaelize command using "npm install -g sequelize-cli" 
install required libraries of the project

express
multer
sequalize
mysql2
run "sequalize init" to initialize sequalize configuration and required folders.

set configuration of database (username, password, host, database name) on config\config.json section "development"

create model and migration of "product" table and its attributes sequelize model:create --name product --attributes name:string,price:double,stock:double,image:string

create model and migration of "customer" table and its attributes sequelize model:create --name customer --attributes name:string,phone:string,address:string,image:string

create model and migration of "transaksi" table and its attributes sequelize model:create --name transaksi --attributes customer_id:integer,waktu:date

create model and migration of "detail_transaksi" table and its attributes sequelize model:create --name detail_transaksi --attributes transaksi_id:integer,product_id:integer,qty:double

perbaiki nama table, primary key, dan relasinya

eksekusi file migrate untuk membuat struktur database sequelize db:migrate

buat script relation pada file model
