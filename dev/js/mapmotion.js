import { gsap } from "gsap";
export let mapMotionTL = gsap.timeline();


mapMotionTL

.from("#LocationTracker", {alpha:0, duration:.75})
.from("#mapIcons", {alpha:0, duration:.75})
.from("#mapIMG",{alpha:0, duration:.75})
.from("#GagesMap",{alpha:0, duration:.75})
.from("#MPHmap",{alpha:0, duration:.75})
.from("#RPMmap",{alpha:0, duration:.75})