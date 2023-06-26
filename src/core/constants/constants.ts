import { General } from "../../models";

import equipment from "../../assets/images/benefits/equipment.png";
import fast from "../../assets/images/benefits/fast.svg";
import reputation from "../../assets/images/benefits/reputation.svg";
import materials from "../../assets/images/benefits/materials.svg";
import technicans from "../../assets/images/benefits/technicans.svg";
import quality from "../../assets/images/benefits/quality.svg";

import taking from "../../assets/images/process/taking.svg";
import install from "../../assets/images/process/install.svg";
import protect from "../../assets/images/process/protect.svg";
import sand from "../../assets/images/process/sand.svg";
import materials_pro from "../../assets/images/process/materials.svg";
import cleaning from "../../assets/images/process/cleaning.svg";

export const benefits: General.Benefits[] = [
  {
    id: 5,
    title: "Experienced technicians",
    desc: "High level of knowledge and attention to details. Your satisfaction is top priority",
    icon: technicans,
  },
  {
    id: 1,
    title: "Professional equipment",
    desc: "Doors and cabinet base will be sprayed (no brushes and rollers used)",
    icon: equipment,
  },
  {
    id: 2,
    title: "Fast work",
    desc: "Latest modern technologies  allow us to finish the project in 2-4 days ",
    icon: fast,
  },
  {
    id: 3,
    title: "Excellent reputation",
    desc: "Only 5 star reviews. More than 300+ highly satisfied customers",
    icon: reputation,
  },
  {
    id: 4,
    title: "The proper materials",
    desc: "Products created for cabinet manufacturing industries (no cheap store paint)",
    icon: materials,
  },
  {
    id: 6,
    title: "Top notch quality",
    desc: "Factory-like smooth, durable, water, stains and heat resistant finish guaranteed",
    icon: quality,
  },
];

export const processes: General.Benefits[] = [
  {
    id: 1,
    title: "Taking off doors and drawer fronts",
    desc: "We will take off all hardware and hinges, and take off all doors and drawer fronts from the frame.",
    icon: taking,
  },
  {
    id: 2,
    title: "doors, drawer fronts and cabinet frame cleaning",
    desc: "We will properly clean the cabinets with a professional cleaning solution to remove all grease and grime.",
    icon: cleaning,
  },
  {
    id: 3,
    title: "Scuff sanding down the existing finish",
    desc: "We will sand down the existing finish before refinishing to give the new finish a good surface to grip.",
    icon: sand,
  },
  {
    id: 4,
    title: "Protecting and covering",
    desc: "We will protect and cover the insides of your cabinets, walls, floors, ceiling, backsplash, countertop, and any other surfaces not to be painted.",
    icon: protect,
  },
  {
    id: 5,
    title: "Applying high-quality materials",
    desc: "We will apply high-quality primer, lightly sand to make sure primer is stuck perfectly to the surface, and apply top coat with a professional HVLP sprayer.",
    icon: materials_pro,
  },
  {
    id: 6,
    title: "Doors and drawer fronts installation",
    desc: "We will install doors, drawer fronts, make new holes for the new hardware if requested, and take care of the cleanup once we’ve brought your project to completion.",
    icon: install,
  },
];

export const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};
