import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import logo from '../../static/images.png';
import example from '../../static/example.png';

import {
  HeaderDiv,
  AboutButton,
  modalDivStyle,
  pictureContainerStyle,
  pictureExample,
  headerContentStyle,
  scrollableDiv,
  aboutContent,
  anchorStyle,
  authorInfoStyle,
} from './HeaderStyles';

class Header extends Component {
  constructor() {
    super();
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState(prevState => ({ ...prevState, modalOpen: true }));
  }

  closeModal() {
    this.setState(prevState => ({ ...prevState, modalOpen: false }));
  }

  render() {
    const { modalOpen } = this.state;
    return (
      <HeaderDiv className="text-center jumbotron">
        <AboutButton>
          <span
            className="glyphicon glyphicon-question-sign"
            aria-hidden="true"
            onClick={() => this.openModal()}
          />
          <Modal
            open={modalOpen}
            onClose={this.closeModal}
          >
            <div style={modalDivStyle}>
              <div style={headerContentStyle}>
                <h1>About React Shapes</h1>
              </div>
              <div style={pictureContainerStyle}>
                <img alt="logo" src={logo} />
              </div>
              <div style={scrollableDiv}>
                <h2>Playing with Geometry</h2>
                <div style={aboutContent}>
                  <span>
                    Geometry is a branch of mathematics that deals with
                    the properties and relationships of points,
                    lines, angles, surfaces and solids.
                  </span>
                </div>
                <div style={aboutContent}>
                  <span>
                    Geometry says, for example, that an equilateral
                    triangle must have all three sides equal. It also
                    defines some properties of another geometric shape: the
                    parallelogram. By definition, a parallelogram is a simple
                    quadrilateral with two pairs of parallel sides. Square
                    and rhomboid are types of parallelograms.
                  </span>
                </div>
                <h2>Where is the fun?</h2>
                <div style={aboutContent}>
                  <span>
                    Now that you have some theory, could you say how many
                    parallelograms can be formed from 3 random points? Where
                    can the 4th point be positioned to form a quadrilateral
                    with two pairs of parallel sides? To answer the questions,
                    probably you would have to go deeper into concepts of analytic
                    geometry like how to define the
                    <a
                      href="https://en.wikipedia.org/wiki/Euclidean_distance"
                      target="_blank"
                      style={anchorStyle}
                    >
                      distance between two points,
                    </a>
                    and how to calculate the
                    <a
                      href="https://en.wikipedia.org/wiki/Slope"
                      target="_blank"
                      style={anchorStyle}
                    >
                      slope of a line.
                    </a>
                    Or, if you are not a big fan of Math, you can just play with
                    React Shapes! It will do all the dirty job for you :)
                  </span>
                </div>
                <h2>How it works?</h2>
                <div style={aboutContent}>
                  <span>
                    You just have to define 3 initial points, by clicking inside the
                    green box. That is it! After that, React Shapes will generate the 4th
                    point of the parallelogram, and draw it in blue for you. It is also
                    possible to shuffle the 4th point so you can check all the parallelograms
                    that can be formed from the points you clicked. Be careful about the box
                    boundaries, only parallelograms within the limits will be formed, and
                    the shuffle button will be disabled if is not possible to form another
                    parallelogram!
                  </span>
                </div>
                <div style={aboutContent}>
                  <span>
                    A yellow circle will also be formed, having the same area and center of mass
                    of the quadrilateral.
                  </span>
                </div>
                <h2>Changing shapes</h2>
                <div style={aboutContent}>
                  <span>
                    React Shapes also allows you to move or change the shape of the formed
                    parallelogram. You will see two buttons above the green box for each of
                    these features.
                    After selecting one of them, click (not drag) on any point, to see the
                    shapes updating, and click again when you are finished.
                  </span>
                </div>
                <div style={aboutContent}>
                  <span>
                    It is important to notice that once you want to change the shape
                    of the quadrilateral by updating the position of a single point, there is
                    no guarantee that it will still be a parallelogram, having the properties
                    we know from Geometry. So, it will not be possible anymore to shuffle
                    parallelograms. However, area and yellow circle information will be updated
                    accordingly for the new quadrilateral formed. You can reset all the points
                    anytime you want, clicking on the red button below the green box.
                  </span>
                </div>
                <h2>Not Simple Polygons</h2>
                <div style={aboutContent}>
                  <span>
                    Polygons that are self-intersecting, are classified as not simple
                    polygons. When you choose to update the shapes by moving a single
                    point, you may generate a not simple polygon.
                    Check out this example:
                  </span>
                </div>
                <div style={pictureExample}>
                  <figure>
                    <img alt="example" src={example} width="255" height="255" />
                    <figcaption>Figure 1 - Not simple polygon</figcaption>
                  </figure>
                </div>
                <div style={aboutContent}>
                  <span>
                    If you look carefully, you will see a very small yellow circle in the center
                    of the picture. But wait, if the yellow circle has the same area of the
                    quadrilateral, why is it so small? Well, when the polygon is not simple, the
                    formula used to calculate the area of the quadrilateral will have a particular
                    behavior: it will subtract fractions of the polygon's area!
                    Interesting, isn't it? In our example, the resulting area will be close to zero,
                    that's why the circle is very small. You can take a look at the
                    <a
                      href="https://en.wikipedia.org/wiki/Shoelace_formula"
                      target="_blank"
                      style={anchorStyle}
                    >
                      Gauss's area formula
                    </a>
                    (also called Shoelace formula) if you want to understand in more details why
                    this happens. Have fun! :)
                  </span>
                </div>
              </div>
              <span style={authorInfoStyle}>
                Developed by
                <a
                  href="https://github.com/matheus-lima92"
                  style={anchorStyle}
                  target="_blank"
                >
                  Matheus Lima
                </a>
              </span>
            </div>
          </Modal>
        </AboutButton>
        <h1>React Shapes</h1>
        <h3>React shapes generator. Click and have fun!</h3>
      </HeaderDiv>
    );
  }
}

export default Header;
