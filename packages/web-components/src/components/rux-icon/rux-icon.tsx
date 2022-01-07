import { Component, Host, Prop, h } from '@stencil/core'

/**
 * @part icon - the icon container in rux-icon
 */
@Component({
    tag: 'rux-icon',
    styleUrl: 'rux-icon.scss',
    shadow: true,
})
export class RuxIcon {
    // eslint-disable-next-line
    svg: string = ''

    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    @Prop({ reflect: true }) size:
        | 'extra-small'
        | 'small'
        | 'normal'
        | 'large'
        | 'auto'
        | string = 'normal'
    /**
     * The icon name
     */
    @Prop() icon!: string

    /**
     * The icon SVG's title attribute. Used for accessibility. If none is provided, the icon name will be used.
     */
    @Prop() label?: string

    get iconLabel() {
        if (this.label) {
            return this.label
        } else {
            return this.icon
        }
    }

    render() {
        const SVG = `rux-icon-${this.icon}`

        return (
            <Host>
                <SVG
                    class="icon"
                    size={this.size}
                    part="icon"
                    title={this.iconLabel}
                ></SVG>
            </Host>
        )
    }
}
