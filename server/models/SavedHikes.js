const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedHikes extends Model {}

SavedHikes.init(
  {
    trailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    trailName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'SavedHikes',
  }
);

module.exports = SavedHikes;
