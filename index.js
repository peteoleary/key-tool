#! /usr/bin/env node

const { program } = require('commander')
const {str_to_vec} = require('./commands/str-to-vec')

program
    .command('str_to_vec')
    .argument('<string>', 'string to translate')
    .description('Convert a base58 string to a u8 vec array')
    .action(str_to_vec)

program.parse();