/*
유저별로 팔로우를 할수있구나 이런
일단 유저가 본인 팔로우 목록을 기억해야함
모든 트윗을 기억하는 하나의 배열 (어차피 시간순)
    이거 필터돌리면되나? 될거같은데 숫자가 작아서
*/
class Tweet {
  constructor(userId, tweetId) {
    this.userId = userId;
    this.tweetId = tweetId;
  }
}

class User {
  constructor(userId) {
    this.userId = userId;
    this.follows = new Set([userId]);
  }
  follow(userId) {
    this.follows.add(userId);
  }
  unfollow(userId) {
    this.follows.delete(userId);
  }
}

var Twitter = function () {
  this.tweets = [];
  this.users = {};
};

Twitter.prototype.addNewUser = function (userId) {
  if (!this.users[userId]) {
    this.users[userId] = new User(userId);
  }
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.tweets.push(new Tweet(userId, tweetId));
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  this.addNewUser(userId);
  const user = this.users[userId];
  const result = [];
  for (let i = this.tweets.length - 1; i >= 0 && result.length < 10; i -= 1) {
    if (user.follows.has(this.tweets[i].userId)) {
      result.push(this.tweets[i].tweetId);
    }
  }
  return result;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  this.addNewUser(followerId);
  this.users[followerId].follows.add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  this.addNewUser(followerId);
  this.users[followerId].follows.delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
