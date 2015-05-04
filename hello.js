// First fully working tabris.js app

// Create a top-level "Page" that contains the UI
var page = tabris.create("Page", {
  title: "Small tabris.js test app",
  topLevel: true
});

// TextView as introduction
var introText = tabris.create("TextView", {
  font: "24px",
  layoutData: {left: 10, top: 10},
  text: "Hi"
}).appendTo(page);

// Add a toggle button and add it to the page
var toggleButton = tabris.create("ToggleButton", {
  layoutData: {left: 10, top: [introText, 20]},
  text: "Ein",
  selection: true
}).appendTo(page);

// Change the toggle text, when selected/unselected
toggleButton.on("change:selection", function(button, selection) {
  this.set("text", selection ? "Ein" : "Aus");
});

// Create a push button and add it to the page
var button = tabris.create("Button", {
  text: "Klick mich",
  layoutData: {centerX: 0, top: [toggleButton, 20]}
}).appendTo(page);

// Create a text view and add it too
var textView = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: [button, 20]}
}).appendTo(page);

// Change the text view's text when the button is pressed
button.on("select", function() {
  textView.set("text", "Button gedrückt");
});


page.open();

