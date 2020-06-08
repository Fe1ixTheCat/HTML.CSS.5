window.addEventListener("DOMContentLoaded", () => {

  function req() {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();
  }

});
