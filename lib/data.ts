export const CV = "/assets/Sachin-Kavindu-CV.pdf";
export const CV_FILENAME = "Sachin-Kavindu-CV.pdf";
export const EMAIL = "bestkavindu@gmail.com";
export const PHONE = "+94 77 583 5974";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/sachin-kavindu-b8814a18a/",
  github: "https://github.com/bestkavindu",
  facebook: "https://www.facebook.com/bestkavindu",
  site: "https://sachin.rajapaksha.me",
};

export const NAV = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Credentials", "#credentials"],
  ["Contact", "#contact"],
] as const;

export const STATS: [string, string][] = [
  ["4+ yrs", "Engineering experience"],
  ["DP-600", "Microsoft certified"],
  ["3", "Platforms shipped"],
  ["HR · Education · Finance", "Domains"],
];

export const FACTS: [string, string][] = [
  ["Role", "Data & Software Engineer"],
  ["Company", "Zuse Technologies"],
  ["Location", "Sri Lanka (UTC+5:30)"],
  ["Education", "BSc Statistics & Mathematics"],
  ["Certified", "Microsoft DP-600"],
  ["Availability", "Open to new roles"],
];

export const SKILLS: string[][] = [
  [
    "Data Engineering",
    "Microsoft Fabric",
    "Lakehouse",
    "Data Pipelines",
    "Notebooks",
    "Dataflows",
    "PySpark",
    "Medallion Architecture",
    "ETL / ELT",
    "Star Schema Modeling",
    "Stored Procedures",
    "Data Quality & Validation",
  ],
  [
    "BI & Analytics",
    "Power BI",
    "DAX",
    "Semantic Models",
    "Report Publishing",
    "Statistical Analysis",
    "EDA",
  ],
  ["Languages", "SQL", "Python", "PHP", "DAX", "SAS", "JavaScript", "R"],
  ["Frameworks", "Laravel", "Livewire", "React", "Tailwind CSS", "Filament"],
  ["Databases", "PostgreSQL", "SQL Server", "MySQL", "MongoDB"],
  ["Tools & Cloud", "Azure", "AWS", "Git", "Linux", "RESTful APIs"],
];

export type Project = {
  slug: string;
  name: string;
  stack: string;
  desc: string;
  tags: string[];
  href: string | null;
  /** Drop a screenshot in /public/projects and point here to replace the placeholder. */
  image: string | null;
};

export const PROJECTS: Project[] = [
  {
    slug: "proj-hr",
    name: "HR Analytics Data Pipeline & Dashboard",
    stack: "Microsoft Fabric · PySpark · Power BI",
    desc: "End-to-end medallion data pipeline replacing a manual monthly HR reporting workflow. Automated ingestion of Excel sources into the Bronze layer of a Fabric Lakehouse, PySpark cleaning and standardization into Silver, and stored procedures building fact tables in Gold. The curated data drives a published Power BI dashboard covering headcount, attrition, payroll and recruitment KPIs — with every refresh built on governed, preprocessed data.",
    tags: ["Microsoft Fabric", "PySpark", "Power BI", "DAX", "Medallion"],
    href: null,
    image: "/projects/hrms-medallion-pipeline.png",
  },
  {
    slug: "proj-dwh",
    name: "SQL Data Warehouse",
    stack: "SQL Server · T-SQL",
    desc: "A data warehouse following the Medallion Architecture with robust ETL pipelines to extract, clean, standardize and load CSV data into SQL Server. Implemented data quality checks, deduplication and consistent naming conventions across layers, and modeled a star schema of fact and dimension tables in the Gold layer for analytics-ready reporting.",
    tags: ["SQL Server", "T-SQL", "ETL", "Star Schema"],
    href: LINKS.github,
    image: "/projects/sql-data-warehouse.jpg",
  },
  {
    slug: "proj-bms",
    name: "Budget Management System",
    stack: "Laravel · Livewire · PostgreSQL · SAP",
    desc: "Large-scale budget management platform serving the entire Lyceum school network. Integrates financial data sourced from SAP and provides centralized budget planning, allocation tracking and consolidated reporting across all schools — engineered for scale and reliability.",
    tags: ["Laravel", "Livewire", "PostgreSQL", "SAP", "REST APIs"],
    href: null,
    image: "/projects/budget-management-system.jpg",
  },
];

export type Role = {
  period: string;
  role: string;
  org: string;
  bullets: string[];
  tags: string[];
};

export const EXPERIENCE: Role[] = [
  {
    period: "Jun 2025 — Present",
    role: "Data Engineer & Software Engineer",
    org: "Zuse Technologies",
    bullets: [
      "Design and implement end-to-end medallion Lakehouse architectures (Bronze, Silver, Gold) in Microsoft Fabric powering HR analytics and education performance reporting.",
      "Build PySpark notebooks and Fabric Data Pipelines to ingest raw Excel/CSV sources into Bronze, handling schema drift, merged cells and deduplication.",
      "Develop stored procedures building fact and dimension tables in Gold, delivering analytics-ready star schemas for Power BI semantic models.",
      "Automate previously manual monthly reporting through scheduled, orchestrated pipelines — reducing manual effort and improving refresh cadence.",
      "Publish interactive Power BI dashboards (HR attrition, payroll, education performance) with DAX measures, KPI cards and drill-down analysis.",
      "Architected a large-scale Budget Management System integrating SAP financial data using Laravel, Livewire and PostgreSQL.",
    ],
    tags: ["Microsoft Fabric", "PySpark", "Power BI", "Laravel", "PostgreSQL"],
  },
  {
    period: "Mar 2024 — Dec 2025",
    role: "Associate Statistical Programmer",
    org: "Clindata Pvt Ltd",
    bullets: [
      "Performed exploratory data analysis and hypothesis testing to support clinical study results.",
      "Applied statistical models including linear and mixed models to analyze efficacy and safety data.",
      "Wrote clean SAS and SQL code following industry best practices, collaborating with statisticians and data managers on accuracy and regulatory compliance.",
    ],
    tags: ["SAS", "SQL", "Statistical Modeling", "EDA"],
  },
  {
    period: "Mar 2023 — Mar 2024",
    role: "Junior Associate Statistical Programmer",
    org: "Clindata Pvt Ltd",
    bullets: [
      "Executed data cleaning, transformation and quality control across clinical databases.",
      "Queried and manipulated clinical databases using SQL, producing tables, listings and figures (TLFs) for study deliverables.",
    ],
    tags: ["SQL", "Data QC", "TLFs"],
  },
  {
    period: "Apr 2022 — Mar 2023",
    role: "Associate Software Engineer",
    org: "Zuse Technologies",
    bullets: [
      "Built modern, responsive web applications using HTML, CSS, JavaScript and Laravel.",
      "Developed cross-device interfaces and integrated backend features for efficient data handling.",
    ],
    tags: ["Laravel", "JavaScript", "PHP"],
  },
];

export type Cert = { name: string; issuer: string; done: boolean };

export const CERTS: Cert[] = [
  {
    name: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
    issuer: "Microsoft",
    done: true,
  },
  {
    name: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    issuer: "Microsoft",
    done: false,
  },
  {
    name: "R Programming: Advanced Analytics in R for Data Science",
    issuer: "Udemy",
    done: true,
  },
  { name: "R for Statistics and Data Science", issuer: "Udemy", done: true },
  { name: "Python for Beginners", issuer: "University of Moratuwa", done: true },
];
