# is-business-day [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

Pass a date, get back a boolean. Is timezone aware.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
  - [Requirements](#requirements)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -S is-business-day
```


## Usage

```js
var isBusinessDay = require('is-business-day').get

isBusinessDay(new Date(2015, 1, 1), 'America/Los_Angeles')
```

## Methods
### get `(<Date> date[, <String> sourceTimezone[, <String> destinationTimezone]])`
Returns `true` if the passed date is a business day. If a timezone is passed as the second argument, it will ensure that the date is interpreted in that timezone.

#### Arguments
* **date** _String_ or _unixTime_ or _Date_ **required**.
* **sourceTimezone** _String_: the timezone that the date is in. Must be passed in Olson TZID timezone format. e.g. `America/Los_Angeles`
* **destinationTimezone** _String_: if the source timezone is passed, the destination timezone will convert from the source timezone to the destination timezone before processing.

## Tests
Tests are [prova](https://github.com/azer/prova), based on [tape](https://github.com/substack/tape). They can be run with `npm test`.

Tests can be run in a loop with `npm run tdd`

## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Joey Baker](https://byjoeybaker.com)


[npm-url]: https://npmjs.org/package/is-business-day
[npm-image]: https://badge.fury.io/js/is-business-day.svg
[travis-url]: https://travis-ci.org/joeybaker/is-business-day
[travis-image]: https://travis-ci.org/joeybaker/is-business-day.svg?branch=master
[daviddm-url]: https://david-dm.org/joeybaker/is-business-day.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/joeybaker/is-business-day
