import FormulaDischarge from "./Discharge";
import FormulaFrictionHeadDarcy from "./FrictionHeadDarcy";
import FormulaFrictionHeadMorse from "./FrictionHeadMorse";
import FormulaMotorEfficiency from "./MotorEfficiency";
import FormulaOverallEfficiency from "./OverallEfficiency";
import FormulaPercentSlip from "./PercentSlip";
import FormulaPercentSlipPer from "./PercentSlipPer";
import FormulaPistonDisp from "./PistonDisp";
import FormulaPistonDispNoRod from "./PistonDispNoRod";
import FormulaPressureHead from "./PressureHead";
import FormulaPumpEfficiency from "./PumpEfficiency";
import FormulaSlip from "./Slip";
import FormulaSpecificSpeed from "./SpecificSpeed";
import FormulaTotalHead from "./TotalHead";
import FormulaTotalHeadEnergy from "./TotalHeadEnergy_1";
import FormulaTotalHeadEnergy2 from "./TotalHeadEnergy_2";
import FormulaVelocityHead from "./VelocityHead";
import FormulaVolumeFlowRate from "./VolumeFlowRate";
import FormulaVolumEffic from "./VolumetricEfficiency";
import FormulaWaterPower from "./WaterPower";

export const FormulaList = [
    {   title : "Volume Flow Rate of Liquid Handled By Pump",
        formula : String.raw`Q = A \times V`,
        description: "Volume flow rate is the volume of the liquid that passes through a given surface per unit time. It is the product of the area and velocity of the liquid.",
        variables: [
            [String.raw`Q`, "Volume flow rate"],
            [String.raw`A`, "Velocity of flow"],
            [String.raw`V`, "Area of flow"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaVolumeFlowRate {...props} {...props2} />
    },
    {   title : "Pressure Head",
        formula : String.raw`h_p = \frac{P}{\gamma}`,
        description: "Pressure Head is the height of the column of water of liquid necessary to develop a specific pressure.",
        variables: [
            [String.raw`P`, "Pressure"],
            [String.raw`\gamma`, "Specific Weight"],
            [String.raw`V`, String.raw`9.81 \frac{kN}{m^3} or 62.4 \frac{lb_f}{ft^3}`],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaPressureHead {...props} {...props2}  />
    },
    {   title : "Velocity Head",
        formula : String.raw`h_v = \frac{V^2}{2g}`,
        description: "Velocity head is the head required to produce the flow of liquid",
        variables: [
            [String.raw`V`, "Velocity"],
            [String.raw`g`, "acceleration due to gravity"],
            [String.raw`g`, String.raw`9.81 \frac{m}{s^2} or 62.4 \frac{ft}{s^2}`],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaVelocityHead {...props} {...props2}  />
    },
    {   title : "Hydraulic or Water Power",
        formula : String.raw`P_w = {\gamma}QH`,
        description: "Hydraulic or Water Power is the theoretical power necessary to raise a given volume of liquid from a lower to a higher elevation.",
        variables: [
            [String.raw`P_w`, "Hydaulic of water power"],
            [String.raw`Q`, "volume flow rate"],
            [String.raw`H`, "total head"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaWaterPower {...props} {...props2}  />
    },
    {   title : "Pump Efficiency",
        formula : String.raw`e_p = \frac{P_w}{P_b}`,
        description: "Pump Efficiency is the ratio of the hydraulic power or water power to the brake power",
        variables: [
            [String.raw`P_w`, "Hydraulic or water power"],
            [String.raw`P_b`, "Brake power"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaPumpEfficiency {...props} {...props2}  />
    },
    {   title : "Motor Efficiency",
        formula : String.raw`e_m = \frac{P_b}{P_i}`,
        description: "Motor Efficiency is the ratio of brake power to the input power",
        variables: [
            [String.raw`P_b`, "Brake Power"],
            [String.raw`P_i`, "Input Power"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaMotorEfficiency {...props} {...props2}  />
    },
    {   title : "Overall Efficiency",
        formula : String.raw`e = \frac{P_w}{P_i}`,
        description: "Overall Efficiency is the ratio of the hydraulic or water power to the input",
        variables: [
            [String.raw`P_w`, "Water Power"],
            [String.raw`P_i`, "Input Power"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaOverallEfficiency {...props} {...props2}  />
    },
    {   title : "Friction Head (Darcy's Equation)",
        formula : String.raw`h_f = \frac{flV^2}{2gD}`,
        description: "Friction head is the head lost by the flow in a stream or conduit due to frictional disturbances set up by the moving liquid and its containing conduit and by intermolecular friction.",
        variables: [
            [String.raw`h_f`, "Friction head loss"],
            [String.raw`f`, "coefficient of friction"],
            [String.raw`L`, "total length"],
            [String.raw`V`, "velocity"],
            [String.raw`g`, String.raw`9.81 m/s^2`],
            [String.raw`D`, "Coefficient of friction"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaFrictionHeadDarcy {...props} {...props2}  />
    },
    {   title : "Friction Head (Morse Equation)",
        formula : String.raw`h_f = \frac{2flV^2}{gD}`,
        description: "Friction head is the head lost by the flow in a stream or conduit due to frictional disturbances set up by the moving liquid and its containing conduit and by intermolecular friction.",
        variables: [
            [String.raw`h_f`, "Friction head loss"],
            [String.raw`f`, "coefficient of friction"],
            [String.raw`L`, "total length"],
            [String.raw`V`, "velocity"],
            [String.raw`g`, String.raw`9.81 m/s^2`],
            [String.raw`D`, "Coefficient of friction"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaFrictionHeadMorse {...props} {...props2}  />
    },
    {   title : "Percent Slip (%S)",
        formula : String.raw`\%S = \frac{S}{V_D} \times 100`,
        description: "Percent Slip is the ratio of the slip to the piston displacement",
        variables: [],
        image: "",
        formulaElement: props => props2 => <FormulaPercentSlipPer {...props} {...props2}  />
    },
    {   title : "Percent Slip (S)",
        formula : String.raw`S = \frac{V_D - Q}{V_D} \times 100`,
        description: "Percent Slip is the ratio of the slip to the piston displacement",
        variables: [],
        image: "",
        formulaElement: props => props2 => <FormulaPercentSlip {...props} {...props2}  />
    },
    {   title : "Volumetric Efficiency",
        formula : String.raw`e_v = \frac{Q}{V_D}`,
        description: "Volumetric Efficiency is the ration of the actual discharge to the piston displacement",
        variables: [],
        image: "",
        formulaElement: props => props2 => <FormulaVolumEffic {...props} {...props2}  />
    },
    {   title : "Specific Speed",
        formula : String.raw`N_S = \frac{N\sqrt{Q}}{h^{3/4}}`,
        description: "Specific Speed is a number used to predict the performance of centrifugal pumps. It is the speed at which a geometrically similar impeller of a pump would run to discharge 1 gpm at 1 ft head.",
        variables: [
            [String.raw`N_S`, "Specific speed, rpm"],
            [String.raw`N`, "Rotational speed, rpm"],
            [String.raw`Q`, "Discharge, gpm"],
            [String.raw`H`, "Head, ft"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaSpecificSpeed {...props} {...props2}  />
    },
    {   title : "Piston Displacement",
        formula : String.raw`V_D = \frac{\pi D^2LN}{2}`,
        description: "Piston displacement is the volume which a piston in a cylilnder displaces in a single stroke, equal to the distance the piston travevls times the internal cross section of the cylinder",
        variables: [
            [String.raw`d`, "Piston rod diameter"],
            [String.raw`D`, "Diameter of the piston"],
            [String.raw`L`, "Length of stroke"],
            [String.raw`N`, "rpm"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaPistonDisp {...props} {...props2}  />
    },
    {   title : "Piston Displacement (with piston rod)",
        formula : String.raw`V_D = \frac{\pi D^2LN}{2} - \frac{\pi d^2LN}{4}`,
        description: "Piston displacement is the volume which a piston in a cylilnder displaces in a single stroke, equal to the distance the piston travevls times the internal cross section of the cylinder",
        variables: [
            [String.raw`d`, "Piston rod diameter"],
            [String.raw`D`, "Diameter of the piston"],
            [String.raw`L`, "Length of stroke"],
            [String.raw`N`, "rpm"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaPistonDispNoRod {...props} {...props2}  />
    },
    {   title : "Total Head or Total Dynamic Head (H)",
        formula : String.raw`H = (Z_d - Z_s) \\ + (h_{pd} - h_{ps})\\ + (h_{vd} - h_{vs}) \\ + (h_{fd} + h_{fs})`,
        description: "Total head or Total Dynamic Head is the total energy developed by the pump expressed in height of liquid. It is the algebraic sum of static head, pressure head, friction head and velocity head",
        variables: [
            [String.raw`Z`, "is negative (-) if source is below pump centerline"],
            [String.raw`P_s`, "is negative (-) if it is vacuum"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaTotalHead {...props} {...props2}  />
    },
    {   title : "Total Head Energy [1]",
        formula : String.raw`H = \frac{p}{pg} + \frac{V^2}{2g} + Z_e`,
        description: "The pumping action by imparting kinetic energy to the fluid by a high-speed revolving impeller with vanes and subsequently converting, thins kinetic energy into pressure energy.",
        variables: [
            [String.raw`V`, "Velocity"],
            [String.raw`g`, "acceleration due to gravity"],
            [String.raw`Z`, "Source is below pump centerline"],
            [String.raw`p`, "pressure"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaTotalHeadEnergy {...props} {...props2}  />
    },
    {   title : "Total Head Energy [2]",
        formula : String.raw`H = \frac{V^2}{2g} + \frac{p}{y} + Z`,
        description: "The pumping action by imparting kinetic energy to the fluid by a high-speed revolving impeller with vanes and subsequently converting, thins kinetic energy into pressure energy.",
        variables: [
            [String.raw`H`, "energy (total head) of system"],
            [String.raw`V`, "Velocity"],
            [String.raw`g`, "acceleration due to gravity"],
            [String.raw`Z`, "Elevation above or below plane"],
            [String.raw`γ`, "Specific Weight"],
            [String.raw`p`, "pressure"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaTotalHeadEnergy2 {...props} {...props2}  />
    },
    {   title : "Discharge",
        formula : String.raw`D = \frac{2ALN}{60}`,
        description: "Discharge divided into two parts on the systems of reciprocating pumps which are Single acting pumps. Hence the flow rate of the liquid delivered per second.",
        variables: [
            [String.raw`D`, "Discharge"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaDischarge {...props} {...props2}  />
    },
    {   title : "Slip",
        formula : String.raw`S = Q_{th} - Q_{a}`,
        description: "Slip defined as the difference between the theoretical discharge and actual discharge",
        variables: [
            [String.raw`S`, "Slip"],
            [String.raw`Q_{th}`, "Theoretical Discharge"],
            [String.raw`Q_a`, "Actual Discharge"],
        ],
        image: "",
        formulaElement: props => props2 => <FormulaSlip {...props} {...props2}  />
    },
]

let FormulaDict = {}
let _fd = false
for(let i in FormulaList){
    _fd = FormulaList[i]
    FormulaDict[_fd.title] = _fd
}

export { FormulaDict }