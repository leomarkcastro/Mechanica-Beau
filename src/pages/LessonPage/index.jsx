import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonCardSubtitle,
  IonButtons,
  IonBackButton,
  IonCardContent,
} from "@ionic/react";

import style from "./style.module.css";

import { MathComponent } from "mathjax-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { FormulaDict } from "../../components/_FormulaTemplates/FormulaList";

const lessData = {
  // Dynamic Pumps
  centrifugal: {
    title: "Centrifugal Pumps",
    description:
      "A machine, which the pumping action is accomplish by imparting kinetic energy to the fluid by a high-speed revolving impeller with vanes and subsequently converting, thins kinetic energy into pressure energy by passing through a volute casing or through diffuser vanes. The most common uses of the centrifugal pumps are sewage drainage, mud, sludge, crude oil pumping, hot water circulation, pressurization, water supply, and boiler water treatment.",
    application:
      "The most common uses of the centrifugal pumps are sewage drainage, mud, sludge, crude oil pumping, hot water circulation, pressurization, water supply, and boiler water treatment.",
    image: "/assets/lessons/centrifugal_00.jpg",
    formulas: [
      {
        title: "Heads",
        formulas: [
          {
            subtitle: "",
            formula: String.raw`h_1 = \frac{p1}{\gamma_1}`,
            given: ["ρ= Pressure", "γ = Specific weight"],
            formulaElement: FormulaDict["Pressure Head"].formulaElement,
            variables: FormulaDict["Pressure Head"].variables,
          },
          {
            subtitle: "",
            formula: String.raw`H = \frac{p}{pg} + \frac{V^2}{2g} + Z_e`,
            given: [
              "V= Velocity",
              "g = acceleration due to gravity",
              "Z= Source is below pump centerline",
              "p = pressure",
            ],
            formulaElement: FormulaDict["Total Head Energy [1]"].formulaElement,
            variables: FormulaDict["Total Head Energy [1]"].variables,
          },
          {
            subtitle: "",
            formula: String.raw`H = \frac{V^2}{2g} + \frac{p}{y} + Z`,
            given: [
              "H = energy (total head) of system",
              "V = Velocity",
              "g= acceleration due to gravity",
              "ρ = Pressure",
              "γ = Specific Weight",
              "Ζ= Elevation above or below plane",
            ],
            formulaElement: FormulaDict["Total Head Energy [2]"].formulaElement,
            variables: FormulaDict["Total Head Energy [2]"].variables,
          },
          {
            subtitle: "",
            formula: String.raw`N_s = \frac{N\sqrt{Q}}{H^{3/4}}`,
            given: [
              "N = Pump speed in RPM",
              "Q = Capacity in gpm at the best efficiency point",
              "H= total head per stage at the best efficiency point",
            ],
            formulaElement: FormulaDict["Specific Speed"].formulaElement,
            variables: FormulaDict["Specific Speed"].variables,
          },
        ],
      },
    ],
  },
  centripetal: {
    title: "Centripetal Pumps",
    description:
      "The Centripetal Pump (also called an impeller) is a cylindrical disk with multiple channels. These channels follow a curved path from the outer rim of the disk to a central drain pipe. The Centripetal Pump's outer rim dips into the rotating liquid. The channels guide ('peel') the clarified or separated liquid into the central drain pipe. The rotational speed of the liquid is converted into pressure. The liquid pressure generated depends on the bowl speed, the diameter of the Centripetal Pump, and the immersion depth.",
    application:
      "Centrifugal pumps are commonly used for pumping water, solvents, organics, oils, acids, bases and any 'thin' liquids in both industrial, agricultural and domestic applications.",
    image: "/assets/lessons/centripetal_00.jpg",
    formulas: [],
  },
  submersible: {
    title: "Submersible Pumps",
    description:
      "A submersible pump is a mechanical equipment that works by pushing the water toward the surface instead of pulling it. It has a hermetically sealed motor connected to the pump body that helps to push the fluid toward the surface. It is a most famous type of the centrifugal pump. A submersible pump mainly uses to pump the water from the wells. This type of pump pushes water toward the surface by changing the rotatory motion (speed) into kinetic energy, and diffuser blades further convert this K.E into pressure energy. The significant benefit of this pump is that it can prevent the pump from cavitation—these pumps are known as submersible pumps because these submerge entirely in the water. Therefore, the principal purpose of these pumps is to pump water out of the tanks, wells, or other vessels by submerging into the water or other fluids.  These pumps also use in hot water-heavy oil applications where pressurized liquid from the ground is used to power a hydraulic motor in wells instead of an electric motor.",
    application:
      "Submersible pumps are found in many applications. Single stage pumps are used for drainage, sewage pumping, general industrial pumping, and slurry pumping. They are also popular with Pond filters. Multiple stage submersible pumps are typically lowered down a borehole, and most typically used for residential, commercial, municipal, and industrial water extraction (abstraction), water wells and in oil wells.Other uses for submersible pumps include sewage treatment plants, seawater handling, firefighting (since it is flame retardant cable), water well and deep well drilling, offshore drilling rigs, artificial lifts, mine dewatering, and irrigation systems.",
    image: "/assets/lessons/submersible_00.jpg",
    formulas: [],
  },

  // Positive Displacement
  reciprocating: {
    title: "Reciprocating Pumps",
    description:
      "Reciprocating is a positive displacement unit wherein the pumping action is accomplished by the forward and backward movement of a piston or plunger inside a cylinder usually provided with valves. These types of pumps produce very high pressure.  They are used in petrochemical, oil & gas, refinery, agriculture, and fertilizer industries.",
    application:
      "These types of pumps produce very high pressure.  They are used in petrochemical, oil & gas, refinery, agriculture, and fertilizer industries. ",
    image: "/assets/lessons/reciprocating_00.jpg",
    formulas: [
      {
        title: "Discharge",
        formulas: [
          {
            subtitle: "",
            formula: String.raw`D = \frac{2ALN}{60}`,
            given: ["D = Discharge/Second"],
            formulaElement: FormulaDict["Discharge"].formulaElement,
            variables: FormulaDict["Discharge"].variables,
          },
        ],
      },
      {
        title: "Slip",
        formulas: [
          {
            subtitle: "",
            formula: String.raw`S = Q_{th} - Q_a`,
            given: [
              "S = Slip",
              "Qth = Theoretical Discharge",
              "Qa = Actual Discharge",
            ],
            formulaElement: FormulaDict["Slip"].formulaElement,
            variables: FormulaDict["Slip"].variables,
          },
        ],
      },
    ],
  },
  plunger: {
    title: "Plunger Pumps",
    description:
      "Plunger Pumps are positive displacement devices ideal for pumping a range of liquids—even liquids with high levels of solid content. They consist of a cylindrical chamber that houses a plunger, and they incorporate valves to regulate the flow of fluid as well as extension rods that allow the plunger to move within the chamber. Many plunger pumps are constructed using various materials. The material used to create the plunger itself depends heavily upon its intended use.",
    application:
      "These pumps are utilized for scum, sludge, water jet machining, sewage, and clarifier concentrator underflow applications. They can be used for metering and transmission services. They mostly use for applications such as descaling, oil hydraulics, cleaning, water irrigation, and transporting paints, chocolates, pastries, etc.",
    image: "/assets/lessons/plunger_00.jpg",
    formulas: [],
  },
  diaphragm: {
    title: "Diaphragm Pumps",
    description:
      "Diaphragm Pumps are versatile and can handle a large number of liquids, including dry food powders, wastewater, additives, pharmaceuticals, and chemicals. The advantage of the diaphragm pump is that it does not require any packings or seals. That is, it uses in applications that do not require leakage. It designs for pumping sludge, slurries, and liquids.",
    application:
      "Diaphragm pumps are commonly called 'mud hogs' and 'mud suckers' because of their use in pumping slurries and wastewater in shallow depths. They are capable of handling all sorts of aggressive media including gases and gas/liquid mixtures, and can achieve very high pressures. They should not be used to pump dangerous or toxic gases, since diaphragm pumps are not hermetically sealed.Larger models of this pump type are used to move heavy sludge and debris-filled wastes from trenches and catch basins, applications where centrifugal pumps perform poorly due to high discharge volumes and low water levels which would cause them to lose their prime.Smaller models are typically used in chemical metering or dosing applications where very constant and precise amounts of liquid delivery are required.",
    image: "/assets/lessons/diaphragm_00.jpg",
    formulas: [],
  },
  piston: {
    title: "Piston Pumps",
    description:
      "Piston Pumps is a simple and powerful device. It has a piston, a chamber, casing, and a series of control units. The piston of this pump gets power from an electric motor via a shaft. The piston connects with a shaft, and the rotating part is also linked with the shaft.  As the rotating part turns, it turns the shaft and piston down to pull it back. The piston pumps operate by moving the piston upward and downward inside the chamber. As the piston moves downward, it sucks the fluid while it moves upward then it pressurizes the fluid.  During the piston’s downward movement, the pump sucks water or other fluid from the outside via an inlet valve. During the upward movement, the piston increases the pressure of the fluid by reducing its volume.",
    application:
      "These types of pumps are utilized for applications such as withdrawing water from the well or depth of the earth, reliable pressure, water irrigation, oil & gas, and distribution systems for transporting paint, pastry, chocolate, etc.",
    image: "/assets/lessons/piston_00.jpg",
    formulas: [],
  },
  hand: {
    title: "Hand Pumps",
    description:
      "Hand pumps are manually operated pumps; they use human power and mechanical advantage to move fluids or air from one place to another. They are widely used in every country in the world for a variety of industrial, marine, irrigation and leisure activities.",
    application:
      "These pumps are most widely used in various recreational, irrigation, industries, and marine applications in all countries of the world. Hand pumps have different types that mainly work on the principle of rotary blades, diaphragm or piston with check valves at the chamber inlet and outlet.Human-powered pumps are capable of lifting relatively small amounts of water from depths of up to 100 m. They are widely used in places where access to power sources is limited, where financial resources for investment are constrained, and where domestic water requirements are not excessive.",
    image: "/assets/lessons/hand_00.jpg",
    formulas: [],
  },
  rotary: {
    title: "Rotary Pumps",
    description:
      "The rotary pump's rotor rotates or replaces the fluid by orbiting and rotatory movement. The rotary pump mechanism consists of housing, vane, cams, runner, inlet, and outlet ports. These components of the rotary pump help to transfer fluids. These are self-priming pumps and offer an almost constant delivery rate regardless of the pressure. They are manufactured with a minimum clearance between the stationary and rotating components for minimizing the leakage from the pressure side to the suction side. These pumps work at low speeds to sustain these clearances.",
    application:
      "These pumps are most frequently utilized to transfer highly viscous fluids like oils, including handling lubricating oils and fuels, into the engine room.",
    image: "/assets/lessons/rotary_00.jpg",
    formulas: [],
  },
  rotlob: {
    title: "Rotary Lobe Pumps",
    description:
      "The rotor of this type of pump does not touch the housing during its working. The liquid sucks in from the suction valve to the cavity between the chamber wall and the lobes. Due to the meshing of the rotors, the liquid can't escape between them. Therefore, liquid exits from the nozzle along the rotation direction of the outer lobe. These have various characteristics such as reliability, hygienic quality, rust resistance, and excellent efficiency.",
    application:
      "They are frequently utilized in the applications such as biopharmaceutical manufacturing, beverage & food processing, and hygienic processing industries.",
    image: "/assets/lessons/rotlob_00.jpg",
    formulas: [],
  },
  flex: {
    title: "Flexible Impeller Pumps",
    description:
      "A flexible impeller pump is a type of pump design which consists of a circular rubber impeller with several flexible rubber vanes mounted within a casing. The casing is smaller than the impeller vanes, meaning to insert the vane into the pump head, the vanes must be bent creating a seal and chamber between each vane. The pump head then contains several chambers which operate like valves, making the pump self-priming, and a positive displacement pump.",
    application:
      "The main applications are transfer of dairy products, edible oils, wine and beverages in general.",
    image: "/assets/lessons/flex_00.jpg",
    formulas: [],
  },
  slide: {
    title: "Sliding Vane Pumps",
    description:
      "Sliding Vane Pumps are ideally suited for a wide array of markets, including chemical process, energy, transport, military & marine, general industry, and oil & gas. They are designed to handle a range of low- to medium-viscosity fluids, including those at high temperatures, non-lubricating fluids such as alcohols and gasoline, and liquids that contain gas/vapor content or liquids containing suspended solids.",
    application:
      "These pumps are mostly used in various Applications such as Fuel and Light Oil Transfer, Lubrication, Gasoline/Petroleum, LPG/Propane, Chemical Handling, Alcohols and Solvents, Bitumen Transfer, High-Temperature Fluids, Liquefied Gases, Aerosol and Propellants, Paints, Inks and Coating.",
    image: "/assets/lessons/slide_00.jpg",
    formulas: [],
  },
  pneu: {
    title: "Pneumatic Pumps",
    description:
      "Pneumatic has been performed a vital role in mechanical work as technology for a long time. This technology is also used to develop robotics solutions. The pneumatic system is very similar to a hydraulic system, but compressed air uses instead of hydraulic oil in this system. It uses compressed gas or air to generate power that uses to flow liquid through a pipeline system and usually work with compressed inert gas or air. ",
    application:
      "They use for the applications such as water treatment, food, and chemical companies. This pump provides a stable flow for mixing and measuring. And it also has the capacity of pumping various liquids such as toothpaste and multiple chemicals. In these pumps, pressurized air uses to move the fluid.",
    image: "/assets/lessons/slide_00.jpg",
    formulas: [],
  },
};

