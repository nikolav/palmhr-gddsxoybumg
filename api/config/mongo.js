const mongoose          = require("mongoose");
const { Schema, model } = mongoose;

// buffers api calls in a transaction
// dont have to wait for setup to complete
mongoose.connect(process.env.MONGODB_URI);

model("appdata",
  new Schema({
    //
    // stores name/value pairs
    name: {
      type  : String,
      index : true,
    },
    value: {
      type : String, 
      trim : true,
    },
    //
    // date created, readonly
    "_@": {
      type      : Date,
      default   : Date.now,
      immutable : true,
    },
  })
);

export { mongoose };
