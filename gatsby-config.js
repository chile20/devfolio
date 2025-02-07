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
    // Optional: LinkedIn account URL
    resume: `https://drive.google.com/uc?export=download&id=1zyHbkTWiE6LFJFw_smqnTdW4QkfkiSTZ`,
    // Content of the About Me section
    about: 
    `Hello, I’m Chi (pronounced /chEE/). I’m a Software Engineer with 3 years of experience specializing in front-end development, backed by a strong foundation in UI/UX design and Human-Computer Interaction. I’m detail-oriented, quick to learn new technologies, and passionate about building scalable, user-friendly solutions that prioritize accessibility. In my free time, I enjoy reading and playing video games.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'CSU Student Success Dashboard',
        subText: 'PHP (Laravel) | RESTful APIs | JavaScript (jQuery, Highcharts) | Bootstrap | MySQL',
        description: 
          'A private dashboard solution used by educators across 23 CSU campuses and partner instituitions across the U.S. to identify achievement gaps and promote equity in student outcomes.',
        link: 'https://info.successdashboard.org/index.html'  
        },
      {
        name: 'AI Resume Job Matcher',
        subText: 'Python (Flask) | TailwindCSS | OpenAI API',
        description:
          'A web-based tool that uses AI to help users tailor their resumes to specific job description. It was incorporated into employer-led meetings to demonstrate the potential of AI-driven solutions.',
        link: 'https://github.com/chile20/resume-job-matcher',
      },
      {
        name: 'Info Crawler and Search Engine',
        subText: 'Python (scikit-learn, scipy, panda, other Python libraries) | MongoDB',
        description:
          'A CLI-based search engine featuring a custom-built web crawler, efficient indexing, and a robust querying system. Built with advanced Python libraries and a NoSQL database for best performance.',
        link: 'https://github.com/kennysantanu/Web-Crawler-Search-Engine',
      },
      {
        name: 'Crochet Counter App',
        subText: 'Dart (Flutter) | Flutter Hive',
        description:
          'A user-friendly Android application designed to help crocheters keep track of their progress by incrementing patterns and managing projects efficiently. Built with feedback from crochet communities on Reddit.',
        link: 'https://github.com/chile20/crochet-app',
      },
      {
        name: 'Check out my UI/UX designs on Behance',
        link: 'https://www.behance.net/chilele',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Full-Stack Engineer at CSU, Office of Chancellor',
        subText: 'Full-time during breaks & part-time during school, Jan 2023 - Dec 2024',
        link: 'https://www.calstate.edu/',
      },
      {
        name: 'HCI Student Researcher at Hapii Lab',
        subText: 'Part-time, Jan 2024 - Dec 2024',
        link: 'https://hapii-lab.github.io/',
      },
      {
        name: 'Product Designer at Codelink',
        subText: 'Full-time, Mar 2018 - Apr 2019',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'PHP, Dart, Java, Python, JavaScript, HTML/CSS, Laravel, Blade, Flutter, React, Node.js, Flask, Highcharts.js, Meilisearch, TailwindCSS',
      },
      {
        name: 'Databases',
        description: 'SQL (PostgreSQL, MySQL), NoSQL (MongoDB)',
      },
      {
        name: 'Others',
        description:
          'Agile/Scrum, Git, Docker, Jira, BitBucket, Figma, Sketch, Postman, VS Code, PyCharm, IntelliJ, PhpStorm',
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
