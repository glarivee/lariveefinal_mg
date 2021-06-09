import { gsap } from "gsap";
export let phonecallTL = gsap.timeline();

//(if using draw svg in this file)
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGPlugin);

phonecallTL
.from("#phoneicons",{alpha:0, duration:2})
//.from("#IncomingCall",{alpha:0, duration:1})

;