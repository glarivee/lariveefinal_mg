import { gsap } from "gsap";
export let phonecallTL = gsap.timeline();

gsap.set("#EdRooneyIMG", { transformOrigin: "center center"});

//(if using draw svg in this file)
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGPlugin);

phonecallTL
.to("#LocationTracker",{alpha:0, duration:.1})
.from("#phoneicons",{alpha:0, duration:1})
.from("#Fill-13", {x:"-=1",repeat:5, yoyo:true, duration:.25})
.from("#IncomingCall",{alpha:0, duration:2},"ring")
.from("#EdRooneyIMG",{ duration: 2, alpha:0}, "-=.75", "ring")
;