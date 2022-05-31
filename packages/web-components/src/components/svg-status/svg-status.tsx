import { Component, Host, h, Prop } from '@stencil/core'
import { Status } from '../../common/commonTypes.module'
import Caution from './light-theme-svgs/Caution.svg'
import Critical from './light-theme-svgs/Critical.svg'
import Standby from './light-theme-svgs/Standby.svg'

interface StatusSvgs {
    [index: string]: string
}

var params = {} as StatusSvgs

params['caution'] = Caution
params['critical'] = Critical
params['standby'] = Standby

@Component({
    tag: 'svg-status',
    styleUrl: 'svg-status.scss',
    shadow: true,
})
export class SvgStatus {
    /**
     * Sets the status symbol, valid options are critical, serious, caution, normal, standby and off
     */
    @Prop({ reflect: true }) status?: Status

    render() {
        return (
            <Host status={this.status}>
                <div innerHTML={params[this.status!]}></div>
            </Host>
        )
    }
}
