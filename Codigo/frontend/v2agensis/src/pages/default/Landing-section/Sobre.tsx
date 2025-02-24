import { motion } from "motion/react";
import { HelpCircle, Eye } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-green-50 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">Sobre Nós</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            className="relative bg-white p-8 rounded-xl shadow-lg"
          >
            <HelpCircle className="absolute top-4 right-4 text-gray-500" />
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Nossa Missão</h3>
            <p className="text-gray-700 leading-relaxed">
              Transformamos sua presença digital através de estratégias inovadoras de marketing,
              impulsionando seu negócio para alcançar novos patamares de sucesso.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            className="relative bg-white p-8 rounded-xl shadow-lg"
          >
            <Eye className="absolute top-4 right-4 text-gray-500" />
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Nossa Visão</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser referência em soluções criativas de marketing digital,
              conectando marcas aos seus públicos de forma autêntica e impactante.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Sobre
