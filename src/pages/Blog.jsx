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
        <Helmet>
          <title>{data?.metaData?.blog?.title}</title>
          <meta
            name="description"
            content={data?.metaData?.blog?.description}
          />
          <meta name="keywords" content={data?.metaData?.blog.keywords} />
          <meta name="author" content={data?.metaData?.blog?.author} />
          <meta name="robots" content={data?.metaData?.blog?.robots} />
          <meta
            property="og:title"
            content={data?.metaData?.blog?.["og:title"]}
          />
          <meta
            property="og:description"
            content={data?.metaData?.blog?.["og:description"]}
          />
          <meta
            property="og:type"
            content={data?.metaData?.blog?.["og:type"]}
          />
          <meta property="og:url" content={data?.metaData?.blog?.["og:url"]} />
          <meta
            property="og:image"
            content={data?.metaData?.blog?.["og:image"]}
          />
          <meta
            property="og:site_name"
            content={data?.metaData?.blog?.["og:site_name"]}
          />
          <meta
            property="og:locale"
            content={data?.metaData?.blog?.["og:locale"]}
          />
          <meta
            property="twitter:card"
            content={data?.metaData?.blog?.["twitter:card"]}
          />
          <meta
            property="twitter:title"
            content={data?.metaData?.blog?.["twitter:title"]}
          />
          <meta
            property="twitter:description"
            content={data?.metaData?.blog?.["twitter:description"]}
          />
          <meta
            property="twitter:image"
            content={data?.metaData?.blog?.["twitter:image"]}
          />
          <link rel="canonical" href={data?.metaData?.blog?.canonical} />
        </Helmet>
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
