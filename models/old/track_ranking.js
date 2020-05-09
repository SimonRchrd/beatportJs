/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('track_ranking', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    classement_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'classement',
        key: 'id'
      }
    },
    track_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'track',
        key: 'id'
      }
    },
    ranking: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'track_ranking'
  });
};
