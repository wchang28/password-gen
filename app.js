#!/usr/bin/env node

const crypto = require('crypto');
const hash = crypto.createHash('sha512');

function sha512HashHex(password) {
	hash.update(password);
	return hash.digest('hex');
}

function password(length, special) { 
	var iteration = 0; 
	var password = ""; 
	var randomNumber; 
	if(special == undefined){ 
		var special = false; 
	} 
	while(iteration < length){ 
		randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33; 
		if(!special){ 
			if ((randomNumber >=33) && (randomNumber <= 47)) { continue; } 
			if ((randomNumber >=58) && (randomNumber <= 64)) { continue; } 
			if ((randomNumber >=91) && (randomNumber <= 96)) { continue; } 
			if ((randomNumber >=123) && (randomNumber <= 126)) { continue; } 
		} 
		iteration++; 
		password += String.fromCharCode(randomNumber); 
	}
	return password;
}

let pswd = password(10);
console.log('password ==>\n' + pswd);
console.log('password hash ==>\n' + sha512HashHex(pswd));

