import { motion } from 'motion/react';

export function About() {
  const skills = [
    'Market Research & Competitive Analysis',
    'Business Model Design & Product Roadmapping',
    'Growth Strategy',
    'Process Automation & AI Solution',
    'Wireframing & Prototyping'
  ];

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Me */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">ABOUT ME</h2>
            
            <div className="space-y-5 text-gray-400 text-sm leading-relaxed">
              <p>
                I am a Business & Product Development Specialist based in India, 
                with experience in strategic planning, market analysis, and leveraging 
                AI and automation to build scalable business solutions.
              </p>

              <p>
                With a strong background in market research, strategic planning, and competitive analysis, 
                I support founders and leadership teams in identifying growth opportunities, refining value 
                propositions, and achieving product-market fit. My work is driven by data, customer insights, 
                and a clear understanding of market dynamics.
              </p>

              <p>
                My consulting approach combines business strategy, data-driven analysis, and technology-enabled 
                execution. I work closely with startup founders, product teams, and cross-functional stakeholders 
                to design growth strategies, define product roadmaps, and align business objectives with user 
                needs and market demand—ensuring long-term scalability and impact.
              </p>
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">SKILLS</h3>
            
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="bg-[#1A1A1A] rounded-lg p-4 border border-white/5 hover:border-[#D4FF00]/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#D4FF00] text-lg">•</span>
                    <span className="text-sm text-gray-300">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}