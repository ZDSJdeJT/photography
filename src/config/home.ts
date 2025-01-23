import { Bird, Scan, Smile } from 'lucide-react';
import {
  RiBodyScanFill,
  RiBookmark3Fill,
  RiCamera2Fill,
  RiCamera3Fill,
  RiCameraFill,
  RiEditCircleFill,
  RiGalleryFill,
  RiPlug2Fill,
  RiServiceFill,
} from 'react-icons/ri';

import projectImage1 from '@/assets/home/gallery/1.png';
import projectImage2 from '@/assets/home/gallery/2.png';
import projectImage3 from '@/assets/home/gallery/3.png';
import projectImage4 from '@/assets/home/gallery/4.png';
import projectImage5 from '@/assets/home/gallery/5.png';
import projectImage6 from '@/assets/home/gallery/6.png';
import projectImage7 from '@/assets/home/gallery/7.png';
import projectImage8 from '@/assets/home/gallery/8.png';
import projectImage9 from '@/assets/home/gallery/9.png';
import projectImage10 from '@/assets/home/gallery/10.png';
import projectImage11 from '@/assets/home/gallery/11.png';
import reviewImage1 from '@/assets/home/reviews/1.png';
import reviewImage2 from '@/assets/home/reviews/2.png';
import reviewImage3 from '@/assets/home/reviews/3.png';
import reviewImage4 from '@/assets/home/reviews/4.png';
import reviewImage5 from '@/assets/home/reviews/5.png';
import reviewImage6 from '@/assets/home/reviews/6.png';

export const marks = [
  {
    description: '年经验',
    endCountNum: 12,
    endCountText: '+',
    icon: RiBookmark3Fill,
  },
  {
    description: '粉丝',
    endCountNum: 967,
    endCountText: 'k',
    icon: RiBodyScanFill,
  },
  {
    description: '项目',
    endCountNum: 79,
    endCountText: '+',
    icon: RiServiceFill,
  },
];

export const features = [
  {
    name: '摄影',
    description:
      '我们的工作室提供专为摄影师设计的功能，包括客户列表、密码保护页面以及作品展示画廊。',
    icon: RiCamera2Fill,
  },
  {
    name: '作品集展示',
    description:
      '通过作品集展示功能，轻松创建精美的画廊，操作简单直观，能让您的作品脱颖而出。',
    icon: RiGalleryFill,
  },
  {
    name: '高度可定制',
    description:
      '这是一个完全灵活的主题，网站的每个元素、页面和功能都可以根据您的需求进行轻松调整。',
    icon: RiEditCircleFill,
  },
  {
    name: '免费插件',
    description:
      '附赠两个强大的免费插件：滑块插件和直观的拖拽式可视化页面构建器。',
    icon: RiPlug2Fill,
  },
];

export const services = [
  {
    icon: Smile,
    name: '肖像摄影',
    description:
      '我们专注于捕捉人们最自然、最动人的瞬间，展示每个个体的独特魅力和情感。无论是个人肖像还是家庭合影，我们都致力于创造出充满温度与故事感的影像。',
  },
  {
    icon: Scan,
    name: '风景摄影',
    description:
      '在广袤的自然景观中，我们为您呈现大自然最壮丽与宁静的瞬间。每一张风景照片都展现了自然之美，带您领略世界各地的奇观与人文景致。',
  },
  {
    icon: Bird,
    name: '生活方式摄影',
    description:
      '通过生活方式摄影，我们捕捉日常生活中的美好瞬间，传递自由、轻松和自然的生活态度。无论是日常场景还是旅行冒险，我们记录下你生活中的每个动人瞬间。',
  },
];

