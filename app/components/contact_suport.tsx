export default function Contact_suport() {
  return (
    <div className="flex flex-row w-[90%] mx-auto mt-24 ">
      <div className="w-[50%]  ">
        <p className="font-semibold text-[64px]">Contact support</p>
        <p className="text-[40px] font-normal mt-5">
          Answer as soon as possible
        </p>
        <div className="w-[90%] flex flex-row justify-between items-center mt-16">
          <div className="w-[346px] h-[104px] flex justify-center items-center border-[2.5px] border-[#F29AA7] rounded-[10px] relative ">
            <p className="text-[48px] font-medium absolute bottom-16 left-5  bg-white">
              Name
            </p>
            <input
              type="text"
              placeholder="Soroush Rasouli"
              className="w-full h-full text-[29px] pl-4 font-light placeholder:text-[#C0C0C0] placeholder:font-light  rounded-[10px] focus:outline-none"
            />
          </div>
          <div className="w-[346px] h-[104px] flex justify-center items-center border-[2.5px] border-[#F29AA7] rounded-[10px] relative ">
            <p className="text-[48px] font-medium absolute bottom-16 left-5  bg-white">
              Email
            </p>
            <input
              type="text"
              placeholder="admin@gmail.com"
              className="w-full h-full text-[29px] pl-4 font-light placeholder:text-[#C0C0C0] placeholder:font-light  rounded-[10px] focus:outline-none"
            />
          </div>
        </div>
        <div className="w-[90%] h-[231px] mt-14 flex flex-col-reverse border-[2.5px] border-[#F29AA7] rounded-[10px] relative">
          <p className="text-[48px] font-normal absolute bottom-[200px] left-5 bg-white ">
            your massage
          </p>
          <textarea
            name="your_massage"
            placeholder="Hello, in my opinion..."
            id=""
            className="w-full h-[85%] focus:outline-none placeholder:text-[29px] text-[37px] placeholder:font-light pl-4 placeholder:text-[#C0C0C0] "
          ></textarea>
        </div>
        <div className="w-[90%] items-center justify-center py-16">
          <button className="bg-[#F29AA7] w-[232px] h-[65px] text-[45px] mx-auto text-white rounded-[23px] block">
            send
          </button>
        </div>
      </div>
      <img
        src="/img/happy-call.jpg"
        alt="happy-call-img"
        className="w-[868px] h-[579px] mt-14"
      />
    </div>
  );
}
