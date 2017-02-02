var grayScaleBtn = document.getElementsByClassName("grayscale-btn");
    sepiaBtn = document.getElementsByClassName("sepia-btn");
    invertBtn = document.getElementsByClassName("invert-btn");
    allList = document.getElementById("all-list");
    grayScaleList = document.getElementById("grayscale-list");
    sepiaList = document.getElementById("sepia-list");
    invertList = document.getElementById("invert-list");
    getImg = document.getElementsByTagName("img");
    plusBtns = document.getElementsByClassName("plus-button");
    holders = document.getElementsByClassName("single-holder");
    openBtn = document.querySelector(".open-btn");
    closeBtn = document.querySelector(".close-btn");
    smallViewport = window.matchMedia("screen and (min-width: 767px)");
    links = document.querySelector(".links");
    linksOpen = document.querySelector(".links__open");

var refreshFilter = function() {
  var mobileMenu = document.getElementsByClassName('links__open');
      desktopMenu = document.getElementsByClassName('links');
      visibleMenu = (mobileMenu.length > 0) ? mobileMenu : ((desktopMenu.length > 0) ? desktopMenu : null);

  if (visibleMenu !== null) {
    visibleMenu[0].getElementsByClassName('active')[0].click();
  } else {
    console.log(visibleMenu);
  };
};

function addPadding(){
  var imgsSection = document.getElementById("images-section");
  if (imgsSection.style.paddingTop !== "6.5rem"){
    imgsSection.style.paddingTop = "6.5rem";
  } else {
    imgsSection.style.paddingTop = "0";
  };
};

function clickingPlus (e) {
  e.stopPropagation();
  this.style.display = "none";
  var filterBtns = this.parentNode.getElementsByClassName("filter-btn");
  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].style.display = "block";
  };
};

function leavingHolder (e) {
  e.stopPropagation();
  this.getElementsByClassName("plus-button")[0].style.display = "inline-block";
  var filterBtns = this.getElementsByClassName("filter-btn");
  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].style.display = "none";
  };
};

function grayscaleFilter (e) {
  targetImg = e.target.parentNode.parentNode.getElementsByClassName('filter-img')[0];
  if (targetImg.classList == ("filter-img") || targetImg.classList == ("filter-img sepia") || targetImg.classList == ("filter-img invert")){
    targetImg.classList.remove("sepia");
    targetImg.classList.remove("invert");
    targetImg.classList.add("grayscale");
  } else {
    targetImg.classList.remove("grayscale");
  };
  refreshFilter();
};

function sepiaFilter (e) {
  targetImg = e.target.parentNode.parentNode.getElementsByClassName('filter-img')[0];
  if (targetImg.classList == ("filter-img") || targetImg.classList == ("filter-img grayscale") || targetImg.classList == ("filter-img invert")){
    targetImg.classList.remove("grayscale");
    targetImg.classList.remove("invert");
    targetImg.classList.add("sepia");
  } else {
    targetImg.classList.remove("sepia");
  };
  refreshFilter();
};

function invertFilter (e) {
  targetImg = e.target.parentNode.parentNode.getElementsByClassName('filter-img')[0];
  if (targetImg.classList == ("filter-img") || targetImg.classList == ("filter-img grayscale") || targetImg.classList == ("filter-img sepia")){
    targetImg.classList.remove("grayscale");
    targetImg.classList.remove("sepia");
    targetImg.classList.add("invert");
  } else {
    targetImg.classList.remove("invert");
  };
  refreshFilter();
};

function grayscale (e){
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
};

function sepia (e){
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
};

function invert (e){
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
};

function all (e){
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
};

function openLinks(){
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
  addPadding();
};

function closeLinks(){
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
  addPadding();
};

function mediaMatch(mq) {
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
  addPadding();
};

function fixedNavbar() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").className = ("navbar-fixed");
  }
  else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
    document.querySelector("nav").className = ("");
  }
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

for (var i = 0; i < getImg.length; i++) {
  getImg[i].grayscaleFilter;
  getImg[i].sepiaFilter;
  getImg[i].invertFilter;
};

grayScaleList.addEventListener('click', grayscale);
sepiaList.addEventListener('click', sepia);
invertList.addEventListener('click', invert);
allList.addEventListener('click', all);
openBtn.addEventListener("click", openLinks);
closeBtn.addEventListener("click", closeLinks); 
smallViewport.addListener(mediaMatch);
window.onscroll = function() {
  fixedNavbar();
};