import { useState } from "react";
import classnames from "classnames";

import { faqs } from "../../core/constants/faqs";

const FAQ = () => {
  const [showMore, setShowMore] = useState(false);
  const [show, setShow] = useState(false);
  const [indexNum, setIndexNum] = useState<number>();

  window.addEventListener("click", () => {
    setShow(false);
  });

  return (
    <section className="faq">
      <div className="faq-header">
        <h1 className="faq-header__txt">Frequently Asked Questions</h1>
      </div>
      <div className="faq-questions">
        {faqs.slice(0, 4).map((quest, index: number) => (
          <div
            key={quest.id}
            onClick={(e) => {
              e.stopPropagation();
              setShow(!show);
              setIndexNum(index);
            }}
            className={classnames({
              "faq-questions-entity": true,
              "faq-questions-entity__show": show && index === indexNum,
            })}>
            <p className="faq-questions-entity__title">{quest.title}</p>
            <p className="faq-questions-entity__desc">{quest.desc}</p>
          </div>
        ))}
        {showMore && (
          <>
            {faqs.slice(4).map((quest, index) => (
              <div
                key={quest.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(!show);
                  setIndexNum(index + 4);
                }}
                className={classnames({
                  "faq-questions-entity": true,
                  "faq-questions-entity__show": show && index + 4 === indexNum,
                })}>
                {quest.id === 10 ? (
                  <p className="faq-questions-entity__title">
                    {quest.title.split(" ").slice(0, 7).join(" ")}
                    <br />
                    {quest.title.split(" ").slice(7).join(" ")}
                  </p>
                ) : (
                  <p className="faq-questions-entity__title">{quest.title}</p>
                )}

                {quest.id === 12 ? (
                  <p className="faq-questions-entity__desc">
                    {quest.desc.split(" ").slice(0, 4).join(" ")}{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/BoraRenovations"
                      style={{
                        color: "#323232",
                        textDecoration: "underline",
                      }}>
                      {quest.desc.split(" ").slice(4, 5).join(" ")}
                    </a>{" "}
                    {quest.desc.split(" ").slice(5, 6).join(" ")}{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://instagram.com/bora_renovations"
                      style={{
                        color: "#323232",
                        textDecoration: "underline",
                      }}>
                      {quest.desc.split(" ").slice(6, 7).join(" ")}
                    </a>{" "}
                    {quest.desc.split(" ").slice(7).join(" ")}
                  </p>
                ) : quest.id === 11 ? (
                  <p className="faq-questions-entity__desc">
                    {quest.desc.split(" ").slice(0, 11).join(" ")}{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.google.com/search?q=bora+renovation&oq=bora+&aqs=chrome.1.69i59l2j35i19i39j69i60j69i61j69i60l3.3632j0j4&sourceid=chrome&ie=UTF-8#lrd=0x89c6e39f182ef821:0xa085e036b2fe82ef,1,,,"
                      style={{
                        color: "#323232",
                        textDecoration: "underline",
                      }}>
                      {quest.desc.split(" ").slice(11, 12).join(" ")}
                    </a>{" "}
                    {quest.desc.split(" ").slice(12, 13).join(" ")}{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/BoraRenovations"
                      style={{
                        color: "#323232",
                        textDecoration: "underline",
                      }}>
                      {quest.desc.split(" ").slice(13).join(" ")}
                    </a>
                  </p>
                ) : quest.id === 8 ? (
                  <p className="faq-questions-entity__desc">
                    {quest.desc.split(" ").slice(0, 1).join(" ")}{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/BoraRenovations"
                      style={{
                        color: "#323232",
                        textDecoration: "underline",
                      }}>
                      {quest.desc.split(" ").slice(1, 2).join(" ")}
                    </a>{" "}
                    {quest.desc.split(" ").slice(2, 3).join(" ")}{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://instagram.com/bora_renovations"
                      style={{
                        color: "#323232",
                        textDecoration: "underline",
                      }}>
                      {quest.desc.split(" ").slice(3, 4).join(" ")}
                    </a>
                    {quest.desc.split(" ").slice(5).join(" ")}
                  </p>
                ) : (
                  <p className="faq-questions-entity__desc">{quest.desc}</p>
                )}
              </div>
            ))}
          </>
        )}
      </div>
      {!showMore && (
        <div onClick={() => setShowMore(true)} className="faq-wrapper">
          <button className="faq-btn-more">
            <span className="faq-btn-more__txt">See more</span>
          </button>
        </div>
      )}
      {showMore && (
        <div onClick={() => setShowMore(false)} className="faq-wrapper">
          <button className="faq-btn-more">
            <span className="faq-btn-more__txt">Show less</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQ;
