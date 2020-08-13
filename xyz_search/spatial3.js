require('dotenv').config();

const fetch = require('node-fetch');
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const SPACE_ID = 'ylfzY538';

const NOLA_SPACE = '4N1J3TtN';
const NOLA_FEATURE = 'wSxVVnDD1YLcNCHa';

fetch(`https://xyz.api.here.com/hub/spaces/${SPACE_ID}/spatial?access_token=${ACCESS_TOKEN}&refSpaceId=${NOLA_SPACE}&refFeatureId=${NOLA_FEATURE}&radius=3000`)
.then(res => {
	return res.json();
})
.then(res => {
	// show one sample
	if (res.features.length >= 1) console.log(JSON.stringify(res.features[0].properties, null, '\t'));
	console.log(res.features.length + ' results\n\n');
})
.catch(e => {
	console.error(e);	
});
