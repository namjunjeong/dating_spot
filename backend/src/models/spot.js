import mongoose from "mongoose";

const SpotSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  x: Number,
  y: Number,
  cafe: [
    {
      place_name: String,
      x: Number,
      y: Number,
      picture_url: String,
      place_url: String,
      rate: Number,
    },
  ],
  restaurant: [
    {
      place_name: String,
      x: Number,
      y: Number,
      picture_url: String,
      place_url: String,
      rate: Number,
    },
  ],
  stroll: [
    {
      place_name: String,
      x: Number,
      y: Number,
      picture_url: String,
      place_url: String,
      rate: Number,
    },
  ],
  gallery: [
    {
      place_name: String,
      x: Number,
      y: Number,
      picture_url: String,
      place_url: String,
      rate: Number,
    },
  ],
  themeCafe: [
    {
      place_name: String,
      x: Number,
      y: Number,
      picture_url: String,
      place_url: String,
      rate: Number,
    },
  ],
  shopping: [
    {
      place_name: String,
      x: Number,
      y: Number,
      picture_url: String,
      place_url: String,
      rate: Number,
    },
  ],
  shopping: [
    {
      place_name: String,
      x: Number,
      y: Number,
      picture_url: String,
      place_url: String,
      rate: Number,
    },
  ],
  pcroom: [
    {
      place_name: String,
      x: Number,
      y: Number,
      picture_url: String,
      place_url: String,
      rate: Number,
    },
  ],
  drink: [
    {
      place_name: String,
      x: Number,
      y: Number,
      picture_url: String,
      place_url: String,
      rate: Number,
    },
  ],
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
});

const Spot = mongoose.model("Spot", SpotSchema);

export default Spot;
