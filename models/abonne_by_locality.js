/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abonne_by_locality', {
    abonne_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'newsletter_abonne',
        key: 'id'
      }
    },
    foreign_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'locality',
        key: 'id'
      }
    }
  }, {
    tableName: 'abonne_by_locality'
  });
};
