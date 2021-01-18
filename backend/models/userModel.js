const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 8);
  console.log(this.password);
  next();
});

userSchema.methods.matchPassword = async function(enteredPassword){
   return  await bcrypt.compare(enteredPassword , this.password)
}

const User = mongoose.model("User", userSchema);
module.exports = User;
