import { NextResponse } from 'next/server'
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from '@/app/types/menu'

const avatarList: avatar[] = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList: brand[] = [
  {
    image: '/images/home/brand/brand-icon-1.svg',
    darkImg: '/images/home/brand/brand-darkicon-1.svg',
    title: 'Adobe',
  },
  {
    image: '/images/home/brand/brand-icon-2.svg',
    darkImg: '/images/home/brand/brand-darkicon-2.svg',
    title: 'Figma',
  },
  {
    image: '/images/home/brand/brand-icon-3.svg',
    darkImg: '/images/home/brand/brand-darkicon-3.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/brand/brand-icon-4.svg',
    darkImg: '/images/home/brand/brand-darkicon-4.svg',
    title: 'Dribble',
  },
  {
    image: '/images/home/brand/brand-icon-5.svg',
    darkImg: '/images/home/brand/brand-darkicon-5.svg',
    title: 'Webflow',
  },
]

const innovationList: innovation[] = [
  {
    image: '/images/home/innovation/brand.svg',
    title: 'Brand\nPresence',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'Content\nCreation',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'Optimization &\nSEO',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'Digital\nGrowth',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Website\nDesign',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList: onlinePresence[] = [
  {
    image: '/images/home/onlinePresence/online_img_1.jpg',
    title: 'FlowBank',
    tag: ['UX Research', 'Interface Design'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Academy.co',
    tag: ['Product Design', 'Interaction Design'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Genome',
    tag: ['Brand identity design', 'UX Research'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'Hotto',
    tag: ['Visual Storytelling', 'Web & Mobile Design'],
    link: 'https://www.wrappixel.com/',
  },
]

const creativeMindList: creativeMind[] = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'Soham Mayekar',
    position: 'Web & Content Coordinator',
    instagramLink: 'https://instagram.com/sohammayekar_',
    linkedinLink: 'https://linkedin.com/in/sohammayekar',
    twitterLink: '',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Devesh Kushe',
    position: 'Content Creator & Admin Executive',
    instagramLink: 'https://instagram.com/deveshkushe',
    linkedinLink: '',
    twitterLink: '',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Rudraksha Patil',
    position: 'Operations & Client Manager',
    instagramLink: 'https://instagram.com/rrudraksha',
    linkedinLink: '', // Added missing linkedinLink property
    twitterLink: '',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Creativity',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Innovation',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Strategy',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: 'bg-yellow-200 dark:bg-yellow-200',
    text_color: 'text-yellow-900 dark:text-yellow-900',
    descp_color: 'text-yellow-800 dark:text-yellow-800',
    border_color: 'border-yellow-300 dark:border-yellow-300',
    plan_name: 'Starter Website',
    plan_descp: 'For new businesses looking for a clean one-page site',
    plan_price: '₹9,990',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Single-page responsive design',
      'Contact & opt-in forms',
      'Speed optimization',
      '3 essential plugins',
      'Basic SEO setup',
    ],
  },
  {
    plan_bg_color: 'bg-blue-200 dark:bg-blue-200',
    text_color: 'text-blue-900 dark:text-blue-900',
    descp_color: 'text-blue-800 dark:text-blue-800',
    border_color: 'border-blue-300 dark:border-blue-300',
    plan_name: 'Basic Social',
    plan_descp: 'Perfect for local brands and cafés starting content',
    plan_price: '₹4,990',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Page setup or refresh',
      '2 reels, 2 posts, 4 stories/week',
      'Captions & hashtags',
      'Content growth ideas',
    ],
  },
  {
    plan_bg_color: 'bg-purple-200 dark:bg-purple-200',
    text_color: 'text-purple-900 dark:text-purple-900',
    descp_color: 'text-purple-800 dark:text-purple-800',
    border_color: 'border-purple-300 dark:border-purple-300',
    plan_name: 'Standard Website',
    plan_descp: 'For cafés, brands, and businesses needing a solid web presence',
    plan_price: '₹19,990',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      '5 responsive pages',
      'Mobile-first layout',
      'All Starter features',
      'On-page SEO',
      'Delivery in 10 days',
    ],
  },
  {
    plan_bg_color: 'bg-orange-200 dark:bg-orange-200',
    text_color: 'text-orange-900 dark:text-orange-900',
    descp_color: 'text-orange-800 dark:text-orange-800',
    border_color: 'border-orange-300 dark:border-orange-300',
    plan_name: 'Standard Social',
    plan_descp: 'Great for brands targeting Gen Z with fresh content',
    plan_price: '₹9,990',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      '3 reels, 4 posts, 6 stories/week',
      'Trend research',
      'Sales-focused captions',
      'Creator collab ready',
    ],
  },
  {
    plan_bg_color: 'bg-pink-200 dark:bg-pink-200',
    text_color: 'text-pink-900 dark:text-pink-900',
    descp_color: 'text-pink-800 dark:text-pink-800',
    border_color: 'border-pink-300 dark:border-pink-300',
    plan_name: 'Premium Website',
    plan_descp: 'For premium brands needing advanced features and e-commerce',
    plan_price: '₹49,990',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      '10 custom-designed pages',
      'E-commerce + Payment Gateway',
      'Advanced analytics',
      'Email autoresponder',
      'Social media CTA integration',
    ],
  },
  {
    plan_bg_color: 'bg-green-200 dark:bg-green-200',
    text_color: 'text-green-900 dark:text-green-900',
    descp_color: 'text-green-800 dark:text-green-800',
    border_color: 'border-green-300 dark:border-green-300',
    plan_name: 'Premium Social',
    plan_descp: 'Full-fledged content support for big brands',
    plan_price: '₹12,990',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      '6 reels, 6 posts, 12 stories/week',
      'Trend research + testing',
      'Unlimited revisions',
      'Page positioning strategy',
    ],
  },
]

