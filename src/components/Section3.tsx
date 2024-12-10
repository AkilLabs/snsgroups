import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faLaptop,
  faLightbulb,
  faSchool,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';

const Section3: React.FC = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  return (

    <>
    <Header />
      <div className="relative flex flex-col h-fit mb-28 justify-start items-start">
        <div className="p-[30px] border-2  border-gray-500 rounded-full translate-x-[-50%] relative flex justify-end mt-[150px] sm:p-[40px]">
          <div className="bg-white shadow-2xl flex items-center justify-center p-3 rounded-full">
            <div className="rounded-full bg-yellow-300 h-[250px] w-[250px] flex justify-end items-center p-4 sm:w-[330px] sm:h-[330px]">
              <p className="w-[100px] text-wrap text-sm font-bold sm:w-[130px] sm:text-lg">
                SNS Design Thinking Consultancy
              </p>
            </div>
          </div>

          {/* SNS Venture Capital and Investments */}
          <div
            className="absolute flex flex-row items-end translate-x-[55%] translate-y-[-112%] cursor-pointer mbmd:translate-x-[60.5%] mbmd:translate-y-[-115%]"
            onClick={() => window.open('#', '_blank', 'noopener,noreferrer')}
          >
            <div className="rounded-full bg-[#DE2A1B] p-1 mr-2">
              <FontAwesomeIcon icon={faBuilding} className="text-white w-6" />
            </div>
            <div className="flex flex-col text-[10px] mb-7 sm:text-[11px]">
              <p className="bg-[#DE2A1B] p-2 rounded-lg mb-1 text-white font-semibold">
                SNS Venture Capital and Investments                    
              </p>
              <p className="w-[200px] ml-1 mbmd:w-[250px]">
                Funding high-potential startups for ownership stakes
              </p>
            </div>
          </div>

          {/* SNS Square Technologies */}
          <div
            className="absolute flex flex-row items-end translate-x-[95%] translate-y-[-15%] sm:translate-x-[93%] cursor-pointer"
            onClick={() => window.open('https://www.snssquare.com/', '_blank', 'noopener,noreferrer')}
          >
            <div className="rounded-full bg-[#B0D402] p-1 mr-2">
              <FontAwesomeIcon icon={faLaptop} className="text-white w-6" />
            </div>
            <div className="flex flex-col text-[10px] sm:text-[11px]">
              <p className="bg-[#B0D402] p-2 rounded-lg mb-1 text-white font-semibold">
                SNS Square Technologies
              </p>
              <p className="ml-1 w-[140px] mbmd:w-[200px] mblg:w-[250px]">
                Empowering digital transformations with IT and software solutions.
              </p>
            </div>
          </div>

          {/* SNS Innovation Hub */}
          <div
            className="absolute flex flex-row items-start translate-x-[110%] translate-y-[165%] mbmd:translate-y-[185%] mbmd:translate-x-[108%] sm:translate-y-[235%] sm:translate-x-[110%] cursor-pointer"
            onClick={() => window.open('https://snsihub.ai/', '_blank', 'noopener,noreferrer')}
          >
            <div className="rounded-full bg-[#E10485] p-1 mr-2">
              <FontAwesomeIcon icon={faLightbulb} className="text-white w-6" />
            </div>
            <div className="flex flex-col text-[10px] sm:text-[11px]">
              <p className="bg-[#E10485] p-2 rounded-lg mb-1 text-white font-semibold">
                SNS Innovation Hub
              </p>
              <p className="ml-1 w-[120px] mbmd:w-[160px] mblg:w-[210px]">
                Empowering digital transformations with IT and software solutions.
              </p>
            </div>
          </div>

          {/* SNS Institutions */}
          <div
            className="absolute flex flex-row items-start translate-x-[90%] translate-y-[250%] mbmd:translate-y-[230%] mbmd:translate-x-[96%] sm:translate-y-[300%] cursor-pointer"
            onClick={() => window.open('https://main.snsgroups.com/', '_blank', 'noopener,noreferrer')}
          >
            <div className="rounded-full bg-[#EB510B] p-1 mr-2">
              <FontAwesomeIcon icon={faSchool} className="text-white w-6" />
            </div>
            <div className="flex flex-col text-[10px] mt-6 sm:text-[11px]">
              <p className="bg-[#EB510B] p-2 rounded-lg mb-1 text-white font-semibold">
                SNS Institutions
              </p>
              <p className="ml-1 w-[140px] mbmd:w-[200px] mblg:w-[250px]">
                Nurturing holistic development through quality education.
              </p>
            </div>
          </div>

          {/* SNS B Spine */}
          <div
            className="absolute flex flex-row items-start translate-x-[50%] translate-y-[250%] w-fit mbmd:translate-y-[270%] mbmd:translate-x-[60%] sm:translate-y-[335%] cursor-pointer"
            onClick={() => window.open('https://snsspine.in/', '_blank', 'noopener,noreferrer')}
          >
            <div className="rounded-full bg-[#01A3D4] p-1">
              <FontAwesomeIcon icon={faDumbbell} className="text-white w-6" />
            </div>
            <div className="flex flex-col text-[10px] mt-12 mbmd:mt-10 sm:text-[11px]">
              <p className="bg-[#01A3D4] p-2 rounded-lg mb-1 text-white font-semibold">
                SNS SPINE
              </p>
              <p className="w-[180px] ml-1 mbmd:w-[250px]">
                Igniting Gen Y through movement, innovation, and teamwork
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Section3;
