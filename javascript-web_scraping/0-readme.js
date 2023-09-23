#!/usr/bin/node
const file = process.argv[2];
const fs = require('fs');
fs.readFile(file, 'utf-8', (error, data) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(data);
});