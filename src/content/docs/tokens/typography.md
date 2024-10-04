---
title: "Typography Tokens"
description: Typography tokens are used to maintain a consistent set of font styles throughout your app.

---

Typography tokens are used to maintain a consistent set of font styles throughout your app.

Typography tokens are a combination of font family, font size, font weight, letter spacing, and line height.


## Font Family

The default font stack is designed to be simple and highly available on as many devices as possible.

| Token             | Value                                                                                                                                         | Example                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `--dsds-font-sans`  | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' | <span style="font-family: var(--dsds-font-sans)">The quick brown fox jumped over the lazy dog.</span>  |
| `--dsds-font-serif` | Georgia, 'Times New Roman', serif                                                                                                             | <span style="font-family: var(--dsds-font-serif)">The quick brown fox jumped over the lazy dog.</span> |
| `--dsds-font-mono`  | SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;                                                                                | <span style="font-family: var(--dsds-font-mono)">The quick brown fox jumped over the lazy dog.</span>  |

## Font Size

Font sizes use `rem` units so they scale with the base font size. The pixel values displayed are based on a 16px font size.

| Token                     | Value           | Example                                                         |
| ------------------------- | --------------- | --------------------------------------------------------------- |
| `--dsds-font-size-2x-small` | 0.625rem (10px) | <span style="font-size: var(--dsds-font-size-2x-small)">Aa</span> |
| `--dsds-font-size-x-small`  | 0.75rem (12px)  | <span style="font-size: var(--dsds-font-size-x-small)">Aa</span>  |
| `--dsds-font-size-small`    | 0.875rem (14px) | <span style="font-size: var(--dsds-font-size-small)">Aa</span>    |
| `--dsds-font-size-medium`   | 1rem (16px)     | <span style="font-size: var(--dsds-font-size-medium)">Aa</span>   |
| `--dsds-font-size-large`    | 1.25rem (20px)  | <span style="font-size: var(--dsds-font-size-large)">Aa</span>    |
| `--dsds-font-size-x-large`  | 1.5rem (24px)   | <span style="font-size: var(--dsds-font-size-x-large)">Aa</span>  |
| `--dsds-font-size-2x-large` | 2.25rem (36px)  | <span style="font-size: var(--dsds-font-size-2x-large)">Aa</span> |
| `--dsds-font-size-3x-large` | 3rem (48px)     | <span style="font-size: var(--dsds-font-size-3x-large)">Aa</span> |
| `--dsds-font-size-4x-large` | 4.5rem (72px)   | <span style="font-size: var(--dsds-font-size-4x-large)">Aa</span> |

## Font Weight

| Token                       | Value | Example                                                                                                         |
| --------------------------- | ----- | --------------------------------------------------------------------------------------------------------------- |
| `--dsds-font-weight-light`    | 300   | <span style="font-weight: var(--dsds-font-weight-light);">The quick brown fox jumped over the lazy dog.</span>    |
| `--dsds-font-weight-normal`   | 400   | <span style="font-weight: var(--dsds-font-weight-normal);">The quick brown fox jumped over the lazy dog.</span>   |
| `--dsds-font-weight-semibold` | 500   | <span style="font-weight: var(--dsds-font-weight-semibold);">The quick brown fox jumped over the lazy dog.</span> |
| `--dsds-font-weight-bold`     | 700   | <span style="font-weight: var(--dsds-font-weight-bold);">The quick brown fox jumped over the lazy dog.</span>     |

## Letter Spacing

| Token                        | Value    | Example                                                                                                             |
| ---------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `--dsds-letter-spacing-denser` | -0.03em  | <span style="letter-spacing: var(--dsds-letter-spacing-denser);">The quick brown fox jumped over the lazy dog.</span> |
| `--dsds-letter-spacing-dense`  | -0.015em | <span style="letter-spacing: var(--dsds-letter-spacing-dense);">The quick brown fox jumped over the lazy dog.</span>  |
| `--dsds-letter-spacing-normal` | normal   | <span style="letter-spacing: var(--dsds-letter-spacing-normal);">The quick brown fox jumped over the lazy dog.</span> |
| `--dsds-letter-spacing-loose`  | 0.075em  | <span style="letter-spacing: var(--dsds-letter-spacing-loose);">The quick brown fox jumped over the lazy dog.</span>  |
| `--dsds-letter-spacing-looser` | 0.15em   | <span style="letter-spacing: var(--dsds-letter-spacing-looser);">The quick brown fox jumped over the lazy dog.</span> |

## Line Height

| Token                     | Value | Example                                                                                                                                                                                                       |
| ------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--dsds-line-height-denser` | 1     | <div style="line-height: var(--dsds-line-height-denser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--dsds-line-height-dense`  | 1.4   | <div style="line-height: var(--dsds-line-height-dense);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--dsds-line-height-normal` | 1.8   | <div style="line-height: var(--dsds-line-height-normal);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--dsds-line-height-loose`  | 2.2   | <div style="line-height: var(--dsds-line-height-loose);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--dsds-line-height-looser` | 2.6   | <div style="line-height: var(--dsds-line-height-looser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
