console.log("Hello World!");

var options = {
    type: "basic",
    title: "Hello World",
    message: "Test Test 1",
    iconUrl: "pan.png",
};

function callback() {
    console.log("Received callback");
}

chrome.notifications.create(options);

console.log("Sent Notif");
