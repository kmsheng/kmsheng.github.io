import addIds from '~/utils/addIds'
import ogImage from '~/assets/images/ogImage.png'
import range from 'lodash.range'

const title = 'kmsheng\'s portfolio'
const desc = 'Craft solid and scalable frontend products with great user experiences.'

export const head = {
  title,
  htmlAttrs: {
    lang: 'en'
  },
  meta: [{
    name: 'description',
    content: desc
  }, {
    name: 'og:image',
    content: ogImage
  }, {
    name: 'og:title',
    content: 'kmsheng\'s portfolio'
  }, {
    name: 'og:description',
    content: desc
  }, {
    name: 'msapplication-TileColor',
    content: '#ffffff'
  }, {
    name: 'msapplication-TileImage',
    content: '/ms-icon-144x144.png'
  }, {
    name: 'theme-color',
    content: '#ffffff'
  }],
  link: [
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/manifest.json' }
  ]
}

export const linkItems = addIds([
  {
    i18n: 'open-source-contributor',
    href: 'https://github.com/kmsheng',
    icon: 'github'
  },
  {
    i18n: 'linkedin',
    href: 'https://www.linkedin.com/in/kuan-sheng-7a260b86/',
    icon: 'linkedin'
  },
  {
    i18n: 'resume',
    href: 'https://drive.google.com/file/d/1mPwxXq49s2BjdMdrdnAvxtEL-tBOwBAP/view',
    icon: 'googleDrive'
  }
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
    title: 'senior-frontend-engineer',
    company: 'SPEEDING ROCKET',
    remote: true,
    date: 'May 2019 - Sep. 2022',
    lines: range(6).map((i) => ({ line: `rocket-${i + 1}`, id: i }))
  },
  {
    title: 'senior-engineer',
    company: 'MOXA',
    date: 'May 2018 - Sep. 2018',
    lines: range(3).map((i) => ({ line: `moxa2-${i + 1}`, id: i }))
  },
  {
    title: 'software-consultant',
    company: 'Dharma Treasure',
    remote: true,
    date: 'Jan. 2015 - May 2018',
    lines: range(5).map((i) => ({ line: `dt-${i + 1}`, id: i }))
  },
  {
    title: 'engineer',
    company: 'MOXA',
    date: 'Mar. 2014 - Nov. 2014',
    lines: range(2).map((i) => ({ line: `moxa-${i + 1}`, id: i }))
  },
  {
    title: 'senior-engineer',
    company: 'PIXNET',
    date: 'Mar. 2012 - Mar. 2014',
    lines: range(3).map((i) => ({ line: `pixnet-${i + 1}`, id: i }))
  },
])

export const portfolioItems = addIds([
  {
    src: 'official-desktop',
    alt: 'Landing Official Thumbnail',
    url: 'https://www.super-landing.com/',
    title: 'landing-official',
    date: '2021/09/06 - 2021/10/04',
    techs: ['Rails', 'Vue3', 'SCSS'],
    desc: 'landing-official-desc'
  },
  {
    src: 'landing-mobile-mansry',
    alt: 'Landing ( One Page Shop ) Thumbnail',
    url: 'https://www.shareco.me/',
    title: 'landing',
    date: '2020/05/01 - present',
    techs: ['Rails', 'Vue2', 'SCSS'],
    desc: 'landing-desc'
  },
  {
    src: 'beyond-dark',
    alt: 'Beyond Thumbnail',
    url: 'https://superlanding.github.io/beyond/',
    title: 'beyond',
    date: '2019/12/03 - 2021/08/10',
    techs: ['VanillaJS', 'SCSS'],
    desc: 'beyond-desc'
  },
  {
    src: 'adarsha-mobile-grid',
    alt: 'ADARSHA Thumbnail',
    url: 'https://adarsha.dharma-treasure.org/',
    title: 'adarsha',
    techs: ['React', 'SCSS', 'Node.js', 'MySQL', 'Redis',
      'ElasticSearch', 'Docker', 'EC2','CloudFront',
      'Elastic Beanstalk', 'Certificate Manager', 'Route53'],
    desc: 'adarsha-desc'
  },
  {
    src: 'ketaka-lite',
    alt: 'KETAKA Lite Thumbnail',
    url: 'https://github.com/karmapa/ketaka-lite',
    title: 'ketaka-lite',
    techs: ['React', 'SCSS', 'Electron'],
    desc: 'ketaka-lite-desc'
  },
  {
    src: 'pixnet-article-mobile-grid',
    alt: 'PIXNET New Type Article Thumbnail',
    url: 'https://www.pixnet.net/pcard/mu574n6/article/9b14cbe0-0e54-11e9-9792-23a896807b0a',
    title: 'pixnet-article',
    techs: ['React', 'SCSS', 'PixFramework', 'MySQL'],
    desc: 'pixnet-article-desc'
  }
])
