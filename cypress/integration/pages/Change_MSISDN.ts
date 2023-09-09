export class WebChange {

    Acces(url: string) {
        cy.visit(url)
        cy.contains('Miliki Nomor XL yang Sesuai Pilihan Anda')
        cy.contains('Pilih/Ganti Nomor').click()
        cy.contains('Pilih Nomor')
        cy.get('.delayp1').click()
        cy.get('.btn > .flex').click()
    }

    SPXL(msisdnSpXl: string) {
        cy.get('.form__label').type(msisdnSpXl)
        cy.get('.btn > .flex').click()
        cy.contains('Masukan kode PUK:')
        cy.get('.headline').should('be.visible')
    }

    XLActive(msisdnSXlActive: string) {

        cy.get('.form__label').type(msisdnSXlActive)
        cy.get('.btn > .flex').click()
        cy.contains('Nomor sudah aktif. Fitur pilih nomor hanya berlaku untuk nomor XL prabayar baru yang belum registrasi.').should('be.visible')

    }

    Other(msisdnOther: string) {

        cy.get('.form__label').type(msisdnOther)
        cy.contains('Nomor yang Anda masukkan bukan nomor XL Prabayar. Silakan cek kembali.').should('be.visible')


    }
}