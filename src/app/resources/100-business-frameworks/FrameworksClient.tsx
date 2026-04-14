"use client";

import { useState, useMemo, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown, Search, Copy, Check } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Framework {
  num: number;
  name: string;
  inst: string;
  cat: string;
  series: "generative" | "agentic" | "leadership";
  desc: string;
  trig: string;
  prompt: string;
}

interface Category {
  id: string;
  label: string;
}

const CATEGORIES: Category[] = [
  { id: "content-creation", label: "Content Creation" },
  { id: "visual-design", label: "Visual & Design" },
  { id: "competitive-analysis", label: "Competitive Analysis" },
  { id: "strategy-planning", label: "Strategy & Planning" },
  { id: "customer-persona", label: "Customer & Persona" },
  { id: "marketing-growth", label: "Marketing & Growth" },
  { id: "finance-pricing", label: "Finance & Pricing" },
  { id: "leadership-communication", label: "Leadership & Comms" },
  { id: "innovation-problem-solving", label: "Innovation" },
];

const FRAMEWORKS: Framework[] = [
  // Content Creation (1-15)
  {num:1,name:"Inverted Pyramid",inst:"Columbia Journalism School",cat:"content-creation",series:"generative",desc:"Write news-style content where the most important information comes first",trig:"Writing press releases, executive summaries, or news announcements",prompt:"I need to write [type of content] about [topic]. Teach me the Inverted Pyramid framework from Columbia Journalism School. Explain how it works in 3-4 sentences. Then apply it to my project using RACE."},
  {num:2,name:"Hero's Journey",inst:"USC School of Cinematic Arts",cat:"content-creation",series:"generative",desc:"Structure a narrative around a protagonist's transformation through challenge",trig:"Brand storytelling, case studies, origin stories, keynote narratives",prompt:"I need to tell the story of [brand/product/person]. Teach me the Hero's Journey framework from USC School of Cinematic Arts. Explain how it works in 3-4 sentences. Then apply it to my story using RACE."},
  {num:3,name:"AIDA",inst:"Wharton School",cat:"content-creation",series:"generative",desc:"Guide a reader from awareness to action in four sequential stages",trig:"Sales pages, email sequences, landing pages, ad copy",prompt:"I need to write [sales page/email/landing page] for [product]. Teach me the AIDA framework from Wharton. Explain how it works in 3-4 sentences. Then apply it to my project using RACE."},
  {num:4,name:"PAS",inst:"NYU Stern / Ogilvy",cat:"content-creation",series:"generative",desc:"Name a problem, intensify the pain, then present your solution",trig:"Blog posts that sell, pain-point marketing, product launch copy",prompt:"I need to write persuasive content for [product/service]. Teach me the PAS framework from NYU Stern. Explain how it works in 3-4 sentences. Then apply it to my project using RACE."},
  {num:5,name:"Listicle Framework",inst:"Northwestern Medill School of Journalism",cat:"content-creation",series:"generative",desc:"Organize content as a numbered or bulleted list for maximum engagement",trig:"High-engagement blog posts, social content, newsletters",prompt:"I need to create a high-engagement [blog post/article] about [topic]. Teach me the Listicle Framework from Northwestern Medill. Explain how it works in 3-4 sentences. Then apply it to my content using RACE."},
  {num:6,name:"How-To Guide Structure",inst:"MIT OpenCourseWare",cat:"content-creation",series:"generative",desc:"Break a process into sequential steps a reader can follow immediately",trig:"Tutorial content, knowledge base articles, onboarding guides",prompt:"I need to create a how-to guide for [process/task] aimed at [audience]. Teach me the How-To Guide Structure from MIT OpenCourseWare. Explain how it works in 3-4 sentences. Then apply it to my guide using RACE."},
  {num:7,name:"Myth-Busting Framework",inst:"Stanford Persuasion Lab",cat:"content-creation",series:"generative",desc:"Challenge a commonly held belief and replace it with evidence",trig:"Thought leadership, contrarian takes, expert positioning",prompt:"I need to challenge a common myth in [industry/topic]. Teach me the Myth-Busting Framework from Stanford Persuasion Lab. Explain how it works in 3-4 sentences. Then apply it to my content using RACE."},
  {num:8,name:"Thesis-Antithesis-Synthesis",inst:"University of Oxford",cat:"content-creation",series:"generative",desc:"Present a claim, counter it, then resolve the tension with a higher insight",trig:"Thought leadership, academic-style content, persuasive essays",prompt:"I need to write a thought leadership piece on [topic]. Teach me the Thesis-Antithesis-Synthesis framework from Oxford. Explain how it works in 3-4 sentences. Then apply it to my argument using RACE."},
  {num:9,name:"Skyscraper Technique",inst:"Northwestern Medill / SEO origin",cat:"content-creation",series:"generative",desc:"Find the best existing content on a topic and create something better",trig:"SEO content, competitive content marketing, content upgrades",prompt:"I need to create best-in-class content on [topic] that outranks existing articles. Teach me the Skyscraper Technique from Northwestern Medill. Explain how it works in 3-4 sentences. Then apply it to my content strategy using RACE."},
  {num:10,name:"Pillar and Cluster Model",inst:"MIT Sloan / HubSpot",cat:"content-creation",series:"generative",desc:"Organize content around a central pillar page with supporting cluster articles",trig:"Content strategy, SEO architecture, knowledge base design",prompt:"I need to build a content architecture for [topic/brand]. Teach me the Pillar and Cluster Model from MIT Sloan. Explain how it works in 3-4 sentences. Then apply it to my content strategy using RACE."},
  {num:11,name:"Before-After-Bridge",inst:"Wharton School",cat:"content-creation",series:"generative",desc:"Show the reader's current state, the desired state, and the bridge between them",trig:"Transformation stories, testimonials, case studies, proposals",prompt:"I need to write a transformation story for [product/service/client]. Teach me the Before-After-Bridge framework from Wharton. Explain how it works in 3-4 sentences. Then apply it to my content using RACE."},
  {num:12,name:"Feature-Advantage-Benefit",inst:"Kellogg School of Management (Northwestern)",cat:"content-creation",series:"generative",desc:"Connect product features to advantages to customer benefits",trig:"Product descriptions, sales enablement, feature announcements",prompt:"I need to write product copy for [product]. Teach me the Feature-Advantage-Benefit framework from Kellogg. Explain how it works in 3-4 sentences. Then apply it to my product using RACE."},
  {num:13,name:"The Explainer Framework",inst:"Columbia Journalism School / Vox",cat:"content-creation",series:"generative",desc:"Make a complex topic simple enough for any audience to understand",trig:"Explainer articles, internal memos about technical topics",prompt:"I need to explain [complex topic] to [audience]. Teach me the Explainer Framework from Columbia Journalism. Explain how it works in 3-4 sentences. Then apply it to my explanation using RACE."},
  {num:14,name:"Newsjacking Framework",inst:"Boston University (PR program)",cat:"content-creation",series:"generative",desc:"Attach your message to a breaking news story for relevance and reach",trig:"Timely content, PR pitches, social media tied to current events",prompt:"I need to create content tied to [current event/news story] for [brand/product]. Teach me the Newsjacking Framework from Boston University. Explain how it works in 3-4 sentences. Then apply it to my content using RACE."},
  {num:15,name:"Content Repurposing Matrix",inst:"NYU Stern / Gary Vaynerchuk model",cat:"content-creation",series:"generative",desc:"Turn one piece of content into multiple formats across channels",trig:"Maximizing content ROI, multi-channel strategy",prompt:"I need to repurpose [content piece] across multiple platforms. Teach me the Content Repurposing Matrix from NYU Stern. Explain how it works in 3-4 sentences. Then apply it to my content using RACE."},

  // Visual & Design (16-25)
  {num:16,name:"Visual Hierarchy Principles",inst:"Rhode Island School of Design (RISD)",cat:"visual-design",series:"generative",desc:"Arrange visual elements so the eye moves in the intended order",trig:"Designing slides, layouts, dashboards, landing pages",prompt:"I need to design [slide/layout/dashboard] for [purpose]. Teach me Visual Hierarchy Principles from RISD. Explain how it works in 3-4 sentences. Then apply it to my design using RACE."},
  {num:17,name:"Gestalt Principles of Design",inst:"Berlin School of Experimental Psychology",cat:"visual-design",series:"generative",desc:"Use proximity, similarity, and closure to create intuitive visual groupings",trig:"UI layout, infographic design, slide composition, data displays",prompt:"I need to design [UI/infographic/layout] for [project]. Teach me the Gestalt Principles from Berlin School of Experimental Psychology. Explain how it works in 3-4 sentences. Then apply it to my design using RACE."},
  {num:18,name:"Color Theory for Business",inst:"Parsons School of Design",cat:"visual-design",series:"generative",desc:"Choose colors that communicate the right emotion and brand meaning",trig:"Brand identity, presentation palettes, marketing materials",prompt:"I need to choose colors for [brand/presentation/campaign]. Teach me Color Theory for Business from Parsons School of Design. Explain how it works in 3-4 sentences. Then apply it to my project using RACE."},
  {num:19,name:"Data Visualization Grammar",inst:"Yale (Edward Tufte)",cat:"visual-design",series:"generative",desc:"Present data with maximum clarity and minimum visual noise",trig:"Charts, dashboards, data storytelling, annual reports",prompt:"I need to visualize [data/metrics] for [audience]. Teach me the Data Visualization Grammar from Yale. Explain how it works in 3-4 sentences. Then apply it to my data using RACE."},
  {num:20,name:"The 10/20/30 Rule",inst:"Stanford (Guy Kawasaki)",cat:"visual-design",series:"generative",desc:"Limit presentations to 10 slides, 20 minutes, and 30-point minimum font",trig:"Pitch decks, investor presentations, startup demos",prompt:"I need to create a pitch deck for [company/product]. Teach me the 10/20/30 Rule from Stanford. Explain how it works in 3-4 sentences. Then apply it to my presentation using RACE."},
  {num:21,name:"Pyramid Principle for Slides",inst:"McKinsey / Harvard Business School",cat:"visual-design",series:"leadership",desc:"Start with the answer, then layer supporting evidence below",trig:"Executive presentations, board decks, strategy reviews",prompt:"I need to create an executive presentation about [topic]. Teach me the Pyramid Principle for Slides from McKinsey. Explain how it works in 3-4 sentences. Then apply it to my deck using RACE."},
  {num:22,name:"Minto Pyramid",inst:"McKinsey (Barbara Minto)",cat:"visual-design",series:"leadership",desc:"Structure any communication top-down: conclusion first, then supporting groups",trig:"Any presentation, memo, or report that needs to be clear fast",prompt:"I need to structure a [memo/report/email] about [topic]. Teach me the Minto Pyramid from McKinsey. Explain how it works in 3-4 sentences. Then apply it to my communication using RACE."},
  {num:23,name:"Brand Identity Prism",inst:"HEC Paris (Jean-Noel Kapferer)",cat:"visual-design",series:"generative",desc:"Define a brand across six dimensions: physique, personality, culture, relationship, reflection, and self-image",trig:"Brand strategy, rebranding, brand identity development",prompt:"I need to define or refresh the brand identity for [company/product]. Teach me the Brand Identity Prism from HEC Paris. Explain how it works in 3-4 sentences. Then apply it to my brand using RACE."},
  {num:24,name:"Mood Board Method",inst:"Central Saint Martins (London)",cat:"visual-design",series:"generative",desc:"Curate visual and sensory references to define the aesthetic direction of a project",trig:"Brand design, creative briefs, campaign launches, visual identity",prompt:"I need to define the visual direction for [brand/campaign/project]. Teach me the Mood Board Method from Central Saint Martins. Explain how it works in 3-4 sentences. Then apply it to my project using RACE."},
  {num:25,name:"Storyboard Framework",inst:"CalArts / Pixar",cat:"visual-design",series:"generative",desc:"Plan visual narratives frame-by-frame before production begins",trig:"Video scripts, ad campaigns, UX flows, product demos",prompt:"I need to plan the visual narrative for [video/campaign/flow]. Teach me the Storyboard Framework from CalArts/Pixar. Explain how it works in 3-4 sentences. Then apply it to my project using RACE."},

  // Competitive Analysis (26-35)
  {num:26,name:"Porter's Five Forces",inst:"Harvard Business School",cat:"competitive-analysis",series:"leadership",desc:"Analyze five forces that shape competition in any industry",trig:"Industry-level competitive landscape assessment",prompt:"I need to analyze the competitive landscape for [industry/product]. Teach me Porter's Five Forces from Harvard Business School. Explain how it works in 3-4 sentences. Then apply it to my market using RACE."},
  {num:27,name:"Competitive Positioning Map",inst:"Stanford GSB",cat:"competitive-analysis",series:"leadership",desc:"Plot competitors on two strategic dimensions to find whitespace",trig:"Finding unoccupied positions in a market",prompt:"I need to find strategic whitespace for [product] in [market]. Teach me the Competitive Positioning Map from Stanford GSB. Explain how it works in 3-4 sentences. Then map my competitive landscape using RACE."},
  {num:28,name:"SWOT Analysis",inst:"Stanford Research Institute",cat:"competitive-analysis",series:"leadership",desc:"Assess Strengths, Weaknesses, Opportunities, and Threats",trig:"Quick strategic assessment before a decision",prompt:"I need a strategic assessment of [company/product/initiative]. Teach me SWOT Analysis from Stanford Research Institute. Explain how it works in 3-4 sentences. Then apply it to my situation using RACE."},
  {num:29,name:"Blue Ocean Strategy",inst:"INSEAD",cat:"competitive-analysis",series:"leadership",desc:"Create uncontested market space instead of competing in bloody red oceans",trig:"Market creation, radical differentiation, new category design",prompt:"I need to find a new market opportunity for [company/product]. Teach me Blue Ocean Strategy from INSEAD. Explain how it works in 3-4 sentences. Then apply it to my market using RACE."},
  {num:30,name:"Strategic Group Analysis",inst:"Harvard Business School",cat:"competitive-analysis",series:"leadership",desc:"Cluster competitors by strategy type to see who really competes with whom",trig:"Understanding competitive clusters, finding overlooked threats",prompt:"I need to map the strategic groups in [industry]. Teach me Strategic Group Analysis from Harvard Business School. Explain how it works in 3-4 sentences. Then apply it to my market using RACE."},
  {num:31,name:"Value Chain Analysis",inst:"Harvard Business School",cat:"competitive-analysis",series:"leadership",desc:"Map every activity that adds value from raw input to delivered product",trig:"Finding where competitors add or lose value, identifying cost advantages",prompt:"I need to analyze the value chain of [company/industry]. Teach me Value Chain Analysis from Harvard Business School. Explain how it works in 3-4 sentences. Then apply it to my business using RACE."},
  {num:32,name:"Wardley Mapping",inst:"Simon Wardley / LSE",cat:"competitive-analysis",series:"leadership",desc:"Map the evolution of components in your competitive landscape from genesis to commodity",trig:"Strategic planning, technology decisions, build vs. buy",prompt:"I need to map the strategic landscape for [company/product]. Teach me Wardley Mapping from Simon Wardley/LSE. Explain how it works in 3-4 sentences. Then apply it to my strategy using RACE."},
  {num:33,name:"Jobs to Be Done",inst:"Harvard Business School (Clayton Christensen)",cat:"competitive-analysis",series:"leadership",desc:"Understand what job customers are hiring your product to do",trig:"Customer-centric competitive analysis, product differentiation",prompt:"I need to understand the job customers hire [product] to do. Teach me the Jobs to Be Done framework from Harvard Business School. Explain how it works in 3-4 sentences. Then apply it to my product using RACE."},
  {num:34,name:"Perceptual Map",inst:"Wharton School",cat:"competitive-analysis",series:"leadership",desc:"Map how customers perceive brands relative to each other on key attributes",trig:"Brand positioning, understanding customer perception gaps",prompt:"I need to map how [product] is perceived vs. competitors. Teach me the Perceptual Map from Wharton. Explain how it works in 3-4 sentences. Then map my competitive perception using RACE."},
  {num:35,name:"Competitive Intelligence Framework",inst:"MIT Sloan",cat:"competitive-analysis",series:"leadership",desc:"Systematically plan, collect, analyze, and distribute competitive intelligence",trig:"Ongoing competitor monitoring, market surveillance programs",prompt:"I need to build a competitive intelligence system for [company]. Teach me the Competitive Intelligence Framework from MIT Sloan. Explain how it works in 3-4 sentences. Then apply it to my process using RACE."},

  // Strategy & Planning (36-50)
  {num:36,name:"OKRs",inst:"Stanford / Intel (Andy Grove)",cat:"strategy-planning",series:"leadership",desc:"Set ambitious objectives and measurable key results to track progress",trig:"Quarterly goal setting, team alignment, performance tracking",prompt:"I need to set OKRs for [team/company] for [period]. Teach me the OKR framework from Stanford/Intel. Explain how it works in 3-4 sentences. Then apply it to my goals using RACE."},
  {num:37,name:"Balanced Scorecard",inst:"Harvard Business School (Kaplan & Norton)",cat:"strategy-planning",series:"leadership",desc:"Measure performance across financial, customer, process, and learning dimensions",trig:"Organizational performance measurement, strategy execution",prompt:"I need to build a performance measurement system for [organization]. Teach me the Balanced Scorecard from Harvard Business School. Explain how it works in 3-4 sentences. Then apply it to my organization using RACE."},
  {num:38,name:"Business Model Canvas",inst:"University of Lausanne (Alexander Osterwalder)",cat:"strategy-planning",series:"leadership",desc:"Map nine building blocks of a business model on one page",trig:"Designing, pivoting, or communicating a business model",prompt:"I need to map or redesign the business model for [company/startup]. Teach me the Business Model Canvas from University of Lausanne. Explain how it works in 3-4 sentences. Then apply it to my business using RACE."},
  {num:39,name:"Lean Canvas",inst:"Stanford / Eric Ries (Lean Startup)",cat:"strategy-planning",series:"generative",desc:"Rapidly validate a business idea by mapping problem, solution, metrics, and unfair advantage",trig:"Early-stage product validation, startup pitches",prompt:"I need to validate a business idea for [product/startup]. Teach me the Lean Canvas from Stanford. Explain how it works in 3-4 sentences. Then apply it to my idea using RACE."},
  {num:40,name:"Ansoff Matrix",inst:"Stanford (Igor Ansoff)",cat:"strategy-planning",series:"leadership",desc:"Choose a growth strategy by plotting existing vs. new markets and products",trig:"Growth planning, market expansion decisions",prompt:"I need to identify growth strategies for [company/product]. Teach me the Ansoff Matrix from Stanford. Explain how it works in 3-4 sentences. Then apply it to my growth planning using RACE."},
  {num:41,name:"BCG Growth-Share Matrix",inst:"Boston Consulting Group / Harvard",cat:"strategy-planning",series:"leadership",desc:"Classify business units or products as Stars, Cash Cows, Dogs, or Question Marks",trig:"Portfolio prioritization, investment allocation",prompt:"I need to prioritize my product portfolio for [company]. Teach me the BCG Growth-Share Matrix from Harvard. Explain how it works in 3-4 sentences. Then apply it to my portfolio using RACE."},
  {num:42,name:"McKinsey 7S Framework",inst:"McKinsey / Harvard",cat:"strategy-planning",series:"leadership",desc:"Align seven organizational elements: strategy, structure, systems, shared values, skills, style, and staff",trig:"Organizational alignment, change management, M&A integration",prompt:"I need to align the organizational elements of [company] for [change/strategy]. Teach me the McKinsey 7S Framework. Explain how it works in 3-4 sentences. Then apply it to my organization using RACE."},
  {num:43,name:"PESTLE Analysis",inst:"Oxford / London Business School",cat:"strategy-planning",series:"leadership",desc:"Scan Political, Economic, Social, Technological, Legal, and Environmental forces",trig:"Macro-environmental scanning, market entry decisions",prompt:"I need to analyze the macro-environment for [company/market]. Teach me PESTLE Analysis from Oxford. Explain how it works in 3-4 sentences. Then apply it to my situation using RACE."},
  {num:44,name:"Scenario Planning",inst:"Oxford Said Business School",cat:"strategy-planning",series:"leadership",desc:"Develop multiple plausible futures to stress-test strategy",trig:"Long-range strategic planning, risk management under uncertainty",prompt:"I need to develop strategic scenarios for [company/industry]. Teach me Scenario Planning from Oxford Said Business School. Explain how it works in 3-4 sentences. Then apply it to my planning using RACE."},
  {num:45,name:"Theory of Constraints",inst:"Yale (Eliyahu Goldratt)",cat:"strategy-planning",series:"agentic",desc:"Find and fix the single bottleneck that limits the entire system",trig:"Operations optimization, process improvement, removing blockers",prompt:"I need to identify and remove the bottleneck in [process/system]. Teach me the Theory of Constraints from Yale. Explain how it works in 3-4 sentences. Then apply it to my operations using RACE."},
  {num:46,name:"North Star Metric",inst:"Stanford / Silicon Valley",cat:"strategy-planning",series:"agentic",desc:"Choose the one metric that best captures the value you deliver to customers",trig:"Product strategy, growth alignment, team focus",prompt:"I need to identify a North Star Metric for [product/company]. Teach me the North Star Metric framework from Stanford. Explain how it works in 3-4 sentences. Then apply it to my product using RACE."},
  {num:47,name:"RICE Prioritization",inst:"Intercom / Dublin",cat:"strategy-planning",series:"agentic",desc:"Score initiatives by Reach, Impact, Confidence, and Effort to prioritize objectively",trig:"Feature prioritization, roadmap decisions, resource allocation",prompt:"I need to prioritize [list of initiatives] for [team/product]. Teach me RICE Prioritization from Intercom. Explain how it works in 3-4 sentences. Then apply it to my prioritization using RACE."},
  {num:48,name:"ICE Scoring",inst:"Sean Ellis / Growth Hacking",cat:"strategy-planning",series:"agentic",desc:"Score experiments by Impact, Confidence, and Ease for quick prioritization",trig:"Experiment prioritization, growth tests, quick decisions",prompt:"I need to prioritize growth experiments for [product/company]. Teach me the ICE Scoring model. Explain how it works in 3-4 sentences. Then apply it to my experiments using RACE."},
  {num:49,name:"Eisenhower Matrix",inst:"Covey / Eisenhower",cat:"strategy-planning",series:"generative",desc:"Sort tasks into four quadrants by urgency and importance",trig:"Personal productivity, team priority management, weekly planning",prompt:"I need to prioritize my tasks and decisions for [role/project]. Teach me the Eisenhower Matrix. Explain how it works in 3-4 sentences. Then apply it to my work using RACE."},
  {num:50,name:"Roadmap Now/Next/Later",inst:"ThoughtWorks / Agile",cat:"strategy-planning",series:"agentic",desc:"Organize a product roadmap by commitment level instead of fake deadlines",trig:"Product roadmaps, strategic planning without date promises",prompt:"I need to build a product roadmap for [product/team]. Teach me the Now/Next/Later Roadmap from ThoughtWorks. Explain how it works in 3-4 sentences. Then apply it to my roadmap using RACE."},

  // Customer & Persona (51-60)
  {num:51,name:"Buyer Persona Canvas",inst:"MIT Sloan / HubSpot",cat:"customer-persona",series:"generative",desc:"Build a detailed profile of your ideal customer including demographics, goals, and objections",trig:"Creating customer profiles, sales enablement, content targeting",prompt:"I need to create buyer personas for [product/company]. Teach me the Buyer Persona Canvas from MIT Sloan/HubSpot. Explain how it works in 3-4 sentences. Then build my personas using RACE."},
  {num:52,name:"Empathy Map",inst:"Stanford d.school",cat:"customer-persona",series:"generative",desc:"Map what a customer thinks, feels, says, and does to build deep understanding",trig:"Product design, customer research synthesis, team alignment on the user",prompt:"I need to deeply understand [target customer]. Teach me the Empathy Map from Stanford d.school. Explain how it works in 3-4 sentences. Then create an empathy map for my customer using RACE."},
  {num:53,name:"Customer Journey Map",inst:"Stanford d.school / IDEO",cat:"customer-persona",series:"agentic",desc:"Map every touchpoint from awareness to loyalty to find friction and opportunity",trig:"CX improvement, service design, onboarding optimization",prompt:"I need to map the customer journey for [product/service]. Teach me Customer Journey Mapping from Stanford d.school/IDEO. Explain how it works in 3-4 sentences. Then map my customer journey using RACE."},
  {num:54,name:"Value Proposition Canvas",inst:"University of Lausanne (Osterwalder)",cat:"customer-persona",series:"agentic",desc:"Align your product's features directly to customer pains and gains",trig:"Product-market fit, feature prioritization, positioning",prompt:"I need to align [product] to what [customer] actually needs. Teach me the Value Proposition Canvas from University of Lausanne. Explain how it works in 3-4 sentences. Then map my value proposition using RACE."},
  {num:55,name:"Kano Model",inst:"Tokyo University of Science",cat:"customer-persona",series:"agentic",desc:"Classify features as must-haves, performance drivers, or delighters",trig:"Feature prioritization, product differentiation, roadmap decisions",prompt:"I need to classify features for [product] by customer impact. Teach me the Kano Model from Tokyo University of Science. Explain how it works in 3-4 sentences. Then apply it to my feature set using RACE."},
  {num:56,name:"RFM Analysis",inst:"Wharton School",cat:"customer-persona",series:"generative",desc:"Segment customers by Recency, Frequency, and Monetary value",trig:"Customer segmentation, targeted marketing, retention strategy",prompt:"I need to segment customers for [company/product]. Teach me RFM Analysis from Wharton. Explain how it works in 3-4 sentences. Then apply it to my customer base using RACE."},
  {num:57,name:"Net Promoter Score (NPS)",inst:"Harvard Business Review (Fred Reichheld)",cat:"customer-persona",series:"generative",desc:"Measure customer loyalty with one question: would you recommend us?",trig:"Customer loyalty measurement, CX benchmarking, retention programs",prompt:"I need to measure and improve customer loyalty for [company]. Teach me Net Promoter Score from Harvard Business Review. Explain how it works in 3-4 sentences. Then apply it to my customer program using RACE."},
  {num:58,name:"Customer Effort Score",inst:"Corporate Executive Board / Gartner",cat:"customer-persona",series:"generative",desc:"Measure how easy it is for customers to get what they need",trig:"Reducing friction, customer support optimization, UX improvement",prompt:"I need to measure and reduce customer effort for [product/service]. Teach me Customer Effort Score from Gartner. Explain how it works in 3-4 sentences. Then apply it to my CX using RACE."},
  {num:59,name:"Behavioral Segmentation",inst:"MIT Sloan",cat:"customer-persona",series:"agentic",desc:"Build personas based on how people make decisions, not just demographics",trig:"Products where psychology drives behavior, fintech, health, education",prompt:"I need to segment customers of [product] by behavior and psychology. Teach me Behavioral Segmentation from MIT Sloan. Explain how it works in 3-4 sentences. Then apply it to my segmentation using RACE."},
  {num:60,name:"Ethnographic Research",inst:"MIT / IDEO",cat:"customer-persona",series:"agentic",desc:"Study customers in their natural environment to uncover unspoken needs",trig:"Deep qualitative research, product discovery, innovation",prompt:"I need to uncover unspoken needs of [target user]. Teach me Ethnographic Research from MIT/IDEO. Explain how it works in 3-4 sentences. Then apply it to my research using RACE."},

  // Marketing & Growth (61-70)
  {num:61,name:"Marketing Mix (4Ps)",inst:"Harvard (Neil Borden / McCarthy)",cat:"marketing-growth",series:"generative",desc:"Plan Product, Price, Place, and Promotion as an integrated system",trig:"Go-to-market planning, marketing strategy, product launch",prompt:"I need to plan the marketing mix for [product/company]. Teach me the Marketing Mix (4Ps) from Harvard. Explain how it works in 3-4 sentences. Then apply it to my launch using RACE."},
  {num:62,name:"STP",inst:"Kellogg School (Philip Kotler)",cat:"marketing-growth",series:"leadership",desc:"Segment your market, choose who to target, and position yourself for that audience",trig:"Market entry, repositioning, new audience targeting",prompt:"I need to define the market strategy for [product/company]. Teach me STP from Kellogg School. Explain how it works in 3-4 sentences. Then apply it to my marketing strategy using RACE."},
  {num:63,name:"RACE Digital Marketing",inst:"Smart Insights / UK (Dave Chaffey)",cat:"marketing-growth",series:"generative",desc:"Plan digital marketing across Reach, Act, Convert, and Engage stages",trig:"Digital marketing strategy, campaign planning, channel mix decisions",prompt:"I need to plan a digital marketing strategy for [company/product]. Teach me the RACE framework from Smart Insights. Explain how it works in 3-4 sentences. Then apply it to my digital marketing using RACE."},
  {num:64,name:"Pirate Metrics (AARRR)",inst:"500 Startups / Stanford ecosystem",cat:"marketing-growth",series:"agentic",desc:"Track growth across Acquisition, Activation, Retention, Referral, and Revenue",trig:"Startup growth funnels, product-led growth measurement",prompt:"I need to measure and improve growth for [product/startup]. Teach me Pirate Metrics (AARRR) from 500 Startups. Explain how it works in 3-4 sentences. Then apply it to my growth funnel using RACE."},
  {num:65,name:"Growth Loops",inst:"Reforge / Stanford",cat:"marketing-growth",series:"agentic",desc:"Design self-reinforcing cycles where output becomes new input for growth",trig:"Sustainable growth strategy, moving beyond linear funnels",prompt:"I need to design a growth loop for [product/company]. Teach me Growth Loops from Reforge/Stanford. Explain how it works in 3-4 sentences. Then apply it to my growth strategy using RACE."},
  {num:66,name:"Hook Model",inst:"Stanford (Nir Eyal)",cat:"marketing-growth",series:"agentic",desc:"Design habit-forming products through trigger, action, reward, and investment",trig:"Product engagement, retention, behavioral design",prompt:"I need to improve engagement and retention for [product]. Teach me the Hook Model from Stanford. Explain how it works in 3-4 sentences. Then apply it to my product using RACE."},
  {num:67,name:"Positioning Statement Template",inst:"Kellogg (Geoffrey Moore)",cat:"marketing-growth",series:"generative",desc:"Write a one-paragraph positioning statement that defines your market, audience, and differentiation",trig:"Product positioning, brand messaging, pitch preparation",prompt:"I need to write a positioning statement for [product/company]. Teach me the Positioning Statement Template from Kellogg. Explain how it works in 3-4 sentences. Then write my positioning statement using RACE."},
  {num:68,name:"Brand Archetypes",inst:"University of Zurich (Carl Jung)",cat:"marketing-growth",series:"generative",desc:"Choose a brand personality archetype that guides all communication",trig:"Brand voice, personality definition, content tone",prompt:"I need to define the brand archetype for [company/product]. Teach me Brand Archetypes from University of Zurich. Explain how it works in 3-4 sentences. Then identify my brand archetype using RACE."},
  {num:69,name:"Message Map",inst:"Georgetown University (Communications)",cat:"marketing-growth",series:"leadership",desc:"Create a structured message hierarchy with one core message and three supporting points",trig:"Consistent messaging, media training, team communication alignment",prompt:"I need to create a message map for [company/product/initiative]. Teach me the Message Map from Georgetown University. Explain how it works in 3-4 sentences. Then build my message map using RACE."},
  {num:70,name:"Go-To-Market Playbook",inst:"Harvard Business Review / Wharton",cat:"marketing-growth",series:"leadership",desc:"Build a comprehensive launch strategy covering channels, pricing, and positioning",trig:"Product launches, market entry, new audience expansion",prompt:"I need to build a go-to-market strategy for [product/company]. Teach me the Go-To-Market Playbook from Harvard Business Review. Explain how it works in 3-4 sentences. Then build my GTM strategy using RACE."},

  // Finance & Pricing (71-80)
  {num:71,name:"Unit Economics Model",inst:"Stanford GSB / a16z",cat:"finance-pricing",series:"leadership",desc:"Calculate the revenue and cost per unit to validate business model viability",trig:"Business model validation, investor conversations, pricing decisions",prompt:"I need to calculate unit economics for [product/business]. Teach me the Unit Economics Model from Stanford GSB. Explain how it works in 3-4 sentences. Then apply it to my business using RACE."},
  {num:72,name:"Pricing Strategy Matrix",inst:"Wharton School",cat:"finance-pricing",series:"leadership",desc:"Evaluate pricing strategies from premium to penetration based on market position",trig:"Choosing a pricing approach for a new or repositioned product",prompt:"I need to set a pricing strategy for [product]. Teach me the Pricing Strategy Matrix from Wharton. Explain how it works in 3-4 sentences. Then apply it to my pricing using RACE."},
  {num:73,name:"Value-Based Pricing",inst:"London Business School",cat:"finance-pricing",series:"leadership",desc:"Price based on the value customers perceive rather than cost or competition",trig:"Premium products, B2B services, differentiated offerings",prompt:"I need to price [product/service] based on customer value. Teach me Value-Based Pricing from London Business School. Explain how it works in 3-4 sentences. Then apply it to my pricing using RACE."},
  {num:74,name:"Cost-Benefit Analysis",inst:"MIT / Harvard Kennedy School",cat:"finance-pricing",series:"leadership",desc:"Quantify all costs and benefits of a decision to determine net value",trig:"Investment decisions, project approvals, resource allocation",prompt:"I need to evaluate [decision/investment] using cost-benefit analysis. Teach me Cost-Benefit Analysis from MIT. Explain how it works in 3-4 sentences. Then apply it to my decision using RACE."},
  {num:75,name:"Break-Even Analysis",inst:"Wharton School",cat:"finance-pricing",series:"leadership",desc:"Calculate the point where revenue equals costs",trig:"Minimum viability assessment, pricing decisions, launch readiness",prompt:"I need to calculate the break-even point for [product/business]. Teach me Break-Even Analysis from Wharton. Explain how it works in 3-4 sentences. Then apply it to my financials using RACE."},
  {num:76,name:"Financial Modeling",inst:"Wharton / Wall Street Prep",cat:"finance-pricing",series:"leadership",desc:"Build integrated income statement, balance sheet, and cash flow projections",trig:"Investor-ready financial projections, fundraising, planning",prompt:"I need to build financial projections for [company/product]. Teach me 3-Statement Financial Modeling from Wharton. Explain how it works in 3-4 sentences. Then structure my financial model using RACE."},
  {num:77,name:"ROI Framework",inst:"Chicago Booth",cat:"finance-pricing",series:"leadership",desc:"Measure the return generated by an investment relative to its cost",trig:"Evaluating any initiative, marketing spend, technology investments",prompt:"I need to calculate and present the ROI of [initiative/investment]. Teach me the ROI Framework from Chicago Booth. Explain how it works in 3-4 sentences. Then calculate my ROI using RACE."},
  {num:78,name:"Total Addressable Market (TAM)",inst:"Harvard Business School",cat:"finance-pricing",series:"leadership",desc:"Estimate the total revenue opportunity for a product in a defined market",trig:"Market sizing, fundraising pitches, strategic planning",prompt:"I need to size the market opportunity for [product/market]. Teach me TAM/SAM/SOM Analysis from Harvard. Explain how it works in 3-4 sentences. Then size my market using RACE."},
  {num:79,name:"Sensitivity Analysis",inst:"Wharton School",cat:"finance-pricing",series:"leadership",desc:"Test how changes in key assumptions affect outcomes",trig:"Stress-testing financial models, risk assessment, scenario evaluation",prompt:"I need to stress-test my assumptions for [financial model/business plan]. Teach me Sensitivity Analysis from Wharton. Explain how it works in 3-4 sentences. Then apply it to my model using RACE."},
  {num:80,name:"Monte Carlo Simulation",inst:"MIT",cat:"finance-pricing",series:"leadership",desc:"Use randomized simulations to model probability distributions of outcomes",trig:"Risk modeling, financial forecasting under uncertainty",prompt:"I need to model risk and uncertainty for [decision/project]. Teach me Monte Carlo Simulation from MIT. Explain how it works in 3-4 sentences. Then apply it to my planning using RACE."},

  // Leadership & Communication (81-90)
  {num:81,name:"SBI Feedback Model",inst:"Center for Creative Leadership",cat:"leadership-communication",series:"leadership",desc:"Give feedback by describing the situation, specific behavior, and its impact",trig:"Performance feedback, coaching conversations, peer reviews",prompt:"I need to give feedback to [person] about [behavior]. Teach me the SBI Feedback Model from Center for Creative Leadership. Explain how it works in 3-4 sentences. Then apply it to my feedback using RACE."},
  {num:82,name:"SCQA Framework",inst:"McKinsey (Barbara Minto)",cat:"leadership-communication",series:"leadership",desc:"Structure any communication by setting context, naming the complication, framing the question, and delivering the answer",trig:"Executive memos, emails to leadership, strategy presentations",prompt:"I need to structure a [memo/email/presentation] about [topic]. Teach me the SCQA Framework from McKinsey. Explain how it works in 3-4 sentences. Then apply it to my communication using RACE."},
  {num:83,name:"Radical Candor",inst:"Apple / Kim Scott (Stanford)",cat:"leadership-communication",series:"leadership",desc:"Give feedback that is both caring and direct, avoiding the traps of being too nice or too harsh",trig:"Building feedback culture, difficult conversations, management coaching",prompt:"I need to give [type of feedback] to [person/team]. Teach me Radical Candor from Stanford. Explain how it works in 3-4 sentences. Then apply it to my management approach using RACE."},
  {num:84,name:"Servant Leadership",inst:"Greenleaf Center / Indiana University",cat:"leadership-communication",series:"leadership",desc:"Lead by serving your team first, prioritizing their growth and wellbeing",trig:"Team building, leadership development, organizational culture",prompt:"I need to improve my leadership approach for [team/organization]. Teach me Servant Leadership from Greenleaf Center. Explain how it works in 3-4 sentences. Then apply it to my leadership style using RACE."},
  {num:85,name:"RACI Matrix",inst:"Harvard Business School",cat:"leadership-communication",series:"leadership",desc:"Clarify who is Responsible, Accountable, Consulted, and Informed for each task",trig:"Cross-functional projects, role clarity, reducing confusion",prompt:"I need to clarify roles and accountability for [project/team]. Teach me the RACI Matrix from Harvard Business School. Explain how it works in 3-4 sentences. Then apply it to my project using RACE."},
  {num:86,name:"Stakeholder Mapping",inst:"London Business School",cat:"leadership-communication",series:"leadership",desc:"Map stakeholders by influence and interest to plan engagement strategy",trig:"Managing alignment on projects, change management, political navigation",prompt:"I need to map and engage stakeholders for [project/initiative]. Teach me Stakeholder Mapping from London Business School. Explain how it works in 3-4 sentences. Then map my stakeholders using RACE."},
  {num:87,name:"ADKAR Change Management",inst:"Prosci / Colorado",cat:"leadership-communication",series:"leadership",desc:"Guide organizational change through Awareness, Desire, Knowledge, Ability, and Reinforcement",trig:"Leading organizational change, rolling out new tools or processes",prompt:"I need to manage a change initiative at [company]. Teach me the ADKAR model from Prosci. Explain how it works in 3-4 sentences. Then apply it to my change program using RACE."},
  {num:88,name:"The 6-Pager",inst:"Amazon / Jeff Bezos",cat:"leadership-communication",series:"leadership",desc:"Replace slide decks with a structured written narrative that forces clear thinking",trig:"Strategic proposals, executive decisions, product pitches",prompt:"I need to write a 6-pager for [proposal/decision/product]. Teach me The 6-Pager format from Amazon. Explain how it works in 3-4 sentences. Then apply it to my document using RACE."},
  {num:89,name:"Decision Journal",inst:"Farnam Street (Shane Parrish)",cat:"leadership-communication",series:"leadership",desc:"Record decisions with rationale, expected outcomes, and emotions to improve judgment over time",trig:"Leadership development, improving decision quality, team learning",prompt:"I need to improve decision-making quality for [myself/team]. Teach me the Decision Journal from Farnam Street. Explain how it works in 3-4 sentences. Then apply it to my decision process using RACE."},
  {num:90,name:"Pre-Mortem Analysis",inst:"NYU (Gary Klein)",cat:"leadership-communication",series:"leadership",desc:"Imagine a project has already failed and work backwards to find why",trig:"Risk prevention, project planning, launch readiness checks",prompt:"I need to identify failure risks for [project/initiative]. Teach me the Pre-Mortem Analysis from NYU. Explain how it works in 3-4 sentences. Then apply it to my project using RACE."},

  // Innovation & Problem-Solving (91-100)
  {num:91,name:"Design Thinking",inst:"Stanford d.school",cat:"innovation-problem-solving",series:"generative",desc:"Solve problems through empathize, define, ideate, prototype, and test",trig:"Human-centered problem solving, product design, service innovation",prompt:"I need to solve [problem] for [user/customer]. Teach me Design Thinking from Stanford d.school. Explain how it works in 3-4 sentences. Then apply it to my challenge using RACE."},
  {num:92,name:"First Principles Thinking",inst:"Caltech / Aristotle (Elon Musk application)",cat:"innovation-problem-solving",series:"generative",desc:"Break a problem down to its most fundamental truths and reason up from there",trig:"Breaking through assumptions, finding unconventional solutions",prompt:"I need to rethink [problem/challenge] from first principles. Teach me First Principles Thinking from Caltech. Explain how it works in 3-4 sentences. Then apply it to my challenge using RACE."},
  {num:93,name:"TRIZ",inst:"Russian Academy of Sciences / MIT",cat:"innovation-problem-solving",series:"agentic",desc:"Solve technical contradictions using 40 inventive principles derived from patent analysis",trig:"Engineering problems, product innovation, resolving trade-offs",prompt:"I need to solve a technical contradiction in [product/process]. Teach me TRIZ from MIT. Explain how it works in 3-4 sentences. Then apply it to my problem using RACE."},
  {num:94,name:"Six Thinking Hats",inst:"Oxford (Edward de Bono)",cat:"innovation-problem-solving",series:"leadership",desc:"Structure group thinking by assigning six different perspectives to explore a problem",trig:"Team brainstorming, meeting facilitation, balanced decision-making",prompt:"I need to facilitate a brainstorming session on [topic]. Teach me Six Thinking Hats from Oxford. Explain how it works in 3-4 sentences. Then apply it to my meeting using RACE."},
  {num:95,name:"Rapid Prototyping",inst:"Stanford d.school / IDEO",cat:"innovation-problem-solving",series:"agentic",desc:"Build quick, low-fidelity versions of ideas to learn fast before investing",trig:"Product testing, validating concepts, avoiding wasted development",prompt:"I need to prototype and test [idea/product]. Teach me Rapid Prototyping from Stanford d.school. Explain how it works in 3-4 sentences. Then apply it to my project using RACE."},
  {num:96,name:"A/B Testing Framework",inst:"Stanford Statistics / Google",cat:"innovation-problem-solving",series:"agentic",desc:"Compare two versions of something to determine which performs better using data",trig:"Website optimization, email testing, feature validation",prompt:"I need to run an A/B test on [element/feature]. Teach me the A/B Testing Framework from Stanford Statistics. Explain how it works in 3-4 sentences. Then design my test using RACE."},
  {num:97,name:"Root Cause Analysis",inst:"Toyota / MIT (Lean)",cat:"innovation-problem-solving",series:"agentic",desc:"Ask 'why' five times to trace a symptom back to its true root cause",trig:"Debugging failures, process improvement, incident reviews",prompt:"I need to find the root cause of [problem/failure]. Teach me Root Cause Analysis from Toyota/MIT. Explain how it works in 3-4 sentences. Then apply it to my problem using RACE."},
  {num:98,name:"Double Diamond",inst:"UK Design Council / Royal College of Art",cat:"innovation-problem-solving",series:"generative",desc:"Diverge and converge twice: first to find the right problem, then to find the right solution",trig:"Complex problem solving, service design, policy development",prompt:"I need to solve a complex problem around [topic]. Teach me the Double Diamond from UK Design Council. Explain how it works in 3-4 sentences. Then apply it to my challenge using RACE."},
  {num:99,name:"Assumption Mapping",inst:"Strategyzer / Lean Startup",cat:"innovation-problem-solving",series:"agentic",desc:"Identify your riskiest assumptions and test them before committing resources",trig:"Pre-launch validation, reducing risk, experiment design",prompt:"I need to identify and test assumptions for [product/initiative]. Teach me Assumption Mapping from Strategyzer. Explain how it works in 3-4 sentences. Then map my assumptions using RACE."},
  {num:100,name:"After-Action Review",inst:"U.S. Army / West Point",cat:"innovation-problem-solving",series:"leadership",desc:"Systematically review what was expected, what happened, why, and what to do next",trig:"Post-project learning, incident review, team retrospectives",prompt:"I need to run a post-project review for [project/initiative]. Teach me the After-Action Review from West Point. Explain how it works in 3-4 sentences. Then apply it to my retrospective using RACE."},
];

