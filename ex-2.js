class Notification {
  constructor(notificationId, createdTime, content, recevier) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.recevier = recevier;
  }
  send() {
    console.log(`Notification has been sent to ${this.recevier}`);
  }
}

class EmailNotification extends Notification {}

class SMSNotification extends Notification {}

let email = new EmailNotification(
  "This is Email",
  "12.00",
  "Hi,boy",
  "ipark@gmail.com"
);
let sms = new SMSNotification(
  "This is SMS",
  "0.00",
  "are u happy",
  "0897654321"
);
email.send();
sms.send();