function LessonPage({ match }) {
  let data = lessData[match.params.title];

  const dispatch = useDispatch();
  const history = useHistory();

  function selectCard(item) {
    dispatch({ type: "ADD_FORMULA", value: item });
    //history.goBack()
    history.push("/home");
  }

  return (
    <IonPage className={style.mainContent}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/start" />
          </IonButtons>
          <IonTitle>Pump Lec and Calc</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className={style.formulaList}>
          <h1>{data.title}</h1>

          <IonCard className={style.lessonCard}>
            <IonCardHeader>
              <IonCardTitle>Diagram</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className={style.imageDia}>
                <img src={data.image} alt="Centrifugal Machine" />
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard className={style.lessonCard}>
            <IonCardHeader>
              <IonCardTitle>Description</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{data.description}</IonCardContent>
          </IonCard>

          <IonCard className={style.lessonCard}>
            <IonCardHeader>
              <IonCardTitle>Applications</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{data.application}</IonCardContent>
          </IonCard>

          {data.formulas.length > 0 && (
            <IonCard className={style.lessonCard}>
              <IonCardHeader>
                <IonCardTitle>Formulas</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {data.formulas.map((e, i) => {
                  return (
                    <React.Fragment key={`sol_${i}`}>
                      <h3>{e.title}</h3>
                      {e.formulas.map((ee, ii) => {
                        return (
                          <div key={`${i}_${ii}`} className={style.formulaShow}>
                            <div className={style.formulaShow_left}>
                              <h3>{ee.subtitle}</h3>
                              <IonCard
                                color="success"
                                className={style.solCard}
                                button
                                onClick={selectCard.bind(
                                  this,
                                  ee.formulaElement({
                                    varDescription: ee.variables,
                                  })
                                )}
                              >
                                <MathComponent
                                  tex={ee.formula}
                                  display={false}
                                />
                              </IonCard>
                            </div>
                            <div className={style.formulaShow_right}>
                              {ee.given.map((eee, iii) => (
                                <p key={`${i}_${ii}_${iii}`}>{eee}</p>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </IonCardContent>
            </IonCard>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
}

export default LessonPage;
