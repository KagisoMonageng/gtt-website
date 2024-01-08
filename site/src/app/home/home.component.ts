import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, EaselPlugin, PixiPlugin, TextPlugin);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    gsap.to('.hero',{backgroundPositionY:'100%',duration:10,scrollTrigger:{
      trigger:'.hero',
      start:'bottom 100%',
      scrub:true
    }})

    gsap.to('.logo',{filter:'brightness(0)',duration:3,scrollTrigger:{
      trigger:'.hero',
      start:'bottom 0%',
      scrub:true
    }})

    gsap.fromTo('.timeline-vertical li',{translateY:50,opacity:0},{translateY:0,opacity:1,stagger:.3,scrollTrigger:{
      trigger:'.timeline-vertical',
      start:'top 99%',
      scrub:true,
     
    }})

  }

}
