export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = {
  Languages: {
    icon: '⟨/⟩',
    color: '#4F9EFF',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript'],
  },
  Frontend: {
    icon: '◈',
    color: '#06B6D4',
    items: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
  },
  Backend: {
    icon: '⬡',
    color: '#a855f7',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  'AI / ML': {
    icon: '◎',
    color: '#6366f1',
    items: ['NLP', 'Transformers', 'Machine Learning', 'OpenCV', 'spaCy'],
  },
  Database: {
    icon: '⬢',
    color: '#EC4899',
    items: ['MongoDB', 'PostgreSQL', 'SQL'],
  },
  Tools: {
    icon: '✦',
    color: '#F59E0B',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  },
}

export const PROJECTS = [
  {
    id: 1,
    title: 'AI Resume Analyzer & Job Matcher',
    short: 'NLP-powered resume parsing with ATS scoring and job matching intelligence.',
    description:
      'A full-stack AI platform that parses resumes using spaCy & Transformers, predicts ATS scores, matches candidates to relevant jobs, and delivers actionable improvement suggestions — giving job seekers a real competitive edge.',
    features: [
      'NLP-based resume parsing using spaCy & Transformers',
      'ATS score prediction with percentage breakdown',
      'Intelligent job matching algorithm',
      'Personalized improvement suggestions',
      'Support for PDF, DOCX resume formats',
    ],
    tech: ['Python', 'spaCy', 'Transformers', 'React', 'Node.js', 'FastAPI'],
    color: '#6366f1',
    gradient: 'from-indigo-500/20 to-purple-500/10',
    icon: '🤖',
    github: 'https://github.com/sowmiyark0102',
  },
  {
    id: 2,
    title: 'AI Mock Interview Platform',
    short: 'Speech-to-text driven interview simulator with NLP performance analytics.',
    description:
      'An AI-powered mock interview system that conducts realistic HR and technical interviews using speech-to-text (Whisper), evaluates answers with NLP, and provides detailed performance analytics to help candidates improve.',
    features: [
      'AI-driven HR & technical interview simulation',
      'Speech-to-text using OpenAI Whisper',
      'NLP-based answer evaluation & scoring',
      'Detailed performance analytics dashboard',
      'Question bank across domains',
    ],
    tech: ['React', 'Node.js', 'Python', 'OpenAI API', 'Whisper', 'NLP'],
    color: '#06B6D4',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    icon: '🎙️',
    github: 'https://github.com/sowmiyark0102',
  },
  {
    id: 3,
    title: 'Personal Finance Tracker with AI',
    short: 'ML-powered expense categorization with budget prediction and visualization.',
    description:
      'A smart personal finance management app that uses ML to automatically categorize expenses, predict future budgets, send intelligent alerts, and visualize spending patterns through beautiful interactive dashboards.',
    features: [
      'ML-powered expense auto-categorization',
      'Budget prediction & smart alerts',
      'Interactive data visualization dashboard',
      'Spending pattern analysis',
      'Monthly & yearly financial reports',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Python', 'ML', 'Chart.js'],
    color: '#10B981',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    icon: '💰',
    github: 'https://github.com/sowmiyark0102',
  },
  {
    id: 4,
    title: 'Face Recognition Security System',
    short: 'Real-time deep learning face detection with secure authentication.',
    description:
      'A computer vision security system that performs real-time face detection and recognition using deep learning models built with OpenCV. Enables secure, contactless authentication for access control systems.',
    features: [
      'Real-time face detection & recognition',
      'Deep learning model integration',
      'Secure multi-user authentication',
      'Live video feed processing',
      'Unauthorized access alerts',
    ],
    tech: ['Python', 'OpenCV', 'Deep Learning', 'TensorFlow', 'NumPy'],
    color: '#F59E0B',
    gradient: 'from-amber-500/20 to-orange-500/10',
    icon: '👁️',
    github: 'https://github.com/sowmiyark0102',
  },
  {
    id: 5,
    title: 'AI Chatbot with Emotion Detection',
    short: 'Emotion-aware conversational AI with intent recognition and adaptive responses.',
    description:
      'An intelligent conversational AI that detects user emotions through NLP, recognizes intent, and adapts its responses accordingly — creating empathetic, context-aware conversations that feel genuinely human.',
    features: [
      'Real-time emotion detection from text',
      'NLP intent recognition engine',
      'Context-aware adaptive responses',
      'Multi-turn conversation memory',
      'Sentiment trend tracking',
    ],
    tech: ['Python', 'NLP', 'Transformers', 'Flask', 'NLTK'],
    color: '#EC4899',
    gradient: 'from-pink-500/20 to-rose-500/10',
    icon: '💬',
    github: 'https://github.com/sowmiyark0102',
  },
  {
    id: 6,
    title: 'Smart Recommendation System',
    short: 'Collaborative filtering with user behavior analysis for personalized suggestions.',
    description:
      'A sophisticated recommendation engine using collaborative filtering and user behavior analysis to deliver hyper-personalized suggestions. Analyzes patterns across users to surface relevant, timely recommendations.',
    features: [
      'Collaborative & content-based filtering',
      'User behavior analysis & profiling',
      'Personalized recommendation scoring',
      'Real-time preference learning',
      'A/B testing framework',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'React', 'Node.js', 'MongoDB'],
    color: '#8B5CF6',
    gradient: 'from-violet-500/20 to-purple-500/10',
    icon: '✨',
    github: 'https://github.com/sowmiyark0102',
  },
]

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Prompt Engineering Intern',
    company: 'FutureIntern',
    period: '2024',
    type: 'Internship',
    description:
      'Engineered advanced prompts for LLMs to improve output quality and reliability. Worked on optimizing prompt chains for various NLP tasks and fine-tuning model behaviors.',
    skills: ['Prompt Engineering', 'LLMs', 'NLP', 'GPT-4', 'Python'],
    color: '#6366f1',
  },
  {
    id: 2,
    role: 'AI Intern',
    company: 'CodSoft',
    period: '2024',
    type: 'Internship',
    description:
      'Developed AI/ML solutions and implemented multiple intelligent systems. Built end-to-end pipelines for computer vision and NLP applications during the internship.',
    skills: ['Machine Learning', 'Python', 'OpenCV', 'TensorFlow', 'Scikit-learn'],
    color: '#06B6D4',
  },
  {
    id: 3,
    role: 'Virtual Experience Program',
    company: 'JPMorgan Chase & Co. (Forage)',
    period: '2024',
    type: 'Virtual Experience',
    description:
      'Completed a simulated software engineering program, working with financial data visualization tools and interfacing with market data feeds using Python and React.',
    skills: ['Python', 'React', 'Data Visualization', 'Financial Data', 'APIs'],
    color: '#10B981',
  },
  {
    id: 4,
    role: 'Virtual Experience Program',
    company: 'Tata Group (Forage)',
    period: '2024',
    type: 'Virtual Experience',
    description:
      'Participated in a business analysis and data science simulation focused on delivering data-driven insights and recommendations for enterprise-level business problems.',
    skills: ['Data Analysis', 'Business Intelligence', 'Python', 'Visualization'],
    color: '#F59E0B',
  },
  {
    id: 5,
    role: 'Google Student Ambassador',
    company: 'Google',
    period: '2023 – Present',
    type: 'Leadership',
    description:
      'Representing Google at the campus level, conducting workshops, promoting Google technologies, and building a tech community among students and faculty.',
    skills: ['Leadership', 'Community Building', 'Google Cloud', 'Event Management'],
    color: '#EC4899',
  },
]

export const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Hackathon Participant',
    description: 'Competed in multiple national-level hackathons, building AI-powered solutions under pressure with cross-functional teams.',
    color: '#F59E0B',
  },
  {
    icon: '🤖',
    title: '6+ AI Projects Built',
    description: 'Built and deployed multiple production-grade AI applications spanning NLP, computer vision, and recommendation systems.',
    color: '#6366f1',
  },
  {
    icon: '🧠',
    title: 'Strong DSA Foundation',
    description: 'Consistent problem solver with deep knowledge of data structures and algorithms across competitive programming platforms.',
    color: '#06B6D4',
  },
  {
    icon: '🎓',
    title: 'CGPA 8.7 / 10',
    description: "Maintaining strong academic performance at JNN Institute of Engineering while actively pursuing real-world technical projects.",
    color: '#10B981',
  },
  {
    icon: '🌐',
    title: 'Google Ambassador',
    description: 'Selected as Google Student Ambassador, driving tech education and community-building initiatives across campus.',
    color: '#EC4899',
  },
  {
    icon: '📜',
    title: 'Multiple Certifications',
    description: 'Earned certifications from leading platforms including Google, JPMorgan, Tata, and CodSoft across AI, ML, and development domains.',
    color: '#8B5CF6',
  },
]
