import { gsap } from "gsap";
export let mapTL = gsap.timeline();


mapTL

//making other elements disapper
.to("#IncomingCall",{alpha:0, duration:.2},"gone")
.to("#EdRooneyIMG",{ duration:.2, alpha:0}, "-=.75", "gone")
.to("#buttonIcons",{alpha:0, duration:.2},"gone")

;