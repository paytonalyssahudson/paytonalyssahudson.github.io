// gitprofile.config.js

const config = {
  github: {
    username: 'paytonalyssahudson', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'paytonalyssahudson',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'hudsonpa22@students.ecu.edu',
  },
  resume: {
    fileUrl:
      'file:///C:/Users/Owner/Documents/Work%20and%20Employment%20Stuff/Resume2023_PHudson.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Moss Adams LLP',
      position: 'Assurance Staff',
      from: 'October 2024',
      to: 'Future',
      companyLink: 'https://mossadams.com/about/Locations/Portland',
    },
    {
      company: 'Enterprise Holdings, LLC',
      position: 'Accounting Intern',
      from: 'May 2022',
      to: 'July 2022',
      companyLink: 'https://careers.enterprise.com/about-us',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Masters in Accounting, MSA',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'University of Louisville',
      degree: 'Accounting, BSBA',
      from: '2019',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Systems Analysis and Design Project Pitch',
      description:
        'My personal experience with my Systems Analysis and Design Project.',
      imageUrl: '',
      link: 'https://ecu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=62fdc3e4-66d9-45f7-bf81-b0c1013d1789',
    },
    {
      title: 'Elevator Pitch',
      description:
        'Learn more about me and my future employment endeavors.',
      imageUrl: '',
      link: 'https://ecu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4559f7b0-4b92-4523-889d-b0c1014231b5',
    },
    {
      title: 'Systems Analysis and Design Project',
      description:
        'Group project with in-depth analysis and design implementation on the system of a small businesss in Greenville, NC.',
      imageUrl: '',
      link: 'https://ecu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4e463eab-e02f-4ca7-a584-b0c10138d2a7',
    }
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
