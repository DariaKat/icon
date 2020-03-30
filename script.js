function getJSON() {
  var request = new XMLHttpRequest();
  request.open('get', 'https://api.github.com/emojis', true);

  request.onload = function () {
    if (request.readyState == 4) {
      if (request.status === 200) {
        let responseObj = JSON.parse(request.responseText, function (key, value) {
          let section = document.getElementById("grid");
          let cell = section.appendChild(document.createElement("div"));
          cell.appendChild(document.createElement("p")).innerHTML = key;
          cell.appendChild(document.createElement("img")).src = value;
        });
      } else {
        console.error(request.statusText);
      }
    }
  };
  request.send();
}