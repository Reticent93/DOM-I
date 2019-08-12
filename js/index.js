const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img")
cta.setAttribute('src', siteContent['cta']['img-src'])

let middleImage = document.getElementById('middle-img')
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])



let nav = document.querySelectorAll('a')

nav[0].textContent = siteContent.nav['nav-item-1']
nav[1].textContent = siteContent.nav['nav-item-2']
nav[2].textContent = siteContent.nav['nav-item-3']
nav[3].textContent = siteContent.nav['nav-item-4']
nav[4].textContent = siteContent.nav['nav-item-5']
nav[5].textContent = siteContent.nav['nav-item-6']



function setButton() {
  let button = document.querySelector('.cta-text').children
  button[0].append(siteContent.cta.h1);
  button[1].append(siteContent.cta.button);
}

setButton();

function getIt(items, values) {
  items.forEach((item, index) => item.textContent = values[index])
}

let mainContent = Object.keys(siteContent['main-content']);
let mainC = document.querySelectorAll ('.text-content h4 ');
let mainP = document.querySelectorAll('.text-content p ');
let h4 = [];
let paragraphs = [];

mainContent.forEach((key => {
  if(key.includes('h4')){
    h4.push(siteContent['main-content'][key]);
  }
}))

getIt(mainC, h4);

mainContent.forEach((key => {
  if(key.includes('content')) {
    paragraphs.push(siteContent['main-content'][key])
  }
}))
 getIt(mainP, paragraphs);










