'use strict';

var _ = {
    isDate: require('lodash.isdate')
  }
  , moment = require('moment-timezone')

exports.get = function isBusinessDay(date, srcTZ, destTZ){
  // get the day of the week in the correct timezone, if passed
  var day

  _.isDate(date) || (date = new Date(date))

  day = srcTZ
    ? parseInt(moment.tz(date, srcTZ).tz(destTZ || srcTZ).format('d'), 10)
    : date.getDay()

  // 0 = Sun, 6 = Sat
  return day !== 0 && day !== 6
}
