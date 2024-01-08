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
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  headerTimeline = gsap.timeline()
  links : any
  selected_flavour :boolean = false
  selected_item:string = ''

  ngOnInit(): void {
    // this.headerTimeline.fromTo('.deskNav', { translateY: -100 }, { translateY: 0, duration: 1, ease: 'elastic.out', delay:.5 })
    //   .to('.deskNav', { width: 640, duration: 2, ease:'elastic.inOut' })
    //   .fromTo('.deskNav a', { display: 'none', opacity: 0 }, {
    //     display: 'inline', opacity: 1, duration: 1, onComplete: () => {
    //       gsap.to('.deskNav', { width: "fit-content",duration:2})
    //     }
    //   })
    this.links = document.querySelectorAll(".nav-link-default")
  }

  linkClick() {
    this.links.forEach((link:HTMLAnchorElement) => {
      link.addEventListener('click', () => {
        for (let index = 0; index < this.links.length; index++) {
          this.links[index].classList.remove('nav-active')
        }
        link.classList.add('nav-active')
      })
    })
  }

  setOption(option:string){
    this.selected_flavour = true;
    this.selected_item = option;
  }

  unselect(){
    this.selected_flavour = false;
    this.selected_item = '';
  }

}