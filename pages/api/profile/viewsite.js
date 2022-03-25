import { sendSuccess, sendError } from "../../../helpers/help";
var constants = require("../../../helpers/constants");
import connectMongoDb from "../../../db/connect";
const Site = require("../../../models/Site")
var History = require("../../../models/history");
var Landlord = require("../../../models/landlord");
const { isEmail, isDate } = require("validator");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const config = require("../../../config/config");

//const {isEmail} = require("validator");
//var nodemailer = reuire("nodemailer");
export default async function handler(req, res) {
  if (req.method === "GET") {
    const bearerHeader = req.headers["authorization"];
    // Check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
      // Split at the space
      const bearer = bearerHeader.split(" ");
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      jwt.verify(req.token, config.SECRET_KEY, (err, authData) => {
        if (err) return sendError(res, err, constants.JWT_VERIFY);
        else {
          History.find({ tenant_id: authData.id, status: {$lt: 2}})
            .populate({
              path: 'site_id',
              populate: {
                path: 'landlord_id',
                model: 'Landlord',
                select: 'name contact -_id '
              },
              select: '-history -status'
            })
            .exec(function (err, data) {
              if (err)
                return sendError(res, err.message, constants.HISTORY_ERROR_I);
              else return sendSuccess(res, { data });
            });
        }
      });
    } else {
      // Forbidden
      //currently not possible because we are loged in and token is available to us
      return sendError(res, "token not availanle", constants.NULL_TOKEN);
    }
  } else {
    return sendError(res, "Use get method", constants.USE_GET);
  }
}
