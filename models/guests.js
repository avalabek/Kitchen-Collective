// var Sequelize = require("sequelize");
// var sequelize = require("../config/db.js");
// var DataTypes = require("sequelize/lib/data-types");
module.exports = function (sequelize, DataTypes) {
  var Guests = sequelize.define(
    "Guests",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      event: {
        type: DataTypes.STRING
      },

      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.INTEGER
      }


      //TODO check date/time datatypes
    },
    {
      timestamps: false
    }
  );
  return Guests;
};
