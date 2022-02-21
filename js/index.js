// javascript object notation
// JSON 
const user = { id: 11, name: 'Gorib Amir', job: 'actor' }
const stringified = JSON.stringify(user)
// console.log(stringified)

const shop = {
    name: 'alia store',
    location: 'ranbir road',
    profit: 15000,
    products: ['electronics', 'mobile', 'pepsi'],
    owner: {
        name: 'alia bhatt',
        profession: 'actor'
    },
    isExpensive: false

}
const shopStringified = JSON.stringify(shop)
// console.log(shop)
console.log(shopStringified)
const converted = JSON.parse(shopStringified)
console.log(converted)