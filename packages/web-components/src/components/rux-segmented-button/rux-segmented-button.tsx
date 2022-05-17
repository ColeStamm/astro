import { Element, Component, h, forceUpdate, Prop } from '@stencil/core'

/**
 * Presents a set of two or more segments, each of which functions as a mutually exclusive button.
 *
 * @part content - Styles the container of segment buttons.
 * @part segment - Styles each segment button within the container.
 * @prop selectedElement - {HTMLElement}
 */
@Component({
    tag: 'rux-segmented-button',
    styleUrl: 'rux-segmented-button.css',
    shadow: true,
})
export class RuxSegmentedButton {
    @Element() host!: HTMLRuxSegmentedButtonElement & {
        children: HTMLCollectionOf<globalThis.Element>
    }

    /** Value of the currently selected segment. */
    @Prop({ reflect: false }) value!: string | null

    /** Element containing the currently selected segment. */
    @Prop({ reflect: false }) selectedElement!: globalThis.Element | null

    constructor() {
        /** Handles the effect of the LightDOM on the ShadowDOM */
        let refresh = () => {
            /** First segment element child. */
            let firstElement: globalThis.Element | undefined

            /** Currently selected segment element child. */
            let selectedElement: globalThis.Element | undefined =
                this.selectedElement && this.selectedElement.isConnected
                    ? this.selectedElement
                    : undefined

            for (let element of this.host.children) {
                if (!firstElement) {
                    firstElement = element
                }

                if (
                    !selectedElement &&
                    (element as HTMLElement).dataset &&
                    'defaultSelected' in (element as HTMLElement).dataset
                ) {
                    selectedElement = element
                }
            }

            selectedElement = selectedElement! || firstElement!

            /** Whether the Selected Element changed from one Element to another Element. */
            let didSelectedElementChange =
                this.selectedElement && this.selectedElement !== selectedElement

            // update the selected element
            this.selectedElement = selectedElement

            // if the selected element changed (as result of a removal) then fire a change event
            if (didSelectedElementChange && selectedElement) {
                this.host.dispatchEvent(
                    new Event('change', {
                        bubbles: true,
                        cancelable: true,
                        composed: true,
                    })
                )
            }
        }

        new MutationObserver(() => {
            refresh()

            forceUpdate(this)
        }).observe(this.host, {
            childList: true,
        })

        Object.assign(this.host, { component: this })

        createPrototypeMixin(this)
        refresh()
    }

    render() {
        return (
            <span part="content" role="radiogroup">
                {Array.from(this.host.children, (element, index) => {
                    let name = slotChar.repeat(index + 1)

                    element.slot = name

                    return (
                        <Segment
                            onClick={(event: HTMLPointerEvent) =>
                                onSegmentClick(this, event)
                            }
                            selected={element === this.selectedElement}
                        >
                            <SegmentSlot name={name} />
                        </Segment>
                    )
                })}
            </span>
        )
    }
}

// Mixin
// ----------------------------------

let define = (value: object, mixin: object) =>
    Object.defineProperties(value, Object.getOwnPropertyDescriptors(mixin))

let createPrototypeMixin = (component: RuxSegmentedButton) =>
    define(component.host, {
        get selectedElement() {
            return component.selectedElement
        },
        set selectedElement(element: globalThis.Element | null) {
            /** Whether the argument is an Element. */
            let isElement = element instanceof globalThis.Element

            /** Whether the Element is a child of the Custom Element. */
            let isChildElement =
                isElement && element!.parentNode === component.host

            /** Whether the child of the Custom Element is not the currently selected element. */
            let isChangedElement =
                isChildElement && element !== component.selectedElement

            // if the element is changed, update the selected element and the component
            if (isChangedElement) {
                component.selectedElement = element as HTMLElement

                component.host.dispatchEvent(
                    new Event('change', {
                        bubbles: true,
                        cancelable: true,
                        composed: true,
                    })
                )

                forceUpdate(component)
            }
        },
        get value() {
            console.log({
                'component.selectedElement': getNodeValue(
                    component.selectedElement
                ),
            })
            return getNodeValue(component.selectedElement)
        },
        set value(value: string | null) {
            if (value != null) {
                for (let child of component.host.children) {
                    let childValue = getNodeValue(child)

                    if (childValue === value) {
                        component.selectedElement = child as HTMLElement

                        component.host.dispatchEvent(
                            new Event('change', {
                                bubbles: true,
                                cancelable: true,
                                composed: true,
                            })
                        )

                        forceUpdate(component)
                    }
                }
            }
        },
    })

// Functional Components
// ----------------------------------

