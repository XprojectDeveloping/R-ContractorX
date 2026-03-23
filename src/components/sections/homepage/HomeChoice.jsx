import "../../../styles/homepage/_homepage_choice.scss";
function HomeChoice({ choice, markData }) {
  return (
    <>
      <div className="choice">
        <div className="choice-container">
          <div className="choice-img">
            <img src={choice?.choiceImg1} alt={choice?.choiceAlt} />
          </div>

          <div className="choice-title">
            <span>{choice?.choiceTitleUp}</span>
            <h3>{choice?.choiceTitleBottom1}</h3>
            <p>{choice?.choiceText1}</p>
            <ul>
              {markData &&
                markData.map((item) => {
                  return (
                    <li key={item?.id}>
                      <img src={item?.ico} alt={item?.alt} />
                      {item?.text}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="choice-container">
          <div className="choice-title">
            <h3>{choice?.choiceTitleBottom2}</h3>
            <p>{choice?.choiceText2}</p>

            <div className="choice-num">
              <div className="num">
                <p className="top">
                  <span>{"+"}</span>
                  {"350"}
                </p>
                <span className="up">{"Successful Projects"}</span>
              </div>
              <div className="num">
                <p className="top">
                  {"100"} <span>{"%"}</span>
                </p>
                <span className="up">{"Client Satisfaction"}</span>
              </div>
            </div>
          </div>
          <div className="choice-img">
            <img src={choice?.choiceImg2} alt={choice?.choiceAlt} />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeChoice;
