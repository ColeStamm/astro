import { newE2EPage } from '@stencil/core/testing'

describe('svg-status', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<svg-status></svg-status>')

        const element = await page.find('svg-status')
        expect(element).toHaveClass('hydrated')
    })
})