/** Generic Span Element (used to avoid missing types in TypeScript). */
let Generic = (props: any, children: any) => (
    <span {...props}>{...children}</span>
)

/** Segment used within a Segmented Button. */
let Segment = ({ selected, ...props }: any, children: any) => (
    <Generic
        part={selected ? 'segment --selected' : 'segment'}
        role="radio"
        aria-checked={String(selected)}
        tabindex={String(selected ? 0 : -1)}
        onKeyDown={(event: HTMLKeyboardEvent) => {
            onClickableKeyDown(event)
            onChoosableKeyDown(event)
        }}
        onKeyUp={onClickableKeyUp}
        {...props}
    >
        {...children}
    </Generic>
)

/** Slot used by a segment (where slot is allowed to use the `tabindex` attribute). */
let SegmentSlot = (props: any, children: any) => (
    <slot tabindex="-1" {...props}>
        {...children}
    </slot>
)

// Events
// ----------------------------------

/** Handles keydown events that may result in a click. */
let onClickableKeyDown = (event: HTMLKeyboardEvent) => {
    switch (code.set(event.target, event.code).get(event.target)) {
        case 'Enter':
            event.target.click()
        case 'Space':
            event.preventDefault()
    }
}

/** Handles keyup events that may result in a click. */
let onClickableKeyUp = (event: HTMLKeyboardEvent) => {
    let target = event.target as HTMLElement

    if (event.code === 'Space' && code.get(target) === 'Space') {
        event.preventDefault()
        target.click()
    }
}

/** Handles keydown events that may result in a shift of focus. */
let onChoosableKeyDown = (event: HTMLKeyboardEvent) => {
    switch (event.code) {
        case 'ArrowLeft':
        case 'ArrowUp':
            onChoosableChange(event, false)
            break

        case 'ArrowRight':
        case 'ArrowDown':
            onChoosableChange(event, true)
            break
    }
}

/** Shifts focus between ARIA-marked elements in a generic group. */
let onChoosableChange = (event: HTMLKeyboardEvent, next: Boolean) => {
    let focus = event.target.closest(
        '[role="button"],[role="checkbox"],[role="radio"]'
    )

    if (!focus) return

    let focusType = focus.getAttribute('role')
    let groupType = focusType === 'radio' ? 'radiogroup' : 'group'

    let group = focus.closest(`[role="${groupType}"]`)

    if (!group) return

    let siblings = group.querySelectorAll(
        `[role="${focusType}"]`
    ) as NodeListOf<HTMLElement>
    let previous = null

    for (let sibling of siblings) {
        if (!next && sibling === focus && previous) {
            previous.focus()
            break
        }

        if (next && previous === focus) {
            sibling.focus()
            break
        }

        previous = sibling
    }
}

/** Handles clicks to a Segment Element in a Segment Button. */
let onSegmentClick = (
    component: RuxSegmentedButton,
    event: HTMLPointerEvent
) => {
    let isShadowClick = event.target === event.currentTarget

    if (isShadowClick) {
        event.preventDefault()
        event.stopImmediatePropagation()

        let assignedElement = event.target
            .querySelector('slot')
            ?.assignedElements()[0] as HTMLElement

        if (assignedElement) {
            assignedElement.dispatchEvent(
                new PointerEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    composed: true,
                })
            )

            if (component.selectedElement !== assignedElement) {
                assignedElement.dispatchEvent(
                    new Event('change', {
                        bubbles: true,
                        cancelable: true,
                        composed: true,
                    })
                )

                component.selectedElement = assignedElement

                forceUpdate(component)
            }
        }
    }
}

// Utilities
// ----------------------------------

/** WeakMap used to match a KeyboardEvent target code between the `keydown` and `keyup` events. */
let code = new WeakMap()

let slotChar = String.fromCharCode(0x23fd)

let getNodeValue = (target: Element | null): string | null => {
    if (target != null) {
        if (target instanceof HTMLElement) {
            if ('value' in target.dataset) {
                return target.dataset.value || ''
            }
        }

        if ((target as any).value != null && (target as any).value != '') {
            return String((target as any).value)
        }

        return target.textContent
    }

    return null
}

// TypeScript Definitions
// ----------------------------------

/** HTMLElement (where `part` is a supported feature). */
type HTMLElement = globalThis.HTMLElement & { part: DOMTokenList }

/** PointerEvent (where `target` is an `HTMLElement`). */
type HTMLPointerEvent = PointerEvent & { target: HTMLElement }

/** KeyboardEvent (where `target` is an `HTMLElement`). */
type HTMLKeyboardEvent = KeyboardEvent & { target: HTMLElement }
