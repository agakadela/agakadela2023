import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc from 'rehype-toc';

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: {
      type: 'string',
    },
    position: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    subtitle: {
      type: 'string',
      description: 'The subtitle of the post',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The image of the post',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The publishAt date of the post',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The category of the post',
      required: true,
    },
    author: {
      type: 'nested',
      of: Author,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    isFeatured: {
      type: 'boolean',
      default: false,
    },
    isArchived: {
      type: 'boolean',
      default: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      [
        rehypeToc,
        {
          headings: ['h2', 'h3'],
          customizeTOC: (tocNodes) => {
            return {
              type: 'element',
              tagName: 'div',
              properties: {
                className: ['toc-container'],
              },
              children: [
                {
                  type: 'element',
                  tagName: 'h2',
                  properties: {
                    className: ['toc-heading-text'],
                  },
                  children: [
                    {
                      type: 'text',
                      value: 'Table of Contents',
                    },
                  ],
                },
                tocNodes,
              ],
            };
          },
        },
      ],
    ],
  },
});
