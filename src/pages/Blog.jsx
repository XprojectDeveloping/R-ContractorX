import { Helmet } from "react-helmet-async";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import BlogHome from "../components/sections/blog/BlogHome.jsx";

import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch.jsx";
import { motion } from "framer-motion";
function Bloq() {
  const { data } = useGlobalFetch();
  return (
    <>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <section>
            <MaxWidth>
              {data.mainBlog && <BlogHome blog={data?.mainBlog} />}
            </MaxWidth>
          </section>
        </motion.div>
      </main>
    </>
  );
}
export default Bloq;
