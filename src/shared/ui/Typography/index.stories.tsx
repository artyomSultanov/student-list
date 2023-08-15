import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./ui";

const meta = {
  title: "shared/Typography",
  component: Typography,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  children: "Какой-то текст",
};

export const Default: Story = {
  render: (args) => <Typography {...args} />,
  args: defaultArgs,
};

export const BlueText: Story = {
  render: (args) => <Typography {...args} />,
  args: {
    ...defaultArgs,
    color: "blue",
  },
};

export const AlphaBlueText: Story = {
  render: (args) => <Typography {...args} />,
  args: {
    ...defaultArgs,
    color: "alphaBlue",
  },
};

export const VariantB40: Story = {
  render: (args) => <Typography {...args} />,
  args: {
    ...defaultArgs,
    variant: "b40",
  },
};

export const VariantR16: Story = {
  render: (args) => <Typography {...args} />,
  args: {
    ...defaultArgs,
    variant: "r16",
  },
};

export const VariantM16: Story = {
  render: (args) => <Typography {...args} />,
  args: {
    ...defaultArgs,
    variant: "m16",
  },
};

export const VariantM20: Story = {
  render: (args) => <Typography {...args} />,
  args: {
    ...defaultArgs,
    variant: "m20",
  },
};

export const VariantFont12: Story = {
  render: (args) => <Typography {...args} />,
  args: {
    ...defaultArgs,
    variant: "font12",
  },
};
