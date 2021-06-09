import { gsap } from "gsap";
export let phonecallTL = gsap.timeline();

gsap.set("#EdRooneyIMG", { transformOrigin: "center center"});

//(if using draw svg in this file)
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGPlugin);

phonecallTL
.from("#phoneicons",{alpha:0, duration:1})
.from("#IncomingCall",{alpha:0, duration:1},"ring")
.from("#EdRooneyIMG",{ duration: 1, alpha:0}, "-=.75", "ring")
;