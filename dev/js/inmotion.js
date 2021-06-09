import { gsap } from "gsap";
export let inmotionTL = gsap.timeline();


inmotionTL
.to("#MPH",{alpha:0, duration:.75},"drive")
.to("#RPM",{alpha:0, duration:.75},"drive")
.to("#RPM-circle",{alpha:0, duration:.25}, "drive")
.to("#mph-circle",{alpha:0, duration:.25}, "drive")
.from("#LeftGage1",{alpha:0, duration:3},"drive")
.from("#LeftGage2",{alpha:0, duration:3},"drive")
.from("#RightGage1",{alpha:0, duration:3},"drive")
.from("#RightGage2",{alpha:0, duration:3},"drive")
.from("#MPHinmotion",{alpha:0, duration:3},"drive")
.from("#RPMinmotion",{alpha:0, duration:3},"drive")
.from("#MPHmotion",{alpha:0, duration:3},"drive")
.from("#RPMmotion",{alpha:0, duration:3},"drive")

;