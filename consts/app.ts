import addIds from '~/utils/addIds'

export const linkItems = addIds([
  {
    text: 'Open Source Contributor',
    href: 'https://github.com/kmsheng',
    icon: 'github'
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kuan-sheng-7a260b86/',
    icon: 'linkedin'
  },
  {
    text: 'Resume',
    href: 'https://drive.google.com/file/d/1mPwxXq49s2BjdMdrdnAvxtEL-tBOwBAP/view',
    icon: 'googleDrive'
  },
])

export const expItems = [
  { lang: 'JavaScript', year: 7 },
  { lang: 'HTML', year: 7 },
  { lang: 'CSS', year: 7 },
  { lang: 'Node.js', year: 5 },
  { lang: 'Vue', year: 4 },
  { lang: 'React', year: 3 },
  { lang: 'MySQL', year: 3 },
  { lang: 'Redis', year: 3 },
  { lang: 'PHP', year: 2.5 },
  { lang: 'Ruby', year: 1 }
]

export const provenItems = addIds([
  {
    date: '2020-05-27',
    title: 'Fix mdButton clicks error in IE11',
    url: 'https://github.com/vuematerial/vue-material/pull/2091'
  },
  {
    date: '2019-06-04',
    title: 'Fix undefined contains method in IE11 ',
    url: 'https://github.com/vuematerial/vue-material/pull/2090'
  },
  {
    date: '2017-08-13',
    title: 'This patch upgrades react router version to 4.1.2',
    url: 'https://github.com/ReactMaker/simple_react_startkit/pull/33'
  },
  {
    date: '2017-04-23',
    title: 'Support label prop',
    url: 'https://github.com/prescottprue/react-google-button/pull/1'
  },
  {
    date: '2016-11-18',
    title: 'curr should be configurable',
    url: 'https://github.com/visionmedia/node-progress/pull/135'
  },
  {
    date: '2015-10-16',
    title: 'Fix performance hit',
    url: 'https://github.com/JedWatson/react-codemirror/pull/17'
  },
  {
    date: '2014-10-03',
    title: 'Feature / return status code and headers',
    url: 'https://github.com/clonn/slack-node-sdk/pull/2'
  },
  {
    date: '2014-08-24',
    title: 'Should be PROJECT_APPS settings',
    url: 'https://github.com/kmmbvnr/django-jenkins/pull/234'
  },
  {
    date: '2014-08-10',
    title: 'Fix TypeError: Object #<Object> has no method \'new\' of run.js',
    url: 'https://github.com/othree/node-r3/pull/2'
  },
  {
    date: '2013-11-21',
    title: 'Support conversion of <ol> <ul> tags',
    url: 'https://github.com/tinymce/tinymce/pull/275'
  },
  {
    date: '2013-02-07',
    title: 'Allow dot sign to appear as a jsonp callback function name',
    url: 'https://github.com/pixnet/pixframework/pull/52'
  }
])

export const employments = addIds([
  {
    title: 'Senior Front-end Engineer',
    company: 'SPEEDING ROCKET',
    remote: true,
    date: 'May 2019 - Sep. 2022',
    lines: [
      'Improved the efficiency of the stockholders\' daily workflows drastically.',
      'Reviewed the front-end architecture and suggested insightful action plans.',
      'Designed and shipped an admin interface for ecommerce merchants.',
      'Developed foundational JavaScript UI component libraries for shipping new features faster.',
      'Crafted a Rails-friendly server-side rendering shopping site with airbnb’ s Hypernova to improve SEO rankings.',
      'Rewrote the whole admin codebase with Vue.js from the previous CoffeeScript one.'
    ].map((line, i) => Object.assign({}, { line, id: i }))
  },
  {
    title: 'Senior Engineer',
    company: 'MOXA',
    date: 'May 2018 - Sep. 2018',
    lines: [
      'Engineered the admin interface of IOT product for device data monitoring.',
      'Reviewed and suggested action plans for bringing the UX culture to the company.',
      'Worked closely with UI designer and product manager to brainstorm the IOT product with UX in mind.'
    ].map((line, i) => Object.assign({}, { line, id: i }))
  },
  {
    title: 'Software Consultant',
    company: 'Dharma Treasure',
    remote: true,
    date: 'Jan. 2015 - May 2018',
    lines: [
      'Developed web educational materials to inspire mentees.',
      'Recruited talented engineers to maintain projects.',
      'Managed outsourcing contracts to ensure company projects were finished on time.',
      'Worked with other engineers to create better products.',
      'Embraced the remote-first culture and adapted asynchronous, proactive communication.'
    ].map((line, i) => Object.assign({}, { line, id: i }))
  },
  {
    title: 'Engineer',
    company: 'MOXA',
    date: 'Mar. 2014 - Nov. 2014',
    lines: [
      'Brainstormed the IOT product with a product manager for clients.',
      'Created an admin interface of the IOT product with AngularJS.'
    ].map((line, i) => Object.assign({}, { line, id: i }))
  },
  {
    title: 'Senior Engineer',
    company: 'PIXNET',
    date: 'Mar. 2012 - Mar. 2014',
    lines: [
      'Developed and shipped an ecommerce site with PHP.',
      'Created an album uploader with VanillaJS.',
      'Involved in the DevOps process with daily deployments.'
    ].map((line, i) => Object.assign({}, { line, id: i }))
  },
])

export const portfolioItems = addIds([
  {
    src: 'official-desktop',
    url: 'https://www.super-landing.com/',
    title: 'Landing Official',
    date: '2021/09/06 - 2021/10/04',
    tech: 'Rails, Vue3, SCSS',
    desc: `The official landing website that introduces basic functions,\nsuccessful cases and pricing plans to interested merchants.\nIt allows them to apply for selling products online.`
  },
  {
    src: 'landing-mobile-mansry',
    url: 'https://www.shareco.me/',
    title: 'Landing ( One Page Shop )',
    date: '2020/05/01 - present',
    tech: 'Rails, Vue2, SCSS',
    desc: `One page shopping website, a perfect entry into ecommerce.\nIt's fully responsible, let customers select products and pay on one web page.`
  },
  {
    src: 'beyond-dark',
    url: 'https://superlanding.github.io/beyond/',
    title: 'Beyond',
    date: '2019/12/03 - 2021/08/10',
    tech: 'VanillaJS, SCSS',
    desc: `Foundational JavaScript UI components library.`
  },
  {
    src: 'adarsha-mobile-grid',
    url: 'https://adarsha.dharma-treasure.org/',
    title: 'ADARSHA',
    date: '',
    tech: 'React, SCSS, Node.js, MySQL, Redis, ElasticSearch, Docker, EC2、CloudFront, Elastic Beanstalk, Certificate Manager, Route53',
    desc: `A web app that lets users read and conduct searches of ancient documents in a digital format.`
  },
  {
    src: 'ketaka-lite',
    url: 'https://github.com/karmapa/ketaka-lite',
    title: 'KETAKA Lite',
    date: '',
    tech: 'React, SCSS, Electron',
    desc: `A standalone application that enables file format conversion and file import and has a built-in simple editor allowing users edit their imported data.`
  },
])
