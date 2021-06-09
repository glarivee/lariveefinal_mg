import { gsap } from "gsap";
export let detailTL = gsap.timeline();

//(if using draw svg in this file)
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGPlugin);

detailTL
.from("#buttonIcons",{alpha:0, duration:.75},"sametime")
.from("#FuelDetail",{alpha:0, duration:.75},"sametime")
.from("#timemiles",{alpha:0, duration:.75},"sametime")
.from("#MPH",{alpha:0, duration:.75},"sametime")
.from("#RPM",{alpha:0, duration:.75},"sametime")


;