import { Helmet } from "react-helmet-async";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import AboutHome from "../components/sections/about/AboutHome";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
import { motion } from "framer-motion";
function About() {
  const { data } = useGlobalFetch();
  return (
    <main>
      <Helmet>
        <title>{data?.metaData?.about?.title}</title>
        <meta name="description" content={data?.metaData?.about?.description} />
        <meta name="keywords" content={data?.metaData?.about.keywords} />
        <meta name="author" content={data?.metaData?.about?.author} />
        <meta name="robots" content={data?.metaData?.about?.robots} />
        <meta
          property="og:title"
          content={data?.metaData?.about?.["og:title"]}
        />
        <meta
          property="og:description"
          content={data?.metaData?.about?.["og:description"]}
        />
        <meta property="og:type" content={data?.metaData?.about?.["og:type"]} />
        <meta property="og:url" content={data?.metaData?.about?.["og:url"]} />
        <meta
          property="og:image"
          content={data?.metaData?.about?.["og:image"]}
        />
        <meta
          property="og:site_name"
          content={data?.metaData?.about?.["og:site_name"]}
        />
        <meta
          property="og:locale"
          content={data?.metaData?.about?.["og:locale"]}
        />
        <meta
          property="twitter:card"
          content={data?.metaData?.about?.["twitter:card"]}
        />
        <meta
          property="twitter:title"
          content={data?.metaData?.about?.["twitter:title"]}
        />
        <meta
          property="twitter:description"
          content={data?.metaData?.about?.["twitter:description"]}
        />
        <meta
          property="twitter:image"
          content={data?.metaData?.about?.["twitter:image"]}
        />
        <link rel="canonical" href={data?.metaData?.about?.canonical} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <section>
          <MaxWidth>
            {data?.mainAbout && (
              <AboutHome
                img={data?.mainAbout?.aboutImg}
                alt={data?.mainAbout?.aboutAlt}
                title={data?.mainAbout?.aboutTitleBottom}
                text={data?.mainAbout.aboutText2}
              />
            )}
          </MaxWidth>
        </section>
      </motion.div>
    </main>
  );
}
export default About;
