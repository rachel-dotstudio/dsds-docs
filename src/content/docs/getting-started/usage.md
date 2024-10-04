---
title: "Usage"
description: Learn more about using custom elements.

---

DotStudio components are built using Next.js and React they are just regular HTML elements that react to props and attributes.


## Attributes & Properties

Many components have properties that can be set using attributes. For example, buttons accept a `size` attribute that maps to the `size` property which dictates the button's size.

```html
<dsds-button size="small">Click me</dsds-button>
```

Some properties are boolean, so they only have true/false values. To activate a boolean property, add the corresponding attribute without a value.

```html
<dsds-button disabled>Click me</dsds-button>
```

In rare cases, a property may require an array, an object, or a function. For example, to customize the color picker's list of preset swatches, you set the `swatches` property to an array of colors. This must be done with JavaScript.

```html
<dsds-color-picker></dsds-color-picker>

<script>
  const colorPicker = document.querySelector('dsds-color-picker');
  colorPicker.swatches = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
</script>
```

Refer to a component's documentation for a complete list of its properties.

## Events

You can listen for standard events such as `click`, `mouseover`, etc. as you normally would. However, it's important to note that many events emitted within a component's shadow root will be [retargeted](https://dom.spec.whatwg.org/#retarget) to the host element. This may result in, for example, multiple `click` handlers executing even if the user clicks just once. Furthermore, `event.target` will point to the host element, making things even more confusing.

As a result, you should almost always listen for custom events instead. For example, instead of listening to `click` to determine when an `<dsds-checkbox>` gets toggled, listen to `dsds-change`.

```html
<dsds-checkbox>Check me</dsds-checkbox>

<script>
  const checkbox = document.querySelector('dsds-checkbox');
  checkbox.addEventListener('dsds-change', event => {
    console.log(event.target.checked ? 'checked' : 'not checked');
  });
</script>
```

All custom events are prefixed with `dsds-` to prevent collisions with standard events and other libraries. Refer to a component's documentation for a complete list of its custom events.

## Methods

Some components have methods you can call to trigger various behaviors. For example, you can set focus using the `focus()` method.

```html
<dsds-input></dsds-input>

<script>
  const input = document.querySelector('dsds-input');
  input.focus();
</script>
```

Refer to a component's documentation for a complete list of its methods and their arguments.

## Slots

Many components use slots to accept content inside of them. The most common slot is the _default_ slot, which includes any content inside the component that doesn't have a `slot` attribute.

For example, a button's default slot is used to populate its label.

```html
<dsds-button>Click me</dsds-button>
```

Some components also have _named_ slots. A named slot can be populated by adding a child element with the appropriate `slot` attribute. Notice how the icon below has the `slot="prefix"` attribute? This tells the component to place the icon into its `prefix` slot.

```html
<dsds-button>
  <dsds-icon slot="prefix" name="gear"></dsds-icon>
  Settings
</dsds-button>
```

The location of a named slot doesn't matter. You can put it anywhere inside the component and the browser will move it to the right place automatically!

Refer to a component's documentation for a complete list of available slots.

## Don't Use Self-closing Tags

Custom elements cannot have self-closing tags. Similar to `<script>` and `<textarea>`, you must always include the full closing tag.

```html
<!-- Don't do this -->
<dsds-input />

<!-- Always do this -->
<dsds-input></dsds-input>
```
