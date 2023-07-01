import { LazyLoadImage } from "react-lazy-load-image-component";
import { InView } from "react-intersection-observer";

import taking from "../../assets/images/process/taking.svg";
import install from "../../assets/images/process/install.svg";
import protect from "../../assets/images/process/protect.svg";
import sand from "../../assets/images/process/sand.svg";
import materials_pro from "../../assets/images/process/materials.svg";
import cleaning from "../../assets/images/process/cleaning.svg";
import { useState } from "react";

const ProcessList = () => {
  const [showDesc, setShowDesc] = useState(false);
  const [type, setType] = useState("");

  return (
    <div className="mob-process">
      <ul className="mob-process-list">
        <InView
          threshold={0.7}
          onChange={(inView, entry) => {
            setType("taking");
            inView ? setShowDesc(true) : setShowDesc(false);
          }}
          delay={0.8}
          className="mob-process-list__item">
          <div className="mob-img-process">
            <LazyLoadImage
              delayTime={100}
              height={194}
              alt={taking}
              src={taking}
            />
          </div>
          <div
            className={
              showDesc && type === "taking"
                ? "mob-process-list__item-content mob-process-list__item-content__active"
                : "mob-process-list__item-content"
            }>
            <p
              className={
                showDesc && type === "taking"
                  ? "mob-process-list__item-title mob-process-list__item-title__active"
                  : "mob-process-list__item-title"
              }>
              Taking off doors and <br /> drawer fronts
            </p>
            <span
              style={{
                color: showDesc && type === "taking" ? "#FFFFFF" : "#323232",
              }}>
              We will take off all hardware and hinges, and take off all doors
              and drawer fronts from the frame.
            </span>
          </div>
        </InView>
        <InView
          threshold={0.7}
          onChange={(inView) => {
            setType("cleaning");
            inView ? setShowDesc(true) : setShowDesc(false);
          }}
          delay={0.8}
          className="mob-process-list__item">
          <div className="mob-img-process">
            <LazyLoadImage
              delayTime={100}
              height={194}
              alt={cleaning}
              src={cleaning}
            />
          </div>
          <div
            className={
              showDesc && type === "cleaning"
                ? "mob-process-list__item-content mob-process-list__item-content__active"
                : "mob-process-list__item-content"
            }>
            <p
              className={
                showDesc && type === "cleaning"
                  ? "mob-process-list__item-title mob-process-list__item-title__active"
                  : "mob-process-list__item-title"
              }>
              doors, drawer fronts and cabinet frame cleaning
            </p>
            <span
              style={{
                color: showDesc && type === "cleaning" ? "#FFFFFF" : "#323232",
              }}>
              We will properly clean the cabinets with a professional cleaning
              solution to remove all grease and grime.
            </span>
          </div>
        </InView>
        <InView
          threshold={0.7}
          onChange={(inView) => {
            setType("sand");
            inView ? setShowDesc(true) : setShowDesc(false);
          }}
          delay={0.8}
          className="mob-process-list__item">
          <div className="mob-img-process">
            <LazyLoadImage delayTime={100} height={194} alt={sand} src={sand} />
          </div>
          <div
            className={
              showDesc && type === "sand"
                ? "mob-process-list__item-content mob-process-list__item-content__active"
                : "mob-process-list__item-content"
            }>
            <p
              className={
                showDesc && type === "sand"
                  ? "mob-process-list__item-title mob-process-list__item-title__active"
                  : "mob-process-list__item-title"
              }>
              Scuff sanding down the existing finish
            </p>
            <span
              style={{
                color: showDesc && type === "sand" ? "#FFFFFF" : "#323232",
              }}>
              We will sand down the existing finish before refinishing to give
              the new finish a good surface to grip.
            </span>
          </div>
        </InView>
        <InView
          threshold={0.7}
          onChange={(inView) => {
            setType("protect");
            inView ? setShowDesc(true) : setShowDesc(false);
          }}
          delay={0.8}
          className="mob-process-list__item">
          <div className="mob-img-process">
            <LazyLoadImage
              delayTime={100}
              height={194}
              alt={protect}
              src={require("../../assets/images/process/IMG_0103.JPG")}
            />
          </div>
          <div
            className={
              showDesc && type === "protect"
                ? "mob-process-list__item-content mob-process-list__item-content__active"
                : "mob-process-list__item-content"
            }>
            <p
              className={
                showDesc && type === "protect"
                  ? "mob-process-list__item-title mob-process-list__item-title__active"
                  : "mob-process-list__item-title"
              }>
              Protecting and covering
            </p>
            <span
              style={{
                color: showDesc && type === "protect" ? "#FFFFFF" : "#323232",
              }}>
              We will protect and cover the insides of your cabinets, walls,
              floors, ceiling, backsplash, countertop, and any other surfaces
              not to be painted.
            </span>
          </div>
        </InView>
        <InView
          threshold={0.7}
          onChange={(inView) => {
            setType("materials_pro");
            inView ? setShowDesc(true) : setShowDesc(false);
          }}
          delay={0.8}
          className="mob-process-list__item">
          <div className="mob-img-process">
            <LazyLoadImage
              delayTime={100}
              height={194}
              alt={materials_pro}
              src={materials_pro}
            />
          </div>
          <div
            className={
              showDesc && type === "materials_pro"
                ? "mob-process-list__item-content mob-process-list__item-content__active"
                : "mob-process-list__item-content"
            }>
            <p
              className={
                showDesc && type === "materials_pro"
                  ? "mob-process-list__item-title mob-process-list__item-title__active"
                  : "mob-process-list__item-title"
              }>
              Applying high-quality materials
            </p>
            <span
              style={{
                color:
                  showDesc && type === "materials_pro" ? "#FFFFFF" : "#323232",
              }}>
              We will apply high-quality primer, lightly sand to make sure
              primer is stuck perfectly to the surface, and apply top coat with
              a professional HVLP sprayer.
            </span>
          </div>
        </InView>
        <InView
          threshold={0.7}
          onChange={(inView) => {
            setType("install");
            inView ? setShowDesc(true) : setShowDesc(false);
          }}
          delay={0.8}
          className="mob-process-list__item">
          <div className="mob-img-process">
            <LazyLoadImage
              delayTime={100}
              height={194}
              alt={install}
              src={install}
            />
          </div>
          <div
            className={
              showDesc && type === "install"
                ? "mob-process-list__item-content mob-process-list__item-content__active"
                : "mob-process-list__item-content"
            }>
            <p
              className={
                showDesc && type === "install"
                  ? "mob-process-list__item-title mob-process-list__item-title__active"
                  : "mob-process-list__item-title"
              }>
              Doors and drawer fronts installation
            </p>
            <span
              style={{
                color: showDesc && type === "install" ? "#FFFFFF" : "#323232",
              }}>
              We will install doors, drawer fronts, make new holes for the new
              hardware if requested, and take care of the cleanup once we’ve
              brought your project to completion.
            </span>
          </div>
        </InView>
      </ul>
    </div>
  );
};

export default ProcessList;
