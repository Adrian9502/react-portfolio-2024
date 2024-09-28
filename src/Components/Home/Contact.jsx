import React from "react";

// Helper function to split text into individual letters and keep spaces
const renderLetters = (text) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block ${
        letter === " " ? "w-2" : "hover:-translate-y-3 hover:text-custom-cyan"
      } transition-transform duration-100 cursor-default`}
    >
      {letter}
    </span>
  ));
};

export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative my-10 sm:my-16 lg:my-20 p-8 sm:p-10 lg:p-14 gap-8 sm:gap-10 flex flex-col items-center justify-center text-slate-300"
    >
      {/* doodle14 */}
      <img
        src="/Home/doodle14.png"
        className="absolute bottom-2 pointer-events-none w-10 sm:w-12 lg:w-16"
        alt="smiley"
      />
      {/* envelop right */}
      <img
        src="/envelop.png"
        className="absolute left-10 bottom-10 w-12 sm:w-14 rotate-12 lg:left-24 lg:bottom-3 lg:w-20 pointer-events-none"
        alt="envelop"
      />
      {/* coffee */}
      <img
        src="/coffee.png"
        className="absolute right-10 bottom-10 w-12 sm:w-14 -rotate-12 lg:right-24 lg:bottom-3 lg:w-20 pointer-events-none"
        alt="coffee"
      />
      <div className="text-2xl relative sm:text-3xl lg:text-5xl text-center font-medium">
        Ready to work together? <br className="hidden sm:block md:block " />
        Let&apos;s connect!
        {/* 3lines left */}
        <img
          src="/3lines.png"
          className="absolute -top-10 -left-12 w-12 sm:w-14 lg:-left-20 lg:-top-10 lg:w-20 pointer-events-none"
          alt="3lines"
        />
        {/* 3lines right */}
        <img
          src="/3linesright.png"
          className="absolute -top-10 -right-12 w-12 sm:w-14 lg:-right-20 lg:-top-10 lg:w-20 pointer-events-none"
          alt="3lines"
        />
        {/* TODO: RESPONSIVENESS OF THIS */}
      </div>
      {/* say hello button */}
      <div className="flex flex-col lg:flex-row items-center gap-3 lg:justify-center lg:gap-10 w-full">
        {/* lines left */}
        <img
          src="/line doodle.png"
          className="w-40 sm:w-60 lg:w-80 pointer-events-none"
          alt="lines"
        />

        <a
          href="mailto:bontojohnadrian@gmail.com"
          className="py-2 flex-nowrap px-2  border-2 hover:scale-105 hover:text-custom-cyan border-custom-cyan hover:bg-slate-950 transition-all duration-300 rounded-md"
        >
          <div className="flex items-center justify-center gap-1 min-w-[150px]">
            <span>Say Hello!</span>
            <img
              src="https://media4.giphy.com/media/w1OBpBd7kJqHrJnJ13/giphy.gif?cid=790b7611c9icxd8cfi56ssiilibzs5nzxqmpqizjijmfhrad&ep=v1_stickers_search&rid=giphy.gif&ct=s"
              alt="waving hand gif"
              className="w-6 sm:w-8 lg:w-10 pointer-events-none"
            />
          </div>
        </a>
        {/* lines right */}
        <img
          src="/line doodle.png"
          className="w-40 sm:w-60 lg:w-80 pointer-events-none"
          alt="lines"
        />
      </div>
    </section>
  );
}
