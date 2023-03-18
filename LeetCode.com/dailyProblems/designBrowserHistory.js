/**
 * @param {string} homepage
 */
class BrowserHistory {
  constructor(homepage) {
    this.queue = [homepage];
    this.current = 0;
  }
  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    this.queue = this.queue.slice(0, this.current + 1).concat(url);
    this.current = this.queue.length - 1;
  }
  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    this.current = Math.max(this.current - steps, 0);
    return this.queue[this.current];
  }
  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    this.current = Math.min(this.current + steps, this.queue.length - 1);
    return this.queue[this.current];
  }
}

const browserHistory = new BrowserHistory('leetcode.com');
browserHistory.visit('google.com'); // You are in "leetcode.com". Visit "google.com"
browserHistory.visit('facebook.com'); // You are in "google.com". Visit "facebook.com"
browserHistory.visit('youtube.com'); // You are in "facebook.com". Visit "youtube.com"
console.log(browserHistory.back(1)); // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
console.log(browserHistory.back(1)); // You are in "facebook.com", move back to "google.com" return "google.com"
console.log(browserHistory.forward(1)); // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit('linkedin.com'); // You are in "facebook.com". Visit "linkedin.com"
console.log(browserHistory.forward(2)); // You are in "linkedin.com", you cannot move forward any steps.
console.log(browserHistory.back(2)); // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
console.log(browserHistory.back(7)); // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
