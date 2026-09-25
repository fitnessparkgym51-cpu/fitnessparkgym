import type {
  CmsData,
  FeatureData,
  GalleryImageData,
  LocalizedValue,
  MembershipPlanData,
  ProgramData,
  TestimonialData,
  TrainerData,
} from "./types";

let keyIndex = 0;
const key = () => `default-${keyIndex++}`;

const l = (en: string): LocalizedValue[] => [
  {
    _key: key(),
    _type: "internationalizedArrayStringValue",
    language: "en",
    value: en,
  },
];

const t = (en: string): LocalizedValue[] => [
  {
    _key: key(),
    _type: "internationalizedArrayTextValue",
    language: "en",
    value: en,
  },
];

const image = (path: string) => ({
  asset: {
    _id: `local-${path.replace(/[^a-z0-9]+/gi, "-")}`,
    url: path,
  },
});

const nav = [
  { _key: key(), label: l("Home"), href: "#home" },
  { _key: key(), label: l("Membership"), href: "#membership", badge: "Tk 1000" },
  { _key: key(), label: l("Programs"), href: "#programs" },
  { _key: key(), label: l("Trainers"), href: "#trainers" },
  { _key: key(), label: l("BMI"), href: "#bmi" },
  { _key: key(), label: l("Contact"), href: "#contact" },
];

const contact = {
  phone: "+8801922749473",
  phoneDisplay: "+880 1922-749473",
  whatsapp: "+8801922749473",
  email: "hello@fitnessparkgym.com",
  address: t("Tongi - Kaliganj - Gorashal - Pachdona Road, Tongi, Gazipur"),
  hours: t("Open daily from 7:00 AM to 11:00 PM"),
  mapUrl: "https://maps.google.com/?q=Fitness+Park+Gym+Tongi+Gazipur",
};

const feature = (
  icon: string,
  title: string,
  description: string
): FeatureData => ({
  _key: key(),
  icon,
  title: l(title),
  description: t(description),
});

const programs: ProgramData[] = [
  {
    _id: "program-strength",
    title: l("Strength Training"),
    icon: "dumbbell",
    description: t("Build practical strength with coached compound lifts and progressive training."),
    highlights: ["Free weights", "Personalized plans", "Coach support"],
    image: image("/images/gym-03.jpg"),
    order: 1,
  },
  {
    _id: "program-cardio",
    title: l("Cardio Conditioning"),
    icon: "heart",
    description: t("Improve endurance and burn calories with energizing cardio sessions."),
    highlights: ["Treadmills", "Bikes", "Interval coaching"],
    image: image("/images/gym-05.jpg"),
    order: 2,
  },
  {
    _id: "program-boxing",
    title: l("Boxing & HIIT"),
    icon: "sparkles",
    description: t("Train with high-energy boxing and HIIT sessions for total-body fitness."),
    highlights: ["Boxing", "HIIT", "Core focus"],
    image: image("/images/gym-08.jpg"),
    order: 3,
  },
  {
    _id: "program-yoga",
    title: l("Yoga & Mobility"),
    icon: "users",
    description: t("Reset your body, improve mobility, and develop a sustainable routine."),
    highlights: ["Yoga flow", "Stretching", "Recovery"],
    image: image("/images/gym-11.jpg"),
    order: 4,
  },
];

const trainers: TrainerData[] = [
  {
    _id: "trainer-himel",
    name: "Himal Hossain",
    role: l("Head Coach & Owner"),
    bio: t("Himal helps members build confident habits through thoughtful coaching and consistent support."),
    image: image("/images/Owner dr himel.jpeg"),
    specialties: ["Strength", "Nutrition", "Habit coaching"],
    order: 1,
  },
  {
    _id: "trainer-sadia",
    name: "Sadia Rahman",
    role: l("Fitness Coach"),
    bio: t("Sadia brings an energetic approach to functional training and beginner-friendly fitness."),
    image: image("/images/gym-12.jpg"),
    specialties: ["Functional fitness", "Mobility"],
    order: 2,
  },
  {
    _id: "trainer-rafi",
    name: "Rafi Ahmed",
    role: l("Performance Coach"),
    bio: t("Rafi helps athletes and everyday members turn goals into measurable progress."),
    image: image("/images/gym-15.jpg"),
    specialties: ["Athletic performance", "HIIT"],
    order: 3,
  },
];

