import { newSpecPage } from '@stencil/core/testing'
import { SvgStatus } from '../svg-status'

describe('svg-status', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [SvgStatus],
            html: `<svg-status></svg-status>`,
        })
        expect(page.root).toEqualHtml(`
      <svg-status>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svg-status>
    `)
    })
})
