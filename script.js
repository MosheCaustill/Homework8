//hw 8//
//user object//
function User(username) {
  (this.username = username),
    (this.follower = []), //מי שעוקב אחריי//
    (this.addFollower = function (newFollower) {
      this.follower.push(newFollower);
      newFollower.following.push(this);
    });
  (this.following = []), //מי שאני עוקב אחריו//
    (this.addFollowing = function (newFollowing) {
      this.following.push(newFollowing);
      newFollowing.follower.push(this);
    });
  this.inbox = []; //פותח תיבת הודעות//
  this.sendMessage = function (message) {
    this.follower.forEach((followerUser) => {
      followerUser.inbox.push(this.username + " says: " + message);
    });
  };
  this.watchMessage = function () {
    this.inbox.forEach((message) => {
      console.log(message);
    });
    this.inbox = []; //מרוקן הודעות לאחר בצפייה//
  };
}

let user1 = new User("moshe");
let user2 = new User("osnat");
let user3 = new User("david");
let user4 = new User("yakov");

user1.addFollower(user2);
user1.addFollower(user3);
user3.addFollowing(user4);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
user1.sendMessage("happy sokot");
user1.sendMessage("hello world");
console.log(user2.inbox);
user1.sendMessage("ma kore olam blad");
user3.sendMessage("shalom olam ma shlom kolam");
user2.watchMessage();
console.log(user2.inbox);
console.log(user3.inbox);