const testimonials: TestimonialData[] = [
  {
    _id: "testimonial-1",
    quote: t("The coaches make every session feel welcoming. I feel stronger, healthier, and more energetic."),
    name: "Rakib Hasan",
    role: "Member since 2022",
    rating: 5,
    order: 1,
  },
  {
    _id: "testimonial-2",
    quote: t("A clean, well-equipped gym with a real community feel. My consistency has completely changed."),
    name: "Nusrat Jahan",
    role: "Member since 2023",
    rating: 5,
    order: 2,
  },
  {
    _id: "testimonial-3",
    quote: t("The personalized plan helped me lose weight and feel stronger without overdoing it."),
    name: "Tanvir Alam",
    role: "Member since 2021",
    rating: 5,
    order: 3,
  },
];

const membershipPlans: MembershipPlanData[] = [
  {
    _key: key(),
    name: l("Starter"),
    price: 1000,
    period: "admission",
    description: t("A simple first step with access to the full Fitness Park experience."),
    features: ["Gym floor access", "Basic equipment", "Friendly community"],
    ctaLabel: l("Join Now"),
    ctaHref: "#contact",
  },
  {
    _key: key(),
    name: l("Standard"),
    price: 1000,
    period: "per month",
    description: t("Flexible training for members who want consistency and progress."),
    features: ["Full gym access", "Group sessions", "Progress check-ins"],
    featured: true,
    ctaLabel: l("Start Training"),
    ctaHref: "#contact",
  },
  {
    _key: key(),
    name: l("Premium"),
    price: 2000,
    period: "per month",
    description: t("Extra coaching and premium support for your goals."),
    features: ["Personalized plan", "Unlimited coaching", "Priority support"],
    ctaLabel: l("Go Premium"),
    ctaHref: "#contact",
  },
];

const gallery: GalleryImageData[] = Array.from({ length: 18 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    _key: key(),
    image: image(`/images/gym-${number}.jpg`),
    alt: l(`Fitness Park Gym facility ${index + 1}`),
  };
});

