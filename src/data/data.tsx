/* eslint-disable no-irregular-whitespace */
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import profileImage from '../images/profile.jpg';
import heroImage from '../images/header-background.webp';
import outreachImage from '../images/outreach_1.webp'; // Static image import
import outreachImage2 from '../images/outreach_2.jpg';
import {Hero, HomepageMeta, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Olivia Brouillette',
  description: ' ',
};

/**
 * Section definition
 */
export const SectionId = {
  About: 'About',
  Research: 'Research',
  Publications: 'Publications',
  Outreach: 'Outreach',
  Contact: 'Contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  actions: [
    {
      href: '/assets/Brouillette_CV.pdf', // Ensure the CV is placed in the public/assets directory
      Icon: ArrowDownTrayIcon,
      primary: true,
      text: 'Curriculum Vitae (CV)',
    },
    {
      href: `#${SectionId.Contact}`,
      primary: false,
      text: 'Contact',
    },
  ],
  description: (
    <div>
      <p className="text-lg text-gray-200">
        I'm a graduate student pursuing my PhD in Astronomy at New Mexico State University, with a B.S. in Mathematics and Physics. My
        research interests focus on computational planetesimal formation.
      </p>
    </div>
  ),
  imageSrc: heroImage,
  name: `Olivia Brouillette`,
  profilePic: profileImage, // Add this line to include the profile image
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const research: TimelineItem[] = [
  {
    date: 'Fall 2024-Present',
    location: 'New Mexico State University',
    title: 'Research Assistant', //
    content: (
      <p>
        I have been working with Dr. Wladimir Lyra on the streaming instability using the Pencil code.
        My first project was part of a larger collaboration effort to compare the streaming instability 
        across multiple hydrodynamic codes in an unstratified shearing box. The current project I am working on, 
        as part of my planned thesis research, is determining strong clumping in streaming instability simulations 
        based on the parameters given in the dispersion relation rather than the dust-to-gas surface density ratio, 
        which has no physical interpretation. We hope that by using the dust-to-gas volume density ratio instead, 
        we will be able to draw a clear path between the bifurcation seen in the dispersion relation at a dust-to-gas 
        volume density ratio of order unity and what is seen in the simulations for the strong clumping regime of the 
        streaming instability.


      </p>
    ),
  },
  {
    date: 'Fall 2022-Spring 2024',
    location: 'Iowa State University',
    title: 'Undergraduate Research Assistant', //
    content: (
      <p>
        I worked with Dr. Jacob B. Simon at Iowa State University, where we worked mainly in computational astrophysics, 
        specifically in planet formation. We used high-performance computing and the Athena code to simulate planetesimal 
        formation. We worked to determine the conditions for planetesimals to form via the streaming instability in a 
        three-dimensional simulation. I focused on two parameters that determine the streaming instability efficiency: 
        grain size and dust-to-gas surface density ratio (Z). Through this project, we aimed to establish conditions for 
        planetesimal formation that were more realistic than previous studies. By varying these two parameters, we were 
        able to determine a critical value of Z for which each grain size can potentially form planetesimals.
      </p>
    ),
  },
  {
    date: 'Summer 2021-Winter 2021',
    location: 'Iowa State University',
    title: 'Undergraduate Research student', //
    content: (
      <p>
        {' '}
        I worked in a group, led by Dr. Halil Ceylan, which explored the use of small Unmanned Aircraft Systems to 
        inspect transportation infrastructure. I contributed in inspecting airport runways, aprons, and taxiways using 
        pre-made drone operations, as well as generating 3D spatial data via Agisoft Metashape and ArcGIS Pro using the data.
      </p>
    ),
  },
];

// In data.tsx
export const publications = {
  papers: [
    {
      citation: (
        <>
          S.A. Baronett, W. Lyra, A. Hossam, <strong>O. Brouillette</strong>, Daniel Carrera, Victoria I. De Cun, Linn E. J.
          Eriksson, Mario Flock, Pinghui Huang, Leonardo Krapp, Geoffroy Lesur, Rixin Li, Shengtai Li, Jeonghoon
          Lim, Sijme-Jan Paardekooper, David G. Rea, Debanjan Sengupta, Jacob B. Simon, Prakruti Sudarshan, Orkan
          M. Umurhan, Chao-Chin Yang, Andrew N. Youdin, {' '}
          {/* prettier-ignore */}
          <em>
            “A Comparative Study of the Streaming Instability: Unstratified Models with Marginally Coupled Grains
          (2026),”  submitted to Astrophysical Journal, in review, Mar. 2026, doi:10.48550/arXiv.2603.04558.
          </em>
        </>
      ),
    },
    {
      citation: (
        <>
          J. Lim, J.B. Simon, R. Li,<strong>O. Brouillette</strong>, David G. Rea, Wladimir Lyra,
          <em>
            “The Streaming Instability in 3D: Conditions for Strong Clumping,”{' '}
            <a
              href="doi: 10.48550/arXiv.2509.18270"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
               Sept. (2025)
            </a>
          </em>
        </>
      ),
    },
    {
      citation: (
        <>
          Md. A. A. Sourav, H. Ceylan, C. Brooks, D. Peshkin, S. Kim, R. Dobson, C. Cook, M. Mahedi, <strong>O. Brouillette</strong>...{' '}
          <em>
            “Small Unmanned Aircraft System for Pavement Inspection: Task 4—Execute the Field Demonstration Plan and Analyze the Collected Data,”{' '}
            <a
              href="https://doi.org/10.21949/1524511"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              Nov. 2022
            </a>
          </em>
        </>
      ),
    },

    // Add more papers as needed
  ]

// data.tsx
export const outreach = [
  {
    location: 'New Mexico State University',
    title: 'Outreach Coordinator 2025-Present',
    content: `
    Organize volunteer work for NMSU astronomy students with the local community.
  `,
    imageSrc: [outreachImage, outreachImage2], // Use StaticImageData type here
  }
];
