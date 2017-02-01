var grayScaleBtn = document.getElementsByClassName("grayscale-btn");
var sepiaBtn = document.getElementsByClassName("sepia-btn");
var invertBtn = document.getElementsByClassName("invert-btn");
var allList = document.getElementById("all-list");
var grayScaleList = document.getElementById("grayscale-list");
var sepiaList = document.getElementById("sepia-list");
var invertList = document.getElementById("invert-list");
var getImg = document.getElementsByTagName("img");
var overlay = document.querySelector(".overlay");
var plusBtns = document.getElementsByClassName("plus-button");
var holders = document.getElementsByClassName("single-holder");
var filterImg = document.getElementsByTagName("img");
var openBtn = document.querySelector(".open-btn");
var closeBtn = document.querySelector(".close-btn");
var smallViewport = window.matchMedia("screen and (min-width: 768px)");

function clickingPlus(e) {
  e.stopPropagation();
  this.style.display = "none";
  var filterBtns = this.parentNode.getElementsByClassName("filter-btn");
  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].style.display = "block";
  };
};

function leavingHolder(e) {
  e.stopPropagation();
  this.getElementsByClassName("plus-button")[0].style.display = "inline-block";
  var filterBtns = this.getElementsByClassName("filter-btn");
  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].style.display = "none";
  };
};

function grayscaleFilter(e) {
  targetImg = e.target.parentNode.parentNode.getElementsByClassName('filter-img')[0];
  if (targetImg.classList == ("filter-img") || targetImg.classList == ("filter-img sepia") || targetImg.classList == ("filter-img invert")){
    targetImg.classList.remove("sepia");
    targetImg.classList.remove("invert");
    targetImg.classList.add("grayscale");
  } else {
    targetImg.classList.remove("grayscale");
  };
};

function sepiaFilter(e) {
  targetImg = e.target.parentNode.parentNode.getElementsByClassName('filter-img')[0];
  if (targetImg.classList == ("filter-img") || targetImg.classList == ("filter-img grayscale") || targetImg.classList == ("filter-img invert")){
    targetImg.classList.remove("grayscale");
    targetImg.classList.remove("invert");
    targetImg.classList.add("sepia");
  } else {
    targetImg.classList.remove("sepia");
  };
};

function invertFilter(e) {
  targetImg = e.target.parentNode.parentNode.getElementsByClassName('filter-img')[0];
  if (targetImg.classList == ("filter-img") || targetImg.classList == ("filter-img grayscale") || targetImg.classList == ("filter-img sepia")){
    targetImg.classList.remove("grayscale");
    targetImg.classList.remove("sepia");
    targetImg.classList.add("invert");
  } else {
    targetImg.classList.remove("invert");
  };
};

for (var i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener('click', clickingPlus);  
};

for (var i = 0; i < holders.length; i++) {
  holders[i].addEventListener('mouseleave', leavingHolder);  
};

for (var i = 0; i < grayScaleBtn.length; i++) {
  grayScaleBtn[i].addEventListener('click', grayscaleFilter);
};

for (var i = 0; i < sepiaBtn.length; i++) {
  sepiaBtn[i].addEventListener('click', sepiaFilter);
};

for (var i = 0; i < invertBtn.length; i++) {
  invertBtn[i].addEventListener('click', invertFilter);
};

for (var i = 0; i < filterImg.length; i++) {
  filterImg[i].grayscaleFilter;
  filterImg[i].sepiaFilter;
  filterImg[i].invertFilter;
};

grayScaleList.addEventListener('click', function grayscale (e){
  if (allList.classList == "active" || sepiaList.classList == "active" || invertList.classList == "active"){
    allList.classList.remove("active");
    sepiaList.classList.remove("active");
    invertList.classList.remove("active");
    grayScaleList.classList.add("active");
    e.preventDefault();
  };
  for (var i = 0; i < getImg.length; i++){
    if (getImg[i].classList == "filter-img grayscale"){
      getImg[i].style.display = "inline-block";
      getImg[i].parentElement.classList = "single-holder show-holder";
    } else {
      getImg[i].style.display = "none";
      getImg[i].parentElement.classList = "single-holder hide-holder";
    };
  };
});

