export const partnerCategories = [
  { id: "all", label: "All Partners" },
  { id: "government-public", label: "Government / Public" },
  { id: "private-sector", label: "Private Sector" },
  { id: "ngos", label: "NGOs" },
];

export const partners = [
  {
    id: "mint",
    name: "Ministry of Innovation and Technology",
    location: "Ethiopia",
    category: "government-public",
  },
  {
    id: "east-oromia-zone",
    name: "East Oromia Zone",
    location: "Oromia",
    category: "government-public",
  },
  {
    id: "east-oromia-education",
    name: "East Oromia Zone Education Office",
    location: "Oromia",
    category: "government-public",
  },
  {
    id: "dire-dawa",
    name: "Dire Dawa Administration",
    location: "Dire Dawa",
    category: "government-public",
  },
  {
    id: "oromia-innovation",
    name: "Oromia Innovation and Technology",
    location: "Oromia",
    category: "government-public",
  },
  {
    id: "chiro-city",
    name: "Chiro City Administration",
    location: "Chiro City",
    category: "government-public",
  },
  {
    id: "mechara-mechata",
    name: "Mechara-Mechata City Administration",
    location: "Mechara-Mechata City",
    category: "government-public",
  },
  {
    id: "galamso-city",
    name: "Galamso City Administration",
    location: "Galamso City",
    category: "government-public",
  },
  {
    id: "eaai",
    name: "Ethiopian Artificial Intelligence Institute",
    location: "Ethiopia",
    category: "government-public",
  },
  {
    id: "haramaya",
    name: "Haramaya University",
    location: "Ethiopia",
    category: "government-public",
  },
  {
    id: "african-holding",
    name: "African Holding Group",
    location: "Addis Ababa",
    category: "private-sector",
  },
  {
    id: "rammiss-bank",
    name: "Rammiss Bank",
    location: "Addis Ababa",
    category: "private-sector",
  },
  {
    id: "birra-group",
    name: "Birra Coffee and Birra Group",
    location: "Addis Ababa",
    category: "private-sector",
  },
  {
    id: "efnan",
    name: "Efnan Business PLC",
    location: "Addis Ababa",
    category: "private-sector",
  },
  {
    id: "aur-trading",
    name: "AUR Trading PLC",
    location: "Addis Ababa",
    category: "private-sector",
  },
  {
    id: "dr-tuji",
    name: "Dr Tuji Medium Clinic",
    location: "Chiro City",
    category: "private-sector",
  },
  {
    id: "dr-ayan",
    name: "Dr Ayan Specialty Dental Clinic",
    location: "Ethiopia",
    category: "private-sector",
  },
  {
    id: "mfm",
    name: "MFM General Contractor",
    location: "Ethiopia",
    category: "private-sector",
  },
  {
    id: "neqra",
    name: "Neqra Quran Learning Center",
    location: "Ethiopia",
    category: "private-sector",
  },
  {
    id: "daro-labu-realestate",
    name: "Daro Labu Real Estate",
    location: "Ethiopia",
    category: "private-sector",
  },
  {
    id: "aynage",
    name: "Aynage Child and Family Development Organisation",
    location: "Central Ethiopia Region",
    category: "ngos",
  },
  {
    id: "oromia-islamic-affairs",
    name: "Oromia Islamic Affairs Supreme Council",
    location: "Oromia",
    category: "ngos",
  },
];

export const getPartnerInitials = (name) => {
  const words = name
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
};

export const getCategoryLabel = (categoryId) => {
  const match = partnerCategories.find((item) => item.id === categoryId);
  return match ? match.label : categoryId;
};

export const getPartnersByCategory = (activeCategory = "all") => {
  const visibleCategories = partnerCategories.filter(
    (item) => item.id !== "all"
  );

  return visibleCategories
    .filter((item) => activeCategory === "all" || item.id === activeCategory)
    .map((item) => ({
      category: item.id,
      label: item.label,
      items: partners.filter((partner) => partner.category === item.id),
    }))
    .filter((group) => group.items.length > 0);
};
