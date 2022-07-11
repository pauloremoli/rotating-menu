import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Menu from "./Menu";

const divStyle = {
  margin: 0,
  display: "flex",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  overflowX: "hidden",
};

const Content = () => {
  return (
    <>
      <div style={divStyle}>
        <h1>Your application</h1>
      </div>

      <div style={divStyle}>
        <h1>Your application 2</h1>
      </div>
    </>
  );
};

export default {
  title: "Rotating Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: <Content />,
  navItems: [
    { text: "Home", link: "/home" },
    { text: "Projects", link: "/projects" },
    { text: "Contact", link: "/contact" },
  ],
};
