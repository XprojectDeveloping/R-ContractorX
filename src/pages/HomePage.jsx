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
      <Helmet>
        <title>{data?.metaData?.home?.title}</title>
        <meta name="description" content={data?.metaData?.home?.description} />
        <meta name="keywords" content={data?.metaData?.home.keywords} />
        <meta name="author" content={data?.metaData?.home?.author} />
        <meta name="robots" content={data?.metaData?.home?.robots} />
        <meta
          property="og:title"
          content={data?.metaData?.home?.["og:title"]}
        />
        <meta
          property="og:description"
          content={data?.metaData?.home?.["og:description"]}
        />
        <meta property="og:type" content={data?.metaData?.home?.["og:type"]} />
        <meta property="og:url" content={data?.metaData?.home?.["og:url"]} />
        <meta
          property="og:image"
          content={data?.metaData?.home?.["og:image"]}
        />
        <meta
          property="og:site_name"
          content={data?.metaData?.home?.["og:site_name"]}
        />
        <meta
          property="og:locale"
          content={data?.metaData?.home?.["og:locale"]}
        />

        <meta
          property="twitter:card"
          content={data?.metaData?.home?.["twitter:card"]}
        />
        <meta
          property="twitter:title"
          content={data?.metaData?.home?.["twitter:title"]}
        />
        <meta
          property="twitter:description"
          content={data?.metaData?.home?.["twitter:description"]}
        />
        <meta
          property="twitter:image"
          content={data?.metaData?.home?.["twitter:image"]}
        />
        <link rel="canonical" href={data?.metaData?.home?.canonical} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <section>
          {data.mainBanner && (
            <HomeBanner
              title={data?.mainBanner?.bannerTitle}
              text={data?.mainBanner?.bannerText}
              buttonText1={data?.mainBanner?.bannerBtn1}
              buttonText2={data?.mainBanner?.bannerBtn2}
              btnTo1={data?.mainBanner?.btnTo1}
              btnTo2={data?.mainBanner?.btnTo2}
            />
          )}
        </section>
        <section>
          <MaxWidth>
            {data.mainAbout && (
              <HomeAbout
                img={data?.mainAbout?.aboutImg}
                title1={data?.mainAbout?.aboutTitleUp}
                title2={data?.mainAbout?.aboutTitleBottom}
                text={data?.mainAbout?.aboutText}
                buttonText={data?.mainAbout?.aboutBtn}
                btnTo={data?.mainAbout?.btnTo}
              />
            )}
          </MaxWidth>
        </section>
        <section>
          <MaxWidth>
            {data?.mainServices && (
              <HomeServices
                title={data?.mainServices?.servicesTitleUp}
                title2={data?.mainServices?.servicesTitleBottom}
                btnText1={data?.mainServices?.servicesBtn1}
                btnText2={data?.mainServices?.servicesBtn2}
                dataCard={data?.mainServices?.servicesCards}
                btnTo={data?.mainServices?.btnTo}
              />
            )}
          </MaxWidth>
        </section>
        <section>
          {data?.mainCover && (
            <HomeCover
              bgImg={data?.mainCover?.coverImg}
              title1={data?.mainCover?.coverTitle1}
              title2={data?.mainCover?.coverTitle2}
              text1={data?.mainCover?.coverText1}
              text2={data?.mainCover?.coverText2}
              btnText1={data?.mainCover?.coverBtn1}
              btnText2={data?.mainCover?.coverBtn2}
              btnTo={data?.mainCover?.btnTo}
            ></HomeCover>
          )}
        </section>

        <section>
          <MaxWidth>
            {data?.mainChoice && (
              <HomeChoice
                imgLeft={data?.mainChoice?.choiceImg1}
                altLeft={data?.mainChoice?.choiceAlt}
                title={data?.mainChoice?.choiceTitleUp}
                title2Left={data?.mainChoice?.choiceTitleBottom1}
                textLeft={data?.mainChoice?.choiceText1}
                markData={data?.mainChoice?.choiceList1}
                imgRigth={data?.mainChoice?.choiceImg2}
                altRigth={data?.mainChoice?.choiceAlt}
                title2Rigth={data?.mainChoice?.choiceTitleBottom2}
                textRigth={data?.mainChoice?.choiceText2}
              />
            )}
          </MaxWidth>
        </section>

        <section>
          <MaxWidth>
            {data?.mainProjects && (
              <HomeProjects
                title={data?.mainProjects?.projectsTitleUp}
                title2={data?.mainProjects?.projectsTitleBottom}
                btnText1={data?.mainProjects?.projectsBtn1}
                btnText2={data?.mainProjects?.projectsBtn2}
                dataCard={data?.mainProjects?.projectsCards}
                btnTo={data?.mainProjects?.btnTo}
              />
            )}
          </MaxWidth>
        </section>

        <section>
          <MaxWidth>
            {data?.mainReviews && (
              <HomeReviews
                title={data?.mainReviews?.reviewsTitleUp}
                title2={data?.mainReviews?.reviewsTitleBottom}
                dataCard={data?.mainReviews?.reviewsCards}
              />
            )}
          </MaxWidth>
        </section>

        <section>
          <MaxWidth>
            {data?.mainBlog && (
              <HomeBlog
                title={data?.mainBlog?.blogTitleUp}
                title2={data?.mainBlog?.blogTitleBottom}
                btnText={data?.mainBlog?.blogBtn}
                img={data?.mainBlog?.blogImg}
                alt={data?.mainBlog?.blogAlt}
                text={data?.mainBlog?.blogText}
                dataCard={data?.mainBlog?.blogCards}
                btnTo={data?.mainBlog?.btnTo}
              />
            )}
          </MaxWidth>
        </section>
      </motion.div>
    </main>
  );
}
export default HomePage;
