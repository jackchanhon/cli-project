log = console.log
expect = require('chai').expect
should = require('chai').should()
const  Assessment  = require('../commands/assessment')

describe('#Assessment Unit testing', () => {

  it('Capital letter is true', () => {
    let assessment = new Assessment('hello world')
    const capitalValue = assessment.toCapitalLetter()
    expect(capitalValue).to.equal('HELLO WORLD'); 
  });

  it('Alternate capital Letter is true', () => {
    let assessment = new Assessment('hello world')
    const alterateValue = assessment.toAlternateCapital()
    expect(alterateValue).to.equal('hElLo wOrLd'); 
  });

  it('Comma value is true', () => {
    let assessment = new Assessment('hello world')
    const commaValue = assessment.toCommaValue()
    expect(commaValue).to.equal('h,e,l,l,o, ,w,o,r,l,d'); 
  });
});