sepiaList.addEventListener('click', function sepia (e){
  if (allList.classList == "active" || grayScaleList.classList == "active" || invertList.classList == "active"){
    allList.classList.remove("active");
    grayScaleList.classList.remove("active");
    invertList.classList.remove("active");
    sepiaList.classList.add("active");
    e.preventDefault();
  };
  for (var i = 0; i < getImg.length; i++){
    if (getImg[i].classList == "filter-img sepia"){
      getImg[i].style.display = "inline-block";
      getImg[i].parentElement.classList = "single-holder show-holder";
    } else {
      getImg[i].style.display = "none";
      getImg[i].parentElement.classList = "single-holder hide-holder";
    };
  };
});

invertList.addEventListener('click', function invert (e){
  if (allList.classList == "active" || sepiaList.classList == "active" || grayScaleList.classList == "active"){
    allList.classList.remove("active");
    sepiaList.classList.remove("active");
    grayScaleList.classList.remove("active");
    invertList.classList.add("active");
    e.preventDefault();
  };
  for (var i = 0; i < getImg.length; i++){
    if (getImg[i].classList == "filter-img invert"){
      getImg[i].style.display = "inline-block";
      getImg[i].parentElement.classList = "single-holder show-holder";
    } else {
      getImg[i].style.display = "none";
      getImg[i].parentElement.classList = "single-holder hide-holder";
    };
  };
});

allList.addEventListener('click', function all (e){
  for (var i = 0; i < getImg.length; i++){
    getImg[i].style.display = "inline-block";
    getImg[i].parentElement.classList = "single-holder show-holder";
  };
  if (invertList.classList == "active" || sepiaList.classList == "active" || grayScaleList.classList == "active"){
    invertList.classList.remove("active");
    sepiaList.classList.remove("active");
    grayScaleList.classList.remove("active");
    allList.classList.add("active");
    e.preventDefault();
  };
});

var links = document.querySelector(".links");
var linksOpen = document.querySelector(".links__open");

openBtn.addEventListener("click", function open(){
  if (links.className === ("links")) {
    links.className = ("links__open");
    openBtn.style.display = ("none");
    closeBtn.style.display = ("block");
  }
    else {
      links.className = (".links");
      closeBtn.style.display = ("none");
      openBtn.style.display = ("block");
    }
});

closeBtn.addEventListener("click", function close(){
  if (links.className === ("links__open")){
    links.className = ("links");
    closeBtn.style.display = ("none");
    openBtn.style.display = ("block");
}
    else {
      links.className = ("links__open");
      openBtn.style.display = ("none");
      closeBtn.style.display = ("block");
    }
});

smallViewport.addListener(function(mq) {
  if(mq.matches) {
    closeBtn.style.display = ("none");
    openBtn.style.display = ("none");
    links.className = "links";
  }
  else if (links.className === ("links__open")){
    closeBtn.style.display = ("block");
  }
  else if (links.className === ("links")){
    openBtn.style.display = ("block");
  }
});

window.onscroll = function() {
  fixedNavbar();
};

function fixedNavbar() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").className = ("navbar-fixed");
  }
  else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
    document.querySelector("nav").className = ("");
  }
};

/*  var imagesList = document.querySelector(".images");
var createHolder = document.createElement("div").classList("single-holder show-holder");
var createImg = document.createElement("img");

function createImg(class, src, alt){
  var img = document.createElement("img");
  img.class = class;
  img.src = src;
  img.alt = alt;
};

plusBtns.addEventListener("click", addImg){
  
}

function addImg() {
  imagesList.appendChild(createHolder).createImg("filter-img", "img/thumbnail.png", "");
} */