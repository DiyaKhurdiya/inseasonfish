const MIN_DEPTH = 0
const MAX_DEPTH = 10929
const firstPageHeight = $(".first-page-offset").height()

// Show depth
$(document).scroll(() => {
  var scrollTop = Math.ceil(($(window).scrollTop() - firstPageHeight) / 17)
  // Hide if sea level or beyond Challenger Deep
  if(scrollTop <= MIN_DEPTH || scrollTop >= MAX_DEPTH){
    scrollTop = (scrollTop >= MAX_DEPTH)? MAX_DEPTH : MIN_DEPTH;
    $(".depth-line").css('opacity', '0');
  }
  else{
    $(".depth-line").css('opacity', '1');
  }
  $(".depth-line span").text(scrollTop)
})


const Data = [{
  "range":50,
  "Image":"./assets/Dusky-Shark-01.svg",
},
{
  "range":400,
  "Image":"./assets/Dwarf-Gulper-Shark-01.svg",
},
{
  "range":1200,
  "Image":"./assets/Black-Spot-Shark-01.svg",
},
{
  "range":850,
  "Image":"./assets/Blue-Shark-01.svg",
},
{
  "range":1800,
  "Image":"./assets/Arrowhead-Dogfish-Shark-01.svg",
},
{
  "range":1700,
  "Image":"./assets/Arabian-Smooth-Hound-Shark-01.svg",
},
];



function displayShark(sharkData){
  for (let i = 0; i < sharkData.length; i++) {
    const shark = sharkData[i];
    const sharkRange = shark["range"];

    const rand_one = Math.random();
    const align = (rand_one>=0.5) ? "start":"end";

    const sharkDiv = document.createElement("div");
    const sharkDivCol = document.createElement("div");
    const sharkImg = document.createElement("img");
    
    sharkDiv.id = i;
    sharkDiv.classList.add("row","justify-content-"+align);
    sharkDiv.setAttribute("style","top:"+sharkRange+"px")
    sharkDivCol.classList.add("col-6");
    sharkImg.classList.add("img")
    sharkImg.setAttribute("src",shark["Image"]);
    
    sharkDivCol.appendChild(sharkImg);
    sharkDiv.appendChild(sharkDivCol);
    
    if(sharkRange>=200 && sharkRange<1000){
      document.getElementById("twilight-zone").appendChild(sharkDiv);
    }else if(sharkRange>=1000){
      document.getElementById("midnight-zone").appendChild(sharkDiv);
    }else{
      document.getElementById("sunlight-zone").appendChild(sharkDiv);
    }


  }
  
};

displayShark(Data);