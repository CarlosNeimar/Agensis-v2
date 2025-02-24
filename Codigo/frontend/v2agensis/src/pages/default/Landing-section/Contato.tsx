import { motion } from "motion/react";
import { Github, Mail, Phone } from 'lucide-react';
import Me from '../../../assets/me.jpg';

const Contato = () => {
  return (

    <div className="min-h-screen bg-[#0A192F] text-white py-20">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-4 text-center"
    >
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="mb-12"
      >
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
          <img 
            src={Me} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <h2 className="text-4xl font-bold mb-12">Desenvolvedor Full-stack</h2>
      <div className="flex flex-col items-center space-y-8">
        <motion.a 
          href="https://github.com/CarlosNeimar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 hover:text-orange-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={24} />
          <span className="text-xl">Github</span>
        </motion.a>

        <motion.a 
          href="mailto:carlos.areas@pucminas.br"
          className="flex items-center space-x-3 hover:text-green-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={24} />
          <span className="text-xl">Email</span>
        </motion.a>

        <motion.a 
          href="https://wa.me/553184510778"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 hover:text-orange-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={24} />
          <span className="text-xl">WhatsApp</span>
        </motion.a>
      </div>
    </motion.div>
  </div>

  )
}

export default Contato
