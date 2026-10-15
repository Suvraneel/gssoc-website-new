import { useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import { Spacer } from "@chakra-ui/react";
import CampusAmbassadors from "../pages/JSON/CampusAmbassadors.json";
import Contributors from "../pages/JSON/Contributors.json";
import Mentors from "../pages/JSON/Mentors.json";
import OpenSourceAdvocates from "../pages/JSON/OpenSourceAdvocates.json";
import OrganizingTeam from "../pages/JSON/OrganizingTeam.json";
import ProjectAdmins from "../pages/JSON/ProjectAdmins.json";
import Top100 from "../pages/JSON/Top100.json";
import Confetti from "react-confetti";
import { asset } from "../lib/asset";

// Certificate template backgrounds (public/), set inline so they get the deploy base path.
const certBg = (file) => ({ backgroundImage: `url(${asset("/" + file)})` });

const Certi_Comp = (props) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const certificateWrapper = useRef(null);

  const DownloadImage = async (e) => {
    e.preventDefault();
    if (
      typeof window !== "undefined" &&
      props.verified === true &&
      certificateWrapper.current
    ) {
      const canvas = await html2canvas(certificateWrapper.current, {
        useCORS: true,
      });
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png", 1.0);
      link.download = props.Name + "_Cert_" + props.Role + "_GSSoC2022.png";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  const setVerifiedTrue = () => {
    props.setVerified();
  };

  const checkIfVerified = (email) => {
    const lowerCaseEmail = email.toLowerCase(); // Convert email to lowercase 
    
    // check if lowerCaseEmail is in the verified json
    // if yes, setVerifiedTrue()

    if (props.Role === "Contributor") {
      for (let i = 0; i < Contributors.length; i++) {
        if (Contributors[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Top Contributor") {
      for (let i = 0; i < Top100.length; i++) {
        if (Top100[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Mentor") {
      for (let i = 0; i < Mentors.length; i++) {
        if (Mentors[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Project Admin") {
      for (let i = 0; i < ProjectAdmins.length; i++) {
        if (ProjectAdmins[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Campus Ambassador") {
      for (let i = 0; i < CampusAmbassadors.length; i++) {
        if (CampusAmbassadors[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Speaker") {
      for (let i = 0; i < OpenSourceAdvocates.length; i++) {
        if (OpenSourceAdvocates[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    if (props.Role === "Organizing Team") {
      for (let i = 0; i < OrganizingTeam.length; i++) {
        if (OrganizingTeam[i].email.toLowerCase() === lowerCaseEmail) {
          setVerifiedTrue();
          return true;
        }
      }
    }

    return false;
  }

  async function Checker(email) {
    const toTheMoon = checkIfVerified(email);

    if (toTheMoon) {
      setVerifiedTrue();
      console.log("GG OP EZ");
      const ver_success =
        "Verification successful.\n Achievement Unlocked 🎊!!! \n Proceed to download your hard-earned certificate from below. \n\nHope you had a great time learning & contributing with us. All the best for your future endeavors.";
      alert(ver_success);

      setShowConfetti(true);
      setTimeout(function () {
        setShowConfetti(false);
      }, 8000);
    } else {
      console.log("Never gonna give you up...");
      const ver_failed =
        "Verification failed.💀\nPlease recheck if you have entered the correct email (used to register in GSSoC'22) & selected the appropriate role from the dropdown. \n\nIf you still feel something is wrong, feel free to make a ticket on the official server regarding the same.";
      alert(ver_failed);
    }
  }

  const Switcher = () => {
    Checker(props.Email);
  };

  return (
    <>
      <div className="flex justify-center" id="cert">
        {props.Role === "Contributor" ? (
          <div
            className="banner cert-contrib"
            style={certBg("GSSoC_Contrib_Cert.png")}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Top Contributor" ? (
          <div
            className="banner cert-topcontrib"
            style={certBg("GSSoC_TopContrib_Cert.png")}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Mentor" ? (
          <div
            className="banner cert-mentor"
            style={certBg("GSSoC_Mentor_Cert.png")}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Project Admin" ? (
          <div
            className="banner cert-pa"
            style={certBg("GSSoC_PA_Cert.png")}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Campus Ambassador" ? (
          <div
            className="banner cert-ca"
            style={certBg("GSSoC_CA_Cert.png")}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Speaker" ? (
          <div
            className="banner cert-speaker"
            style={certBg("GSSoC_OSAdvocate_Cert.png")}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : props.Role === "Organizing Team" ? (
          <div
            className="banner cert-orgteam"
            style={certBg("GSSoC_Organiser_Cert.png")}
            ref={certificateWrapper}
          >
            <div id="contrib_name" className="contrib_name text-big-orange">
              {props.Name}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <h6 id="no-mobile-alert" className="text-black dark:text-white">
        * Please download the certificate on the desktop website
      </h6>
      <Spacer mt={20} />
      <button
        type="button"
        className={
          !props.verified
            ? "bg-linear-to-b from-primary_orange-0 to-orange-600 text-md  dark:text-black font-medium rounded-b-md hover:bg-linear-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded-sm md:text-xl md:py-3"
            : "dark:text-black bg-linear-to-b from-slate-600 to-orange-400 text-md text-white w-full font-medium py-3 px-5 rounded-sm mb-3 text-md text-white font-bold px-5 py-1 rounded-sm md:text-xl md:py-3"
        }
        onClick={Switcher}
        disabled={props.verified}
      >
        Verify
      </button>
      <Spacer mt={5} />
      <button
        type="button"
        className={
          props.verified
            ? "bg-linear-to-b from-primary_orange-0 to-orange-600 text-md dark:text-black  rounded-b-md hover:bg-linear-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded-sm md:text-xl md:py-3"
            : "dark:text-black bg-linear-to-b from-slate-600 to-orange-400 text-md text-white w-full font-medium py-3 px-5 rounded-sm mb-3 text-md text-white font-bold px-5 py-1 rounded-sm md:text-xl md:py-3"
        }
        onClick={DownloadImage}
        disabled={!props.verified}
      >
        Download Certificate
      </button>
      {showConfetti && <Confetti className="fullscreen" />}
    </>
  );
};

export default Certi_Comp;