const faqList: faq[] = [
  {
    faq_que: 'What services does Syntory Media offer?',
    faq_ans:
      'We offer website development, social media content creation, and digital presence consulting for creators and businesses. Our focus is on building fast, aesthetic, and functional online spaces that convert attention into trust.',
  },
  {
    faq_que: 'How long does a typical project take?',
    faq_ans:
      'Project timelines vary by package. Starter websites take around 7 days, Standard sites up to 10, and Premium sites up to 21 days. Social media plans are delivered weekly with consistent updates.',
  },
  {
    faq_que: 'How is pricing structured at Syntory Media?',
    faq_ans:
      'We follow transparent, flat pricing. Each service tier—Starter, Standard, and Premium—comes with clearly defined features and timelines. No hidden costs, just clear outcomes.',
  },
  {
    faq_que: 'Do you offer ongoing support after project completion?',
    faq_ans:
      'Absolutely. We offer post-launch support, content updates, and optimization help based on your package. We’re here to ensure your digital presence stays alive and relevant.',
  },
  {
    faq_que: 'How do you handle content for social media clients?',
    faq_ans:
      'We create reels, posts, and stories based on your brand tone, current trends, and marketing goals. We also handle captions, hashtags, growth ideas, and UGC-style content tailored to your target audience.',
  },
  {
    faq_que: 'What makes Syntory Media different from other agencies?',
    faq_ans:
      'We’re creator-founded, content-native, and design-led. We prioritize clarity, authenticity, and functionality in every project—whether it’s for a brand or an independent creator.',
  },
]

const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/web.svg',
    dark_icon: '/images/home/achievement/web.svg',
    sub_title: 'Web Presence Strategy',
    title: 'Design + Development of high-conversion business & creator websites.',
    year: 'Built for Modern Brands',
    url: '', // Added missing url property
  },
  {
    icon: '/images/home/achievement/content.svg',
    dark_icon: '/images/home/achievement/content.svg',
    sub_title: 'Content Creation Systems',
    title: 'Reel production, social calendar, and audience-first storytelling.',
    year: 'Real-Time Relevance',
    url: '', // Added missing url property
  },
  {
    icon: '/images/home/achievement/growth.svg',
    dark_icon: '/images/home/achievement/growth.svg',
    sub_title: 'Growth Experiments',
    title: 'A/B testing, analytics tracking, and platform-specific engagement tactics.',
    year: 'Evolving by Design',
    url: '', // Added missing url property
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
