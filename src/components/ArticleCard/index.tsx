import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'gatsby';

import Pill from 'components/Pill';
import { BlogPost, CategoryColors } from 'lib/types';
import { getCategoryColor } from 'lib/utils';

const ArticleCard: React.FC<BlogPost> = ({ frontmatter, fields }) => {
  return (
    <div>
      <Pill
        color={getCategoryColor(frontmatter.category.slug) as CategoryColors}
      >
        {frontmatter.category.label}
      </Pill>
      <Link to={frontmatter.path} className="block">
        <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
          {frontmatter.title}
        </h3>
        <p className="mt-3 text-base leading-6 text-gray-500">
          {frontmatter.excerpt}
        </p>
      </Link>
      <div className="mt-6 flex items-center">
        <div className="flex text-sm leading-5 text-gray-500">
          <time dateTime="2020-03-16">
            {dayjs(frontmatter.date).format('MMM D, YYYY')}
          </time>
          <span className="mx-1">&middot;</span>
          <span>{fields?.readingTime?.text}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
