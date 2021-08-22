const bestPrice = document.getElementById('best-price')
const memoryPrice = document.getElementById('memory-pricezero')
const storagePrice = document.getElementById('storage-cost')
const deliveryPrice = document.getElementById('delivery-cost')
const totalPrice = document.getElementById('total-price')
const UpdateTotal = document.getElementById('update-total')
const discount = document.getElementById('discount')

const memoryBtnZero = document.getElementById('btn-memoryzero')
const memoryBtnEx = document.getElementById('btn-memoryextra')
const storageBtnZero = document.getElementById('btn-storagezero')
const storageBtnMid = document.getElementById('btn-storagemid')
const storageBtnHigh = document.getElementById('btn-storagehigh')
const deliveryLate = document.getElementById('btn-latedelivery')
const deliveryEarly = document.getElementById('btn-earlydelivery')
const promoCode = document.getElementById('promo-code')

//memorycost set
memoryBtnZero.addEventListener('click', function () {
    memoryPrice.innerText = '0'
    totalCost()
})
memoryBtnEx.addEventListener('click', function () {

    memoryPrice.innerText = '180'
    totalCost()
})
//storageCost update
storageBtnZero.addEventListener('click', function () {

    storagePrice.innerText = '0'
    totalCost()
})
storageBtnMid.addEventListener('click', function () {

    storagePrice.innerText = '120'
    totalCost()
})
storageBtnHigh.addEventListener('click', function () {

    storagePrice.innerText = '200'
    totalCost()
})

//deliveryCharge update
deliveryLate.addEventListener('click', function () {

    deliveryPrice.innerText = '0'
    totalCost()
})
deliveryEarly.addEventListener('click', function () {

    deliveryPrice.innerText = '20'
    totalCost()
})
promoCode.addEventListener('click', function(){
       // discount.value = '0'
        totalCost()
       
    
})



//totalcostUpdate
function totalCost() {
    const memoryCost = parseFloat(memoryPrice.innerText)
    const totalInner = parseFloat(bestPrice.innerText)
    const storageCost = parseFloat(storagePrice.innerText)
    const deliveryCost = parseFloat(deliveryPrice.innerText)

    const totalCharge = memoryCost + totalInner + storageCost + deliveryCost
    totalPrice.innerText = totalCharge;
    UpdateTotal.innerText = totalCharge
    if(discount.value == 'stevekaku'){
        totalChargeWithDiscount = totalCharge - (20*totalCharge/100);
        totalPrice.innerText = totalChargeWithDiscount;
         UpdateTotal.innerText = totalChargeWithDiscount;
        discount.value = ''
    }


    
}
