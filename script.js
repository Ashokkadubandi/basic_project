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
  {
    id: 4,
    skill: "React js",
    image:
      "https://michaelwashburnjr.com/hubfs/Imported_Blog_Media/react-icon_svg_.png",
    desc:
      "React js is free open source javascript library that developers can make web pages. React js is mainly concerned with rendering elements to th DOM. react js is less codes and more advanced programming,it can holds multiple libraries that are packages, react js is single page application that are easily access content by the process of React-router-dom package",
  },
  {
    id: 5,
    skill: "Node js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    desc:
      "Node js is cross-platform that can run on Windows,Linux,Mac os. it is an open source javascript run time environment Node js is enable to create backend projects and restful API. it enable runs javascript code on server side and outside of the web browser.it is a backend application built on v8 javascript engine on chrome.",
  },
  {
    id: 6,
    skill: "MySQL",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQc8a_3aix3m_fOzVhaMnuGbfFkgNKt8YBzQ&s",
    desc:
      "SQL stands for structured query language that is used to store large huge amount of data in tabular form. it is a specialized programming language. by the use of sql we can create tables of user's data and Retrive data,update data,delete data, and manipulate data by giving a commands of query.",
  },
  {
    id: 7,
    skill: "Python",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5DNTvK4N_GDcwh7PeAbCE5Fk3qu6AsclPPA&s",
    desc:
      "Python is a computer programming language.it is an interpreted,object-oriented,high-level programming language with dynamic semantics,combined with dynamic typing and dynamic binding make it very attractive for Rapid application development.",
  },
];

let navBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
let mobileNav = document.getElementById("hide");
let skillsEle = document.getElementById("skills");

const getScrollAction = () => {
  const boxHeight = window.innerHeight / (0.5 * 4);
  const children = skillsEle.children;
  Array.from(children).forEach((child) => {
    const boxTop = child.getBoundingClientRect().top;
    if (boxTop < boxHeight) {
      child.classList.add("move");
    } else {
      child.classList.remove("move");
    }
  });
};

// getScrollAction();

window.addEventListener("scroll", getScrollAction);

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
