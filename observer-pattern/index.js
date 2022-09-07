// Observer
const observers = [];
const Observer = Object.freeze({
  notify: (data) => observers.forEach((observer) => observer(data)),
  subscribe: (func) => observers.push(func),
  unsubscribe: (func) => {
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
});

// Analytics
function sendToGoogleAnalytics(data) {
  console.log("Sent to google analytics: ", data);
}

function sendToCustomAnalytics(data) {
  console.log("Sent to custom analytics: ", data);
}

function sendToEmail(data) {
  console.log("Sent to email: ", data);
}

Observer.subscribe(sendToGoogleAnalytics);
Observer.subscribe(sendToCustomAnalytics);
Observer.subscribe(sendToEmail);

Observer.notify("New data has pushed!");
setTimeout(() => {
  Observer.notify("New data has pushed after timeout!");
}, 3000);
