function loco(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  // /* pinType: document.querySelector("#main").style.transform

});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco()
let clutter= "";
document.querySelector(".page2>h1").textContent.split("").forEach(function(dets){
  clutter+=`<span>${dets}</span>`
 document.querySelector(".page2>h1").innerHTML=clutter;
})
gsap.to(`.page2>h1>span`,{
  scrollTrigger:{
    trigger:`.page2>h1>span`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.1,
    marker:true,
    
  },
  stagger:.2,
  color:`#fff`,
  opacity:"1"

})

function canvas(){
  const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./img/frame00001.png
./img/frame00004.png
./img/frame00007.png
./img/frame00010.png
./img/frame00013.png
./img/frame00016.png
./img/frame00019.png
./img/frame00022.png
./img/frame00025.png
./img/frame00028.png
./img/frame00031.png
./img/frame00034.png
./img/frame00037.png
./img/frame00040.png
./img/frame00043.png
./img/frame00046.png
./img/frame00049.png
./img/frame00052.png
./img/frame00055.png
./img/frame00058.png
./img/frame00061.png
./img/frame00064.png
./img/frame00067.png
./img/frame00070.png
./img/frame00073.png
./img/frame00076.png
./img/frame00079.png
./img/frame00082.png
./img/frame00085.png
./img/frame00088.png
./img/frame00091.png
./img/frame00094.png
./img/frame00097.png
./img/frame00100.png
./img/frame00103.png
./img/frame00106.png
./img/frame00109.png
./img/frame00112.png
./img/frame00115.png
./img/frame00118.png
./img/frame00121.png
./img/frame00124.png
./img/frame00127.png
./img/frame00130.png
./img/frame00133.png
./img/frame00136.png
./img/frame00139.png
./img/frame00142.png
./img/frame00145.png
./img/frame00148.png
./img/frame00151.png
./img/frame00154.png
./img/frame00157.png
./img/frame00160.png
./img/frame00163.png
./img/frame00166.png
./img/frame00169.png
./img/frame00172.png
./img/frame00175.png
./img/frame00178.png
./img/frame00181.png
./img/frame00184.png
./img/frame00187.png
./img/frame00190.png
./img/frame00193.png
./img/frame00196.png
./img/frame00199.png
./img/frame00202.png
./img/frame00205.png
./img/frame00211.png
./img/frame00214.png
./img/frame00217.png
./img/frame00220.png
./img/frame00223.png
./img/frame00226.png
./img/frame00229.png
./img/frame00232.png
./img/frame00235.png
./img/frame00238.png
`;
return data.split("\n")[index];
}

const frameCount = 80;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page3`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page3",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas()

