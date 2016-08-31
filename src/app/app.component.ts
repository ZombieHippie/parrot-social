import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { SafeHtml } from '@angular/platform-browser'

declare var twemoji: { parse: (str: string) => string }
@Component({
  selector: 'app',
  template: require('./app.component.html'),
  directives: [],
  styles: [
`:host {
  display: block;
}`,
require('!raw!stylus!./app.component.styl')
  ]
})
export class AppComponent implements OnInit {
  message: SafeHtml = twemoji.parse("Welcome to Parrot Social 😁!")
  joinHeading: SafeHtml = twemoji.parse("💕 Our Ideas? Join Us.")
  positions: {title: SafeHtml, desc: string}[] = [
    { title: twemoji.parse("📢 Hustler")
    , desc: `Do you love our ideas? Help us market them and spread the word by leveraging social media platforms and growth hacker marketing to bring this to a wider audience.`
    },
    { title: twemoji.parse("🎨 Creative")
    , desc: `Do you have a passion for unique design and user experiences which make apps easier to use? Use technologies such as Sketch, Illustrator, and good old fashion pencils to help create wire frames and evolve our brand identity.`
    },
    { title: twemoji.parse("⌨ Developer")
    , desc: `Do you want to develop applications that help hundreds of people a day? Learn Angular 2 and TypeScript (cutting edge web technologies created by Google and Microsoft) with us, by learning from our developers.`
    },
  ]
  constructor (private changeRef: ChangeDetectorRef) {}

  ngOnInit () {
    //
  }
}
