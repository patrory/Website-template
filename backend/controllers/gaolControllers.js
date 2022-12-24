const asyncHandler = require("express-async-handler");
// @desc get goals
// @route GET /api/goals
// @ access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ messgae: "get goals" });
});
// @desc Post goals
// @route Post /api/goals
// @ access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).json({ messgae: "post goals" });
});
// @desc update goals
// @route  put /api/goals/:id
// @ access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ messgae: "update goals goals" });
});
// @desc Delete goals
// @route Delete /api/goals/:id
// @ access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ messgae: "delete goals" });
});
module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
