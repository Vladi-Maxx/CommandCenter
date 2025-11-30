/**
 * Tool and Tab data configuration
 *
 * To add a new tool:
 * 1. Add SVG logo to public/logos/
 * 2. Add object to the appropriate tab's tools array
 *
 * Example:
 * { id: 'mytool', name: 'My Tool', url: 'https://mytool.com', logo: 'mytool.svg' }
 */

export interface Tool {
  id: string;
  name: string;
  url: string;
  logo: string;
  description?: string;
}

export interface Tab {
  id: string;
  label: string;
  tools: Tool[];
  placeholderCount?: number;
}

export const tabs: Tab[] = [
  {
    id: 'ai-chatbots',
    label: 'AI Chatbots',
    tools: [
      {
        id: 'claude',
        name: 'Claude',
        url: 'https://claude.ai',
        logo: 'claude.svg',
        description: 'Anthropic AI Assistant'
      },
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
        logo: 'chatgpt.svg',
        description: 'OpenAI ChatGPT'
      },
      {
        id: 'gemini',
        name: 'Gemini',
        url: 'https://gemini.google.com',
        logo: 'gemini.svg',
        description: 'Google Gemini'
      },
      {
        id: 'grok',
        name: 'Grok',
        url: 'https://grok.x.ai',
        logo: 'grok.svg',
        description: 'xAI Grok'
      },
      {
        id: 'aistudio',
        name: 'AI Studio',
        url: 'https://aistudio.google.com',
        logo: 'aistudio.svg',
        description: 'Google AI Studio'
      },
      {
        id: 'notebooklm',
        name: 'NotebookLM',
        url: 'https://notebooklm.google.com',
        logo: 'notebooklm.svg',
        description: 'Google NotebookLM'
      },
    ]
  },
  {
    id: 'image-generators',
    label: 'Image Gen',
    tools: [],
    placeholderCount: 4
  },
  {
    id: 'work-tools',
    label: 'Work Tools',
    tools: [],
    placeholderCount: 4
  }
];
