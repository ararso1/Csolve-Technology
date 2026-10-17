export const communityIntro = {
  motto: "We Build More Than Systems",
  headline: "Growing With The Community",
  text: "Csolve Technology is more than a technology company. We grow with the community and give back through education, opportunity, and practical social impact across Ethiopia.",
  keyMessage:
    "We build solutions for businesses, create opportunities for young people, support education, and contribute to stronger communities.",
};

export const communityStats = [
  {
    value: "ETB 150M",
    label: "Digital Library Investment",
    note: "East Oromia Zone (ongoing)",
  },
  {
    value: "Education First",
    label: "Student & School Support Focus",
    note: "Books, pens, computers, and awards",
  },
  {
    value: "Community First",
    label: "Volunteer & Social Impact Work",
    note: "Local assistance and outreach",
  },
];

export const initiatives = [
  {
    slug: "digital-library-initiative",
    title: "Digital Library Initiative",
    status: "Ongoing",
    location: "East Oromia Zone",
    image: "/assets/img/community/library.jpg",
    summary:
      "An ongoing digital library project valued at approximately ETB 150 million, aimed at expanding access to education and digital learning resources.",
    description:
      "The Digital Library Initiative is an ongoing community investment designed to expand access to books, digital learning tools, and knowledge resources for learners and communities in East Oromia Zone. It reflects Csolve Technology’s long-term commitment to education and digital capacity.",
    objectives: [
      "Expand access to educational and digital learning resources",
      "Support students, schools, and lifelong learners in the region",
      "Create a lasting community knowledge hub",
    ],
    beneficiaries: [
      "Students and young learners",
      "Schools and educators",
      "Local communities seeking digital access",
    ],
    results:
      "This initiative is ongoing. Progress updates and documented delivery results will continue to be shared as implementation advances.",
  },
  {
    slug: "educational-support",
    title: "Educational Support",
    status: "Ongoing",
    location: "Community outreach programs",
    image: "/assets/img/community/education.jpg",
    summary:
      "Providing exercise books and pens to students who need them so learning is never held back by missing basic school materials.",
    description:
      "Through educational support activities, Csolve Technology helps students access essential learning materials such as exercise books and pens. The goal is simple and practical: remove barriers that stop young people from participating fully in school.",
    objectives: [
      "Support students with essential learning materials",
      "Encourage consistent classroom participation",
      "Show young people that their education matters",
    ],
    beneficiaries: ["Students in need of school supplies", "Families and local schools"],
    results:
      "Support continues through community outreach and school-focused volunteering. Exact distribution volumes are shared as verified program records become available.",
  },
  {
    slug: "supporting-top-students",
    title: "Supporting Top Students",
    status: "Ongoing",
    location: "Academic excellence programs",
    image: "/assets/img/community/students.jpg",
    summary:
      "Rewarding outstanding students with computers to encourage academic excellence and open doors to digital opportunity.",
    description:
      "Csolve Technology recognizes outstanding students by providing computers that help them continue learning, explore technology, and pursue academic excellence with better tools.",
    objectives: [
      "Celebrate academic excellence",
      "Give high-performing students access to digital tools",
      "Inspire more young people to aim higher",
    ],
    beneficiaries: [
      "Top-performing students",
      "Families supporting academic achievement",
    ],
    results:
      "Computer awards are part of our education-focused community support. Verified recipient counts are published as documentation is confirmed.",
  },
  {
    slug: "school-computer-donations",
    title: "School Computer Donations",
    status: "Ongoing",
    location: "Partner schools",
    image: "/assets/img/community/computers.jpg",
    summary:
      "Helping schools access computers and digital learning opportunities so more students can build digital skills.",
    description:
      "By supporting schools with computers and digital learning access, Csolve Technology helps create classrooms where students can gain practical technology exposure and stronger future opportunities.",
    objectives: [
      "Improve school access to computers",
      "Support digital literacy for students",
      "Strengthen learning environments with technology",
    ],
    beneficiaries: ["Schools", "Teachers", "Students"],
    results:
      "School support continues through donation and partnership activities. Confirmed school-level outcomes are updated as records are verified.",
  },
  {
    slug: "community-assistance",
    title: "Community Assistance",
    status: "Ongoing",
    location: "Local communities",
    image: "/assets/img/community/volunteer.jpg",
    summary:
      "Supporting community members with essential needs through volunteer and social-impact activities.",
    description:
      "Beyond technology delivery, Csolve Technology participates in volunteer and social-impact activities that help community members with essential needs. These efforts reflect our belief that growth is meaningful when it is shared.",
    objectives: [
      "Respond to practical community needs",
      "Encourage a culture of volunteering and service",
      "Strengthen relationships between business and community",
    ],
    beneficiaries: [
      "Community members in need",
      "Local volunteer partners",
      "Neighborhood and social groups",
    ],
    results:
      "Assistance is delivered through multiple volunteer and social-impact activities. Specific support stories and verified outcomes are featured as documentation becomes available.",
  },
];

export const featuredInitiatives = initiatives.slice(0, 2);

export const getInitiativeBySlug = (slug) =>
  initiatives.find((item) => item.slug === slug);

export const participateOptions = [
  {
    title: "Individuals",
    text: "Volunteer time, mentor students, support school outreach, or help amplify community campaigns.",
  },
  {
    title: "Organizations",
    text: "Partner with Csolve Technology on education, digital access, and social-impact programs that serve local communities.",
  },
  {
    title: "Sponsors & Donors",
    text: "Support ongoing initiatives such as educational materials, school computers, student awards, and the digital library project.",
  },
];
