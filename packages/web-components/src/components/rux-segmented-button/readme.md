# Segmented Button

Segmented Buttons allow users to select one item at a time from two to four options. Selecting one option automatically turns off the last selection made. Segmented Buttons are mutually exclusive.

## Guidelines

-   [Astro UXDS: Segmented Button](https://astrouxds.com/ui-components/segmented-button)

### Usage

Pass an Array of segments via the `data` attribute on the Segmented Button custom element. Segment items in the `data` Array must be objects with a `label` string. The first item in the Array will be auto-selected unless another segment item has a `selected` property with a truthy value.
Avoid labels with the same text, as this will interfere with selecting segments. 

```js
document.addEventListener('change', (e) =>
    console.log('Target element:', e.target)
)
// > Target element: <rux-segmented-button>

document.addEventListener('change', (e) =>
    console.log('Selected Segment:', e.target.selected)
)
// > Selected Segment: Second Segment

document.addEventListener('change', (e) =>
    console.log('Array of Segments:', e.target.data)
)
// > Array of Segments: [{ label: "First Segment", selected: false }, { label: "Second Segment", selected: true }, { label: "Third Segment", selected: false }]
```

<!-- Auto Generated Below -->


## Shadow Parts

| Part        | Description                                      |
| ----------- | ------------------------------------------------ |
| `"content"` | Styles the container of segment buttons.         |
| `"segment"` | Styles each segment button within the container. |


## CSS Custom Properties

| Name                                                  | Description                                                      |
| ----------------------------------------------------- | ---------------------------------------------------------------- |
| `--border-< block \| inline >-< start \| end >-width` | Calculated width given to all segment borders on the given edge. |
| `--border-< block \| inline >-width`                  | Calculated width given to all segment borders on the given axis. |
| `--border-width`                                      | Calculated width given to all segment borders.                   |
| `--padding`                                           | Calculated padding given to all segments.                        |
| `--padding-< block \| inline >`                       | Calculated padding given to all segments on the given axis.      |
| `--padding-< block \| inline >-< start \| end >`      | Calculated padding given to all segments on the given edge.      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
