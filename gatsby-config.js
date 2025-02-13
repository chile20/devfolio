module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://lechi.dev/`,
    // Your Name
    name: 'Chi Le',
    // Main Site Title
    title: `Chi Le | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer | Long Beach, California | Authorized to work in the U.S without sponsorship`,
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
    `Hello, I’m Chi (pronounced /chEE/). I’m a Software Engineer with two years of experience in Web Development and another two in HCI/UI & UX Design. While I work across the full stack, my expertise in HCI and UI/UX drives my focus on front-end development, where I bridge functionality with design to deliver intuitive user experiences. I’m detail-oriented, quick to adapt to new technologies, and passionate about building scalable, accessible solutions. Outside of work, I enjoy reading and playing video games.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'CSU Student Success Dashboard',
        subText: 'PHP (Laravel) | RESTful APIs | JavaScript (jQuery, Highcharts) | HTML/CSS (Sass, Bootstrap) | Meilisearch | MySQL',
        description: 
          'A private dashboard solution used by educators across 23 CSU campuses and partner instituitions across the U.S. to identify achievement gaps and promote equity in student outcomes.',
        demoLink: 'https://public.dashboards.calstate.edu/csu-by-the-numbers/historical-grad-rates#',
      },
      {
        name: 'AI Resume Job Matcher',
        subText: 'Python (Flask) | HTML/CSS (TailwindCSS) | OpenAI API',
        description:
          'A web-based tool that uses AI to help users tailor their resumes to specific job description. It was incorporated into employer-led meetings to demonstrate the potential of AI-driven solutions.',
        githubLink: 'https://github.com/chile20/resume-job-matcher',
        demoLink: 'https://resume-matcher-ai-chile-7293abcc.koyeb.app/'
      },
      {
        name: 'Crochet Counter App',
        subText: 'Dart (Flutter) | Flutter Hive',
        description:
          'A user-friendly Android application designed to help crocheters keep track of their progress by incrementing patterns and managing projects efficiently. Built with feedback from crochet communities on Reddit.',
        githubLink: 'https://github.com/chile20/crochet-app',
      },
      {
        name: 'Info Crawler and Search Engine',
        subText: 'Python (scikit-learn, scipy, panda, other Python libraries) | MongoDB',
        description:
          'A CLI-based search engine featuring a custom-built web crawler, efficient indexing, and a robust querying system. Built with advanced Python libraries and a NoSQL database for best performance.',
        githubLink: 'https://github.com/kennysantanu/Web-Crawler-Search-Engine',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Full-Stack Developer at CSU, Office of Chancellor',
        subText: 'Full-time during school breaks & part-time during school, Jan 2023 - Dec 2024 (2 yr)',
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
          'HTML/CSS (Bootstrap, TailwindCSS, Sass), JavaScript (React, Node.js, jQuery, Highcharts.js), TypeScript, PHP (Laravel, Blade), Dart (Flutter), Python, Meilisearch}',
      },
      {
        name: 'Databases',
        description: 'SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Flutter Hive)',
      },
      {
        name: 'Others',
        description:
          'Agile/Scrum, Git (GitHub, Bitbucket), Docker, Jira, Trello, Design Tools (Figma, Sketch), Zeplin, API Development & Testing (GraphQL, OpenAPI, Postman), IDEs (VS Code, PyCharm, PhpStorm)',
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
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
