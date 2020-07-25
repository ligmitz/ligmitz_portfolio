function color_picker() {
  var colors = ["#ffcccb", "#d0ffce", "#39ff14", "#faed27","#c1ae9f"];
  return colors[Math.floor(Math.random() * 4)];
}


export function create_cards() {
  const cards = document.querySelector("#projects .cards");
  fetch("https://api.github.com/users/ligmitz/repos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        if(data[i].stargazers_count !== 0){
          let card = document.createElement("div");
          let header = document.createElement("div");
          let title = document.createElement("div");
          let link = document.createElement("a");
          let author = document.createElement("div");
          let desc = document.createElement("div");
          let item_color = color_picker();
  
          card.classList.add("card");
          header.classList.add("header");
          title.classList.add("title");
          author.classList.add("author");
          desc.classList.add("descriptor");
  
          title.appendChild(link);
          header.appendChild(title);
          header.appendChild(author);
          card.appendChild(header);
          card.appendChild(desc);
          cards.appendChild(card);
  
          link.textContent = data[i].name;
          author.textContent = data[i].owner.login;
          desc.textContent = data[i].description;
          link.setAttribute("target", "blank");
          link.setAttribute("href", data[i].html_url);
  
          card.style.color = item_color;
          link.style.color = item_color;
        }
      }
    });

}
