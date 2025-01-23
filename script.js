const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
const team = document.getElementById("team");

for(i = 0; i < teamMembers.length; i++){
  let member = teamMembers[i];
  let name = member.name;
  let role = member.role;
  let img = member.img;
  let mail = member.email;
  team.innerHTML += `<div class="flex margin">
  <img src="${img}" alt=""></img>
  <div>
  <h3>${name}</h3>
  <p>${role}</p>
  <p>${mail}</p>
  </div>
  </div>`
}