import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import style from "./aboutMe.module.css";

const components: PortableTextComponents = {
  marks: {
    em: ({ children }) => <em>{children}</em>,
    strong: ({ children }) => <strong>{children}</strong>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    h6: ({ children }) => <h6>{children}</h6>,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

interface PortableTextComponentProps {
  portableText: any;
}

const PortableTextComponent = ({
  portableText,
}: PortableTextComponentProps) => {
  return (
    <div className={style["wrapper"]}>
      <PortableText value={portableText} components={components} />
    </div>
  );
};

export default PortableTextComponent;
