# @astrouxds/astrouxds

## 7.0.0-beta.1

### Major Changes

- d89430ef: Clock - removed CSS custom properties:

  --clock-text-color
  --clock-background-color
  --clock-border-color
  --clock-label-color

- d89430ef: Log - Removed CSS custom properties:

  --log-header-background-color
  --log-filter-background-color
  --log-filter-text-color

- d89430ef: Icon - remove CSS custom properties:

  --icon-default-color

- d89430ef: Classification Marking - removed css custom properties:

  --color-classification-text-dark
  --color-classification-text-light

- 853eead3: rux-pop-up-menu has been re-written to take a slotted trigger element and slotted content. Now changes placement based on available space. Replaces all methods with two new methods, show and hide.
- d89430ef: Checkbox - Deprecate CSS custom properties:

      --checkbox-label-color
      --checkbox-background-color
      --checkbox-border-color
      --checkbox-checked-color
      --checkbox-hover-border-color

- 8d885e14: Clock - The following styles have been removed from the :host element:

  `margin: 0 1rem`

  You may need to apply this to your element directly:

  ```
  rux-clock {
    margin: 0 1rem;
  }
  ```

  `user-select: none`

  If you wish to override this, use the new `container` CSS Shadow Part.

  `height: 3.938rem`

  If you wish to override this, use the new `container` CSS Shadow Part.

  `display: flex`

  The default `display` has been changed to `inline-block`. This can be overwritten by targeting the `rux-clock` host element.

- d89430ef: Checkbox Group - Remove CSS custom properties:

  --checkboxgroup-border-color

- d89430ef: Button - Removed CSS Custom Proprties:

  --button-active-background-color
  --button-active-border-color
  --button-background-color
  --button-border-color
  --button-borderless-hover-color
  --button-borderless-text-color
  --button-hover-background-color
  --button-hover-border-color
  --button-secondary-background-color
  --button-secondary-border-color
  --button-secondary-hover-background-color
  --button-secondary-hover-border-color
  --button-secondary-hover-text-color
  --button-secondary-text-color
  --button-text-color

- d89430ef: Input - removed CSS custom properties:

  --input-background-color
  --input-border-color
  --input-text-color
  --input-focus-border-color
  --input-selection-background-color
  --input-invalid-border-color

- 84e89afc: Notification - Host styles have been moved to the shadow dom. If you were previously styling the <rux-notification> element, use shadow parts instead
- d89430ef: Menu Item Divider - remove CSS custom properties:

  --menu-item-divider-border-color

- d89430ef: Remove CSS custom properties:

  Log

  --log-header-background-color
  --log-filter-background-color
  --log-filter-text-color

  Modal

  --modal-title-color
  --modal-background-color
  --modal-border-color

  Notification

  --notification-text-color

  Progress

  --progress-padding
  --progress-radius
  --progress-height
  --progress-width
  --progress-determinate-bar-background-color
  --progress-determinate-track-background-color
  --progress-determinate-track-border-color
  --progress-label-color

  Push Button

  --pushbutton-background-color
  --pushbutton-border-color
  --pushbutton-text-color
  --pushbutton-selected-background-color
  --pushbutton-selected-border-color
  --pushbutton-selected-text-color
  --pushbutton-selected-hover-text-color

  Radio

  --radio-hover-border-color
  --radio-border-color
  --radio-label-color
  --radio-background-color
  --radio-selected-color

  Radio Group

  --radiogroup-border-color

  Segmented Button

  --segmented-button-background-color
  --segmented-button-text-color
  --segmented-button-border-color
  --segmented-button-hover-background-color
  --segmented-button-hover-text-color
  --segmented-button-hover-border-color
  --segmented-button-selected-background-color
  --segmented-button-selected-text-color
  --segmented-button-selected-hover-background-color
  --segmented-button-selected-hover-text-color
  --segmented-button-selected-hover-border-color
  --segmented-button-border-radius

  Select

  --select-menu-border-radius
  --select-menu-border-hover-color
  --select-menu-border-focus-color
  --select-menu-invalid-border-color
  --select-menu-text-color
  --select-menu-option-text-hover-color
  --select-menu-option-selected-background-color
  --select-menu-option-selected-text-color
  --select-menu-label-color
  --select-menu-inactive-caret
  --select-menu-active-caret
  --select-menu-background-color
  --select-menu-border-color

  Slider

  --slider-thumb-background-color
  --slider-thumb-border-color
  --slider-hover-thumb-background-color
  --slider-hover-thumb-border-color
  --slider-track-background-color
  --slider-selected-track-background-color
  --slider-selected-thumb-border-color
  --slider-thumb-size
  --slider-thumb-border-size
  --slider-value-percent
  --slider-top
  --slider-track-height
  --slider-track-before-thumb-height
  --slider-tick-padding-top

  Switch

  --switch-background-color
  --switch-hover-on-color
  --switch-hover-off-color
  --switch-on-color
  --switch-off-border-color

  Textarea

  --textarea-border-color
  --textarea-text-color
  --textarea-focus-border-color
  --textarea-selection-background-color

  Tabs

  --tab-text-color

  --tab-border-color
  --tab-hover-text-color
  --tab-selected-text-color

  Table

  --table-border-color
  --table-header-background-color
  --table-header-text-color

  --table-header-box-shadow
  --table-row-hover-text-color
  --table-row-selected-background-color
  --table-row-selected-border-color
  --table-row-hover-background-color

  --table-row-border-color
  --table-row-text-color
  --table-row-background-color
  --table-header-border-color

  Tree

  --tree-text-color
  --tree-background-color
  --tree-border-color

  Tree Node

  --tree-accent-color
  --tree-hover-background-color
  --tree-hover-text-color
  --tree-selected-border-color
  --tree-selected-accent-color
  --tree-expanded-border-color

