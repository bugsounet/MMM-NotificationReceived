/** MMM-NotificationReceived **/
Module.register("MMM-NotificationReceived", {

  defaults: {
    notificationFrom : [ "clock", "calendar" ]
  },

  start: function () {
    console.log("[Notification] Started...")
  },

  notificationReceived: function (notification, payload, sender) {
    let displayed = false
    if (!sender) return
    this.config.notificationFrom.forEach(notiSender => {
      if (sender.name == notiSender) return displayed = true 
    })
    if (displayed) console.log("[Notification][" + sender.name + "] " + notification, payload ? payload : "")
  },

});
