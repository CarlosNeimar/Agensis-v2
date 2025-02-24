import { motion } from "motion/react";
import Logo from '../../../assets/LogograsndeSEMFUNDO.png';
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
}

const TypewriterText = ({ text }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

const Hello = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-white">
        <div className="flex flex-col items-center justify-center py-20 px-4 space-y-8">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-2xl"
          >
            <img src={Logo} alt="Logo" className="w-full h-auto" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-4"
          >
            <p className="text-3xl md:text-5xl font-serif italic text-orange-800">
              "<TypewriterText text="Se eu tivesse um único dólar, investiria em propaganda" />"
            </p>
            <p className="text-xl md:text-2xl text-orange-600 font-medium">
              - Henry Ford
            </p>
          </motion.div>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="mt-12 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
          >
            Comece Agora
          </motion.button>
        </div>
      </div>
  );
};

export default Hello;