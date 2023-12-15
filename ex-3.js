// Exercise #3

// ให้สร้าง Class โดยที่ Class ต้องมี Property และ Methods ให้รองรับการใช้งานเว็บไซต์ Facebook รายละเอียดในส่วน User Requirement มีดังนี้
// ผู้ใช้งานสามารถสร้างโพสต์ใหม่
// ผู้ใช้งานสามารถแชร์ไปให้เพื่อนๆ ได้
// ผู้ใช้งานสามารถเพิ่มคอมเม้นต์ลงในโพสต์ได้ แล้วก็สามารถที่จะไลค์คอมเม้นต์ได้
// ผู้ใช้งานสามารถที่จะสร้างกลุ่มหรือเพจได้

// ระบบสามารถส่ง Notification ไปหาผู้ใช้งานเวลามีข้อความใหม่ๆ หรือเวลาที่เพื่อนคอมเม้นต์มาที่โพสต์ของผู้ใช้งาน รายละเอียดในส่วน Technical Requirement มีดังนี้

// ตัว Class User มีรายละเอียดดังนี้
// มี Methods ทั้งหมด 1 ตัว
// constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class โดยมี Property ดังนี้
// id คือตัวบ่งชี้ของผู้ใช้นั้นเป็น String
// name คือชื่อของผู้ใช้เป็น String
// email คืออีเมลของผู้ใช้เป็น String

class User {
  constructor(id, name, email) {
    this.id = id; //String
    this.name = name; //String
    this.email = email; //String
  }
}

let inputUser = new User("STAY08", "Yang Jeong-in", "I.N.@straykids.jyp");
inputUser;
// ตัว Class postList มีรายละเอียดดังนี้
// มี Methods ทั้งหมด 3 ตัว
// constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class โดยมี Property ดังนี้
// posts เป็น Array ของ Object Post
// addPost เป็น Method ที่สามารถเพิ่ม Post เข้าไปใน posts
// sharePost เป็น Method ที่สามารถแสดงผล title ของ Post ได้
// แสดงผลข้อความออกมาทางหน้าจอด้วย console.log() ในข้อความรูปแบบนี้
// You've shared post “<post-title>” to your friend.
// <post-title> คือหัวข้อของ Post

