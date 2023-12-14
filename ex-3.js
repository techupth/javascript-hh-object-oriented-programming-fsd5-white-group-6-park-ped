class User {
  constructor(id, name, email) {
    this.id = id; //string
    this.name = name; //string
    this.email = email; //string
  }
}

class postList {
  constructor(posts) {
    this.posts = posts; //array
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost(title) {
    console.log(`You've shared post "${title}" to your friend`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id; //string
    this.title = title; //string
    this.content = content; //string
    this.comment = comment; //array
  }

  addComment(comment) {
    this.comment.push(comment);
  }
}

class Comment {
  constructor(id, content, createBy, like) {
    this.id = id; //string
    this.content = content; //string
    this.createBy = createBy; //string
    this.like = 0;
  }
  addLike() {
    this.like = this.like + 1;
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList; //array
    this.pageList = pageList; //array
  }
  addGroup(group) {
    this.groupList.push(group);
  }
  addPage(page) {
    this.pageList.push(page);
  }
}
class FacebookPage {
  constructor(name) {
    this.name = name; //string
  }
}
class FacebookGroup {
  constructor(name) {
    this.name = name; //string
  }
}
class Notification {
  constructor(id) {
    this.id = id; //string
  }
  send(createBy, title) {
    console.log(
      `Notification : ${createBy} has just commented on this post-"${title}
      }"`
    );
  }
}

let resultUser = new User("001", "Park", "Parkzaza@gmail.com");
console.log(resultUser);

let resultPostList = new postList(["Hi"]);
resultPostList.addPost("world");
resultPostList.sharePost("ekek");
console.log(resultPostList);
let resultPost = new Post("001", "hello", "12345", ["wayways"]);
resultPost.addComment("LLLLL");
console.log(resultPost);

let resultComment = new Comment("001", "MMM", "park", 0);
resultComment.addLike();
console.log(resultComment);
let resultFacebook = new Facebook(["park01"], ["park02"]);
resultFacebook.addGroup("yolo");
resultFacebook.addPage("not yoyo");
console.log(resultFacebook);

let resultFacebookPage = new FacebookPage("not Park");
console.log(resultFacebookPage);

let resultFacebookGroup = new FacebookGroup("Ohlaaa");
console.log(resultFacebookGroup);

let resultNotification = new Notification("001");
resultNotification.send("boring", "nanana");
console.log(resultNotification);
