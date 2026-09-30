import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  FileText,
  X,
  Filter,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

export default function Resources() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'trending', 'ebooks'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Real dataset
  const resources = [
    {
      id: "1",
      title: "Build and Secure AI Apps and Agents at Scale",
      description: "Explore insights, security best practices, and architecture frameworks to deploy scalable AI agents safely in enterprise environments.",
      link: "https://techintel.tech/lp/build-and-secure-ai-apps-and-agents-at-scale/",
      image: "https://techintel.tech/lp/build-and-secure-ai-apps-and-agents-at-scale/Images/banner_1235.png",
      category: "Technology",
      type: "eBook",
      readTime: "8 min read",
      featured: true,
      trending: true,
      downloads: "12.4k",
    },
    {
      id: "2",
      title: "A step-by-step framework to build agents",
      description: "A comprehensive developer roadmap covering dynamic memory, LLM tool integration, and agent loop execution.",
      link: "https://techintel.tech/lp/a-step-by-step-framework-to-build-agents/",
      image: "https://techintel.tech/lp/a-step-by-step-framework-to-build-agents/Images/ey%20image%20.png",
      category: "Technology",
      type: "Guide",
      readTime: "12 min read",
      featured: false,
      trending: true,
      downloads: "8.9k",
    },
    {
      id: "3",
      title: "Transformando la interacción con el cliente",
      description: "Estrategias avanzadas de omnicanalidad e inteligencia artificial para optimizar el engagement de clientes.",
      link: "https://techintel.tech/lp/transformando-la-interaccion-con-el-cliente/",
      image: "https://techintel.tech/lp/transformando-la-interaccion-con-el-cliente/Images/banner-1-2.png",
      category: "Technology",
      type: "Report",
      readTime: "15 min read",
      featured: false,
      trending: false,
      downloads: "5.1k",
    },
    {
      id: "4",
      title: "Seis señales de que su CCM tradicional está poniendo en riesgo su negocio",
      description: "Análisis crítico sobre la modernización de la gestión de comunicaciones con clientes y riesgos operativos.",
      link: "https://techintel.tech/lp/seis-senales-de-que-su-ccm-tradicional-esta-poniendo-en-riesgo-su-negocio/",
      image: "https://techintel.tech/lp/seis-senales-de-que-su-ccm-tradicional-esta-poniendo-en-riesgo-su-negocio/Images/banner.jpg",
      category: "Technology",
      type: "eBook",
      readTime: "10 min read",
      featured: false,
      trending: false,
      downloads: "4.2k",
    },
    {
      id: "5",
      title: "Making AI Deliver",
      description: "Bridging the gap between generative AI experimentation and business ROI with proven governance practices.",
      link: "https://techintel.tech/lp/Making-AI-Deliver-gdpr/",
      image: "https://techintel.tech/lp/Making-AI-Deliver-gdpr/Images/2026-04-democratization-in-the-ai-age-lp-360x360-2x.png",
      category: "Technology",
      type: "Whitepaper",
      readTime: "18 min read",
      featured: true,
      trending: true,
      downloads: "15.8k",
    },
    {
      id: "6",
      title: "Multichannel Math: How Retail Sales Tax Complexity Adds Up",
      description: "How evolving cross-border e-commerce tax regulations impact multi-state retail compliance and systems.",
      link: "https://techintel.tech/lp/multichannel-math-how-retail-sales-tax-complexity-adds-up/",
      image: "https://techintel.tech/lp/images_lp/bannerimg1.png",
      category: "E-commerce",
      type: "Guide",
      readTime: "6 min read",
      featured: false,
      trending: false,
      downloads: "3.7k",
    },
    {
      id: "7",
      title: "From Cart to Compliance: Optimising B2B Commerce",
      description: "Streamlining B2B checkout flows, cross-border invoicing, and automated tax calculation engines.",
      link: "https://techintel.tech/lp/from-cart-to-compliance-optimising-b2b-commerce/",
      image: "https://techintel.tech/lp/images_lp/bannerimg2.png",
      category: "E-commerce",
      type: "Report",
      readTime: "14 min read",
      featured: false,
      trending: false,
      downloads: "6.4k",
    },
    {
      id: "8",
      title: "State of AI Agents",
      description: "Global enterprise survey on AI adoption, agentic workflow architectures, and infrastructure spend.",
      link: "https://techintel.tech/lp/state-of-ai-agents/",
      image: "https://techintel.tech/lp/state-of-ai-agents-gdpr/Images/lp-headerhero-image-2026-01-eb-state-of-ai-agents.png",
      category: "Technology",
      type: "eBook",
      readTime: "22 min read",
      featured: false,
      trending: true,
      downloads: "18.1k",
    },
    
                 {
                  id: "9",
              title: "The Ultimate Checklist to Shift-Left Governance",
              description: "A practical guide for technology leaders to implement proactive governance and compliance in software development lifecycles.",
              link: "https://techintel.tech/lp/The-Ultimate-Checklist-to-Shift-Left-Governance/",
              image: "https://techintel.tech/assets/Images/210720251.png",
              category: "Cloud",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k",
            },
            {
              id: "10",
              title: "Sports + Outdoor Commerce Report 2025",
              link: "https://techintel.tech/lp/Sports-Outdoor-Commerce-Report-2025/",
              description: "A comprehensive analysis of the sports and outdoor retail landscape, highlighting emerging trends, consumer behaviors, and technology adoption.",
              image: "https://techintel.tech/lp/Sports-Outdoor-Commerce-Report-2025/Images/Sports-Outdoor-Commerce-Report-resource-tile.png",
              category: "E-commerce",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k"
            },
            {
              id: "11",
              title: "Why the four key metrics are essential in today’s software-driven automotive industry",
              description: "An in-depth exploration of the four critical metrics that automotive software teams must monitor to ensure optimal performance, safety, and user experience.",
              link: "https://techintel.tech/lp/why-the-four-key-metrics-are-essential-in-todays-software-driven-automotive-industry/",
              image: "https://techintel.tech/lp/why-the-four-key-metrics-are-essential-in-todays-software-driven-automotive-industry/Images/cover.jpg",
              category: "Technology",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k"
            },
            {
              id: "12",
              title: "混合雲備份入門指南",
              description: "A beginner's guide to hybrid cloud backup solutions.",
              link: "https://techintel.tech/lp/hybrid-cloud-backup-for-dummies-5/",
              image: "https://techintel.tech/lp/hybrid-cloud-backup-for-dummies-5/Images/cover.jpg",
              category: "IT",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k"
            },
            {
              id: "13",
              title: "10 個最佳實踐 改善恢復 目標",
              description: "A comprehensive guide to the top 10 best practices for improving recovery objectives in hybrid cloud environments.",
              link: "https://techintel.tech/lp/10-best-practices-to-improve-recovery-objectives-9/",
              image: "https://techintel.tech/lp/10-best-practices-to-improve-recovery-objectives-9/Images/cover.jpg",
              category: "IT",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k"
            },
            {
              id: "14",
              title: "2024 年混合雲和多雲狀況",
              description: "An overview of the current state of hybrid and multi-cloud environments in 2024.",
              link: "https://techintel.tech/lp/the-state-of-hybrid-and-multi-cloud-in-2024-5/",
              image: "https://techintel.tech/lp/the-state-of-hybrid-and-multi-cloud-in-2024-5/Images/cover.jpg",
              category: "IT",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k"
            },
            {
              id: "15",
              title: "Forrester Wave™：資料彈性解決方案，2024 年第 4 季度",
              description: "A comprehensive analysis of the Forrester Wave™ data resilience solutions for the fourth quarter of 2024.",
              link: "https://techintel.tech/lp/the-forrester-wave-data-resilience-solutions-q4-2024-5/",
              image: "https://techintel.tech/lp/the-forrester-wave-data-resilience-solutions-q4-2024-5/Images/cover.png",
              category: "IT",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k",
            },
            {
              id: "16",
              title: "安全設計和資料保護指南",
              description: "A comprehensive guide to secure-by-design and data protection strategies.",
              link: "https://techintel.tech/lp/your-guide-to-secure-by-design-and-data-protection-4/",
              image: "https://techintel.tech/lp/your-guide-to-secure-by-design-and-data-protection-4/Images/cover.jpg",
              category: "HR",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k",
            },
            {
              id: "17",
              title: "Veeam 資料平台 + Sophos 託管偵測與回應",
              description: "A comprehensive guide to Veeam's data platform and Sophos's managed detection and response solutions.",
              link: "https://techintel.tech/lp/veeam-data-platform-sophos-managed-detect-and-response-10/",
              image: "https://techintel.tech/lp/veeam-data-platform-sophos-managed-detect-and-response-10/Images/cover.jpg",
              category: "HR",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k",
            },
            {
              id: "18",
              title: "GigaOm 混合雲資料保護 Radar 報告",
              description: "An overview of the current state of hybrid and multi-cloud environments in 2024.",
              link: "https://techintel.tech/lp/gigaom-radar-report-for-hybrid-cloud-data-protection-4/",
              image: "https://techintel.tech/lp/gigaom-radar-report-for-hybrid-cloud-data-protection-4/Images/cover.png",
              category: "Cloud",
              type: "eBook",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k",
            },
            {
              id: "19",
              title: "451 企業購買指南",
              description: "A comprehensive analysis of the Forrester Wave™ data resilience solutions for the fourth quarter of 2024.",
              link: "https://techintel.tech/lp/451-enterprise-buyers-guide-4/",
              image: "https://techintel.tech/lp/451-enterprise-buyers-guide-4/Images/cover.jpg",
              category: "Cloud",
              type: "eBook",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k"
            },
            {
              id: "20",
              title: "5 Steps to Healthier, Fitter E-Commerce",
              description: "A guide to improving the health and performance of your e-commerce platform.",
              link: "https://techintel.tech/lp/5-Steps-to-Healthier-Fitter-E-Commerce/",
              image: "https://techintel.tech/lp/images/170720251.png",
              category: "HR",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k"
            },
            {
              id: "21",
              title: "5 Tech trends and what they mean to ecommerce",
              description: "An analysis of the top 5 technology trends and their impact on the e-commerce industry.",
              link: "https://techintel.tech/lp/5-Tech-trends-and-what-they-mean-to-ecommerce/",
              image: "https://techintel.tech/lp/images/170720252.png",
              category: "HR",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k"
            },
            {
              id: "22",
              title: "Listicle - 10 things ecommerce leaders need to know about Cloudflare",
              description: "A listicle highlighting 10 essential things ecommerce leaders should know about Cloudflare.",
              link: "https://techintel.tech/lp/Listicle-10-things-ecommerce-leaders-need-to-know-about-Cloudflare/",
              image: "https://techintel.tech/lp/images/170720253.png",
              category: "Security",
              type: "eBook",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k",
            },
            {
              id: "23",
              title: "Maturity Model",
              description: "A guide to understanding and implementing the maturity model for your organization.",
              link: "https://techintel.tech/lp/Maturity-Model/",
              image: "https://techintel.tech/lp/images/250720254.png",
              category: "HR",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k",
            },
            {
              id: "24",
              title: "Security or performance: Solving the classic website dilemma",
              description: "An analysis of the trade-offs between security and performance in website design.",
              link: "https://techintel.tech/lp/Security-or-performance-Solving-the-classic-website-dilemma/",
              image: "https://techintel.tech/lp/images/170720255.png",
              category: "HR",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k"
            },
            {
              id: "25",
              title: "Shielding the Future: Retail Industry’s Cyber Threat Landscape",
              description: "An overview of the current cyber threat landscape facing the retail industry.",
              link: "https://techintel.tech/lp/Shielding-the-Future-Retail-Industrys-Cyber-Threat-Landscape/",
              image: "https://techintel.tech/lp/images/170720256.png",
              category: "HR",
              type: "report",
              readTime: "22 min read",
              featured: false,
              trending: true,
              downloads: "18.1k"
            },
  ];

  // Dynamically derive categories
  const categories = useMemo(() => {
    const unique = Array.from(new Set(resources.map((r) => r.category.trim())));
    return ["All", ...unique, "Cybersecurity", "Cloud", "IT"];
  }, [resources]);

  // Filter logic
  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory =
        category === "All" || resource.category.trim() === category;
      const matchesSearch =
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase());
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "trending" && resource.trending) ||
        (activeTab === "ebooks" && resource.type === "eBook");

      return matchesCategory && matchesSearch && matchesTab;
    });
  }, [category, search, activeTab, resources]);

  // Pagination bounds
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const currentAssets = useMemo(() => {
    return filteredResources.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredResources, currentPage, itemsPerPage]);

  const handleTopicClick = (topic) => {
    setSearch(topic);
    setCurrentPage(1);
  };

  return (
    <main className="bg-slate-50 font-sans text-slate-900 antialiased selection:bg-cyan-500 selection:text-white">
      {/* 1. HERO SECTION: CYAN / TEAL WAVE BANNER THEME */}
      <section className="relative overflow-hidden bg-[#02181d] pt-36 pb-20 text-white lg:pt-40 lg:pb-24">
        {/* Dynamic Cyan Radial Gradient Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#005b6a_0%,#02232a_50%,#011115_100%)] pointer-events-none" />
        
        {/* Abstract Glowing Cyan Wave Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,242,254,0.25)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,229,255,0.2)_0%,transparent_60%)] pointer-events-none" />

        {/* Ambient Blurred Orbs */}
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-teal-400/20 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & Interactive Hero Search */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-6 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Knowledge Hub & Research</span>
                </div>

                {/* Section Tag */}
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
                  Resource library
                </p>

                {/* UPDATED: WHITE HERO HEADING */}
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                  Research, reports and ideas for technology professionals.
                </h1>

                {/* Subtitle Description */}
                <p className="mt-4 text-base text-cyan-100/80 leading-relaxed max-w-2xl">
                  Explore our curated collection of developer frameworks, enterprise whitepapers, and cloud security reports.
                </p>

                {/* Hero Search Box */}
                <div className="mt-8 flex max-w-md items-center rounded-2xl border border-cyan-500/30 bg-[#002f37]/70 p-1.5 backdrop-blur-md shadow-2xl focus-within:border-cyan-400 transition">
                  <div className="pl-3 text-cyan-300/70">
                    <Search className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by topic (e.g. 'AI Agents', 'Tax')..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-transparent px-3 py-2 text-xs font-medium text-white placeholder-cyan-200/50 outline-none"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="p-1 text-cyan-300 hover:text-white mr-1"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Trending Topics & Key Stats Box */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-3xl border border-cyan-500/25 bg-[#002b33]/60 p-6 backdrop-blur-md shadow-2xl"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-300/80 mb-4 flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5 text-cyan-400" /> Popular Research Topics
                </p>

                {/* Clickable Quick Topic Chips */}
                <div className="flex flex-wrap gap-2">
                  {["AI Agents", "Data Engineering", "GDPR", "Tax Compliance", "Security"].map((topic) => (
                    <button
                      key={topic}
                      onClick={() => handleTopicClick(topic)}
                      className={`rounded-xl border px-3 py-1.5 text-xs font-medium transition ${
                        search.toLowerCase().includes(topic.toLowerCase())
                          ? "border-cyan-400 bg-cyan-400/20 text-cyan-200"
                          : "border-cyan-500/20 bg-[#001c22]/80 text-cyan-100/80 hover:border-cyan-400/50 hover:text-white"
                      }`}
                    >
                      #{topic}
                    </button>
                  ))}
                </div>

                {/* Quick Stats Grid */}
                <div className="mt-6 pt-6 border-t border-cyan-500/20 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-extrabold text-white">100%</p>
                    <p className="text-[11px] font-medium text-cyan-200/70 mt-0.5">Free Peer Research</p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-cyan-300">50+</p>
                    <p className="text-[11px] font-medium text-cyan-200/70 mt-0.5">Verified Playbooks</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MAIN RESOURCE CONTENT LAYOUT */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* View Tabs & Status */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-6 mb-10">
            {/* Asset Format Tabs */}
            <div className="flex items-center gap-1 rounded-xl bg-slate-200/70 p-1 w-fit">
              <button
                onClick={() => { setActiveTab("all"); setCurrentPage(1); }}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                  activeTab === "all"
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All Assets
              </button>
              <button
                onClick={() => { setActiveTab("trending"); setCurrentPage(1); }}
                className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition ${
                  activeTab === "trending"
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <TrendingUp className="h-3.5 w-3.5 text-cyan-600" />
                Trending
              </button>
              <button
                onClick={() => { setActiveTab("ebooks"); setCurrentPage(1); }}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                  activeTab === "ebooks"
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                eBooks
              </button>
            </div>

            {/* Results Count & Clear Button */}
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <p>
                Showing <span className="font-semibold text-slate-900">{filteredResources.length}</span> results
              </p>
              {(search || category !== "All" || activeTab !== "all") && (
                <button
                  onClick={() => { setSearch(""); setCategory("All"); setActiveTab("all"); setCurrentPage(1); }}
                  className="text-cyan-600 hover:underline font-semibold"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* 2-Column Sidebar + Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Sticky Sidebar Filter */}
            <aside className="lg:col-span-3">
              <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Filter className="h-3.5 w-3.5 text-cyan-600" />
                  Categories
                </div>

                <nav className="flex flex-col gap-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setCategory(cat); setCurrentPage(1); }}
                      className={`group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
                        category === cat
                          ? "bg-slate-950 text-white shadow-md shadow-slate-950/10"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <span>{cat}</span>
                      <ChevronRight
                        className={`h-3.5 w-3.5 transition-transform ${
                          category === cat ? "text-cyan-400 translate-x-0.5" : "text-slate-400 opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Cards Grid */}
            <div className="lg:col-span-9">
              <motion.div layout className="grid gap-6 sm:grid-cols-2">
                <AnimatePresence mode="popLayout">
                  {currentAssets.length > 0 ? (
                    currentAssets.map((resource, index) => (
                      <motion.div
                        layout
                        key={resource.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, delay: index * 0.04 }}
                        className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                      >
                        <div>
                          {/* Image Thumbnail */}
                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-50 mb-3">
                            <img
                              src={resource.image}
                              alt={resource.title}
                              loading="lazy"
                              className="h-full w-full object-contain"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
                              }}
                            />
                          </div>
                          <div className="mb-3 flex flex-wrap gap-2">
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold text-slate-700">
                              {resource.category}
                            </span>
                            <span className="rounded-full bg-cyan-50 px-3 py-1 text-[10px] font-semibold text-cyan-800">
                              {resource.type}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500 mb-2">
                            <BookOpen className="h-3.5 w-3.5 text-cyan-600" />
                            <span>{resource.readTime}</span>
                          </div>

                          <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-cyan-600 transition duration-200">
                            {resource.title}
                          </h3>

                          <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                            {resource.description}
                          </p>
                        </div>

                        {/* Action Footer */}
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <a    
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition"
                          >
                            View Details
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    /* Empty State */
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-full py-16 text-center rounded-2xl border border-dashed border-slate-300 bg-white"
                    >
                      <FileText className="mx-auto h-10 w-10 text-slate-400" />
                      <p className="mt-3 text-sm font-semibold text-slate-700">No resources found matching your search</p>
                      <button
                        onClick={() => { setSearch(""); setCategory("All"); setActiveTab("all"); setCurrentPage(1); }}
                        className="mt-4 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                      >
                        Reset All Search Filters
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40"
                  >
                    &laquo; Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-9 w-9 rounded-lg text-xs font-semibold transition ${
                        currentPage === page
                          ? "bg-slate-950 text-white shadow-md"
                          : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40"
                  >
                    Next &raquo;
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}