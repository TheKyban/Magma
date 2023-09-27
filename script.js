function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
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
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
loco();

let clutter = "";
document
    .querySelector("#page2 p")
    .textContent.split("")
    .forEach((text) => {
        clutter += `<span>${text}</span>`;
        document.querySelector("#page2 p").innerHTML = clutter;
    });

// gsap.to("#page2", {
//     backgroundColor: "transparent",
//     scrollTrigger: {
//         scroller: "#main",
//         trigger: "#page2",
//         scrub: 0.5,
//         markers: true,
//         end: "top 0%",
//         start:"top -80%"
//     },
// });

gsap.to("#page2 p>span", {
    color: "#fff",
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page2 p>span",
        scrub: 0.5,
        end: "top 0%",
    },
    stagger: 0.2,
});

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", (e) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

const data = `images/frames00007.png
images/frames00010.png
images/frames00013.png
images/frames00016.png
images/frames00019.png
images/frames00022.png
images/frames00025.png
images/frames00028.png
images/frames00031.png
images/frames00034.png
images/frames00037.png
images/frames00040.png
images/frames00043.png
images/frames00046.png
images/frames00049.png
images/frames00052.png
images/frames00055.png
images/frames00058.png
images/frames00061.png
images/frames00061.png
images/frames00061.png
images/frames00064.png
images/frames00067.png
images/frames00070.png
images/frames00073.png
images/frames00076.png
images/frames00079.png
images/frames00082.png
images/frames00085.png
images/frames00088.png
images/frames00091.png
images/frames00094.png
images/frames00097.png
images/frames00100.png
images/frames00103.png
images/frames00106.png
images/frames00109.png
images/frames00112.png
images/frames00115.png
images/frames00118.png
images/frames00121.png
images/frames00124.png
images/frames00127.png
images/frames00130.png
images/frames00133.png
images/frames00136.png
images/frames00139.png
images/frames00142.png
images/frames00145.png
images/frames00148.png
images/frames00151.png
images/frames00154.png
images/frames00157.png
images/frames00160.png
images/frames00163.png
images/frames00166.png
images/frames00169.png
images/frames00172.png
images/frames00175.png
images/frames00178.png
images/frames00181.png
images/frames00184.png
images/frames00187.png
images/frames00190.png
images/frames00193.png
images/frames00196.png
images/frames00202.png`;

const dataArr = data.split("\n");

const frameCount = dataArr.length;
const images = [];
const imageSeq = {
    frame: 1,
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = dataArr[i];
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        trigger: "#page3>canvas",
        scroller: "#main",
        scrub: 0.5,
        start: "top 0",
        end: "top -250%",
    },
    onUpdate: render,
});

images[0].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

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
    scroller: "#main",
    start: "top 0",
    end: "top -250%",
});

// Page4

let clutter1 = "";
document
    .querySelector("#page4 p")
    .textContent.split("")
    .forEach((text) => {
        clutter1 += `<span>${text}</span>`;
        document.querySelector("#page4 p").innerHTML = clutter1;
    });

gsap.to("#page4 p>span", {
    color: "#fff",
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page4 p>span",
        scrub: 0.5,
        end: "top 0%",
        start: "bottom 70%",
    },
    stagger: 0.2,
});

// Page5


const canvas2 = document.querySelectorAll("canvas")[1];
const context2 = canvas2.getContext("2d");

canvas2.height = window.innerHeight;
canvas2.width = window.innerWidth;

window.addEventListener("resize", (e) => {
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    render2();
});

const data2 = `images/bridges00004.png
images/bridges00007.png
images/bridges00010.png
images/bridges00013.png
images/bridges00016.png
images/bridges00019.png
images/bridges00022.png
images/bridges00025.png
images/bridges00028.png
images/bridges00031.png
images/bridges00034.png
images/bridges00037.png
images/bridges00040.png
images/bridges00043.png
images/bridges00046.png
images/bridges00049.png
images/bridges00052.png
images/bridges00055.png
images/bridges00058.png
images/bridges00061.png
images/bridges00064.png
images/bridges00067.png
images/bridges00070.png
images/bridges00073.png
images/bridges00076.png
images/bridges00079.png
images/bridges00082.png
images/bridges00085.png
images/bridges00088.png
images/bridges00091.png
images/bridges00094.png
images/bridges00097.png
images/bridges00100.png
images/bridges00103.png
images/bridges00106.png
images/bridges00109.png
images/bridges00112.png
images/bridges00115.png
images/bridges00118.png
images/bridges00121.png
images/bridges00124.png
images/bridges00127.png
images/bridges00130.png
images/bridges00133.png
images/bridges00136.png
images/bridges00139.png
images/bridges00142.png
images/bridges00145.png
images/bridges00148.png
images/bridges00151.png
images/bridges00154.png`;

const dataArr2 = data2.split("\n");
const frameCount2 = dataArr2.length;
const images2 = [];
const imageSeq2 = {
    frame: 1,
};

for (let i = 0; i < frameCount2; i++) {
    const img = new Image();
    img.src = dataArr2[i];
    images2.push(img);
}

gsap.to(imageSeq2, {
    frame: frameCount2 - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        trigger: "#page5>canvas",
        scroller: "#main",
        scrub: 0.5,
        start: "top 0",
        end: "top -250%",
    },
    onUpdate: render2,
});

images2[0].onload = render2;

function render2() {
    scaleImage(images2[imageSeq2.frame], context2);
}



ScrollTrigger.create({
    trigger: "#page5",
    pin: true,
    scroller: "#main",
    start: "top 0",
    end: "top -250%",
});



// Page6

let clutter2 = "";
document
    .querySelector("#page6 p")
    .textContent.split("")
    .forEach((text) => {
        clutter1 += `<span>${text}</span>`;
        document.querySelector("#page6 p").innerHTML = clutter1;
    });

gsap.to("#page6 p>span", {
    color: "#fff",
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page6 p>span",
        scrub: 2,
        // markers: true,
        end:"top 25%",
        start:"top 90%"
    },
    stagger: 0.2,
});