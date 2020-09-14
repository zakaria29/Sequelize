'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // ini adalah blok untuk menghubungkan antar model/table
      /** one to one -> hasOne(), belongsTo()
       *  one to many-> hasMany(), belongsToMany()
       * 
       * has -> itu dipakai ketika menghubugkan parent ke child
       * belong -> itu dipakai ketika menghubungkan child ke parent
       */

      // menghubungkan transkasi -> customer
      this.belongsTo(models.customer,{
        foreignKey: "customer_id",
        as: "customer"
      })

      // menghubungkan transaksi-> detail_transaksi
      this.hasMany(models.detail_transaksi, {
        foreignKey: "transaksi_id",
        as: "detail_transaksi"
      })
    }
  };
  transaksi.init({
    transaksi_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: DataTypes.INTEGER,
    waktu: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'transaksi',
    // setting table name
    tableName: "transaksi"
  });
  return transaksi;
};