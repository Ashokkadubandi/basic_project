let skillsData = [
  {
    id: 1,
    skill: "HTML",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8iaVaHueCLdIzkbc5wfz7EeSWOsNwH2ohw&s",
    desc:
      "HTML is hyper text markup language which is structured representation to our webpage that,that developers can make web pages. html is contains header tag and body tag where we have to give the additional information in header tag body tag is just the information content that we provide text,images or etc...",
  },
  {
    id: 2,
    skill: "CSS",
    image:
      "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
    desc:
      "CSS is cascading stylesheet that is implement styles to our html elements we can give colors,backgrounds,animations,effects,effects, makes looking style our html elements and free user interference we can import as inline,internal,and external as css. with help of css that our web pages looking good",
  },
  {
    id: 3,
    skill: "Javascript",
    image:
      "https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg?w=720&h=480&fit=clip&auto=format",
    desc:
      "Javascript is a oriented scripting language that mainly changes dynamically our html content and provide responsiveness,styles,animations,page Re-load and many other things javascript is a cross platform that can used by many other things including server scripting language that creates backend projects,also we have able to create frontend projects",
  },
];

let navBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
let mobileNav = document.getElementById("hide");
let skillsEle = document.getElementById("skills");

const createSkills = () => {
  console.log("Function called");
  skillsData.map((each) => {
    const { skill, image, desc } = each;
    const listEle = document.createElement("li");
    listEle.classList.add("skills-list");
    const skillImg = document.createElement("img");
    skillImg.src = image;
    skillImg.classList.add("skill-image");
    listEle.appendChild(skillImg);

    const skillsContent = document.createElement("div");
    skillsContent.classList.add("skill-content");
    listEle.appendChild(skillsContent);

    const skillEle = document.createElement("h1");
    skillEle.textContent = skill;
    skillsContent.appendChild(skillEle);

    const skillDesc = document.createElement("p");
    skillDesc.classList.add("skills-desc");
    skillDesc.textContent = desc;
    skillsContent.appendChild(skillDesc);
    skillsEle.appendChild(listEle);
  });
};

createSkills();

navBtn.onclick = function () {
  mobileNav.classList.add("move-right");
};
closeBtn.onclick = function () {
  mobileNav.classList.toggle("move-right");
};
