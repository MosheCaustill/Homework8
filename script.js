//hw 8//
//user object//
function User(username) {
  (this.username = username),
    (this.followers = []), //מי שעוקב אחריי//
    (this.addFollower = function (newFollower) {
      this.followers.push(newFollower);
      newFollower.following.push(this);
    });
  (this.following = []), //מי שאני עוקב אחריו//
    (this.addFollowing = function (newFollowing) {
      this.following.push(newFollowing);
      newFollowing.followers.push(this);
    });
  this.inbox = []; //פותח תיבת הודעות//
  this.sendMessage = function (message) {
    this.followers.forEach((follower) => {
      follower.inbox.push(this.username + " says:\nhey "+ follower.username + ' ' + message);
    });
  };
  this.watchMessage = function () {
    console.log('\x1b[34m\x1b[4m'+ this.username + "'s InBox:");
    if (this.inbox.length == 0) {
      console.log('No New Messages');
    } else {
      this.inbox.forEach((message) => {
        console.log(message);
      });
      this.inbox = []; //מרוקן הודעות לאחר הצפייה//
    }
  };
}

let user1 = new User("Moshe");
let user2 = new User("Osnat");
let user3 = new User("Roi");
let user4 = new User("Tamar");

user1.addFollower(user2);//הוספת עוקב//
user1.addFollower(user3);//הוספת עוקב//
user3.addFollowing(user4);//הוספת נעקב//
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
user1.sendMessage("happy sokot");
user1.sendMessage("hello world");
user1.sendMessage("ma kore olam");
user4.sendMessage("boker tov olam ma shlom kolam");
user2.watchMessage();
user1.watchMessage();
user2.watchMessage();
user3.watchMessage();
user4.watchMessage();