export const defaultCmsData: CmsData = {
  siteSettings: {
    _id: "siteSettings",
    siteName: l("FITNESS PARK GYM"),
    location: l("TONGI, GAZIPUR"),
    established: l("ESTD 2010"),
    logo: image("/images/gym-01.jpg"),
    navigation: nav,
    joinCta: { label: l("JOIN NOW"), href: "#membership" },
    announcement: {
      statusLabel: l("Open Today"),
      hours: l("7:00 AM – 11:00 PM"),
      address: l("Tongi - Kaliganj Rd, Tongi, Gazipur"),
      admissionFee: 1000,
      membershipLabel: l("Combined Men & Women Section"),
    },
    contact,
    socialLinks: [
      { _key: key(), platform: "facebook", label: l("Facebook"), url: "https://facebook.com" },
      { _key: key(), platform: "instagram", label: l("Instagram"), url: "https://instagram.com" },
      { _key: key(), platform: "youtube", label: l("YouTube"), url: "https://youtube.com" },
    ],
    footer: {
      tagline: t("Train stronger, feel better, and build a routine that lasts."),
      copyright: l("© 2026 Fitness Park Gym. All rights reserved."),
      links: nav,
    },
    seo: {
      title: l("Fitness Park Gym | Stronger Every Day in Tongi, Gazipur"),
      description: t("Fitness Park Gym in Tongi, Gazipur offers strength training, cardio, boxing, yoga, expert coaching, and a welcoming fitness community."),
      shareImage: image("/images/gym-18.jpg"),
    },
  },
  homepage: {
    _id: "homepage",
    hero: {
      eyebrow: l("Your fitness journey starts here"),
      title: l("Fitness Park Gym"),
      accent: l("Stronger Every Day"),
      description: t("A modern fitness space in Tongi for strength, cardio, wellness, and a community that keeps you moving."),
      primaryCta: { label: l("Join Now"), href: "#membership" },
      secondaryCta: { label: l("Explore Programs"), href: "#programs" },
      backgroundImage: image("/images/gym-18.jpg"),
    },
    stats: [
      { _key: key(), value: "10+", label: l("Years strong") },
      { _key: key(), value: "500+", label: l("Happy members") },
      { _key: key(), value: "7/7", label: l("Open daily") },
    ],
    about: {
      eyebrow: l("About Fitness Park Gym"),
      title: l("Built for progress, not pressure"),
      description: t("Since 2010, Fitness Park Gym has helped people in Tongi build healthier habits through expert coaching, practical training, and a welcoming space for men and women."),
      image: image("/images/Owner dr himel.jpeg"),
      badge: l("Since 2010"),
      badgeCaption: t("A local gym built around real progress."),
      highlights: [
        feature("heart", "Coached by experts", "Get guidance from coaches who care about your progress."),
        feature("shield", "Clean and welcoming", "Train in a comfortable environment with room to grow."),
        feature("sparkles", "Results that last", "Build a routine that supports your life beyond the gym."),
      ],
    },
    bmi: {
      eyebrow: l("BMI calculator"),
      title: l("A simple starting point"),
      description: t("Use this estimate as a conversation starter with one of our coaches, not a medical diagnosis."),
      metricLabel: l("Metric units"),
      privacyLabel: l("Private in your browser"),
      maleLabel: l("Male"),
      femaleLabel: l("Female"),
      heightLabel: l("Height"),
      weightLabel: l("Weight"),
      estimateLabel: l("Your estimate"),
      underweightLabel: l("Underweight"),
      healthyLabel: l("Healthy"),
      overweightLabel: l("Overweight"),
      obeseLabel: l("Obese"),
      underweightDiet: t("Add nutrient-dense meals and strength training with coach guidance."),
      healthyDiet: t("Keep your balanced routine and stay consistent."),
      overweightDiet: t("Focus on steady cardio, movement, and a sustainable nutrition plan."),
      coachNote: t("Talk to one of our coaches for a plan that fits you."),
    },
    features: {
      eyebrow: l("Why Fitness Park"),
      title: l("Everything you need to feel your best"),
      description: t("From your first workout to your strongest day, our gym brings the essentials together."),
      items: [
        feature("dumbbell", "Modern equipment", "Quality equipment for strength, cardio, and functional training."),
        feature("users", "Expert coaching", "Get practical support from people who know your goals."),
        feature("chart", "Progress that motivates", "Small wins add up to a routine you can be proud of."),
        feature("heart", "Men and welcome", "A friendly, inclusive space for the whole community."),
      ],
    },
    programs: {
      eyebrow: l("Training programs"),
      title: l("Choose a path that fits your goals"),
      description: t("Start where you are and choose the training style that keeps you motivated."),
      items: programs,
    },
    memberships: {
      eyebrow: l("Membership"),
      title: l("Simple plans. Real momentum."),
      description: t("Choose a plan that fits your routine, with transparent prices and no long-term pressure."),
      plans: membershipPlans,
    },
    trainers: {
      eyebrow: l("Meet the team"),
      title: l("Coaches who care about your progress"),
      description: t("Get the guidance, motivation, and accountability to keep moving forward."),
      items: trainers,
    },
    testimonials: {
      eyebrow: l("Member stories"),
      title: l("Progress worth celebrating"),
      items: testimonials,
    },
    gallery: {
      eyebrow: l("Inside the gym"),
      title: l("A space made for your best work"),
      images: gallery,
    },
    contact: {
      eyebrow: l("Contact"),
      title: l("Ready to take the next step?"),
      description: t("Come see the gym, ask a question, or start your membership today."),
      contact,
    },
    faq: {
      eyebrow: l("FAQ"),
      title: l("Questions, answered"),
      items: [
        { _key: key(), question: l("What are your opening hours?"), answer: t("We are open every day from 7:00 AM to 11:00 PM.") },
        { _key: key(), question: l("Do you offer coaching?"), answer: t("Yes. Our coaches can help you start, build a plan, and stay accountable.") },
        { _key: key(), question: l("Is the gym suitable for beginners?"), answer: t("Absolutely. We welcome beginners and can help you learn the basics safely.") },
        { _key: key(), question: l("Where are you located?"), answer: t("We are on Kaliganj–Gorashal–Pachdona Road in Tongi, Gazipur.") },
        { _key: key(), question: l("How do membership plans work?"), answer: t("Choose the plan that matches your routine and speak with our team to get started.") },
        { _key: key(), question: l("Can I train at the gym during the day?"), answer: t("Yes, members can train during the posted opening hours.") },
      ],
    },
    bottomCta: {
      title: l("Your stronger self is waiting"),
      description: t("Join Fitness Park Gym and make your next step today."),
      primaryCta: { label: l("Join Now"), href: "#membership" },
    },
    seo: {
      title: l("Fitness Park Gym | Stronger Every Day in Tongi, Gazipur"),
      description: t("Fitness Park Gym in Tongi, Gazipur offers strength training, cardio, boxing, yoga, expert coaching, and a welcoming fitness community."),
      shareImage: image("/images/gym-18.jpg"),
    },
  },
};
