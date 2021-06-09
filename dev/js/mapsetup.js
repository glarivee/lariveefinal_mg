import { gsap } from "gsap";
export let mapTL = gsap.timeline();


mapTL

//making other elements disapper
.to("#IncomingCall",{alpha:0, duration:.2},"gone")
.to("#EdRooneyIMG",{ duration:.2, alpha:0}, "-=.75", "gone")
.to("#buttonIcons",{alpha:0, duration:.2},"gone")
.to("#FuelDetail",{alpha:0, duration:.2},"gone")
.to("#timemiles",{alpha:0, duration:.2},"gone")
.to("#LeftGage1",{alpha:0, duration:.2},"gone")
.to("#LeftGage2",{alpha:0, duration:.2},"gone")
.to("#RightGage1",{alpha:0, duration:.2},"gone")
.to("#RightGage2",{alpha:0, duration:.2},"gone")
.to("#MPHinmotion",{alpha:0, duration:.2},"gone")
.to("#RPMinmotion",{alpha:0, duration:.2},"gone")
.to("#MPHmotion",{alpha:0, duration:.2},"gone")
.to("#RPMmotion",{alpha:0, duration:.2},"gone")
.to ("#GasTank", {alpha:0, duration:.2}, "gone")
.to("#phoneicons",{alpha:0, duration:.2}, "gone")

;