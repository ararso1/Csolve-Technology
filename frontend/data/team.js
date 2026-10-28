export const teamMembers = [
  {
    slug: "hayu-usmail-ibro",
    name: "Eng. Hayu Usmail Ibro",
    shortName: "Eng. Hayu Usmail Ibro",
    role: "Founder & General Manager",
    department: "Leadership & Strategy",
    image: "/assets/img/team/hayu.png",
    email: "info@csolvetechnology.com",
    phone: "+251 986828384",
    bio: "Eng. Hayu Usmail Ibro is Founder and General Manager of Csolve Technology. A young and energetic leader, he drives the company’s vision to build more than systems — delivering practical technology that creates lasting value for businesses and communities across Ethiopia and Africa.",
    focus: [
      "Company vision and strategic growth",
      "Client partnerships and institutional relationships",
      "Community impact and organizational leadership",
    ],
    skills: [
      { title: "Leadership & Strategy", value: 95 },
      { title: "Business Development", value: 90 },
      { title: "Technology Vision", value: 88 },
    ],
  },
  {
    slug: "ararso-abdurhaman-alisho",
    name: "Eng. Ararso Abdurhaman Alisho",
    shortName: "Eng. Ararso Abdurhaman Alisho",
    role: "Founder, Deputy Manager & CTO",
    department: "Technology & Innovation",
    image: "/assets/img/team/ararso.png",
    email: "info@csolvetechnology.com",
    phone: "+251 986828384",
    bio: "Eng. Ararso Abdurhaman Alisho is Founder, Deputy Manager, and Chief Technology Officer at Csolve Technology. Young, energetic, and deeply technical, he leads product engineering and innovation across software, ERP, AI, infrastructure, and digital transformation projects.",
    focus: [
      "Software architecture and technical excellence",
      "AI, ERP, and digital product delivery",
      "Engineering culture and innovation",
    ],
    skills: [
      { title: "Software Engineering", value: 96 },
      { title: "AI & Systems Design", value: 92 },
      { title: "Technical Leadership", value: 90 },
    ],
  },
  {
    slug: "abdulaziz-ahmad-jemal",
    name: "Mr. Abdulaziz Ahmad Jemal",
    shortName: "Abdulaziz Ahmad Jemal",
    role: "Founder & Deputy Manager",
    department: "Operations & Growth",
    image: "/assets/img/team/abdulasis.png",
    email: "info@csolvetechnology.com",
    phone: "+251 986828384",
    bio: "Mr. Abdulaziz Ahmad Jemal is Founder and Deputy Manager at Csolve Technology. A young and energetic founder, he supports operational excellence, partnerships, and growth — helping the company deliver reliable solutions while strengthening community and business impact.",
    focus: [
      "Operations and delivery coordination",
      "Partnerships and organizational growth",
      "Client success and service excellence",
    ],
    skills: [
      { title: "Operations Management", value: 92 },
      { title: "Partnership Development", value: 90 },
      { title: "Client Success", value: 88 },
    ],
  },
];

export const getTeamMemberBySlug = (slug) =>
  teamMembers.find((member) => member.slug === slug);
