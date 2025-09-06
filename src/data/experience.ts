import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    company: "Vivid Seats",
    role: "Software Engineer Intern",
    period: "Jan 2025 – Aug 2025",
    location: "Chicago, IL",
    highlights: [
      "Developed high-throughput data querying engine with Java, processing 30M+ records with ~100ms response times",
      "Rearchitected Python microservice with event-driven model, achieving 400% speed increase",
      "Built Node.js REST API with multi-tier caching for $5M soccer marketplace"
    ],
    skills: ["Java", "Python", "Node.js", "REST API", "Microservices"]
  },
  {
    company: "Deephaven Data Labs",
    role: "Software Engineer Intern",
    period: "Sept 2024 – Dec 2024",
    location: "Minneapolis, MN",
    highlights: [
      "Engineered Kafka streaming architecture handling 10B+ values in 500ms",
      "Added adaptive view recomposition algorithms enabling ~100ms plot switching for 70M+ points"
    ],
    skills: ["Kafka", "Node.js", "Java", "Streaming", "Algorithms"]
  },
  {
    company: "Deephaven Data Labs",
    role: "Fullstack Software Engineer Intern",
    period: "May 2024 – Aug 2024",
    location: "Minneapolis, MN",
    highlights: [
      "Optimized Java Partition Table API, accelerating queries by 40%",
      "Built hydration-aware connection layer achieving 0% desync across live-feed visualizations"
    ],
    skills: ["Java", "React.js", "Python", "API Design"]
  },
  {
    company: "Ford Motor Company",
    role: "Systems Software Developer Intern",
    period: "Sept 2023 – Dec 2023",
    location: "Toronto, ON",
    highlights: [
      "Developed data analytics platform enabling custom dashboards from 1.8M+ metrics",
      "Enhanced observability by automating build-telemetry correlation, reducing traceability faults by 95%"
    ],
    skills: ["Python", "Next.js", "Analytics", "Observability"]
  },
  {
    company: "Deep Trekker Robotics",
    role: "Software Developer Intern",
    period: "Jan 2023 – Apr 2023",
    location: "Waterloo, ON",
    highlights: [
      "Built real-time SLAM robot mapping system with WebSocket streaming",
      "Led development of 15+ React.js SDK components used by 90% of users"
    ],
    skills: ["C++", "Node.js", "React.js", "WebSocket", "Robotics"]
  }
];