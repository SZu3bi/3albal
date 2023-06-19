import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import dish1 from "../../assets/image/1.jpg";
import dish2 from "../../assets/image/2.jpg";
import dish3 from "../../assets/image/3.jpg";
import dish4 from "../../assets/image/4.jpg";
import dish5 from "../../assets/image/5.jpg";
import dish6 from "../../assets/image/6.jpg";
import dish7 from "../../assets/image/7.jpg";
import dish8 from "../../assets/image/8.jpg";
import dish9 from "../../assets/image/9.jpg";
import dish10 from "../../assets/image/10.jpg";
import HeroThreeContent from "../SectionComponents/HeroThreeContent";

//Data objects to be used in the HeroThree section for rendering dishes information
const dummyListone = [
  {
    id: "d1",
    src: dish1,
    name: "Shawram",
    price: 2.7,
  },

  {
    id: "d2",
    src: dish2,
    name: "Shawram",
    price: 5,
  },

  {
    id: "d3",
    src: dish3,
    name: "Shawram",
    price: 3,
  },
];

const dummyListtwo = [
  {
    id: "d4",
    src: dish4,
    name: "Shawram",
    price: 5,
  },

  {
    id: "d5",
    src: dish5,
    name: "Shawram",
    price: 4,
  },

  {
    id: "d6",
    src: dish6,
    name: "Shawram",
    price: 2,
  },
];
const dummyListthree = [
  {
    id: "d7",
    src: dish7,
    name: "Shawram",
    price: 3.5,
  },

  {
    id: "d8",
    src: dish8,
    name: "Shawram",
    price: 3,
  },

  {
    id: "d9",
    src: dish9,
    name: "Shawram",
    price: 3,
  },
];
const dummyListfour = [
  {
    id: "d10",
    src: dish10,
    name: "Shawram",
    price: 3,
  },


];
//END

const HeroThreeSection = () => {
  //Mapping the data from the object above and storing them in a variable
  const dishList1 = dummyListone.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList2 = dummyListtwo.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  const dishList3 = dummyListthree.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  const dishList4 = dummyListfour.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  //END

  //Rendering the Hero Three section
  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>{dishList1}</Row>

        <Row>{dishList2}</Row>
        <Row>{dishList3}</Row>
        <Row>{dishList4}</Row>
      </Container>
    </section>
  );
  //END
};

export default HeroThreeSection;
