# Sequelize
belajar library sequelize

step
- siapkan folder project "computer_store"
- inisiasi npm "npm init --y"
- install "nodemon" --> "npm install nodemon"
- buat folder "product_image" dan "customer_image"
- buat folder "router" dan file dengan nama "server.js"
- config nodemon
- mengkonfigurasi library "sequelize"
- install global sequelize-cli -> npm install -g sequelize-cli
- install sequelize, mysql2, express, multer (lokal)
- inisiasi sequelize -> "sequelize init"
- buat database "computer_store"
- configurasi database -> config\config.js
- kita buat migration product
sequelize model:create --name product --attributes name:string,price:double,stock:double,image:string

- kita buat migration customer
sequelize model:create --name customer --attributes name:string,phone:string,address:string,image:string

- kita buat migration transaksi
sequelize model:create --name transaksi --attributes customer_id:integer,waktu:date

- kita buat migration detail_transaksi
sequelize model:create --name detail_transaksi --attributes transaksi_id:integer,product_id:integer,price:double,qty:double

- kita eksekusi migrate untuk create struktur tabel
sequelize db:migrate