### Minor Changes

- 84e89afc: Notification - add `--height` css custom property
- 84e89afc: Notification - add prefix, default, and actions slots
- 8d885e14: Clock - add container shadow part

## 7.0.0-beta.0

### Major Changes

#### Modal

- Modal will no longer close when clicking outside by default.

  - Why: To align with Astro UXDS compliance requirements 4.3.3: "Dialog Boxes shall be closed only with confirm or cancel Buttons."

  - Migration: If you still require this functionality, a new `clickToClose` property has been added. It defaults to `false` so this will be a breaking change.

- The following properties and attributes have been removed: `modalMessage`, `modalTitle`, `confirmText`, `denyText`.
  - Why: These have been replaced in favor of slots to provide greater flexibility.
  - Migration: Use the new `header`, `message`, and `footer` slots instead.

#### Progress

- Removed the indeterminate functionality from Progress
  - Why: this functionality has been moved to its own component, rux-indeterminate-progress.

### Minor Changes

#### Card

- New component

#### Indeterminate Progress

- New component

#### Container

- New component

## 6.7.0

### Minor Changes

#### Tree Node

- added nowrap/overflow hidden to prevent overflow with long names

#### Modal

- Added a new `dialog` shadow part attached to the native dialog element.

### Patch Changes

#### Tabs

- fixed issue where styles were not properly shadow dom encapsulated

#### Modal

- Removed the fix height on the dialog element that was preventing a long modal message.

#### Tree

- fixed regression where border styles were not being applied

#### Push Button

- fixed the hover styling

## 6.6.0

### Minor Changes

#### Timeline

- Added `timezone` property

### Patch Changes

#### Segmented Button

- fixed issue where the bottom border was being clipped when inside a container element.

#### Slider

- hides label if none is present

#### Form Elements

- Removed extra margin on form elements (checkbox, radio, slider, select, input, textarea) that didn't have a label.

## 6.5.1

### Patch Changes

#### Tag

- Added shadows to align with design.

#### Table

- Updated selected row styling to align with design.

#### Tree / Tree Node

- Updated styling to align with design.
- Added hover state.

## 6.5.0

> NOTE: This release renames many of our internal private CSS Custom Properties (--color-background). If you are using these to build your own UIs, this may be a breaking change for you.

### Minor Changes

#### Select

- Added `size` property.

#### Option

- Added a `disabled` property.

#### Input

- Added `date` and `datetime-local` types.
- Added a `prefix` and `suffix` named slots.

#### Tag

- Created a new Tag component.

### Patch Changes

- Updated components to use the new beta design tokens

#### Button

- Moved `width` attribute out of shadow dom, can now be styled without CSS parts.

#### Notification

- Watch closeAfter to close when updated

#### Slider

- Updated to accept float values.

## 6.4.0

### Minor Changes

- Added text underline to link hover states globally.

