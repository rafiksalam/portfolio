import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Briefcase, GraduationCap, Award, Folder, Mail, GitHub, Linkedin, Twitter } from 'lucide-react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons


const Section = ({ children, title, className = '' }) => (
  <motion.section
    className={`py-16 ${className}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {title && (
      <motion.h2
        className="text-3xl font-bold mb-8 text-blue-300 border-b-2 border-blue-500 pb-2 inline-block"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
    )}
    {children}
  </motion.section>
);

const Card = ({ icon: Icon, title, subtitle, description }) => (
  <motion.div
    className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm"
    whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-2">
      <Icon className="text-blue-400 mr-2" size={24} />
      <h3 className="text-lg font-semibold text-blue-300">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm mb-2">{subtitle}</p>
    <p className="text-gray-300 text-sm">{description}</p>
  </motion.div>
);

const SkillBadge = ({ skill }) => (
  <motion.span
    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
  >
    {skill}
  </motion.span>
);

const SocialLink = ({ icon: Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={24} />
  </motion.a>
);

const ProfilePicture = () => (
  <motion.div
    className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img
      src="/api/placeholder/200/200"
      alt="John Doe"
      className="w-full h-full object-cover"
    />
  </motion.div>
);

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <header className="py-8 flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            John Doe
          </motion.h1>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SocialLink icon={FaGithub} href="https://github.com/johndoe" /> {/* Use FaGithub here */}
            <SocialLink icon={Linkedin} href="https://linkedin.com/in/johndoe" />
            <SocialLink icon={Twitter} href="https://twitter.com/johndoe" />
          </motion.div>
        </header>

        <Section className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <motion.h2 
              className="text-5xl font-bold mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Full-Stack Developer & UI/UX Enthusiast
            </motion.h2>
            <motion.p
              className="text-xl text-blue-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Crafting beautiful and functional web experiences
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {["React", "Node.js", "Python", "JavaScript", "TypeScript", "GraphQL", "AWS", "Docker"].map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </motion.div>
          </div>
          <ProfilePicture />
        </Section>

        <Section title="Experience & Education">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card 
              icon={Briefcase}
              title="Senior Full-Stack Developer"
              subtitle="InnovateTech Solutions | 2022 - Present"
              description="Leading development of cutting-edge web and mobile applications."
            />
            <Card 
              icon={Code}
              title="Junior Developer"
              subtitle="TechCorp Inc. | 2020 - 2022"
              description="Developed and maintained web applications using React and Node.js."
            />
            <Card 
              icon={GraduationCap}
              title="B.S. in Computer Science"
              subtitle="University of Technology | 2016 - 2020"
              description="Graduated with honors, specializing in AI and Web Technologies."
            />
            <Card 
              icon={Award}
              title="Full-Stack Web Development Bootcamp"
              subtitle="Code Academy | 2020"
              description="Intensive 12-week program focused on modern web technologies."
            />
          </div>
        </Section>

        <Section title="Featured Projects">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              icon={Folder}
              title="AI-Powered Health App"
              subtitle="Hackathon Winner | 2022"
              description="Innovative health monitoring app using machine learning algorithms."
            />
            <Card 
              icon={Folder}
              title="E-commerce Platform"
              subtitle="Personal Project"
              description="Fully functional e-commerce site with React, Node.js, and MongoDB."
            />
            <Card 
              icon={Folder}
              title="Task Management Tool"
              subtitle="Open Source Contribution"
              description="Implemented new features and fixed bugs in a popular open-source project."
            />
          </div>
        </Section>

        <Section title="Get in Touch" className="text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl mb-8">Interested in working together? Let's connect!</p>
            <motion.a
              href="mailto:john.doe@example.com"
              className="inline-flex items-center px-8 py-3 bg-blue-500 text-white rounded-full font-bold text-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </motion.a>
          </motion.div>
        </Section>
      </div>

      <motion.div
        className="fixed bottom-4 right-4 bg-blue-500 rounded-full p-2 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown className="transform rotate-180" size={24} />
      </motion.div>
    </div>
  );
};

export default HomePage;