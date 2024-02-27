document.getElementById("btn").addEventListener("click", function () {
  // Redirect to another page
  window.location.href = "https://pratik6001.github.io/page1/";
});

function isMouseOverElement(event, element) {
  var rect = element.getBoundingClientRect();
  return (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var hoverElement = document.getElementById("stag");
  var box = document.getElementById("container_02");
  //show box on hover
  hoverElement.addEventListener("mouseover", function () {
    box.style.display = "flex";
  });
  // Hide box when mouse leaves hover-element or box
  hoverElement.addEventListener("mouseout", function () {
    if (!isMouseOverElement(Event, box) && !isMouseOverElement(event, box)) {
      box.style.display = "none";
    }
  });
  box.addEventListener("mouseout", function (event) {
    if (
      !isMouseOverElement(Event, hoverElement) &&
      !isMouseOverElement(event, box)
    ) {
      box.style.display = "none";
    }
  });
});
