import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

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
      },
      {
        title: 'Camunda Developer and Architect',
        description: 'Developing BPMN Workflows and Consulting for mayor telco in Austria',
        link: {
          text: 'Details',
          url: 'https://camunda.com/'
        }
      },
      {
        title: 'Camunda Developer and Consultant',
        description: 'Developing BPMN Workflows and Consulting for mayor telco in Austria',
        link: {
          text: 'Details',
          url: 'https://camunda.com/'
        }
      },
      {
        title: 'E-Commerce SAP-CX',
        description: 'Consulting the major construction company in Austria and acting as an architect and liaison for client.',
        link: {
          text: 'Details',
          url: 'https://sap.com/'
        }
      },
      {
        title: 'E-Commerce SAP-CX',
        description: 'Developer and team lead for a world mayor installations company.',
        link: {
          text: 'Details',
          url: 'https://sap.com/'
        }
      },
      {
        title: 'E-Commerce SAP-CX',
        description: 'Developer for a mayor E-Commerce client in Switzerland',
        link: {
          text: 'Details',
          url: 'https://sap.com/'
        }
      },
      {
        title: 'OpenCMS Insurance Portal',
        description: 'Develop unified OpenCMS platform for all mayor insurance clients in Germany',
        link: {
          text: 'Details',
          url: 'https://sap.com/'
        }
      }
    ]
  }

  constructor() { }

  getProfile(): any {
      return this.profile;
  }
}
