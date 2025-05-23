const HashMap = require('./hasmap');


const birdCensus = new HashMap(16);

// assigning key-value pairs
birdCensus.assign('mandarin duck', 'Central Park Pond');
birdCensus.assign('monk parakeet', 'Brooklyn College');
birdCensus.assign('horned owl', 'Pelham Bay Park');


console.log(birdCensus.retrieve('mandarin duck'))
console.log(birdCensus.retrieve('monk parakeet'))
console.log(birdCensus.retrieve('horned owl'))