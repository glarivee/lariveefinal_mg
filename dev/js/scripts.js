// GSAP Imports
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

// My Imports
import { logoIntroTL } from "./logoIntro";

// Main Timeline
let mainTL = gsap.timeline();

mainTL
.add(logoIntroTL)
;

// // DEV Tools
GSDevTools.create(); 
