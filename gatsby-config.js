module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://lechi.dev/`,
    // Your Name
    name: 'Chi Le',
    // Main Site Title
    title: `Chi Le | Design & Develop`,
    // Description that goes under your name in main bio
    description: `Long Beach, California | Authorized to work in the U.S without sponsorship`,
    // Optional: Twitter account handle
    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/chile20`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/chile20/`,
    // Optional: Resume download
    resume: `https://drive.google.com/file/d/1zyHbkTWiE6LFJFw_smqnTdW4QkfkiSTZ/view`,
    // Optional: Behance account URL
    behance: `https://www.behance.net/chilele`,
    // Content of the About Me section
    about: 
    `Hi! I'm a developer and designer with 2 years of full-stack development experience and over 2 years in UI/UX and HCI design. My combined background in development and design allows me to bridge the gap between creative vision and technical feasibility, helping teams create solutions that are both user-friendly and practical to develop. When I'm not coding or designing, you'll find me reading or playing video games with my cat Miso.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'CSU Student Success Dashboard',
        subText: 'PHP (Laravel) | JavaScript (jQuery, Highcharts) | HTML/CSS (Sass, Bootstrap) | Search Engine | MySQL',
        description: 
          'A data dashboard used by 23 CSU campuses to track student performance across different groups. Helps educators spot trends and make decisions that improve student success through clear charts and statistics.',
        demoLink: 'https://public.dashboards.calstate.edu/csu-by-the-numbers/historical-grad-rates',
      },
      {
        name: 'High School Success Partnership Dashboard',
        subText: 'PHP (Laravel) | JavaScript (jQuery, Highcharts) | HTML/CSS (Sass, Bootstrap) | MySQL',
        description: 
          'A data platform that tracks student pathways from California high schools to CSU campuses. Helps schools prepare students for university success by visualizing enrollment patterns and academic journeys.',
        demoLink: 'https://partners.dashboards.calstate.edu/search/hs',
      },
      {
        name: 'AI Resume Job Matcher',
        subText: 'Python (Flask) | HTML/CSS (TailwindCSS) | OpenAI API',
        description:
          'An AI-powered tool that matches resumes to job descriptions and suggests improvements. Presented to employers to showcase how AI can streamline hiring and help candidates land better jobs.',
        githubLink: 'https://github.com/chile20/resume-job-matcher',
        demoLink: 'https://resume-matcher-ai-chile-7293abcc.koyeb.app/'
      },
      {
        name: 'Crochet Counter App',
        subText: 'Dart (Flutter) | Flutter Hive',
        description:
          'A mobile app that helps crocheters track their patterns and manage multiple projects. Built with real feedback from Reddit crochet communities to solve actual user problems.',
        githubLink: 'https://github.com/chile20/crochet-app',
      },
      {
        name: 'Info Crawler and Search Engine',
        subText: 'Python (scikit-learn, scipy, panda, other Python libraries) | MongoDB',
        description:
          'A complete search engine custom web crawling, smart indexing, and fast search capabilities. Handles large datasets efficiently using advanced Python libraries.',
        githubLink: 'https://github.com/kennysantanu/Web-Crawler-Search-Engine',
      },
      {
        name: 'UI/UX Design Portfolio',
        subText: 'HTML/CSS, ReactJS, GatsbyJS, TailwindCSS',
        description:
          'A fast-loading portfolio site with smooth light/dark mode switching that showcases my design work. Built for speed and user experience using modern web technologies.',
        demoLink: 'https://chile20.github.io/portfolio/'
      },      
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Full-Stack Developer at CSU, Office of Chancellor',
        subText: 'Contract, Jan 2023 - Dec 2024 (2 yr)',
        link: 'https://www.calstate.edu/',
      },
      {
        name: 'HCI Student Researcher at Hapii Lab',
        subText: 'Part-time, Jan 2024 - Dec 2024 (1 yr)',
        link: 'https://hapii-lab.github.io/',
      },
      {
        name: 'Product Designer at Codelink',
        subText: 'Full-time, Mar 2018 - Apr 2019 (1 yr 1 mo)',
        link: 'https://www.codelink.io/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, TypeScript, React, Node.js, PHP, Laravel, Python, Java, Dart, Flutter, HTML5, CSS3, Bootstrap, TailwindCSS, Sass, jQuery, Highcharts.js',
      },
      {
        name: 'Databases & APIs',
        description: 'PostgreSQL, MySQL, MongoDB, Hive, GraphQL, OpenAPI, REST, Meilisearch',
      },
      {
        name: 'Tools & Workflow',
        description:
          'Git, GitHub, Bitbucket, Docker, Maven, Gradle, Agile/Scrum, Jira, Trello, VS Code, IntelliJ IDEA, PyCharm, PhpStorm, Postman, Figma, Sketch, Zeplin',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-YMP6RLJ60F`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#5A3B5D`,
        theme_color: `#5A3B5D`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
