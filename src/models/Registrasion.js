import mongoose from "mongoose";

const { Schema } = mongoose;

const registrationInfoSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  phone: {
    type: Schema.Types.String,
    required: true,
  },
  plan: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.String,
    required: true,
  },
  payment: {
    type: Schema.Types.String,
    required: true,
  },
  ads: {
    type: [Schema.Types.String],
    validate: {
      validator: function (ads) {
        return ads.length > 0; // Check if the ads array has at least one element
      },
      message: "ads array must not be empty",
    },
    required: true,
  },
});

const Registration = mongoose.model("Registration", registrationInfoSchema);

export default Registration;
