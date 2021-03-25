import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
const Wordcloud = ({ words }) => {
    const options = {
        colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
        enableTooltip: true,
        deterministic: false,
        fontFamily: "Open Sans",
        fontSizes: [30, 70],
        fontStyle: "bold",
        fontWeight: "bold",
        padding: 20,
        scale: "simple",
        transitionDuration: 1000
      };
  return <ReactWordcloud words={words} options={options} />
}

export default Wordcloud;