export type Tool = { name: string; tag: string; color: string }

export const tools: Tool[] = [
  { name: 'ChatGPT', tag: 'Prompting', color: '#10A37F' },
  { name: 'Claude', tag: 'Reasoning', color: '#D97757' },
  { name: 'Make', tag: 'Automation', color: '#A855F7' },
  { name: 'n8n', tag: 'Agents', color: '#EA4B71' },
  { name: 'Figma', tag: 'UI/UX', color: '#F24E1E' },
  { name: 'Lovable', tag: 'App building', color: '#FF5FA2' },
  { name: 'Cursor', tag: 'AI editor', color: '#E5E7EB' },
]

export type Week = {
  week: string
  title: string
  description: string
  topics: string[]
  project: string
}

export const weeks: Week[] = [
  {
    week: 'Week 1',
    title: 'AI Foundations & Prompt Engineering',
    description:
      'Mental models for LLMs, structured prompting frameworks, and building your first custom GPT and Claude Project.',
    topics: ['Prompt frameworks (RTF, CoT)', 'Custom GPTs & Claude Projects', 'Research & writing workflows'],
    project: 'Project 1: Personal AI research assistant',
  },
  {
    week: 'Week 2',
    title: 'Advanced Prompting & AI for Productivity',
    description: 'Chain prompts, use AI for analysis, spreadsheets and content systems that run your week.',
    topics: ['Multi-step prompt chains', 'Data analysis with ChatGPT', 'Content engines'],
    project: 'Project 2: AI content & analysis toolkit',
  },
  {
    week: 'Week 3',
    title: 'UI/UX Design with AI',
    description:
      'Go from idea to polished interface using Figma AI, design systems and rapid AI-assisted prototyping.',
    topics: ['UX research with AI', 'Figma components & auto layout', 'AI-generated design variations'],
    project: 'Project 3: Mobile app case study',
  },
  {
    week: 'Week 4',
    title: 'Ship Apps Without Code',
    description:
      'Turn designs into working products with Lovable and Cursor — databases, auth, and deploys included.',
    topics: ['Prompt-to-app with Lovable', 'Iterating in Cursor', 'Publishing to the web'],
    project: 'Project 4: Live web app MVP',
  },
  {
    week: 'Week 5',
    title: 'Workflow Automation & AI Agents',
    description:
      'Automate real business processes in Make and n8n: lead routing, email triage, reporting and AI agents.',
    topics: ['Triggers, routers & webhooks', 'AI agents in n8n', 'Error handling & monitoring'],
    project: 'Project 5: End-to-end business automation',
  },
  {
    week: 'Week 6',
    title: 'Capstone Project & Career Launch',
    description:
      'Combine everything into a capstone, polish your portfolio, and present at Demo Day to hiring partners.',
    topics: ['Capstone build sprint', 'Portfolio & LinkedIn review', 'Mock interviews & referrals'],
    project: 'Capstone + Demo Day',
  },
]

export const goals = [
  'Land my first tech job',
  'Switch careers into AI/tech',
  'Upskill in my current role',
  'Freelance / start a business',
]

export const whatsappUrl =
  'https://wa.me/?text=Hi%20AI%20Launchpad!%20I%20have%20a%20question%20about%20the%20bootcamp.'
