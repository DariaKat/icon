function getJSON() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/emojis', true);
  request.onload = () => {
    if (request.readyState == 4) {
      if (request.status === 200) {
        JSON.parse(request.responseText, (key, value) => {
          if (typeof (key) == 'string' && typeof (value) != 'object') {
            let section = document.getElementById('grid');
            let cell = section.appendChild(document.createElement('div'));
            cell.appendChild(document.createElement('p')).innerHTML = key;
            cell.appendChild(document.createElement('img')).src = value;
          }
        });
      } else {
        console.error(request.statusText);
      }
    }
  };
  request.send();
}