import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import "./Value.css";

const Value = () => {
  return (
    <section className="value-wrapper">
      <div className="innerWidth flexCenter paddings value-container">
        {/* VALUE LEFT SIDE  */}
        <div className="value-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* VALUE RIGHT SIDE  */}
        <div className="flexColStart value-right">
          <sapn className="orangeText">Our Value</sapn>
          <sapn className="primaryText">Value We Give To You</sapn>
          <sapn className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </sapn>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <Accordion className="accordion-item">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="flexCenter icon">{item.icon}</div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                </Accordion>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
