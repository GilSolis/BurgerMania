let orm = require("../config/orm");

let burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burger", ["burger_name", "devoured"], [name, false], cb);
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;
