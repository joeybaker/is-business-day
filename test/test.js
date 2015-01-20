'use strict';

var test = require('prova')
  , isBusinessDay = require('../').get
  , tuesMorning = new Date('Tue Apr 22 2014 9:00:00 GMT-0700 (PDT)')
  , lateFriEvening = new Date('Fri Apr 25 2014 22:30:00 GMT-0700 (PDT)')
  , satMorning = new Date('Sat May 31 2014 07:46:12 GMT-0700 (PDT)')
  , satMorningGMT = new Date('Sat 2014 May 31 01:00 GMT')

test('lib/getableTime/isBusinessDay', function isBusinessDayTest(t){
  t.ok(
    isBusinessDay(tuesMorning)
    , 'returns true for a tues with no tz passed'
  )

  t.notOk(
    isBusinessDay(satMorning)
    , 'returns false for a sat with no tz passed'
  )

  t.ok(
    isBusinessDay(lateFriEvening, 'America/Los_Angeles')
    , 'returns true for a friday with a source timezone'
  )

  t.ok(
    isBusinessDay(satMorningGMT, 'Europe/London', 'America/Los_Angeles')
    , 'returns true for a sat with a tz that converts to a Fri'
  )

  t.end()
})
