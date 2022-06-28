const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector('#tweets');


tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // const usernameInput = document.querySelectorAll('input')[0];
  // const tweetInput = document.querySelectorAll('input')[1];
  // console.log(usernameInput.value, tweetInput.value);
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;

  // const newTweet = document.createElement("li");
  // const bTag = document.createElement('b');
  // bTag.append(username);
  // newTweet.append(bTag);
  // newTweet.append(`-${tweet}`);
  // console.log(newTweet);
  // tweetsContainer.append(newTweet);
  addTweet(usernameInput.value,tweetInput.value);
  usernameInput.value = '';
  tweetInput.value = '';
});

{/* <li><b>username</b>-hello world</li> */}

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`-${tweet}`);
  console.log(newTweet);
  tweetsContainer.append(newTweet);
}
