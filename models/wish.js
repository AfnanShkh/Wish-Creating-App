let mongoose = require('mongoose');

// Article Schema
let wishSchema = mongoose.Schema(
  {
    name:{
      type: String,
      required: true
    },
    greet:{
      type: String,
      required: true
    },
    message:{
      type: String,
      required: true
    },
    imgurl:{
      type: String,
      required: true
    }
  }
, { collection : 'wishes' });

let Wish = module.exports = mongoose.model('Wish', wishSchema);