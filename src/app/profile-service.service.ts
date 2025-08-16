import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  readonly profile: any = {
    name: 'BRANISLAV VIDOVIC',
    titles: ['Software Developer', 'Private Pilot'],
    projects: [
      {
        title: 'JustFly',
        description: 'GA Navigation App for Android. Airspaces in realtime during flight.',
        link: {
          text: 'GitHub',
          url: 'https://github.com/baizba/JustFly'
        }
      },
      {
        title: 'Portfolio',
        description: 'This Website. Angular + Netlify',
        link: {
          text: 'GitHub',
          url: 'https://github.com/baizba/personal-website'
        }
      },
      {
        title: 'Jumper',
        description: 'Reinforcement learning agent for a self-developed game.',
        link: {
          text: 'GitHub',
          url: 'https://github.com/baizba/jumper'
        }
      }
    ]
  }

  constructor() { }

  getProfile(): any {
      return this.profile;
  }
}
