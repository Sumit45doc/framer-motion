import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type BaseProps = {
  addBase: (base: string) => void;
  pizza: {
    base: string;
    toppings: string[] | [];
  }
}

const Base = ({ addBase, pizza }: BaseProps) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.5, type: 'spring'
      }}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {!!pizza.base && (
        <motion.div className="next"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ stiffness: 120, type: 'spring' }}
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: '0 0 2px rgb(255,255,255)',
                boxShadow: '0 0 4px rgb(255,255,255)',
              }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;