#### Select

- Added `multiple` support

#### Timeline [Beta]

- New beta component Timeline is now available

#### Slider

- Added `axis-labels` and `ticks-only` properties, providing tick mark and label support.

#### Textarea

- Added a `size` property. Removed unused `small` property. (This property had no effect so this is not a breaking change)

### Patch Changes

#### Switch

- Updated thumb hover state color to align with design.

#### Clock

- Updated the clock labels to align with design.

#### Tabs

- Updated to align with design

## 6.3.0

### Minor Changes

#### Notification

- Added a `small` prop allowing for a smaller variant.

#### Segmented Button

- Added `size` prop which accepts small, medium or large.

### Patch Changes

#### Notification

- Updated the padding around message and icon to match design.

#### Segmented Button

- Updated hover state styling to match design.

#### Push Button

- Added hover state styling to match design.

#### Monitoring Icon

- Updated the min height and width to match design.

#### Status

- Changed the overall size to be 12px to match design.

## 6.2.0

### Minor Changes

#### Button

- Adds a borderless prop to rux-button, enabling borderless styling.

#### Checkbox Group/Radio Group/Select/Textarea

- Adds required props and functionality to checkbox group, radio group, select and textarea.

### Patch Changes

#### Clock

- Updated margin-left on AOS from 16px to 17px.

#### Classification Marking

- Updated the overall height of classification-tags to match Figma designs. Overall height has gone from 20px -> 22px

#### Button

- Secondary button now has the correct text color on hover.

## 6.1.0

### Minor Changes

#### Icon

- Added new CSS Shadow Part `icon`
- Moved the `icon` shadow part in `rux-icon` to be on the SVG element.

#### Global Status Bar

- Added new CSS Shadow Parts: `icon`, `container`, `username`, and `app-state`

#### Pop Up Menu

- Added new CSS Shadow Part `container`

#### Clock

- Added new CSS Shadow Parts `date`, `date-label`, `time`, `time-label`, `aos`, `aos-label`, `los`, `los-label`.
- Clock now displays the julien date as always 3 digits

#### Button Group

- Added new CSS Shadow Part `container`

#### Button

- Added new CSS Shadow Part `container`

#### Monitoring Progress Icon

- Added new CSS Shadow Parts: `icon`, `monitoring-badge`, `monitoring-label`, `monitoring-sublabel`, `container`, `icon-group`, `progress-display`, `radial-progress`, `status-icon`.

#### Monitoring Icon

- Added new CSS Shadow Parts: `monitoring-badge`, `monitoring-label`, `monitoring-sublabel`.

#### Input

- Added `readonly`, `spellcheck`, and `autocomplete` attributes.
- Added new CSS Shadow Parts: `input`, `form-field`, `error-text`, and `help-text`.

#### Checkbox Group

- Added new CSS Shadow Parts: `error-text` and `help-text`.

#### Radio Group

- Added new CSS Shadow Parts: `error-text` and `help-text`.

#### Slider

- Added new CSS Shadow Parts: `input`, `error-text` and `help-text`.

#### Select

- Added new CSS Shadow Parts: `label`, `select`, `error-text` and `help-text`.

#### Textarea

- Added new CSS Shadow Parts: `textarea`, `error-text` and `help-text`.

#### Push Button

- Added new CSS Shadow Parts: `label` and `icon`.

#### Checkbox

- Added new CSS Shadow Parts: `form-field` and `label`.

#### Radio

- Added new CSS Shadow Parts: `form-field` and `label`.

#### Progress

- Added new CSS Shadow Parts: `progress` and `output`.

#### Modal

- Added new CSS Shadow Parts: `confirm-button` and `deny-button`.

#### Segmented Button

- Added new CSS Shadow Part `label`.

#### Switch

- Added new CSS Shadow Part `switch`. The pseudo selectors ::before select the track, ::after selects the button.

#### Menu Item

- Added new CSS Shadow Part `container`.

#### Menu Item Divider

- Added new CSS Shadow Part `container`.

#### Classification Marking

- Added new CSS Shadow Parts: `footer`, `tag`, and `header`.
- Deprecated CSS Shadow Part `footer-header`. Use `footer` instead.

### Patch Changes

- Fixes issue [#121](https://github.com/RocketCommunicationsInc/astro/issues/121) where boolean attributes in React were not behaving as intended.
