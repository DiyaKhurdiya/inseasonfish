// instead of data.json, we keep fishData and PopUp() at location

// convert .csv to .json & add here to fishData
const fishData = {
  1: {
    image_src: "abc.jpeg",
    name: "Sharkeon",
    type: "Shark",
    sci_name: "ballseom margarita",
    range: "05-40 M",
    size: "1-1.7 M",
    habitat: "habituational arguments are valid and void",
    fun_fact: "a squid can die from overeating",
  },
  2: {
    image_src: "def.jpg",
    name: "Sharkita",
    type: "Shark",
    sci_name: "sharkiumsphere",
    range: "09-10M",
    size: "0.5-3M",
    habitat: "gargantuan levies apply to moths",
    fun_fact: "an octopus has three hearts",
  },
  3: {
    image_src: "ghi.png",
    name: "Fisheriam",
    type: "Fish",
    sci_name: "fishwaterfish",
    range: "0-100 M",
    size: "0.3 M",
    habitat: "fishes do be swim",
    fun_fact: "i am very tired",
  },
};

// onclick: PopUp(id) & gets div_ID
function PopUp(id) {
  // select fish according to div_ID
  const fish = fishData[id];
  console.log(fish);
  // render fish.data as HTML pop-up
}
