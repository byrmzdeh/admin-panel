fetch('http://localhost:3000/products')
.then(res=>res.json())
.then(data=>{
    const row=document.querySelector('.row')
    data.forEach(element => {
        callName(row, element.id , element.img , element.name , element.price)
    });
})

function callName(rowdiv, id ,  img, name, price  ) {

    const card = document.createElement('div')
    const cardimg=document.createElement('img')
    const cardname=document.createElement('h5')
    const cardprice= document.createElement('p')
    const link = document.createElement('a')

    cardimg.setAttribute('src', img)
    cardimg.style.width='220px'
    cardimg.style.height='220px'

    card.classList.add('col-md-4')
    card.style.display='flex'
        card.style.flexDirection='column'
    card.style.alignItems='center'


    cardname.textContent=name
    cardprice.textContent=`Price : ${price}$`
    link.setAttribute('href' , `./detail.html#${id}`)
    link.textContent='Read More...'

    card.append(cardimg, cardname , cardprice , link ) 
    rowdiv.appendChild(card)
}