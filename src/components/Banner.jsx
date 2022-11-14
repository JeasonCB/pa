import { motion } from 'framer-motion'

const Banner2 = () => {
  function toggle () {
    // arreglar con next router ⬇
    setTimeout(() => {
      window.location.href = '/404'
    }, 500)
    clearTimeout(toggle)
  }
  return (
    <>
      <div className='grid place-content-center bg-orange-600 h-screen w-full select-none'>
        <motion.div onTap={toggle} className='portrait:h-[45vh] portrait:w-[45vh] landscape:h-[70vh] landscape:w-[70vh] landscape:md:h-[65vh] landscape:md:w-[65vh] bg-slate-50 cursor-pointer relative mb-14 md:mb-0 text-center select-none rounded-[12%]'
          whileTap={{
            scale: [1.01, 1.1],
            rotate: [0, -360],
            borderRadius: ['12%', '50%'],
            transition: { duration: 1.2 }
          }}
        >
          <span> Hola </span>
        </motion.div>
      </div>

    </>
  )
}
export default Banner2
