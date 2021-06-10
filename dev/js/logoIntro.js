import { gsap } from "gsap";
export let logoIntroTL = gsap.timeline();

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#yellowCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#Circle2", { transformOrigin: "center center"});
gsap.set("#Circle1", { transformOrigin: "center center"});

logoIntroTL
//logo fades in and circle draws around it
.from("#Ferrari-Logo-Start",{alpha:0, duration:3})
.from("#yellowCircle",{ duration: 2, drawSVG:0}, "-=1")

//white circles appear behind yellow circle
.from("#Circle2",{alpha:0, duration:1}, "appear")
.from("#Circle1",{alpha:0, duration:1}, "appear")

//white circles move to the sides & grow
.to("#Circle2",{x:"+=82", duration:1.5, scale:1.3, y:"-=10"}, "move")
.to("#Circle1",{x:"-=82", duration:1.5, scale:1.3, y:"-=10"}, "move")
.to("#yellowCircle",{alpha:0, duration:.25}, "move")
.to("#Ferrari-Logo-Start",{y:"+=100", duration:1}, "move")

// //white circles fade out, real circles fade in
.to("#Circle2",{alpha:0, duration:1}, "byehi")
.to("#Circle1",{alpha:0, duration:1}, "byehi")
.from("#RPM-circle",{alpha:0, duration:1.2}, "byehi")
.from("#mph-circle",{alpha:0, duration:1.2}, "byehi")
.from ("#GasTank", {alpha:0, duration:1.2}, "byehi")

//logo moves to bottom



// .from("#albumCoverIMG",{alpha:0, duration:2})
;
