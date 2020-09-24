install "jsonwebtoken" -> npm install jsonwebtoken

buat file migrate dan model untuk menambahkan tabel admin di database
sequelize model:create --name admin --attributes name:string,username:string,password:string

eksekusi file migrate dengan sequelize db:migrate

buat endpoint untuk CRUD admin, khusus untuk bagian passwrord dienkripsi menggunakan md5
(don't forget to install those package first -> npm install md5)

setelah CRUD admin telah dibuat, jangna lupa untuk di panggil di server.js
silahkan cek dan isi tabel admin menggunakan endpoint yang telah dibuat

buat folder auth pada router, dan buat file auth.js (berisi proses login) 
dan validateToken.js (berisi proses validasi token jwt)

buat kode untuk auth.js

panggil auth.js di server.js, coba lakukan proses login menggunakan endpoint yang dibuat

buat kode untuk validateToken.js

panggil validateToken pada file router yang akan diberikan kemanan melalui token (product, admin, customer, transaksi)

coba akses endpoint apapun dari router, tanpa menyisipkan kode token sebagai validasi

kode token yang didapatkan setelah login, diletakkan pada tab "Authorization",
pilih type "Bearer Token" dan letakkan kode token di tempat yang disediakan
