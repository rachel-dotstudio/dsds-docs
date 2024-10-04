---
title: "Alert Component"
description: Alerts are used to display important messages inline or as toast notifications.

---

```html:preview
<dsds-alert open>
  <dsds-icon slot="icon" name="info-circle"></dsds-icon>
  This is a standard alert. You can customize its content and even the icon.
</dsds-alert>
```


:::tip
Alerts will not be visible if the `open` attribute is not present.
:::

## Examples

### Variants

Set the `variant` attribute to change the alert's variant.

```html:preview
<dsds-alert variant="primary" open>
  <dsds-icon slot="icon" name="info-circle"></dsds-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</dsds-alert>

<br />

<dsds-alert variant="success" open>
  <dsds-icon slot="icon" name="check2-circle"></dsds-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</dsds-alert>

<br />

<dsds-alert variant="neutral" open>
  <dsds-icon slot="icon" name="gear"></dsds-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take effect on next login.
</dsds-alert>

<br />

<dsds-alert variant="warning" open>
  <dsds-icon slot="icon" name="exclamation-triangle"></dsds-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</dsds-alert>

<br />

<dsds-alert variant="danger" open>
  <dsds-icon slot="icon" name="exclamation-octagon"></dsds-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</dsds-alert>
```

```jsx:react
import SlAlert from '@shoelace-style/shoelace/dist/react/alert';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => (
  <>
    <SlAlert variant="primary" open>
      <SlIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </SlAlert>

    <br />

    <SlAlert variant="success" open>
      <SlIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </SlAlert>

    <br />

    <SlAlert variant="neutral" open>
      <SlIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take effect on next login.
    </SlAlert>

    <br />

    <SlAlert variant="warning" open>
      <SlIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </SlAlert>

    <br />

    <SlAlert variant="danger" open>
      <SlIcon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </SlAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html:preview
<dsds-alert variant="primary" open closable class="alert-closable">
  <dsds-icon slot="icon" name="info-circle"></dsds-icon>
  You can close this alert any time!
</dsds-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('dsds-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx:react
import { useState } from 'react';
import SlAlert from '@shoelace-style/shoelace/dist/react/alert';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <SlAlert open={open} closable onSlAfterHide={handleHide}>
      <SlIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </SlAlert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html:preview
<dsds-alert variant="primary" open> Nothing fancy here, just a simple alert. </dsds-alert>
```

```jsx:react
import SlAlert from '@shoelace-style/shoelace/dist/react/alert';

const App = () => (
  <SlAlert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </SlAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html:preview
<div class="alert-duration">
  <dsds-button variant="primary">Show Alert</dsds-button>

  <dsds-alert variant="primary" duration="3000" closable>
    <dsds-icon slot="icon" name="info-circle"></dsds-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </dsds-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('dsds-button');
  const alert = container.querySelector('dsds-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration dsds-alert {
    margin-top: var(--dsds-spacing-medium);
  }
</style>
```

```jsx:react
import { useState } from 'react';
import SlAlert from '@shoelace-style/shoelace/dist/react/alert';
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';

const css = `
  .alert-duration dsds-alert {
    margin-top: var(--dsds-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <SlButton variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </SlButton>

        <SlAlert variant="primary" duration="3000" open={open} closable onSlAfterHide={() => setOpen(false)}>
          <SlIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </SlAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Countdown

Set the `countdown` attribute to display a loading bar that indicates the alert remaining time. This is useful for alerts with relatively long duration.

```html:preview
<div class="alert-countdown">
  <dsds-button variant="primary">Show Alert</dsds-button>

  <dsds-alert variant="primary" duration="10000" countdown="rtl" closable>
    <dsds-icon slot="icon" name="info-circle"></dsds-icon>
    You're not stuck, the alert will close after a pretty long duration.
  </dsds-alert>
</div>

<script>
  const container = document.querySelector('.alert-countdown');
  const button = container.querySelector('dsds-button');
  const alert = container.querySelector('dsds-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-countdown dsds-alert {
    margin-top: var(--dsds-spacing-medium);
  }
</style>
```

```jsx:react
import { useState } from 'react';
import SlAlert from '@shoelace-style/shoelace/dist/react/alert';
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';

const css = `
  .alert-countdown dsds-alert {
    margin-top: var(--dsds-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-countdown">
        <SlButton variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </SlButton>

        <SlAlert variant="primary" duration="3000" countdown="rtl" open={open} closable onSlAfterHide={() => setOpen(false)}>
          <SlIcon slot="icon" name="info-circle" />
          You're not stuck, the alert will close after a pretty long duration.
        </SlAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html:preview
<div class="alert-toast">
  <dsds-button variant="primary">Primary</dsds-button>
  <dsds-button variant="success">Success</dsds-button>
  <dsds-button variant="neutral">Neutral</dsds-button>
  <dsds-button variant="warning">Warning</dsds-button>
  <dsds-button variant="danger">Danger</dsds-button>

  <dsds-alert variant="primary" duration="3000" closable>
    <dsds-icon slot="icon" name="info-circle"></dsds-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </dsds-alert>

  <dsds-alert variant="success" duration="3000" closable>
    <dsds-icon slot="icon" name="check2-circle"></dsds-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </dsds-alert>

  <dsds-alert variant="neutral" duration="3000" closable>
    <dsds-icon slot="icon" name="gear"></dsds-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take effect on next login.
  </dsds-alert>

  <dsds-alert variant="warning" duration="3000" closable>
    <dsds-icon slot="icon" name="exclamation-triangle"></dsds-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </dsds-alert>

  <dsds-alert variant="danger" duration="3000" closable>
    <dsds-icon slot="icon" name="exclamation-octagon"></dsds-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </dsds-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`dsds-button[variant="${variant}"]`);
    const alert = container.querySelector(`dsds-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import SlAlert from '@shoelace-style/shoelace/dist/react/alert';
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <SlButton variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </SlButton>

      <SlButton variant="success" onClick={() => success.current.toast()}>
        Success
      </SlButton>

      <SlButton variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </SlButton>

      <SlButton variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </SlButton>

      <SlButton variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </SlButton>

      <SlAlert ref={primary} variant="primary" duration="3000" closable>
        <SlIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </SlAlert>

      <SlAlert ref={success} variant="success" duration="3000" closable>
        <SlIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </SlAlert>

      <SlAlert ref={neutral} variant="neutral" duration="3000" closable>
        <SlIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take effect on next login.
      </SlAlert>

      <SlAlert ref={warning} variant="warning" duration="3000" closable>
        <SlIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </SlAlert>

      <SlAlert ref={danger} variant="danger" duration="3000" closable>
        <SlIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </SlAlert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html:preview
<div class="alert-toast-wrapper">
  <dsds-button variant="primary">Create Toast</dsds-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('dsds-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('dsds-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <dsds-icon name="${icon}" slot="icon"></dsds-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.dsds-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.dsds-toast-stack {
  left: 0;
  right: auto;
}
```

:::tip
By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.
:::
