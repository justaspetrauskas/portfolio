import React from "react";
import { animated } from "react-spring";
import { AboutMe } from "../../types/types.profile";
import PortableTextComponent from "../PortableText/PortableTextComponent";
import classes from "./article.module.css";

interface ArticleProps {
  index: number;
  article: AboutMe;
  style?: Record<string, any>;
}
const Article = ({ article, index }: ArticleProps) => {
  return (
    <animated.article className={`${classes.container}`}>
      <img
        src={article.iconUrl}
        className={classes.image}
        alt="article-image"
        loading="lazy"
      />
      <div className={`${classes.body}`}>
        <h1>{article.title}</h1>
        <PortableTextComponent portableText={article.text} />
      </div>
    </animated.article>
  );
};

export default Article;

{
  /* <div className="pr-24 flex flex-row items-center justify-end">
                    <img
                      src={item.textIcon.secure_url}
                      alt="profile"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <h2>{item.title}</h2>
                      <PortableTextComponent portableText={item.text} />
                    </div>
                  </div> */
}
