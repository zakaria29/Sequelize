const jwt = require("jsonwebtoken")
const SECRET_KEY = "mokleters"

validateToken = (req, res, next) => {
    // mengambil data token dari header request
    let header = req.headers.authorization
    
    /* 
    karena data token dikirim dengan tipe Bearer Token,
    maka nilai variabel header di atas adalah
    "Bearer [kode token]" exp: "Bearer iewiTYF56536232vhvgdsd".
    untuk mendapatkan kode token saja, maka kita perlu melakuakan split string
    (mengonversi string ke betuk array) spt berikut
    */
    let token = header ? header.split(" ")[1] : null
    /** split diatas artinya mengubah string dari variabel header menjadi array
     * dengan tanda spasi sebagai pemisahnya, jadi array nya akan menjadi spt ini
     * [0] -> "Bearer"
     * [1] -> "iewiTYF56536232vhvgdsd"
     * dan untuk mengambil tokennya saja, maka kita panggil yang elemen index ke-1
     */

     // set jwt header untuk setting algoritam enkripsinya, default = HS256
     let jwtHeader = { algorithm: "HS256"}

     if (token == null) {
         // jika tidak mengirimkan kode token
         return res.json({ message: "Unauthorized"})
     } else {
         // proses verifikasi/validasi kode token
         jwt.verify(token,SECRET_KEY, jwtHeader, (error, user) => {
             if(error){
                 // jika kode token salah
                 return res.json({ message: "Invalid Token"})
             }else{
                 // jika kode token benar
                 next() // melanjutkan proses mengakses endpoint yang dituju
             }
             
         })
     }

}

module.exports = validateToken