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
              {data.mainBlog && (
                <BlogHome
                  title={data?.mainBlog?.blogTitleBottom}
                  text={data?.mainBlog?.blogText2}
                  img={data?.mainBlog?.blogImg}
                />
              )}
            </MaxWidth>
          </section>
        </motion.div>
      </main>
    </>
  );
}
export default Bloq;
