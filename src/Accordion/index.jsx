import { useState } from 'react';
import propTypes from 'prop-types';
import SAccordion from './style';

function Accordion({ title, columnContent, rowContent }) {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    console.log(e);
    setActive(!active);
  };
  return (
    <SAccordion>
      <div className="container y proximity-scroll-snapping" dir="rtl">
        <div className={`bloc ${active && 'active'}`}>
          <button type="button" className="cubeTitle" onClick={handleToggle}>
            <h3>{title}</h3>
          </button>
          <section className="content" id="content">
            {columnContent}
          </section>
          <section className="content2" id="content2">
            {rowContent}
          </section>
        </div>
      </div>
    </SAccordion>
  );
}

Accordion.propTypes = {
  title: propTypes.string,
  columnContent: propTypes.string,
  rowContent: propTypes.string,
};

Accordion.defaultProps = {
  title: '',
  columnContent: '',
  rowContent: '',
};

export default Accordion;
