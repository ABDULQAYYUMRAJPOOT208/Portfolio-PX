"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Brain,
  Zap,
  Award,
  Calendar,
  MapPin,
  Download,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [showAllProjects, setShowAllProjects] = useState(false);

  const allProjects = [
    {
      title: "Zero Trust AI Car Price Prediction",
      description:
        "Zero trust architecture for secure AI-driven car price prediction using machine learning. MFA, encryption, and real-time monitoring, Protection from Adversarial attack.",
      image: "/zero-trust-ai-car-price.png?height=200&width=300",
      technologies: [
        "Next",
        "NextAuth",
        "Python",
        "TensorFlow",
        "Mongoose",
        "MFA",
        "Encryption",
        "Information Security",
      ],
      github:
        "https://github.com/ABDULQAYYUMRAJPOOT208/AI-Zero-Turst-Car-Price.git",
      demo: "https://ai-zero-turst-car-price.vercel.app/",
    },
    {
      title: "Px Examination App",
      description: "Conduct your online exams with cheating free environment",
      image: "/px-exam.png?height=200&width=300",
      technologies: ["Next ts", "Python", "MongoDB"],
      github: "https://github.com/ABDULQAYYUMRAJPOOT208/px-exam-app.git",
      demo: "https://px-exam-app.vercel.app/",
    },
    {
      title: "Shop It ( Frontend Only)",
      description:
        "E-Commerce platform with a modern UI, product management, and user authentication.",
      image: "/shop-it.png?height=200&width=300",
      technologies: ["React", "JavaScript", "Redux", "Tailwind CSS"],
      github: "https://github.com/ABDULQAYYUMRAJPOOT208/SE_Full_Stack.git",
      demo: "https://ecommerceseproject.vercel.app/",
    },
    // ⬇️ Add more projects here
    {
      title: "Weather_App_ETL_PowerBI",
      description:
        "ETL pipeline for weather data with Power BI dashboard integration with SQL.",
      image: "/weather.png?height=200&width=300",
      technologies: ["React", "SQL", "Power BI", "ETL"],
      github:
        "https://github.com/ABDULQAYYUMRAJPOOT208/Weather_App_ETL_PowerBI.git",
      demo: "https://www.linkedin.com/posts/abdul-qayyum-rajpoot-aa24bb290_powerbi-elt-react-activity-7193699855049863168-aCmb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaNu1oBjFBjXj9VgJXXZEzkKdOXpAKRRlM",
    },
    {
      title: "Cli Excel Cpp ",
      description:
        "Clone of Excel in C++ with CLI interface, supporting basic operations like addition, subtraction, multiplication, and division and more.",
      image: "/excel.png?height=200&width=300",
      technologies: ["C++", "CLI"],
      github: "https://github.com/ABDULQAYYUMRAJPOOT208/Cli_Excel_Cpp.git",
      demo: "https://www.linkedin.com/posts/abdul-qayyum-rajpoot-aa24bb290_dsaminiproject-cliexcel-activity-7153283381944893440-ZQ_8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaNu1oBjFBjXj9VgJXXZEzkKdOXpAKRRlM",
    },
    {
      title: "Dos Shell With Notepad In Cpp",
      description:
        "Clone of Dos shell supporting all native functionalities of Dos shell with Notepad in C++ with CLI interface, supporting basic text editing operations.",
      image: "/dos.png?height=200&width=300",
      technologies: ["C++", "CLI"],
      github:
        "https://github.com/ABDULQAYYUMRAJPOOT208/Dos_Shell_With_NotePade_In_Cpp.git",
      demo: "https://www.linkedin.com/posts/abdul-qayyum-rajpoot-aa24bb290_excited-to-share-the-completion-of-my-dos-activity-7153284624649990144-3Nbu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaNu1oBjFBjXj9VgJXXZEzkKdOXpAKRRlM",
    },
    {
      title: "University Lms C#",
      description: "University LMS in C# with all native functionalities.",
      image: "/student.png?height=200&width=300",
      technologies: ["C#", "ASP.NET", "SQL Server"],
      github:
        "https://github.com/ABDULQAYYUMRAJPOOT208/C_Sharp_Lms_limited.git",
      demo: "https://github.com/ABDULQAYYUMRAJPOOT208/C_Sharp_Lms_limited.git",
    },
    {
      title: "Mini Os In C & python",
      description:
        "Mini operating system developed in C and Python with basic functionalities.",
      image: "/mini-os.png?height=200&width=300",
      technologies: ["C", "Python"],
      github: "https://youtu.be/_aT3sl1RFik?feature=shared",
      demo: "https://youtu.be/_aT3sl1RFik?feature=shared",
    },
    {
      title: "Bank Application in C#",
      description:
        "Bank application developed in C# with basic functionalities, All validations.",
      image: "/gui-bank.png?height=200&width=300",
      technologies: ["C#", "ASP.NET"],
      github: "https://github.com/ABDULQAYYUMRAJPOOT208/GUI-Bank-App.git",
      demo: "https://youtu.be/xa-dp1CaUEE?si=3nUtQlrvGpNQvgCO",
    },
  ];

  const displayedProjects = showAllProjects
    ? allProjects
    : allProjects.slice(0, 3);

  const achievements = [
    {
      label: "SQL Advanced Certification",
      url: "https://www.hackerrank.com/certificates/5efd45ce725f", // replace with actual link
    },
    {
      label: "One year of Experience as Teacher Assistant",
      url: "https://www.linkedin.com/posts/abdul-qayyum-rajpoot-aa24bb290_teachingassistant-programmingfundamentals-activity-7272587670462083072-cdnc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaNu1oBjFBjXj9VgJXXZEzkKdOXpAKRRlM", // replace with actual link
    },
    {
      label: "Advance Software Engineer at Walmart",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_7sXmwznDnHj8LfRmK_1725703910076_completion_certificate.pdf", // replace with actual link
    },
    {
      label: "Python Certification",
      url: "https://www.linkedin.com/posts/abdul-qayyum-rajpoot-aa24bb290_pythoncertification-activity-7153285548072222720-AE_D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaNu1oBjFBjXj9VgJXXZEzkKdOXpAKRRlM", // replace with actual link
    },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/ABDUL_QAYYUM_CV.pdf"; // replace with your actual resume path
    link.download = "AbdulQayyum_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-x-hidden"
    >
      {/* Animated Background */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-amber-900/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-red-900/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
            >
              ABDUL QAYYUM
              <div className="text-red-400 text-sm">Software Engineer</div>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: "#ef4444" }}
                  className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div style={{ y: textY }} className="text-center z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-full animate-pulse" />
              <Image
                src="/picture.jpg?height=192&width=192"
                alt="Profile"
                width={192}
                height={192}
                className="relative z-10 rounded-full border-4 border-red-500/50"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
              ABDUL QAYYUM
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Computer Scientist & Software Engineer
            <br />
            <span className="text-red-400">Building the future with code</span>
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/ABDULQAYYUMRAJPOOT208",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/abdul-qayyum-rajpoot-aa24bb290/",
                },
                {
                  icon: Mail,
                  href: "mailto:abdulqayyum04144@gmail.com",
                  downloadOnClick: true,
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-red-900/20 border border-red-500/30 rounded-full text-red-400 hover:bg-red-800/30 transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-red-400/30"
        >
          <Code className="h-12 w-12" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 text-red-400/30"
        >
          <Database className="h-12 w-12" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate Computer Scientist with 2+ years of experience in
              full-stack development, AI (machine learning, deep learning,
              computer vision), and cybersecurity learner. I love solving
              complex problems and building scalable solutions that make a
              difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-red-900/20 to-black border-red-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-6">
                    Skills & Expertise
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: Code,
                        label: "Frontend",
                        skills:
                          "React, Next.js, TypeScript, JavaScript, .Net ...",
                      },
                      {
                        icon: Server,
                        label: "Backend",
                        skills: "Node.js, Python, ExpressJs ...",
                      },
                      {
                        icon: Database,
                        label: "Database",
                        skills: "SQL , No-Sql , MongoDB",
                      },
                      {
                        icon: Brain,
                        label: "AI/ML/DP/CV",
                        skills: "TensorFlow, PyTorch",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="p-4 bg-black/50 rounded-lg border border-red-500/20"
                      >
                        <item.icon className="h-8 w-8 text-red-400 mb-2" />
                        <h4 className="font-semibold text-white mb-1">
                          {item.label}
                        </h4>
                        <p className="text-sm text-gray-400">{item.skills}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <Image
                  src="/skills.jpg?height=400&width=400"
                  alt="Working"
                  width={400}
                  height={400}
                  className="rounded-lg border border-red-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {[
                  { number: "20+", label: "Projects" },
                  { number: "2+", label: "Years Exp" },
                  { number: "100%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-red-900/20 rounded-lg border border-red-500/30"
                  >
                    <div className="text-2xl font-bold text-red-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "MERN STACK DEVELOPER",
                company: "Webevis Technologies",
                period: "JUNE to still Doing",
                location: "On-site",
                description:
                  "I am working on large and scalable banking applications including crypto-trading and crypto-betting apps",
                technologies: [
                  "React js",
                  "Node js",
                  "Next js",
                  "MongoDB",
                  "Tailwind css",
                  "TypeScript",
                  "SQL",
                  "AWS"
                ],
                link:"https://webevis.com/"
              },
              {
                title: "Advanced Software Engineer",
                company: "Walmart Global Tech",
                period: "Over the period of August 2024 to September 2024",
                location: "Remote",
                description:
                  "I have completed practical tasks in: Advanced Data Structures Software Architecture Relational Database Design Data Munging",
                technologies: [
                  "React",
                  "Node.js",
                  "Python",
                  "Domain Model",
                  "Class Responsiblity Collaborators",
                  "TypeScript",
                  "SQL",
                ],
                link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_7sXmwznDnHj8LfRmK_1725703910076_completion_certificate.pdf",
              },
              {
                title: "Software Engineer",
                company: "JP Morgan Chase & Co",
                period: "Over the period of August 2024",
                location: "Remote",
                description:
                  "I have completed practical tasks in: Interface with a stock price data feed Use JPMorgan Chase & Co. frameworks and tools Display data visually for traders Bonus task: Open source contribution",
                technologies: ["React.js", "Python", "PowerBI", "MongoDB"],
                link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_7sXmwznDnHj8LfRmK_1725074609039_completion_certificate.pdf",
              },
              {
                title: "Software Developer Intern",
                company: "CodSoft",
                period: "2024",
                location: "Remote",
                description:
                  "Developed a real-time data processing Software using C++ and Python.",
                technologies: [
                  "C++",
                  "Python",
                ],
                link:"https://www.linkedin.com/posts/abdul-qayyum-rajpoot-aa24bb290_excited-to-share-that-ive-officially-accepted-activity-7153286705586880513-szOF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaNu1oBjFBjXj9VgJXXZEzkKdOXpAKRRlM"
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-red-900/20 to-black border-red-500/30 hover:border-red-400/50 transition-colors">
                  <CardContent className="p-8">
                    <a
                      className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                      href={job.link || "#"}
                      target={job.link ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {job.title}
                        </h3>
                        <p className="text-red-400 text-lg font-semibold">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-400 mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {job.period}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                      </div>
                    </a>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-red-500/30 text-red-400 hover:bg-red-900/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
            {
              // [
              //   {
              //     title: "Zero Trust AI Car Price Prediction",
              //     description:
              //       "Zero trust architecture for secure AI-driven car price prediction using machine learning. MFA, encryption, and real-time monitoring, Protection from Adversarial attack.",
              //     image: "/zero-trust-ai-car-price.png?height=200&width=300",
              //     technologies: [
              //       "Next",
              //       "NextAuth",
              //       "Python",
              //       "TensorFlow",
              //       "Mongoose",
              //       "MFA",
              //       "Encryption",
              //       "Information Security",
              //     ],
              //     github:
              //       "https://github.com/ABDULQAYYUMRAJPOOT208/AI-Zero-Turst-Car-Price.git",
              //     demo: "https://ai-zero-turst-car-price.vercel.app/",
              //   },
              //   {
              //     title: "Px Examination App",
              //     description:
              //       "Conduct your online exams with cheating free environment",
              //     image: "/px-exam.png?height=200&width=300",
              //     technologies: ["Next ts", "Python", "MongoDB"],
              //     github:
              //       "https://github.com/ABDULQAYYUMRAJPOOT208/px-exam-app.git",
              //     demo: "https://px-exam-app.vercel.app/",
              //   },
              //   {
              //     title: "Shop It ( Frontend Only)",
              //     description:
              //       "E-Commerce platform with a modern UI, product management, and user authentication.",
              //     image: "/shop-it.png?height=200&width=300",
              //     technologies: ["React", "JavaScript", "Redux", "Tailwind CSS"],
              //     github:
              //       "https://github.com/ABDULQAYYUMRAJPOOT208/SE_Full_Stack.git",
              //     demo: "https://ecommerceseproject.vercel.app/",
              //   },
              // ]
              displayedProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-gradient-to-br from-red-900/20 to-black border-red-500/30 hover:border-red-400/50 transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-red-500/30 text-red-400 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-500/30 text-red-400 hover:bg-red-900/20"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className="bg-red-600 hover:bg-red-700 text-white"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            }
          </div>
        </div>
        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-red-500/30 text-red-400 hover:bg-red-900/20"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? "View Less Projects" : "View More Projects"}
            {/* View More Projects */}
          </Button>
          <div>
            For more and updated projects, check out my{" "}
            <a
              href="https://www.linkedin.com/in/abdul-qayyum-rajpoot-aa24bb290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline mx-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ABDULQAYYUMRAJPOOT208"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Current Focus
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-red-900/20 to-black border-red-500/30">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Zap className="h-8 w-8 text-red-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">
                      What I'm Working On
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-black/50 rounded-lg border border-red-500/20">
                      <h4 className="font-semibold text-red-400 mb-2">
                        MindScript
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Building a hardware and software toolkit for realtime
                        monitoring and detecting different kind of attacks from
                        Brain Signals (EEG)
                      </p>
                    </div>
                    <div className="p-4 bg-black/50 rounded-lg border border-red-500/20">
                      <h4 className="font-semibold text-red-400 mb-2">
                        Open Source Contributions
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Contributing to some Open Source ecosystem and
                        maintaining several projects.
                      </p>
                    </div>
                    <div className="p-4 bg-black/50 rounded-lg border border-red-500/20">
                      <h4 className="font-semibold text-red-400 mb-2">
                        Soft Skills
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Working on improving my soft skills, including
                        communication, teamwork, and leadership.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-center">
                <Award className="h-16 w-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Recent Achievements
                </h3>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.a
                    key={index}
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-red-900/20 rounded-lg border border-red-500/30 hover:bg-red-800/30 transition-colors "
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                    <span className="text-gray-300 ">
                      {achievement.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "abdulqayyum04144@gmail.com",
                  href: "mailto:abdulqayyum04144@example.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "/in/abdul-qayyum-rajpoot-aa24bb290/",
                  href: "https://www.linkedin.com/in/abdul-qayyum-rajpoot-aa24bb290/",
                },
                { icon: Github, label: "GitHub", value: "@abdulqayyum04144", href: "https://github.com/ABDULQAYYUMRAJPOOT208" },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-gradient-to-br from-red-900/20 to-black border border-red-500/30 rounded-lg hover:border-red-400/50 transition-colors block"
                >
                  <contact.icon className="h-8 w-8 text-red-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-gray-400 text-sm">{contact.value}</p>
                </motion.a>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 px-12 py-4 text-lg"
                onClick={() => window.location.href = "mailto:abdulqayyum04144@gmail.com"}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-red-900/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Abdul Qayyum. Built with Next.js and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
