// @ts-check
/// <reference path="../../../../cypress/globals.d.ts" />

describe('Segmented Button', () => {
    beforeEach(() => {
        cy.visitComponent('rux-segmented-button')
    })

    it('includes `selectedElement` property', async () => {
        /** @type {Iterable<HTMLRuxSegmentedButtonElement>} */
        let [$host] = await cy.get('#TestA')

        expect($host).to.have.property('selectedElement')
    })

    it('includes `value` property', async () => {
        /** @type {Iterable<HTMLRuxSegmentedButtonElement>} */
        let [$host] = await cy.get('#TestA')

        expect($host).to.have.property('value')
    })

    it('assigns `selectedElement` to 1st child element by default', async () => {
        /** @type {Iterable<HTMLRuxSegmentedButtonElement>} */
        let [$host] = await cy.get('#TestA')

        expect($host.selectedElement).to.eql($host.children[0])
        expect($host.selectedElement).to.not.eql($host.children[1])
    })

    it('assigns `value` to 1st child element value by default', async () => {
        /** @type {Iterable<HTMLRuxSegmentedButtonElement>} */
        let [$host] = await cy.get('#TestA')

        expect($host.value).to.eql($host.children[0].textContent)
        expect($host.value).to.not.eql($host.children[1].textContent)
    })

    it('allows child element to request default selection with `data-default-selected` attribute', async () => {
        /** @type {Iterable<HTMLRuxSegmentedButtonElement>} */
        let [$host] = await cy.get('#TestB')

        expect($host).to.exist

        let [$1stChild, $2ndChild, $3rdChild] = $host.children

        expect($1stChild).to.exist
        expect($2ndChild).to.exist
        expect($3rdChild).to.exist

        expect($host).to.have.property('selectedElement')

        expect($1stChild.hasAttribute('data-default-selected')).to.eql(false)
        expect($2ndChild.hasAttribute('data-default-selected')).to.eql(true)
        expect($3rdChild.hasAttribute('data-default-selected')).to.eql(false)

        expect($host.selectedElement).to.not.eql($1stChild)
        expect($host.selectedElement).to.eql($2ndChild)
        expect($host.selectedElement).to.not.eql($3rdChild)
    })
})
