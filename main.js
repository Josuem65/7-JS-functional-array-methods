// array.forEach()
// array.map()
// array.filter()
// array.reduce()


const prices = items.map((item) => item.price)

console.log(prices)
let newPriceArr = null;
let answer1 = null;
for(let i = 0; i < prices.length; i++) {
  newPriceArr += prices[i] 
  answer1 = newPriceArr / 25;
  answer1 = Math.round(answer1 * 10) / 10
  // console.log(answer1)
}

const fourteenEighteen = prices.filter(item => item > 14 && item < 18)
console.log(fourteenEighteen)
for(let i = 0; i < fourteenEighteen.length; i++) {
  console.log(prices.indexOf(fourteenEighteen[i]))
}

const titles = items.map((item) => item.title)
let titleIndex = [7, 16, 18]
let answer2 = []
titleIndex.forEach(item => answer2 +=  `<li>${titles[item]}</li>`)
console.log(answer2)

const currencyCodes = items.map((item) =>item.currency_code)
let gbpIndex = null;
currencyCodes.filter((item) =>{
  if(item === 'GBP') {
   gbpIndex = currencyCodes.indexOf(item)
  }
})
console.log(`index of 'GBP': ${gbpIndex}`)
let title3 = items[gbpIndex].title
console.log(title3)
let price3 = items[gbpIndex].price
console.log(price3)
const answer3 = `${title3} costs ${price3} euros`

const madeOfWood = items.filter((item) => item.materials.includes('wood'))
console.log(madeOfWood)
let answer4 = [];
madeOfWood.forEach((item) => {
  answer4 += `<li>${item.title}</li>`
})


const qualifyFor5 = items.filter((item) => item.materials.length >= 8)
console.log(qualifyFor5)
const nameForFirst = qualifyFor5[0].title
const nameForSecond = qualifyFor5[1].title
const numOfItemsMadeOf1 = qualifyFor5[0].materials.length
const numOfItemsMadeOf2 = qualifyFor5[1].materials.length
const materialsMadeOf1 = qualifyFor5[0].materials
const materialsMadeOf2 = qualifyFor5[1].materials

const answer5 = `<div>${nameForFirst} <li>${numOfItemsMadeOf1}</li> <li>${materialsMadeOf1}</li></div><br><div>${nameForSecond} <li>${numOfItemsMadeOf2}</li> <li>${materialsMadeOf2}</li></div>`

const madeBySeller = items.filter((item) => item.who_made ===  "i_did")
const answer6 = madeBySeller.length;
console.log(answer6)


document.querySelector('#answer1').innerHTML = answer1

document.querySelector('#answer2').innerHTML = answer2

document.querySelector('#answer3').innerHTML = answer3

document.querySelector('#answer4').innerHTML = answer4

document.querySelector('#answer5').innerHTML = answer5

document.querySelector('#answer6').innerHTML = answer6

