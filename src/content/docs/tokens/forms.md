---
title: "Forms"
description: Form tokens are used to style form controls.

---


All of the design tokens described herein are considered relatively stable. However, some changes might occur in future versions to address mission critical bugs or improvements. If such changes occur, they _will not_ be considered breaking changes and will be clearly documented in the [changelog](/resources/changelog).

Most design tokens are consistent across the light and dark theme. Those that vary will show both values.

:::tip
Currently, the source of design tokens is considered to be `light.css`. The dark theme, `dark.css`, mirrors all of the same tokens with dark mode-specific values where appropriate. 
:::

## Form Inputs

Form input tokens control the appearance of form controls such as 'input', 'select', 'textarea', etc.

| Token                                   | Value                              |
| --------------------------------------- | ---------------------------------- |
| `--dsds-input-height-small`               | `1.875rem` (30px @ 16px base)      |
| `--dsds-input-height-medium`              | `2.5rem` (40px @ 16px base)        |
| `--dsds-input-height-large`               | `3.125rem` (50px @ 16px base)      |
| `--dsds-input-background-color`           | `var(--dsds-color-neutral-0)`        |
| `--dsds-input-background-color-hover`     | `var(--dsds-input-background-color)` |
| `--dsds-input-background-color-focus`     | `var(--dsds-input-background-color)` |
| `--dsds-input-background-color-disabled`  | `var(--dsds-color-neutral-100)`      |
| `--dsds-input-border-color`               | `var(--dsds-color-neutral-300)`      |
| `--dsds-input-border-color-hover`         | `var(--dsds-color-neutral-400)`      |
| `--dsds-input-border-color-focus`         | `var(--dsds-color-primary-500)`      |
| `--dsds-input-border-color-disabled`      | `var(--dsds-color-neutral-300)`      |
| `--dsds-input-border-width`               | `1px`                              |
| `--dsds-input-required-content`           | `*`                                |
| `--dsds-input-required-content-offset`    | `-2px`                             |
| `--dsds-input-required-content-color`     | `var(--dsds-input-label-color)`      |
| `--dsds-input-border-radius-small`        | `var(--dsds-border-radius-medium)`   |
| `--dsds-input-border-radius-medium`       | `var(--dsds-border-radius-medium)`   |
| `--dsds-input-border-radius-large`        | `var(--dsds-border-radius-medium)`   |
| `--dsds-input-font-family`                | `var(--dsds-font-sans)`              |
| `--dsds-input-font-weight`                | `var(--dsds-font-weight-normal)`     |
| `--dsds-input-font-size-small`            | `var(--dsds-font-size-small)`        |
| `--dsds-input-font-size-medium`           | `var(--dsds-font-size-medium)`       |
| `--dsds-input-font-size-large`            | `var(--dsds-font-size-large)`        |
| `--dsds-input-letter-spacing`             | `var(--dsds-letter-spacing-normal)`  |
| `--dsds-input-color`                      | `var(--dsds-color-neutral-700)`      |
| `--dsds-input-color-hover`                | `var(--dsds-color-neutral-700)`      |
| `--dsds-input-color-focus`                | `var(--dsds-color-neutral-700)`      |
| `--dsds-input-color-disabled`             | `var(--dsds-color-neutral-900)`      |
| `--dsds-input-icon-color`                 | `var(--dsds-color-neutral-500)`      |
| `--dsds-input-icon-color-hover`           | `var(--dsds-color-neutral-600)`      |
| `--dsds-input-icon-color-focus`           | `var(--dsds-color-neutral-600)`      |
| `--dsds-input-placeholder-color`          | `var(--dsds-color-neutral-500)`      |
| `--dsds-input-placeholder-color-disabled` | `var(--dsds-color-neutral-600)`      |
| `--dsds-input-spacing-small`              | `var(--dsds-spacing-small)`          |
| `--dsds-input-spacing-medium`             | `var(--dsds-spacing-medium)`         |
| `--dsds-input-spacing-large`              | `var(--dsds-spacing-large)`          |
| `--dsds-input-focus-ring-color`           | `hsl(198.6 88.7% 48.4% / 40%)`     |
| `--dsds-input-focus-ring-offset`          | `0`                                |

## Filled Form Inputs

Filled form input tokens control the appearance of form controls using the `filled` variant.

| Token                                         | Value                         |
| --------------------------------------------- | ----------------------------- |
| `--dsds-input-filled-background-color`          | `var(--dsds-color-neutral-100)` |
| `--dsds-input-filled-background-color-hover`    | `var(--dsds-color-neutral-100)` |
| `--dsds-input-filled-background-color-focus`    | `var(--dsds-color-neutral-100)` |
| `--dsds-input-filled-background-color-disabled` | `var(--dsds-color-neutral-100)` |
| `--dsds-input-filled-color`                     | `var(--dsds-color-neutral-800)` |
| `--dsds-input-filled-color-hover`               | `var(--dsds-color-neutral-800)` |
| `--dsds-input-filled-color-focus`               | `var(--dsds-color-neutral-700)` |
| `--dsds-input-filled-color-disabled`            | `var(--dsds-color-neutral-800)` |

## Form Labels

Form label tokens control the appearance of labels in form controls.

| Token                               | Value                        |
| ----------------------------------- | ---------------------------- |
| `--dsds-input-label-font-size-small`  | `var(--dsds-font-size-small)`  |
| `--dsds-input-label-font-size-medium` | `var(--dsds-font-size-medium`) |
| `--dsds-input-label-font-size-large`  | `var(--dsds-font-size-large)`  |
| `--dsds-input-label-color`            | `inherit`                    |

## Help Text

Help text tokens control the appearance of help text in form controls.

| Token                                   | Value                         |
| --------------------------------------- | ----------------------------- |
| `--dsds-input-help-text-font-size-small`  | `var(--dsds-font-size-x-small)` |
| `--dsds-input-help-text-font-size-medium` | `var(--dsds-font-size-small)`   |
| `--dsds-input-help-text-font-size-large`  | `var(--dsds-font-size-medium)`  |
| `--dsds-input-help-text-color`            | `var(--dsds-color-neutral-500)` |