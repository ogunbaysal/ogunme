'use client';

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 h-14 flex justify-between items-center bg-accent border border-border rounded-2xl max-w-3xl mx-auto mt-4">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background font-bold text-sm">
              OB
            </div>
            <span className="text-xl font-medium hidden md:block">Ogün Baysal</span>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#about" className="hover:text-muted transition-colors px-3 py-2">
            About
          </a>
          <Link href="/blog" className="hover:text-muted transition-colors px-3 py-2">
            Blog
          </Link>
          <a href="#contact" className="hover:text-muted transition-colors px-3 py-2">
            Contact
          </a>
          <motion.a 
            href="https://github.com/ogunbaysal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-foreground text-background px-4 py-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-2 text-sm ml-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            GitHub
          </motion.a>
          <ThemeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <div className="min-h-[calc(100vh-4.5rem)] flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center">
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Computer Engineer
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-muted mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              & Software Developer
            </motion.h2>
            <motion.p 
              className="text-xl text-muted max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about exploring technology, building cool projects, and sharing knowledge with the developer community. 
              Always learning something new and documenting the journey.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="#contact" 
              className="bg-foreground text-background px-6 py-3 rounded-lg hover:bg-muted transition-colors font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#about" 
              className="border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          {/* Main intro card */}
          <motion.div 
            className="bg-card border border-border rounded-3xl p-8 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl mx-auto flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                    OB
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </motion.div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                                     Hi! I&apos;m Ogün Baysal 👋
                </motion.h3>
                <motion.p 
                  className="text-lg text-muted leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  A passionate Computer Engineer who loves exploring the endless possibilities of technology. 
                  I enjoy building projects, experimenting with new frameworks, and sharing my experiences through code and writing.
                </motion.p>
                <motion.p 
                  className="text-lg text-muted leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  My journey spans full-stack development, system architecture, and everything in between. 
                  I&apos;m constantly learning, tinkering with side projects, and documenting my discoveries along the way.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-20 px-4 bg-accent/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Connect With Me</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a 
              href="https://github.com/ogunbaysal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 border border-border rounded-xl hover:bg-accent transition-colors group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-8 h-8 mb-4 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-muted">Check out my projects and contributions</p>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/ogunbaysal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 border border-border rounded-xl hover:bg-accent transition-colors group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-8 h-8 mb-4 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted">Connect with me professionally</p>
            </motion.a>
            <motion.a 
              href="mailto:info@ogun.me" 
              className="p-6 border border-border rounded-xl hover:bg-accent transition-colors group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-8 h-8 mb-4 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted">Send me a message</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-muted mb-12">
            I&apos;m always happy to connect with fellow developers, share knowledge, 
            or just have a chat about technology and programming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="mailto:info@ogun.me" 
              className="bg-foreground text-background px-8 py-4 rounded-lg hover:bg-muted transition-colors font-medium flex items-center gap-2 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Send Email
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/ogunbaysal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-border px-8 py-4 rounded-lg hover:bg-accent transition-colors font-medium flex items-center gap-2 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted">
            © 2025 Ogün Baysal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
