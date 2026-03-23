import { Helmet } from "react-helmet-async";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import HomeAbout from "../components/sections/homepage/HomeAbout";
import HomeBanner from "../components/sections/homepage/HomeBanner";
import HomeBlog from "../components/sections/homepage/HomeBlog";
import HomeChoice from "../components/sections/homepage/HomeChoice";
import HomeCover from "../components/sections/homepage/HomeCover";
import HomeProjects from "../components/sections/homepage/HomeProjects";
import HomeReviews from "../components/sections/homepage/HomeReviews";
import HomeServices from "../components/sections/homepage/HomeServices";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
import { motion } from "framer-motion";
function HomePage() {
  const { data } = useGlobalFetch();
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <section>
          {data.mainBanner && <HomeBanner home={data?.mainBanner} />}
        </section>

        <section>
          <MaxWidth>
            {data.mainAbout && <HomeAbout about={data?.mainAbout} />}
          </MaxWidth>
        </section>
        
        <section>
          <MaxWidth>
            {data?.mainServices && (
              <HomeServices
                services={data?.mainServices}
                dataCard={data?.mainServices?.servicesCards}
              />
            )}
          </MaxWidth>
        </section>

        <section>
          {data?.mainCover && <HomeCover cover={data?.mainCover}></HomeCover>}
        </section>

        <section>
          <MaxWidth>
            {data?.mainChoice && (
              <HomeChoice
                choice={data?.mainChoice}
                markData={data?.mainChoice?.choiceList1}
              />
            )}
          </MaxWidth>
        </section>

        <section>
          <MaxWidth>
            {data?.mainProjects && (
              <HomeProjects
                projects={data?.mainProjects}
                dataCard={data?.mainProjects?.projectsCards}
              />
            )}
          </MaxWidth>
        </section>

        <section>
          <MaxWidth>
            {data?.mainReviews && (
              <HomeReviews
                reviews={data?.mainReviews}
                dataCard={data?.mainReviews?.reviewsCards}
              />
            )}
          </MaxWidth>
        </section>

        <section>
          <MaxWidth>
            {data?.mainBlog && (
              <HomeBlog
                blog={data?.mainBlog}
                dataCard={data?.mainBlog.blogCards}
              />
            )}
          </MaxWidth>
        </section>
      </motion.div>
    </main>
  );
}
export default HomePage;
