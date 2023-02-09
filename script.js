function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
 init()

function gsapanim() {
	var tl = gsap.timeline();

	tl.from("#navbar", {
		height: "0%",
		ease: Expo.power2,
		opacity: 0,
		// duration: 1,
	})

		.from("#page1-left", {
			height: 0,
			bottom: 0,
			ease: Expo.easeOut.power1,
			opacity: 0,
		})
		.from("#page1-progress-bar", {
			y: 30,
			ease: Expo.easeOut.power1,
			opacity: 0,
		})
		.from("#progress", {
			y: 30,
			ease: Expo.easeOut.power1,
			opacity: 0,
		})
		.from("#page1-img-container", {
			scale: 0,
			ease: Expo.easeOut.power1,
			// opacity: 0,
		});
}
gsapanim();




var image = ["image1.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "LC-latesha-main.jpg"];

		var imgContainer = document.querySelector("#page1-img-container");
		var count = document.querySelector("#count");
		var counter = 0;

		imgContainer.addEventListener("mousemove", function () {
			cursor.style.opacity = 1;
			cursor.style.color = "#222";
			cursor2.style.opacity = 0;
			cursor.innerHTML = "Read";
		});
		imgContainer.addEventListener("mouseleave", function () {
			cursor.style.opacity = 0;
			cursor.style.color = "#222";
			cursor2.style.opacity = 1;
			cursor.innerHTML = "Listen";
		});
		// document.querySelector("#profile").addEventListener("mousemove", function () {
		// 	cursor.style.opacity = 1;
		// 	cursor.style.color = "#222";
		// 	cursor2.style.opacity = 0;
		// 	cursor.innerHTML = "SWIPE";
		// });
		// document.querySelector("#profile").addEventListener("mouseleave", function () {
		// 	cursor.style.opacity = 0;
		// 	cursor.style.color = "#222";
		// 	cursor2.style.opacity = 1;
		// 	cursor.innerHTML = "SWIPE";
		// });

		setInterval(() => {
			if (counter === 4) {
				counter = 0;
			} else {
				counter++;
			}
			imgContainer.style.backgroundImage = `url(${image[counter]})`;
			count.innerHTML = `${counter + 1}`;
		}, 5000);


		function text(){
			gsap.to("#status", {
				width: "100%",
				ease: Expo.linear,
				duration: 5,
				repeat: -1,
			});
		var time = gsap.timeline({
			repeat: -1,
		});
		time
			.fromTo(
				"#no1",
				{
					y: 30,
					ease: Expo.power2,
					opacity: 0,
				},
				{
					y: 0,
					ease: Expo.power2,
					opacity: 1,
					duration: 5,
					// delay: 20,
				}
			)
			.to("#no1", { opacity: 0, duration: 0 })
			.fromTo(
				"#no2",
				{
					y: 30,
					ease: Expo.power2,
					opacity: 0,
				},
				{
					y: 0,
					ease: Expo.power2,
					duration: 5,
					opacity: 1,
					// delay: 15,
				}
			)
			.to("#no2", { opacity: 0, duration: 0 })
			.fromTo(
				"#no3",
				{
					y: 30,
					ease: Expo.power2,
					opacity: 0,
				},
				{
					y: 0,
					ease: Expo.power2,
					duration: 5,
					opacity: 1,
					// delay: 10,
				}
			)
			.to("#no3", { opacity: 0, duration: 0 })
			.fromTo(
				"#no4",
				{
					y: 30,
					ease: Expo.power2,
					opacity: 0,
				},
				{
					y: 0,
					ease: Expo.power2,
					duration: 5,
					opacity: 1,
					// delay: 5,
				}
			)
			.to("#no4", { opacity: 0, duration: 0 })
			.fromTo(
				"#no5",
				{
					y: 30,
					ease: Expo.power2,
					opacity: 0,
				},
				{
					y: 0,
					ease: Expo.power2,
					duration: 5,
					opacity: 1,
					// delay: 0,
				}
			)
			.to("#no5", { opacity: 0, duration: 0 });
		
		}
		text()
		
	










var menu = document.querySelector("#nav i ")
var full = document.querySelector("#full-scr-nav")
var flag =0;
menu.addEventListener("click",function(){
if(flag==0){
    full.style.top="0%";
    flag = 1
}
else{
    full.style.top="-100%";
   
    flag = 0
}
})
