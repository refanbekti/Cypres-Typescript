import { WebChange } from "./pages/Change_MSISDN"


let WebChangeMSISDN = new WebChange()
const URL = 'https://pilih.xl.co.id/'
let msisdnSpXl = '087810157798'
let msisdnSXlActive = '08176746480'
let msisdnOther = '0895627894328'


it('MSSIDN SP XL', () => {

    WebChangeMSISDN.Acces(URL)
    WebChangeMSISDN.SPXL(msisdnSpXl)
})



it('MSSIDN XL Active', () => {

    WebChangeMSISDN.Acces(URL)
    WebChangeMSISDN.XLActive(msisdnSXlActive)
})


it('MSSIDN Other Providers', () => {

    WebChangeMSISDN.Acces(URL)
    WebChangeMSISDN.Other(msisdnOther)
})
