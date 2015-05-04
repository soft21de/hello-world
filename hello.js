var page = tabris.create("Page", {
  title: "Hi!",
  topLevel: true
});

var button = tabris.create("Button", {
  text: "Klick mich:-)",
  layoutData: {centerX: 0, top: 100}
}).appendTo(page);

var label = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: [button, 50]}
}).appendTo(page);

var toggleButton = tabris.create("ToggleButton", {
  text: "Ein",
  layoutData: {centerX: 0, top: [label, 50]}
}).appendTo(page);

button.on("select", function() {
  label.set("text", "Button gedrückt");
});

toggleButton.on("select", function() {
  label.set("text, "Toggle gedrückt");
});

page.open();
