// GSAP Imports
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

// My Imports
import { logoIntroTL } from "./logoIntro"
import { detailTL } from "./detail"
import { inmotionTL } from "./inmotion"
import { phonecallTL } from "./phonecall"
import { mapTL } from "./mapsetup"


// Main Timeline
let mainTL = gsap.timeline();

mainTL
.add(logoIntroTL)
.add(detailTL)
.add(inmotionTL)
.add(phonecallTL)
.add(mapTL)
;


// // DEV Tools
GSDevTools.create(); 

