'use strict'

const { Command } = require('@adonisjs/ace')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


class Assessment extends Command {
  constructor(inputValue) {
    super()
    this.inputValue = inputValue
  } 

  static get signature() {
    return `assessment`
  }

  static get description() {
    return 'Interview Technical Assestment'
  }

  toCapitalLetter() {
    return this.inputValue.toUpperCase()
  }

  toAlternateCapital() {
    let alternateUpperValue = ''
    for (let k in this.inputValue) {
      let character = this.inputValue.charAt(k).toString()
      if (k % 2 == 0) {
        alternateUpperValue = alternateUpperValue + character.toLowerCase()
      } else {
        alternateUpperValue = alternateUpperValue + character.toUpperCase()
      }
    }
    return alternateUpperValue
  }

  toCommaValue() {
    let commaValue = ''
    for(let i in this.inputValue) {
      commaValue = commaValue +  ',' + this.inputValue[i].toString()
    }
    return commaValue.substring(1)
  }

  async handle() {
    const input = await this.ask(`Please enter your input`)
    let userInput = new Assessment(input)
    
    const output1 = userInput.toCapitalLetter()
    const output2 = userInput.toAlternateCapital()
    const output3 = userInput.toCommaValue()

    let csvHeader = []
    let csvData = []
    for(let j in output3) {
      csvHeader.push({
        id: output3[j].toString(),
        title: output3[j].toString()
      })
    }
    const csvWriter = createCsvWriter({
      path: './root/answer3.csv',
      header: csvHeader
    });

    console.log(`\n Answer 1:  ${output1}\n`)
    console.log(`\n Answer 2:  ${output2}\n`)
    csvWriter.writeRecords(csvData)
    .then(()=> console.log(`\n CSV created!\n`));
  }
}

module.exports = Assessment