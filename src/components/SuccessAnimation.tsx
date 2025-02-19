import { motion } from "motion/react";
import { Check } from "lucide-react";

const SuccessAnimation = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-full p-8"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-green-500 rounded-full p-2"
        >
          <Check className="w-12 h-12 text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessAnimation; 