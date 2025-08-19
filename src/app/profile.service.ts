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
        },
        skills: ['Java', 'Android', 'GeoSpatial', 'OSM Droid', 'OpenStreet Maps', 'Open FlightMaps'],
        longDescription: `
        Android Application used by private pilots to safely navigate Airspaces.
        OSM Droid used for map functionality. Open FlightMaps are used to show airspaces.
        It is also possible to switch to OpenStreet Maps for more detailed landscape.
        There is also possibility to record GPX data so the flight can be review in 3D.
        `
      },
      {
        title: 'Portfolio',
        description: 'This Website. Angular + Netlify',
        link: {
          text: 'GitHub',
          url: 'https://github.com/baizba/personal-website'
        },
        skills: ['Java', 'Angular', 'CSS', 'Netlify', 'Typescript', 'Javascript'],
        longDescription: `
        This is the website you are now seeing. It is just a personal portfolio with projects and CV.
        I was inspired by other people who provided templates for the Portfolio websites so i decided to do the same.
        Checkout the github README how to fork this repo and just use this template.
        You only need to modify the profile object and website should adjust dynamically to your profile.
        `
      },
      {
        title: 'Jumper',
        description: 'Reinforcement learning agent for a self-developed game.',
        link: {
          text: 'GitHub',
          url: 'https://github.com/baizba/jumper'
        },
        skills: ['Python', 'AI', 'Reinforced learning', 'Gym'],
        longDescription: `
        Jumper is a super simple game i designed. The goal of the Kangaroo is just to jump over the ponds (blue water).
        Arrow up is used to jump. When you are done playing you can start the game via the agent.
        Agent tries to learn based on trial and error when to jump to navigate the ponds (blue water).
        This demonstrates usage of Gym library for python.
        `
      },
      {
        title: 'Camunda Developer and Architect',
        description: 'Developing BPMN Workflows and Consulting for a Transport company in Austria',
        link: {
          text: 'Details',
          url: 'https://camunda.com/'
        },
        skills: ['Java', 'Kotlin', 'Camunda', 'BPMN', 'DMN', 'Spring', 'REST', 'SOAP', 'WebServices', 'ArgoCD', 'Jenkins', 'Kubernetes', 'Docker'],
        longDescription: `
        Joined the project as Architect and Developer for Camunda 8. Immediately started helping in removing impediments and acting
        as liaison between BD and Tech team to help prepare the US for development. Result was clear ACC for developers
        with clear documented affected artifacts (modules) and affected systems.
        `
      },
      {
        title: 'Camunda Developer and Consultant',
        description: 'Developing BPMN Workflows and Consulting for mayor telco in Austria',
        link: {
          text: 'Details',
          url: 'https://camunda.com/'
        },
        skills: ['Java', 'Camunda', 'BPMN', 'DMN', 'Spring', 'REST', 'SOAP', 'WebServices', 'ArgoCD', 'Jenkins', 'Kubernetes', 'Docker'],
        longDescription: `
        Lead the migration and consulted a major Telecom company. My first task was splitting the monolith into
        multiple service oriented applications independent of each other for more robustness, fault-tolerance and
        easier observability. Result was much easier, less interdependent deployment. Containerized via docker and
        scaled with Kubernetes.
        `
      },
      {
        title: 'E-Commerce SAP-CX',
        description: 'Consulting the major construction company in Austria and acting as an architect and liaison for client.',
        link: {
          text: 'Details',
          url: 'https://sap.com/'
        },
        skills: ['Java', 'SAP-CX', 'Hybris', 'Spring', 'REST', 'SOAP', 'WebServices', 'Jenkins', 'Docker', 'Angular'],
        longDescription: `
        Senior Java Developer for on SAP-CX (Hybris) platform. Costumer is one of the major suppliers of construction
        equipment and materials in Austria. My task was ensure the development and integration of new features.
        When i assumed role of architect my duty was consult the customer about the new feature plans and translate
        requirements into viable technical requirements.
        `
      },
      {
        title: 'E-Commerce SAP-CX',
        description: 'Developer and team lead for a world renowned installations company.',
        link: {
          text: 'Details',
          url: 'https://sap.com/'
        },
        skills: ['Java', 'SAP-CX', 'Hybris', 'Spring', 'REST', 'SOAP', 'WebServices', 'Jenkins', 'Docker', 'JSP', 'HTML', 'CSS'],
        longDescription: `
        Senior software Developer for world renowned installations equipment company. Started as Senior Developer and
        at the end of project took over the technical lead role and communication with customer.
        `
      },
      {
        title: 'E-Commerce SAP-CX',
        description: 'Developer for a mayor E-Commerce client in Switzerland',
        link: {
          text: 'Details',
          url: 'https://sap.com/'
        },
        skills: ['Java', 'SAP-CX', 'Hybris', 'Spring', 'REST', 'SOAP', 'WebServices', 'Jenkins', 'Docker', 'JSP', 'HTML', 'CSS'],
        longDescription: `
        Senior software Developer for a market corporation in Switzerland. We maintained a unified architecture to
        support 3 different shops for house furniture, sports equipment and gardening. Customer was satisfied and
        we relaunched the website with the new version of platform and new Frontend in ReactJs.
        `
      },
      {
        title: 'OpenCMS Insurance Portal',
        description: 'Develop unified OpenCMS platform for all mayor insurance clients in Germany',
        link: {
          text: 'Details',
          url: 'https://sap.com/'
        },
        skills: ['Java', 'OpenCMS', 'Spring', 'REST', 'SOAP', 'WebServices', 'Jenkins', 'JSP', 'HTML', 'Maven', 'CSS'],
        longDescription: `
        Started as Java Developer and Consultant for OpenCMS for German Digital Service provider for Insurance Companies.
        The project was special in a way that we maintained a single code base but highly modularized and it made possible
        to individually assign every component to different insurance client. That way we held general version of the
        Digital Services which could be easily customized for each client separately.
        `
      }
    ]
  }

  constructor() { }

  getProfile(): any {
      return this.profile;
  }
}
