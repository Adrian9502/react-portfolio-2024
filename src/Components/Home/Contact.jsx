export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative my-10 sm:my-16 lg:my-20 p-5 sm:p-10 overflow-x-hidden lg:p-14 gap-8 sm:gap-10 flex flex-col items-center justify-center text-slate-300"
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
      <div className="text-xl relative sm:text-3xl lg:text-5xl text-center flex flex-col gap-2 font-semibold">
        <div>Let&apos;s create something incredible.</div>
        <div>Feel free to connect!</div>
      </div>
      {/* say hello button */}
      <div className="flex flex-col lg:flex-row items-center gap-3 lg:justify-center lg:gap-10 w-full">
        <a
          href="mailto:bontojohnadrian@gmail.com"
          className="py-2 flex-nowrap px-2  border-2 hover:scale-105 hover:text-custom-cyan border-custom-cyan hover:bg-slate-950 transition-all duration-300 rounded-md"
        >
          <div className="flex items-center justify-center gap-1 px-2">
            <span>Say Hello!</span>
            <img
              src="https://media4.giphy.com/media/w1OBpBd7kJqHrJnJ13/giphy.gif?cid=790b7611c9icxd8cfi56ssiilibzs5nzxqmpqizjijmfhrad&ep=v1_stickers_search&rid=giphy.gif&ct=s"
              alt="waving hand gif"
              className="w-6 sm:w-8 lg:w-10 pointer-events-none"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
