import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Titles from "../Titles";
import certificate1 from "/certificates/assets/CareerEssentialsInSoftwareDevelopmentByMicrosoftAndLinkedIn.png";
import certificate2 from "/certificates/assets/IntroductionToCareerSkillsInSoftwareDevelopment.png";
import certificate3 from "/certificates/assets/ProgrammingFoundationsBeyondTheFundamentals.png";
import certificate4 from "/certificates/assets/ProgrammingFoundationsFundamentals.png";
import { IoMdDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import "../Projects/projects.css";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Detect if in view

  const [selectedId, setSelectedId] = useState(null);

  const certificates = [
    {
      id: "1",
      img: certificate1,
      title:
        "Career Essentials in Software Development by Microsoft and LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/494f0ff398c9359c5e1d7714520d48b37b8d0deb6dbeded5c1c8c008922d470c?trk=share_certificate",
      download:
        "/certificates/pdf/CareerEssentialsInSoftwareDevelopmentByMicrosoftAndLinkedIn.pdf",
    },
    {
      id: "2",
      img: certificate2,
      title: "Introduction to Career Skills in Software Development",
      link: "https://www.linkedin.com/learning/certificates/dbc20b1ddafd2ecdf717296e9f0445ccdeec59c37cc2f4a27bb28feef2e3caa3?trk=share_certificate",
      download:
        "/certificates/pdf/IntroductionToCareerSkillsInSoftwareDevelopment.pdf",
    },
    {
      id: "3",
      img: certificate3,
      title: "Programming Foundations: Beyond the Fundamentals",
      link: "https://www.linkedin.com/learning/certificates/22e9ec2c563c683139ecfe9a4bdb1f836ef0997d85782fda95d5b661ef002544?trk=share_certificate",
      download:
        "/certificates/pdf/ProgrammingFoundationsBeyondTheFundamentals.pdf",
    },
    {
      id: "4",
      img: certificate4,
      title: "Programming Foundations Fundamentals",
      link: "https://www.linkedin.com/learning/certificates/2e99d39b687bef4eae2f1c9e02a88fc51260a7bb1ba303bc56dfe28c64186c2f?trk=share_certificate",
      download: "/certificates/pdf/ProgrammingFoundationsFundamentals.pdf",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.5 }}
      animation
      className="p-2 my-20 sm:p-14"
      id="Certification"
    >
      <Titles title="I completed online courses and earned certificates." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {certificates.map((certificate, index) => {
          const randomNum = Math.floor(Math.random() * 6) + 1;

          return (
            <motion.div
              key={certificate.id}
              className="p-2 rounded-md overflow-hidden flex flex-col gap-3 cursor-pointer"
              onClick={() => setSelectedId(certificate.id)}
              ref={ref}
              initial={{ opacity: 0, y: 20 }} // Initial state for animation
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 0.4, delay: index * 0.5 }} // Delay each animation
            >
              <div className="border rounded-md p-2 flex hover:-translate-y-2 transition-all">
                <div
                  className={`p-2.5 pattern-${randomNum} flex w-full rounded-md`}
                >
                  <img
                    src={certificate.img}
                    className="w-full pointer-events-none rounded-md h-40 object-contain lg:object-cover"
                    alt={certificate.title}
                  />
                </div>
              </div>

              <div className="flex items-center text-slate-300 text-sm justify-center gap-2">
                <a
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={certificate.link}
                  className="p-2 border border-custom-cyan bg-slate-900 hover:bg-slate-950 flex items-center gap-2 hover:text-custom-cyan rounded-lg transition duration-300"
                >
                  View link
                </a>
                <a
                  onClick={(e) => e.stopPropagation()}
                  href={certificate.download}
                  download
                  className="p-2 border border-custom-cyan bg-slate-900 hover:bg-slate-950 flex items-center gap-2 hover:text-custom-cyan rounded-lg transition duration-300"
                >
                  <IoMdDownload size={20} /> PDF
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="bg-slate-950 rounded-md overflow-hidden shadow-lg p-6 text-white max-w-xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {certificates
                .filter((certificate) => certificate.id === selectedId)
                .map((certificate) => (
                  <React.Fragment key={certificate.id}>
                    <motion.img
                      src={certificate.img}
                      alt={certificate.title}
                      className="w-full pointer-events-none rounded-md mb-6"
                    />
                    <motion.h2 className="text-xl lg:text-2xl text-center font-medium tracking-wide mb-6">
                      {certificate.title}
                    </motion.h2>
                    <div className="flex items-center justify-center text-sm sm:text-base gap-4">
                      <a
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={certificate.link}
                        className="p-2 border border-custom-cyan bg-slate-900 hover:bg-slate-950 flex gap-2 hover:text-custom-cyan rounded-lg transition duration-300"
                      >
                        View link
                      </a>
                      <a
                        onClick={(e) => e.stopPropagation()}
                        href={certificate.download}
                        download
                        className="p-2 border border-custom-cyan bg-slate-900 hover:bg-slate-950 flex items-center gap-2 hover:text-custom-cyan rounded-lg transition duration-300"
                      >
                        <IoMdDownload size={20} /> PDF
                      </a>
                    </div>
                    <motion.button
                      className="mt-4 p-2 border hover:bg-slate-800 transition-all border-custom-cyan rounded-lg"
                      onClick={() => setSelectedId(null)}
                    >
                      <IoMdClose />
                    </motion.button>
                  </React.Fragment>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
