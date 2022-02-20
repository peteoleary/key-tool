const bs58 = require('bs58')

str_to_vec  = (str, options) => {
    const bytes = bs58.decode(str)
    console.log("[" + bytes.map(i =>{ 
        return parseInt(i)
    }).join(',') + "]")
}

module.exports = {str_to_vec}