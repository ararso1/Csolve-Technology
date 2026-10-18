"use client";

import { useState } from "react";

const FaqAccordion = ({ items = [] }) => {
  const [activeId, setActiveId] = useState(items[0]?.id || "");

  const toggleItem = (id) => {
    setActiveId((current) => (current === id ? "" : id));
  };

  return (
    <div className="services-faq-list">
      {items.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <div
            key={item.id}
            className={`services-faq-item${isOpen ? " is-open" : ""}`}
          >
            <button
              type="button"
              className="services-faq-question"
              aria-expanded={isOpen}
              onClick={() => toggleItem(item.id)}
            >
              <span>{item.question}</span>
              <i
                className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}
                aria-hidden="true"
              />
            </button>
            <div
              className="services-faq-answer"
              style={{ maxHeight: isOpen ? "280px" : "0px" }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
