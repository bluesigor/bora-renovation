import { useState } from "react";

const FAQ = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="faq">
      <div className="faq-header">
        <h1 className="faq-header__txt">Frequently Asked Questions</h1>
      </div>
      <div className="faq-questions">
        <div className="faq-questions-entity">
          <p className="faq-questions-entity__title">
            Will I see any brush strokes on doors or cabinet bases after
            refinishing?
          </p>
          <p className="faq-questions-entity__desc">
            We don't use brushes and rollers which leave lines and dents. Our
            products can be applied only with a professional sprayer which
            produces a surface that cannot be achieved by any other tool. We
            guarantee that you will have a smooth factory-like finish on your
            cabinets after we complete the project.
          </p>
        </div>
        <div className="faq-questions-entity">
          <p className="faq-questions-entity__title">
            What products does Bora Renovation use?
          </p>
          <p className="faq-questions-entity__desc">
            We don't use the same paint which other companies use. We use high
            quality materials that are moisture-, chemical-, and heat-resistant
            that meet the specification of the Kitchen Cabinet Manufacturing
            Association (KCMA).
          </p>
        </div>
        <div className="faq-questions-entity">
          <p className="faq-questions-entity__title">
            Do you refinish oak cabinets? Will I see wood grains after
            refinishing?
          </p>
          <p className="faq-questions-entity__desc">
            Yes, we do. Oak is an open-grain wood with cracks and small holes
            everywhere. Unfortunately, this means that the pores of the wood are
            open and you will see wood grains after refinishing.
          </p>
        </div>
        <div className="faq-questions-entity">
          <p className="faq-questions-entity__title">
            Do I need to empty all the cabinets?
          </p>
          <p className="faq-questions-entity__desc">
            No, you don’t. We thoroughly cover and protect all of the items
            inside the cabinets.
          </p>
        </div>

        {showMore && (
          <>
            <div className="faq-questions-entity">
              <p className="faq-questions-entity__title">
                What finish do you use for cabinets?
              </p>
              <p className="faq-questions-entity__desc">
                For kitchen cabinets, the best choice is the satin finish. The
                sheen of this type of finish looks gorgeous on kitchen cabinets
                and perfectly protect them.
              </p>
            </div>
            <div className="faq-questions-entity">
              <p className="faq-questions-entity__title">
                Do you install new hardware and hinges?
              </p>
              <p className="faq-questions-entity__desc">
                We can patch the old holes and make new ones for new knobs
                and/or handles. We can install new hinges if they’re exactly the
                same size as the old ones.
              </p>
            </div>
            <div className="faq-questions-entity">
              <p className="faq-questions-entity__title">
                How long will the kitchen cabinet refinishing project take?
              </p>
              <p className="faq-questions-entity__desc">
                Your cabinets will be dry and ready to use in 2-3 days. Duration
                depends on kitchen size.
              </p>
            </div>
            <div className="faq-questions-entity">
              <p className="faq-questions-entity__title">
                Where can I see pictures and videos of your previous projects?
              </p>
              <p className="faq-questions-entity__desc">
                On Facebook and Instagram, you will find over 600 pictures and
                videos of our work.
              </p>
            </div>
            <div className="faq-questions-entity">
              <p className="faq-questions-entity__title">
                Are your products moisture-, heat-, and chemical-resistant?
              </p>
              <p className="faq-questions-entity__desc">
                Yes. The products that we use are ideal for kitchen cabinets.
              </p>
            </div>
            <div className="faq-questions-entity">
              <p className="faq-questions-entity__title">
                Can I use the kitchen while you refinish it?
              </p>
              <p className="faq-questions-entity__desc">
                You will be able to use kitchen after we finish the project. We
                will cover all cabinets inside, countertops, appliances, and any
                other surfaces not to be painted.
              </p>
            </div>
            <div className="faq-questions-entity">
              <p className="faq-questions-entity__title">
                Do you have any customer reviews?
              </p>
              <p className="faq-questions-entity__desc">
                Yes, we have 50+ reviews left by our satisfied customers on
                Google and Facebook.
              </p>
            </div>
            <div className="faq-questions-entity">
              <p className="faq-questions-entity__title">
                Can you refinish island/bottom cabinets in a different color?
              </p>
              <p className="faq-questions-entity__desc">
                Sure! Please visit our Facebook or Instagram page to get
                inspired for your future project.
              </p>
            </div>
            <div className="faq-questions-entity">
              <p className="faq-questions-entity__title">
                Where should I choose a color?
              </p>
              <p className="faq-questions-entity__desc">
                You can go to Sherwin Williams or Benjamin Moore and choose any
                color you like. They have samples which you can take home and
                see how the color matches your backsplash, countertop, walls and
                the interior of the house. Please contact us if you need help.
              </p>
            </div>
          </>
        )}
        {!showMore && (
          <div className="faq-wrapper">
            <button className="faq-btn-more">
              <span className="faq-btn-more__txt">See more</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
