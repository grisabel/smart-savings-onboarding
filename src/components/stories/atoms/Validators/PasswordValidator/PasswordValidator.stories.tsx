import type { Meta, StoryObj } from "@storybook/react";

import PasswordValidator from "./PasswordValidator";

const meta = {
  title: "SmartSavings/atoms/Validator/PasswordValidator",
  component: PasswordValidator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordValidator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordValidatorExample: Story = {
  args: {
    lenght: false,
    lowercase: false,
    number: false,
    specialChar: false,
    uppercase: true,
    equals: false,
  },
};
