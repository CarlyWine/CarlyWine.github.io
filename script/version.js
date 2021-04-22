
const fs    = require('fs')
const data  = fs.readFileSync('_version', 'utf8')

module.exports = function() {

    return data + "v";
}
