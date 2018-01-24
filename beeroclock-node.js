(function() {
  'use strict';
  const moment = require('moment');
  const runTimestamp = Math.round(Date.now());
  function beerOclock(beerDay) {
    const dayOfWeek = beerDay || 5;
    const date = new Date(runTimestamp);
    let msg;
    const diff = date.getDay() - dayOfWeek;
    if (diff > 0) {
        date.setDate(date.getDate() + 6);
    }
    else if (diff < 0) {
        date.setDate(date.getDate() + ((-1) * diff));
    }
    date.setHours(16);
    date.setMinutes(30);
    date.setSeconds(0);
    console.log(`Beer o'clock  ${moment(date).fromNow()} 🍺`);
}
  beerOclock();
})();
