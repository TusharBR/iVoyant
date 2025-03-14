import { fn } from '@storybook/test';
import Card from "../components/Card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: "color" },
    bgColor: { control: "color" },
    size: { control: { type: "radio", options: ["small", "medium", "large"] } },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    title: "Senior Backend Engineer",
    price: "$150/hr",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    color: "#000",
    size: "medium",
    bgColor: "#fff",
  },
};

export const LargeCard = {
  args: {
    title: "Frontend Developer",
    price: "$120/hr",
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    color: "#333",
    size: "large",
    bgColor: "#f3f3f3",
  },
};

export const SmallCardWithBlueBg = {
  args: {
    title: "UI/UX Designer",
    price: "$90/hr",
    company: "Adobe",
    logo: "https://download.logo.wine/logo/Adobe_Inc./Adobe_Inc.-Logo.wine.png",
    color: "#fff",
    size: "small",
    bgColor: "#007BFF",
  },
};

export const CardWithoutLogo = {
  args: {
    title: "Full Stack Developer",
    price: "$100/hr",
    company: "StartupX",
    logo: "",
    color: "#000",
    size: "medium",
    bgColor: "#eee",
  },
};
