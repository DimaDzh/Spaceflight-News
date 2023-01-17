import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

type AnimatedTextProps = {
  children: JSX.Element | React.ReactNode;
};

const AnimatedText = ({ children }: AnimatedTextProps) => {
  return (
    <motion.section
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedText;