const SERIES_CONFIG = {
  generative: { label: "Generative AI", color: "bg-blue/10 text-blue", dot: "bg-blue" },
  agentic: { label: "Agentic AI", color: "bg-mint/15 text-mint-dark", dot: "bg-mint-dark" },
  leadership: { label: "Leadership", color: "bg-magenta/10 text-magenta", dot: "bg-magenta" },
} as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FrameworksClient() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [masterCopied, setMasterCopied] = useState(false);

  /* Filtered frameworks */
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return FRAMEWORKS.filter((fw) => {
      const catMatch = activeCat === "all" || fw.cat === activeCat;
      const searchMatch =
        !q ||
        fw.name.toLowerCase().includes(q) ||
        fw.inst.toLowerCase().includes(q) ||
        fw.desc.toLowerCase().includes(q) ||
        fw.trig.toLowerCase().includes(q);
      return catMatch && searchMatch;
    });
  }, [search, activeCat]);

  /* Visible categories */
  const visibleCategories = useMemo(() => {
    const catIds = new Set(filtered.map((fw) => fw.cat));
    return CATEGORIES.filter((cat) => catIds.has(cat.id));
  }, [filtered]);

  const toggleCard = useCallback((num: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  }, []);

  const toggleAll = useCallback(() => {
    setAllExpanded((prev) => {
      const next = !prev;
      if (next) {
        setExpandedCards(new Set(filtered.map((fw) => fw.num)));
      } else {
        setExpandedCards(new Set());
      }
      return next;
    });
  }, [filtered]);

  const handleCategoryFilter = useCallback((cat: string) => {
    setActiveCat(cat);
    setExpandedCards(new Set());
    setAllExpanded(false);
  }, []);

  const copyToClipboard = useCallback(async (text: string, id: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const copyMaster = useCallback(async () => {
    const text =
      "I need to [task]. Teach me [Framework Name] from [University/Institution]. Explain how it works in 3-4 sentences. Then apply it to [my project] using RACE.";
    await navigator.clipboard.writeText(text);
    setMasterCopied(true);
    setTimeout(() => setMasterCopied(false), 2000);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy pt-16">
        <div className="max-w-[920px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-blue mb-4 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-blue rounded-sm" />
            AI Officer Institute
          </p>
          <h1
            className="text-white font-bold leading-[1.15] tracking-tight mb-5 max-w-[680px]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            100 Business Frameworks from the{" "}
            <span className="text-blue">World&apos;s Top Universities</span>
          </h1>
          <p className="text-white/55 text-[17px] leading-[1.7] max-w-[560px] mb-8">
            You don&apos;t need to memorize frameworks. You need to know they exist. Ask AI to teach you. Apply immediately.
          </p>
          <div className="flex gap-8 flex-wrap">
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[28px] font-bold text-white tracking-tight">100</span>
              <span className="text-[12px] text-white/40 font-medium uppercase tracking-wider">Frameworks</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[28px] font-bold text-white tracking-tight">9</span>
              <span className="text-[12px] text-white/40 font-medium uppercase tracking-wider">Categories</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[28px] font-bold text-white tracking-tight">50+</span>
              <span className="text-[12px] text-white/40 font-medium uppercase tracking-wider">Universities</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASTER PROMPT ── */}
      <section className="border-b border-border">
        <div className="max-w-[920px] mx-auto px-6 md:px-10 py-10">
          <ScrollReveal>
            <Card className="bg-navy border-none overflow-hidden">
              <CardContent className="p-8 md:p-9">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-mint mb-2.5">
                      Your Master Prompt Pattern
                    </p>
                    <p className="text-[17px] font-semibold text-white mb-4 leading-snug">
                      One pattern works with every framework on this page.
                    </p>
                    <div className="font-mono text-[13.5px] text-white/85 bg-white/[0.07] border border-white/[0.12] rounded-lg p-4 md:px-5 leading-relaxed">
                      I need to <span className="text-mint">[task]</span>. Teach me{" "}
                      <span className="text-mint">[Framework Name]</span> from{" "}
                      <span className="text-mint">[University/Institution]</span>. Explain how it works in
                      3-4 sentences. Then apply it to{" "}
                      <span className="text-mint">[my project]</span> using RACE.
                    </div>
                    <p className="text-[13px] text-white/45 mt-3">Copy it. Use it 100 times.</p>
                  </div>
                  <button
                    onClick={copyMaster}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold border transition-colors whitespace-nowrap self-start ${
                      masterCopied
                        ? "bg-mint/15 border-mint text-mint"
                        : "bg-white/10 border-white/20 text-white hover:bg-white/[0.18] hover:border-white/35"
                    }`}
                  >
                    {masterCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Pattern
                      </>
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONTROLS ── */}
      <div className="sticky top-14 z-30 bg-white border-b border-border">
        <div className="max-w-[920px] mx-auto px-6 md:px-10 py-3.5">
          {/* Row 1: search + count + expand */}
          <div className="flex gap-2.5 items-center mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-[15px] h-[15px] pointer-events-none" />
              <input
                type="text"
                placeholder="Search frameworks, universities..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-[38px] pl-[38px] pr-3.5 border border-border rounded-lg text-[14px] text-foreground bg-surface placeholder:text-muted-foreground outline-none focus:border-blue focus:bg-white transition-colors"
              />
            </div>
            <span className="font-mono text-[12px] font-semibold text-muted-foreground bg-surface border border-border rounded-md px-2.5 h-[38px] flex items-center whitespace-nowrap shrink-0">
              {filtered.length} framework{filtered.length !== 1 ? "s" : ""}
            </span>
            <button
              onClick={toggleAll}
              className="h-[38px] px-3.5 rounded-lg border border-border bg-white text-[13px] font-medium text-muted-foreground hover:bg-surface hover:border-border transition-colors whitespace-nowrap shrink-0"
            >
              {allExpanded ? "Collapse All" : "Expand All"}
            </button>
          </div>

          {/* Row 2: category grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1.5">
            <button
              onClick={() => handleCategoryFilter("all")}
              className={`h-[34px] px-2.5 rounded-[7px] border text-[12.5px] font-medium transition-colors text-center truncate ${
                activeCat === "all"
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-muted-foreground border-border hover:border-blue hover:text-blue"
              }`}
            >
              All 9 Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryFilter(cat.id)}
                className={`h-[34px] px-2.5 rounded-[7px] border text-[12.5px] font-medium transition-colors text-center truncate ${
                  activeCat === cat.id
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-muted-foreground border-border hover:border-blue hover:text-blue"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── FRAMEWORKS LIST ── */}
      <div className="max-w-[920px] mx-auto px-6 md:px-10 pb-20">
        {visibleCategories.map((cat) => {
          const catFrameworks = filtered.filter((fw) => fw.cat === cat.id);
          if (catFrameworks.length === 0) return null;
          return (
            <div key={cat.id}>
              {/* Section header */}
              <div className="flex items-center gap-3.5 pt-8 pb-4">
                <span className="font-mono text-[11px] font-semibold text-muted-foreground bg-surface border border-border rounded-[5px] px-2 py-0.5">
                  {catFrameworks[0].num}&ndash;{catFrameworks[catFrameworks.length - 1].num}
                </span>
                <span className="text-[16px] font-bold text-foreground tracking-tight">
                  {cat.label}
                </span>
                <span className="flex-1 h-px bg-border" />
              </div>

              {/* Cards */}
              {catFrameworks.map((fw) => {
                const isExpanded = expandedCards.has(fw.num);
                const isCopied = copiedId === fw.num;
                const seriesCfg = SERIES_CONFIG[fw.series];

                return (
                  <ScrollReveal key={fw.num}>
                    <Card
                      className={`mb-2 transition-all cursor-pointer ${
                        isExpanded
                          ? "border-blue shadow-[0_2px_16px_rgba(40,123,232,0.08)]"
                          : "hover:border-border hover:shadow-sm"
                      }`}
                      onClick={() => toggleCard(fw.num)}
                    >
                      {/* Header row */}
                      <div className="grid grid-cols-[36px_1fr] sm:grid-cols-[44px_1fr_auto] items-center gap-4 px-5 py-4">
                        <div
                          className={`font-mono text-[12px] font-semibold w-9 h-9 flex items-center justify-center rounded-md border shrink-0 ${
                            isExpanded
                              ? "bg-blue/[0.08] border-blue/20 text-blue"
                              : "bg-surface border-border text-muted-foreground"
                          }`}
                        >
                          {String(fw.num).padStart(2, "0")}
                        </div>
                        <div className="min-w-0">
                          <div className="text-[15px] font-semibold text-foreground leading-tight">
                            {fw.name}
                          </div>
                          <div className="text-[12.5px] text-muted-foreground truncate">
                            {fw.inst}
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 shrink-0">
                          <Badge
                            variant="secondary"
                            className={`${seriesCfg.color} text-[11px] font-semibold px-2.5 py-0.5 rounded-full gap-1.5 border-transparent`}
                          >
                            <span className={`w-[5px] h-[5px] rounded-full ${seriesCfg.dot}`} />
                            {seriesCfg.label}
                          </Badge>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Expanded body */}
                      {isExpanded && (
                        <div className="border-t border-border px-5 pb-5">
                          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                              <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-1.5">
                                What it does
                              </p>
                              <p className="text-[14px] text-muted-foreground leading-relaxed">
                                {fw.desc}
                              </p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-1.5">
                                When to use it
                              </p>
                              <p className="text-[14px] text-muted-foreground leading-relaxed">
                                {fw.trig}
                              </p>
                            </div>
                            <div className="sm:col-span-2">
                              <div className="flex items-center justify-between mb-2">
                                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted-foreground">
                                  Your Prompt
                                </p>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    copyToClipboard(fw.prompt, fw.num);
                                  }}
                                  className={`inline-flex items-center gap-1.5 text-[12px] font-semibold px-3.5 py-1.5 rounded-md transition-colors ${
                                    isCopied
                                      ? "bg-mint-dark text-white"
                                      : "bg-navy text-white hover:bg-[#1a2a50]"
                                  }`}
                                >
                                  {isCopied ? (
                                    <>
                                      <Check className="w-3 h-3" />
                                      Copied!
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      Copy
                                    </>
                                  )}
                                </button>
                              </div>
                              <div className="font-mono text-[12.5px] text-muted-foreground bg-surface border border-border rounded-lg p-3.5 md:p-4 leading-[1.7] whitespace-pre-wrap">
                                {fw.prompt}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          );
        })}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-[18px] text-foreground font-semibold mb-2">No frameworks found</h3>
            <p className="text-[14px] text-muted-foreground">Try a different search or filter.</p>
          </div>
        )}
      </div>
    </>
  );
}
