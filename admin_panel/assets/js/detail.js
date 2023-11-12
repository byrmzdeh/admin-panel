const hash = window.location.hash.substring(1)
console.log(hash);

fetch(`http://localhost:3000/products/${hash}`)
    .then(res => res.json())
    .then(data => {
        callName(data.id, data.img, data.name, data.price, data.description)
    })


function callName(id, img, name, price, description) {

    const body = document.querySelector('body')
    const card = document.createElement('div')
    const cardimg = document.createElement('img')
    const cardname = document.createElement('h1')
    const cardprice = document.createElement('h2')
    const carddescription = document.createElement('p')


    card.style.display = 'flex'
    card.style.flexDirection = 'column'
    card.style.alignItems = 'center'
    card.style.justifyContent = 'center'
    card.style.width = '420px'
    cardimg.style.width = '340px'
    cardimg.style.height = '340px'
    card.classList.add('col-md-4')
    card.style.margin = 'auto'
    carddescription.style.fontSize = '20px'
    carddescription.style.fontStyle = 'italic'


    cardimg.setAttribute('src', img)
    cardname.textContent = name
    cardprice.textContent = `Price : ${price}$`
    carddescription.textContent = description

    card.append(cardimg, cardname, cardprice, carddescription)
    document.body.append(card)
}