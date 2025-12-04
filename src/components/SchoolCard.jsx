import PropTypes from "prop-types";
import "../scss/schoolcard.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "./Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SchoolCard({img, title, delay, type="Course", link, children}) {
    const container = useRef();
    useGSAP(
        () => {
            gsap.to(`.school-card__img-wrapper`, {
              scrollTrigger: { trigger: `.school-card`, start: "top 90%" },
              y:0,
              opacity: 1,
              duration: 0.5,
              delay: delay
            });
            gsap.to(`.school-card__content`, {
                scrollTrigger: { trigger: `.school-card`, start: "top 90%" },
                y:0,
                opacity: 1,
                duration: 0.5,
                delay: delay*3
              });
          // gsap.to(q(".card"),{scrollTrigger: ".card",y:0, opacity:1, duration:1});
        },
        { scope: container }
      );

  return (
    <div className="school-card-wrapper" ref={container}>
    <section className="school-card" >
        <div className="school-card__img-wrapper">
            <img src={img} className="school-card__img" alt="School Course" />
        </div>
        <div className="school-card__content">
            <p className="school-card__content__subtitle">{type}</p>
            <h2 className="school-card__content__title">{title}</h2>
            {children}
            <Button inverted fullWidth link={link}/>
        </div>
    </section>
    </div>
  )
}
SchoolCard.propTypes = {
    img:PropTypes.string,
    title:PropTypes.string,
    delay:PropTypes.number,
    type:PropTypes.string,
    link:PropTypes.string,
    children:PropTypes.any
}
export default SchoolCard