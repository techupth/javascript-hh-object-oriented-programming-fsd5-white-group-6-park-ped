class EmailNotification {
  constructor(notificationId, createdItem, content, receiver) {
    this.notificationId = notificationId;
    this.createdItem = createdItem;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

let email = new EmailNotification(
  "This is Email",
  "17.35",
  "Park@gmail.com",
  "notPark@gmail.com"
);
let sms = new SMSNotification("This is SMS", "0.00", "Hi, DF Im", "0987654321");

email.send();
sms.send();
