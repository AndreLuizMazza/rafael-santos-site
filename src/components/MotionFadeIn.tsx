
import { motion } from "framer-motion";

export default function MotionFadeIn({ children, delay = 0 }:{ children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6, delay }}
    >
      {children}
    </motion.div>
  );
}
