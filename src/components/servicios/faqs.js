import React from "react"
import { css } from "@emotion/core"
import AccordionItem from "../accordionItem"

const Faqs = ({ faqs }) => {
  return (
    <div
      className="container d-flex"
      css={css`
        margin-bottom: 120px;
        margin-top: 4rem;
        h2 {
          font-size: 2.5rem;
          line-height: 1.3;
          margin-bottom: 2.5rem;
        }
        .faqs-wrapper {
          width: 70%;
          flex: 0 0 70%;
          margin: auto;
        }
        .faq {
          &:not(:last-of-type) {
            margin-bottom: 1.3rem;
            border-bottom: solid 1px rgba(0, 0, 0, 0.2);
            padding-bottom: 1.3rem;
          }
        }
      `}
    >
      <div className="faqs-wrapper">
        <h2 data-sal="slide-up" data-sal-duration="350" data-sal-delay="300">
          We are <br /> frequently <br /> asked
        </h2>
        {faqs.map((faq, index) => (
          <div key={`faq-${index}`} className="faq">
            <AccordionItem
              item={{
                title: `${index + 1}. ${faq.question || ""}`,
                content: faq.answer || "",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faqs
