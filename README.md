# MMM-NotificationReceived


Simple module for developping.<br>
It allow to show notification send by modules.<br>
Notification is shown in dev console launched by `npm start dev`

## Installation

```sh
cd ~/MagicMirror/modules
git clone https://github.com/bugsounet/MMM-NotificationReceived
```

## Configuration

```js
  {
    module: "MMM-NotificationReceived",
    disabled: false,
    config: {
      notificationFrom : [ "clock", "calendar" ]
    }
  },
```
- `notificationFrom` is an array of modules for which you want to see notifications.
- If you want to disable the module, you can use `disabled: true,`

