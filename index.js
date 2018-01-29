"use strict";

const TickerStream = require("./lib/streams/TickerStream.js");
const OrderBookStream = require("./lib/streams/OrderBookStream.js");
const DiffOrderBookStream = require("./lib/streams/DiffOrderBookStream.js");

const Bitstamp = require("./lib/Bitstamp.js");
const CURRENCY = require("./lib/currency.js");

module.exports = {
    default: Bitstamp,
    TickerStream,
    OrderBookStream,
    DiffOrderBookStream,
    Bitstamp,
    CURRENCY
};