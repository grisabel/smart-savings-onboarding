import type { Meta, StoryObj } from "@storybook/react";

import Logo from "./Logo";

const meta = {
  title: "SmartSavings/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoExample: Story = {
  args: {
    width: 150,
    height: 80,
  },
};
