function getParagraph() {
  // Select the first <h1> element on the page
  let str = document.querySelector("h1");

  // Check if the <h1> element exists
  if (str) {
    // Apply styles
    str.style.backgroundColor = "yellow";
    str.style.color = "black"; // Reset to a default color, or set to "" if preferred

    // Return the inner HTML content
    return str.innerHTML;
  } else {
    console.warn("No <h1> element found.");
    return null;
  }
}


//Select text function

const p = document.querySelector('html');
p.addEventListener('mouseup', (e) => {
  const selection = window.getSelection().toString();

  if (selection === '') {
     console.log("click");
  } else {
    console.log("selection", selection);
  }
});