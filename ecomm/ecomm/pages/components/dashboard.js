import Head from "next/head";
import Image from "next/image";


function dashboard({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      const [selectedId, setSelectedId] = useState(null)
      <AnimatePresence>

        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h2>{item.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default dashboard;
