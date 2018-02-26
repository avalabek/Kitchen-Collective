var Sequelize = require("sequelize");
var sequelize = require("../config/db.js");
var DataTypes = require("sequelize/lib/data-types");
module.exports = function(sequelize, DataTypes) {
  var Hosts = sequelize.define(
    "Hosts",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      event: {
        type: DataTypes.STRING
      },

      name: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.INTEGER
      }
      //TODO check date/time datatypes
    },
    {
      timestamps: false
    }
  );
  return Hosts;
};
