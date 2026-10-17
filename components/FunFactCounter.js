import Counter from "./Counter";

const FunFactCounter = ({ style }) => {
  const facts = [
    {
      end: 300,
      suffix: "+",
      title: "Websites & Apps",
      text: "Digital products delivered for businesses, institutions, and growing organizations.",
      delay: ".2s",
    },
    {
      end: 30,
      suffix: "+",
      title: "Corporate Systems",
      text: "Enterprise platforms and systems built to improve operations and decision-making.",
      delay: ".4s",
      active: true,
    },
    {
      end: 1000,
      suffix: "+",
      title: "Job Opportunities For Youth",
      text: "Opportunities created to empower young talent through technology and growth.",
      delay: ".6s",
    },
    {
      end: 101,
      suffix: "%",
      title: "Excellence",
      text: "Our commitment to quality, reliability, and going beyond expectations.",
      delay: ".8s",
    },
  ];

  return (
    <div className="row">
      {facts.map((fact) => (
        <div
          key={fact.title}
          className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay={fact.delay}
        >
          <div
            className={`funfact-box-items${
              fact.active ? " active" : ` style-${style || ""}`
            }`}
          >
            <h2>
              <span className="count">
                <Counter end={fact.end} />
              </span>
              {fact.suffix}
            </h2>
            <h6>{fact.title}</h6>
            <p>{fact.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FunFactCounter;
