import {
  BarChart3,
  FileText,
  Megaphone,
  Search,
  Target,
  Users,
} from "lucide-react";

export const services = [
  {
    id: 1,
    number: "01",
    title: "Research & Insights",
    shortTitle: "Research",
    description:
      "Turn technology trends, market intelligence and buyer behavior into actionable insights for your business.",
    icon: Search,
    features: [
      "Market Research",
      "Technology Insights",
      "Buyer Intelligence",
      "Industry Reports",
    ],
  },

  {
    id: 2,
    number: "02",
    title: "Content & Editorial",
    shortTitle: "Content",
    description:
      "Create meaningful technology content that educates your audience and builds credibility with decision-makers.",
    icon: FileText,
    features: [
      "Thought Leadership",
      "Editorial Content",
      "Whitepapers",
      "eBooks & Reports",
    ],
  },

  {
    id: 3,
    number: "03",
    title: "Demand Generation",
    shortTitle: "Demand Gen",
    description:
      "Reach relevant B2B audiences and turn content engagement into qualified business opportunities.",
    icon: Target,
    features: [
      "Lead Generation",
      "Account-Based Marketing",
      "Campaign Management",
      "Audience Targeting",
    ],
  },

  {
    id: 4,
    number: "04",
    title: "Digital Marketing",
    shortTitle: "Digital",
    description:
      "Build digital campaigns that connect technology brands with the audiences that matter most.",
    icon: Megaphone,
    features: [
      "Digital Campaigns",
      "Paid Media",
      "Performance Marketing",
      "Campaign Optimization",
    ],
  },

  {
    id: 5,
    number: "05",
    title: "Audience Intelligence",
    shortTitle: "Audience",
    description:
      "Understand your target audience and identify the people and organizations most relevant to your growth.",
    icon: Users,
    features: [
      "Audience Segmentation",
      "Buyer Personas",
      "Intent Signals",
      "Audience Research",
    ],
  },

  {
    id: 6,
    number: "06",
    title: "Performance Analytics",
    shortTitle: "Analytics",
    description:
      "Measure campaign performance and transform marketing data into insights that improve future decisions.",
    icon: BarChart3,
    features: [
      "Campaign Analytics",
      "Lead Analytics",
      "Performance Reports",
      "ROI Tracking",
    ],
  },
];

export default services;