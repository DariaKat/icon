function getJSON() {
  var request = new XMLHttpRequest();
  request.open('get', 'https://api.github.com/emojis', true);

  request.onload = function () {
    if (request.readyState == 4) {
      if (request.status === 200) {
        var responseObj = JSON.parse(request.responseText, function (key, value) {
          let div = document.getElementById("help");

          let p = div.appendChild(document.createElement("p")).innerHTML = key;
          let img = div.appendChild(document.createElement("img")).src = value;

        });
      } else {
        console.error(request.statusText);
      }
    }
  };
  request.send();
}