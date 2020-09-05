import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'gatsby';

import Pill from 'components/Pill';
import { BlogPost, CategoryColors } from 'lib/types';
import { getCategoryColor } from 'lib/utils';

const ArticlePreview: React.FC<BlogPost> = ({ frontmatter, fields }) => {
  return (
    <article
      key={frontmatter.path}
      className="pb-16 mb-16 border-b border-gray-200"
    >
      <Pill
        color={getCategoryColor(frontmatter.category.slug) as CategoryColors}
      >
        {frontmatter.category.label}
      </Pill>
      <Link to={frontmatter.path}>
        <h2 className="text-xl lg:text-3xl font-extrabold pt-3 pb-3 text-gray-900 leading-tight">
          {frontmatter.title}
        </h2>
        <div className="text-gray-400 text-md leading-tight pb-6">
          <time dateTime="2020-03-16">
            {dayjs(frontmatter.date).format('MMM D, YYYY')}
          </time>
          <span className="mx-1">&middot;</span>
          <span>{fields?.readingTime?.text}</span>
        </div>
      </Link>
      <div className="prose prose-lg text-gray-500">{frontmatter.excerpt}</div>
    </article>
  );
};

export default ArticlePreview;