export const projects = [
  {
    image: projectImage1,
    category: '肖像摄影',
    name: '2024年2月11日',
    description: '一张充满情感的肖像，捕捉人物内心世界的真实与自然。',
    link: '/',
    codepen: '/',
  },
  {
    image: projectImage2,
    category: '模特摄影',
    name: '2024年2月11日',
    description: '时尚感十足的模特拍摄，展示了独特的个性与魅力。',
    link: '/',
    codepen: '/',
  },
  {
    image: projectImage3,
    category: '风景摄影',
    name: '2024年2月11日',
    description: '在自然光线下捕捉的壮丽风景，展现大自然的神秘与宏伟。',
    link: '/',
    codepen: '/',
  },
  {
    image: projectImage4,
    category: '企业形象摄影',
    name: '2024年2月11日',
    description: '为企业打造的专业形象摄影，展现了品牌的实力与独特气质。',
    link: '/',
    codepen: '/',
  },
  {
    image: projectImage5,
    category: '时尚摄影',
    name: '2024年2月11日',
    description: '一组富有创意的时尚大片，捕捉现代潮流的精髓与美学。',
    link: '/',
    codepen: '/',
  },
  {
    image: projectImage6,
    category: '时尚摄影',
    name: '2024年2月11日',
    description: '这组照片将时尚与艺术相结合，展示出前卫与经典的碰撞。',
    link: '/',
    codepen: '/',
  },
  {
    image: projectImage7,
    category: '企业形象摄影',
    name: '2024年2月11日',
    description: '通过精细的拍摄与后期制作，传递企业文化和价值观。',
    link: '/',
    codepen: '/',
  },
  {
    image: projectImage8,
    category: '模特摄影',
    name: '2024年2月11日',
    description: '每一张模特摄影作品都展示了自信与优雅的完美结合。',
    link: '/',
    codepen: '/',
  },
  {
    image: projectImage9,
    category: '模特摄影',
    name: '2024年2月11日',
    description: '在极简背景下，突出模特的气质与服装的设计感。',
    link: '/',
    codepen: '/',
  },
  {
    image: projectImage10,
    category: '模特摄影',
    name: '2024年2月11日',
    description: '动感十足的模特拍摄，展现了现代时尚与运动的结合。',
    link: '/',
    codepen: '/',
  },
  {
    image: projectImage11,
    category: '模特摄影',
    name: '2024年2月11日',
    description: '在强烈光影对比下，突显人物的轮廓与情绪变化。',
    link: '/',
    codepen: '/',
  },
];

export const reviews = [
  {
    image: reviewImage1,
    name: '马克',
    job: '主管',
    description:
      '团队非常专业，合作过程中每个环节都安排得井井有条。从开始的沟通到最终的交付，大家都展现了极高的效率和专业性，尤其是在解决问题时总是能迅速找到最佳方案。',
  },
  {
    image: reviewImage2,
    name: '李华',
    job: '经理',
    description:
      '我与这个团队合作已有多年，每一次的合作都让我深刻感受到他们的高效和专业。无论面对任何挑战，他们都能保持冷静，快速响应并提供高质量的解决方案。',
  },
  {
    image: reviewImage3,
    name: '王涛',
    job: '总监',
    description:
      '每次与这个团队的合作都非常愉快。他们不仅注重细节，而且总能在规定的时间内完成任务，质量也非常有保障。他们的沟通能力和团队协作非常出色。',
  },
  {
    image: reviewImage4,
    name: '赵丽',
    job: '助理',
    description:
      '与团队的每一次互动都让我感到非常满意。无论是工作上的细节处理，还是整体项目的进展管理，都做得非常到位。他们的服务态度非常好，总是非常耐心地解答我的问题。',
  },
  {
    image: reviewImage5,
    name: '张伟',
    job: '工程师',
    description:
      '这个团队不仅有很高的技术水平，而且在项目推进过程中总是保持高效的沟通。每当出现技术问题时，他们能够迅速响应并提出可行的解决方案，极大地提升了项目的推进效率。',
  },
  {
    image: reviewImage6,
    name: '周婷',
    job: '设计师',
    description:
      '团队在创意设计方面总是给我带来惊喜，他们不仅能够理解我们的需求，还能提出非常创新的解决方案。每次看到他们的设计稿，我都能感受到他们对细节的专注和对质量的追求。',
  },
];

export const faq = [
  {
    question: '你们的工作室提供哪些服务？',
    answer:
      '我们工作室提供多种创意服务，包括品牌设计、网页设计、UI/UX 设计、平面设计以及营销推广等。我们根据客户需求量身定制解决方案，致力于帮助品牌塑造独特形象，提升市场竞争力。',
  },
  {
    question: '如何与工作室合作？',
    answer:
      '您可以通过我们的官方网站、电子邮件或社交媒体联系我们。我们的团队会与您沟通需求，了解您的项目背景，并提供具体的合作方案与报价。',
  },
  {
    question: '项目交付的时间一般是多久？',
    answer:
      '项目的交付时间会根据项目的规模和复杂度而有所不同。通常，我们会在项目启动时与客户明确交付时间，确保在合理的时间内完成高质量的工作。',
  },
  {
    question: '工作室是否提供后期维护和支持？',
    answer:
      '是的，我们为客户提供后期维护和支持服务。无论是网站更新、内容管理还是设计调整，我们都可以根据客户的需求提供持续的服务。',
  },
];

export const articles = [
  {
    name: '如何提升你的摄影技巧',
    description:
      '了解如何通过基本的摄影技巧和高级技巧，提升你在各种拍摄场景下的表现。从构图到灯光的运用，每个细节都决定了照片的质量。',
    icon: RiCamera3Fill,
  },
  {
    name: '捕捉完美的婚礼瞬间',
    description:
      '婚礼是一个充满情感和美好瞬间的时刻。本文分享了如何捕捉婚礼中的每个珍贵瞬间，以及如何通过摄影创造出永恒的回忆。',
    icon: RiCameraFill,
  },
];
