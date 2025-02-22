import type { MarkdownOptions } from 'vitepress'

/**
 * vitepress markdown config
 * @see https://vitepress.vuejs.org/config/app-configs.html#markdown
 */
export const markdownConfig: MarkdownOptions = {
  lineNumbers: true,
  theme: 'vitesse-dark',
  toc: {
    level: [2, 3, 4]
  }
}