class postList {
  constructor(posts) {
    this.posts = posts; //Array
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost(title) {
    console.log(`You've shared post ${title} to your friend.`);
  }
}
let inputPostList = new postList(["Today is so tough"]); //Array addPost(post),sharePost(title)
inputPostList.addPost("Need more time to sleep");
inputPostList.sharePost(`"Quote of the day"`);
inputPostList;

// ตัว Class Post มีรายละเอียดดังนี้
// มี Methods ทั้งหมด 2 ตัว
// constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class โดยมี Property ดังนี้
// id คือตัวบ่งชี้ของ Post นั้นเป็น String
// title คือหัวข้อของ Post นั้นเป็น String
// content คือข้อความของ Post นั้นเป็น String
// comment คือคอมเมนต์ใน Post เป็น Array
// addComment เป็น Method ที่สามารถเพิ่มคอมเมนต์เข้าไปใน comment ของ Post นั้น ๆ ได้

class Post {
  constructor(id, title, content, comment) {
    this.id = id; //String
    this.title = title; //String
    this.content = content; //String
    this.comment = comment; //Array
  }
  addComment(newComment) {
    this.comment.push(newComment);
  }
}

let inputPost = new Post("STAY08", "title", "content", ["leave comment here"]); //All String except comment is Array **addComment
inputPost.addComment("Mercy me!");
console.log(inputPost);

//ตัว Class Comment มีรายละเอียดดังนี้
// มี Methods ทั้งหมด 2 ตัว
// constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class โดยมี Property ดังนี้
// id คือตัวบ่งชี้ของคอมเมนต์นั้นเป็น String
// content คือข้อความของคอมเมนต์นั้นเป็น String
// createdBy คือชื่อของคอมเมนต์เป็น String
// like คือจำนวนไลค์มีค่าเริ่มต้นเป็น 0
// addLike เป็น Method ที่สามารถเพิ่มไลค์เข้าไปใน like ของคอมเมนต์นั้น ๆ ได้ (เพิ่มทีละ 1)

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id; //String
    this.content = content; //String
    this.createdBy = createdBy; //String
    this.like = 0; //Number
  }
  addLike() {
    this.like += 1;
  }
}
let inputComment = new Comment("id:08", "content", "STAY", 0); //All String except like is Number
inputComment.addLike();
inputComment;
// ตัว Class Facebook มีรายละเอียดดังนี้
// มี Methods ทั้งหมด 2 ตัว
// constructor เป็น Method ที่สามารถ Set ค่าให้กับ Property ใน Class โดยมี Property ดังนี้
// groupList เป็น Array ของ Facebook Group
// pageList เป็น Array ของ Facebook Page
// addGroup เป็น Method ที่สามารถเพิ่ม Facebook Group เข้าไปใน groupList (เพิ่มทีละ 1)
// addPage เป็น Method ที่สามารถเพิ่ม Facebook Page เข้าไปใน pageList (เพิ่มทีละ 1)

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList; //Array
    this.pageList = pageList; //Array
  }
  addGroup(newGroup) {
    for (let i = 0; i < newGroup.length; i++) {
      this.groupList.push(newGroup[i]);
    }
  }
  addPage(newPage) {
    for (let i = 0; i < newPage.length; i++) {
      this.pageList.push(newPage[i]);
    }
  }
}
let inputFacebook = new Facebook(["HyungLine"], ["PerformPage"]); //Array
inputFacebook.addGroup(["MaknaeLine", "3Racha"]);
inputFacebook.addPage(["SongListPage"]);
inputFacebook;
// ตัว Class FacebookPage มีรายละเอียดดังนี้
// มี Methods ทั้งหมด 1 ตัว
// constructor เป็น Method ที่สามารถ Set ค่าเริ่มต้นให้กับ Property ใน Class โดยมี Property ดังนี้
// name คือชื่อของ Facebook Page เป็น String

class FacebookPage {
  constructor(name) {
    this.name = name; //String
  }
}
let inputFacebookPage = new FacebookPage("I'm new STAY");
inputFacebookPage; //String

//String
// ตัว Class FacebookGroup มีรายละเอียดดังนี้
// มี Methods ทั้งหมด 1 ตัว
// constructor เป็น Method ที่สามารถ Set ค่าเริ่มต้นให้กับ Property ใน Class โดยมี Property ดังนี้
// name คือชื่อของ Facebook Group เป็น String

class FacebookGroup {
  constructor(name) {
    this.name = name; //String
  }
}
let inputFacebookGroup = new FacebookGroup("New-STAY❤️"); //String
inputFacebookGroup;
// ตัว Class Notification มีรายละเอียดดังนี้
// มี Methods ทั้งหมด 2 ตัว
// constructor เป็น Method ที่สามารถ Set ค่าเริ่มต้นให้กับ Property ใน Class โดยมี Property ดังนี้
// id คือตัวบ่งชี้ของ Notification เป็น String
// send เป็น Method ที่สามารถแสดงผล Notification ของ Post ได้
// แสดงผลข้อความออกมาทางหน้าจอด้วย console.log() ในข้อความรูปแบบนี้
// Notification: <comment-createdBy> has just commented on this post—"<post-title>”
// <comment-createdBy> คือชื่อของผู้คอมเมนต์
// <post-title> คือหัวข้อของ Post

class Notification {
  constructor(id) {
    this.id = id;
  }
  send(commentBy, titlePost) {
    console.log(
      `Notification: ${commentBy} has just commented on this post—"${titlePost}”`
    );
  }
}
const newNotification = new Notification("id:08");
newNotification.send("ME", "What the H! 🔥🔥🔥 (HH)");
