const mongo = require("mongoose");

var cardSchema = mongo.Schema;


var cardSchema = new Schema({
  cardData: {
    cardNumber: BigInt,
    noOfPerson: String,
  }
});

var card = mongoose.model("cardData", cardSchema);