import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "../components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    color: { control: "color" },
    bgColor: { control: "color" },
    size: { control: { type: "radio", options: ["small", "medium", "large"] } },
  },
} as Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {
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

export const LargeCard: StoryObj<typeof Card> = {
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

export const SmallCardWithBlueBg: StoryObj<typeof Card> = {
  args: {
    title: "UI/UX Designer",
    price: "$90/hr",
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Adobe_Corporate_logo.svg",
    color: "#fff",
    size: "small",
    bgColor: "#007BFF",
  },
};

export const CardWithoutLogo: StoryObj<typeof Card> = {
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
    