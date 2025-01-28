module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Chi Le',
    // Main Site Title
    title: `Chi Le | Full-stack Developer & Product Designer`,
    // Description that goes under your name in main bio
    description: `Full-stack Developer & Product Designer`,
    // Optional: Twitter account handle
    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/chile20`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/chile20/`,
    // Content of the About Me section
    about: `Full-stack Developer and Product Designer with 3 years of experience creating user-focused, accessible, and high-performing web solutions. Skilled in full-stack development, UI/UX design, with expertise in frameworks like React.js and Laravel. Passionate about accessibility and building scalable, inclusive technology`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Resume Job Matcher',
        description:
          'A web-based tool that leverages OpenAI API to help users tailor their resumes to specific job description',
        link: 'https://github.com/chile20/resume-job-matcher',
      },
      {
        name: 'Crochet App',
        description:
          'Crochet App',
        link: 'https://github.com/chile20/crochet-app',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'CSU Chancellor\'s Office',
        description: 'Full-Stack Developer, Jan 2023 - Dec 2024',
        link: 'https://www.calstate.edu/',
      },
      {
        name: 'Hapii Lab',
        description: 'HCI Researcher, Jan 2024 - Dec 2024',
        link: 'https://hapii-lab.github.io/',
      },
      {
        name: 'Codelink',
        description: 'Product Designer , Jul 2018 - Apr 2019',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Javascript, PHP, Python, Dart, Laravel, React.js, Django, Flask, HighchartJS, TailwindCSS',
      },
      {
        name: 'Databases',
        description: 'MySQL, PostreSQL, MongoDB',
      },
      {
        name: 'Other',
        description:
          'Agile/Scrum, Docker, Postman, Git, Jira, BitBucket, Figma, Sketch',
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
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
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
