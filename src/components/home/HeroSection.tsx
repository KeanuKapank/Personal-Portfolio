
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-2xl flex flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >

            <div className="tag tag-highlight text-label-caps rotate-tilt-ccw">
              <span>Available for Collab</span>
            </div>

            <p className="text-headline-md pt-5">
              Turning Complex Business Requirements into <span className="underline-highlight">Elegant Software</span> Solutions.
            </p>

            <p className="text-caption pt-5">
              My expertise spans across back-end development, database management, and agile methodologies, enabling me to deliver high-quality solutions that meet the unique needs of each client.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="btn btn-primary">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/services">
                <button className="btn btn-ghost">
                  Say Hi!
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}