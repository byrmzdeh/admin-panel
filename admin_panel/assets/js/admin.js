

fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            admincallName(element.id, element.img, element.name, element.price)

        });
    })

function admincallName(id, img, name, price) {
    const table = document.querySelector('table')
    const tr = document.createElement('tr')
    const thid = document.createElement('th')
    const thimg = document.createElement('th')
    const thname = document.createElement('th')
    const thprice = document.createElement('th')
    const thupdatebtn = document.createElement('th')
    const thdeletebtn = document.createElement('th')
    const upbtn = document.createElement('button')
    const delbtn = document.createElement('button')
    upbtn.textContent = 'Update'

    upbtn.style.cursor = 'pointer'
    upbtn.style.width = '90px'
    upbtn.style.height = '30px'
    upbtn.style.border = 'none'
    upbtn.style.color = 'white'
    upbtn.style.borderRadius = '15px'
    upbtn.style.backgroundColor = 'rgb(91, 39, 39)'
    delbtn.style.cursor = 'pointer'
    delbtn.style.width = '90px'
    delbtn.style.height = '30px'
    delbtn.style.border = 'none'
    delbtn.style.borderRadius = '15px'
    delbtn.style.backgroundColor = 'rgb(91, 39, 39)'
    delbtn.style.color = 'white'


    thupdatebtn.appendChild(upbtn)
    delbtn.textContent = 'Delete'

    thdeletebtn.appendChild(delbtn)
    table.style.margin = 'auto'


    thid.textContent = id
    thimg.innerHTML = `<img width="110" src="${img}" alt="err">`
    thname.textContent = name
    thprice.textContent = `${price} $`


    tr.append(thid, thimg, thname, thprice, thupdatebtn, thdeletebtn)
    table.appendChild(tr)

    delbtn.addEventListener('click', function () {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

    })

    upbtn.addEventListener('click', function () {
        const updatedData = {
            name: 'New Bakery',
            price: 31.99,
        };

        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
    });



}