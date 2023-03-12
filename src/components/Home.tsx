import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: '0 0 2px rgb(255,255,255)',
            boxShadow: '0 0 4px rgb(255,255,255)',
          }}
          transition={{ duration: 0.5 }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;