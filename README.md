# REST API with NodeJS with Sequelize
build REST API with [NodeJS](https://nodejs.org) & [Sequelize](https://sequelize.org/)

## Tools yang digunakan :
1. ExpressJS
2. Sequelize
3. Mysql2
4. Nodemon

## Step by step
1. siapkan folder project `computer_store`
2. inisiasi npm `npm init --y`
3. install "nodemon" --> `npm install nodemon`
4. buat folder `product_image` dan `customer_image`
5. buat folder "router" dan file dengan nama `server.js`
6. config nodemon
  Masuk ke package.json dan tambahkan `"start": "nodemon server.js"` pada scripts
7. mengkonfigurasi library "sequelize"
8. install global sequelize-cli -> `npm install -g sequelize-cli`
9. install sequelize, mysql2, express, multer (lokal)
  `npm install sequelize mysql2 express multer`
10. inisiasi sequelize -> `sequelize init`
11. buat database `computer_store`
12. configurasi database -> config\config.js
13. kita buat migration product
  `sequelize model:create --name product --attributes name:string,price:double,stock:double,image:string`

14. kita buat migration customer
  `sequelize model:create --name customer --attributes name:string,phone:string,address:string,image:string`

15. kita buat migration transaksi
  `sequelize model:create --name transaksi --attributes customer_id:integer,waktu:date`

16. kita buat migration detail_transaksi
  `sequelize model:create --name detail_transaksi --attributes transaksi_id:integer,product_id:integer,price:double,qty:double`

17. kita eksekusi migrate untuk create struktur tabel
  `sequelize db:migrate`

## For development
1. clone repository ini
2. run `yarn or npm install` untuk install dependency;
3. run `npm start` and enjooy!!
