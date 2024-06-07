export default function Footer() {
  return (
    // this first div is hear to prevent the height to decrease
    <div>
      <footer className="w-full h-[406px] bg-[#F9D6DC29] flex flex-col items-center">
        <div className="w-[90%] h-full flex flex-row items-center justify-between">
          <div className="w-[30%] h-full flex flex-col items-start justify-evenly  ">
            <img src="/svg/logo.svg" alt="logo-icon" className="h-[44px]" />
            <div className="w-full flex flex-row justify-between">
              <img src="/svg/enamad.svg" alt="enamad-icon" />
              <img src="/svg/etehadieh.svg" alt="etehadieh-icon" />
              <img src="/svg/samandehi.svg" alt="samanadehi-icon" />
            </div>
          </div>
          <div className="w-[30%] h-full flex flex-col justify-evenly ">
            <div className="flex flex-row items-center justify-evenly">
              <img src="/svg/icons_email.svg" alt="email-icon" />
              <p className="font-semibold text-[48px] text-[#787878]">
                Email Address:
              </p>
            </div>
            <p className="font-semibold pl-11 text-[48px] text-[#787878]">
              info@sorme.com
            </p>
          </div>
          <div className="w-[30%] h-full flex flex-col justify-evenly ">
            <div className="flex flex-row items-center pl-11">
              <img src="/svg/icons_call.svg" alt="email-icon" />
              <p className="font-semibold text-[48px] text-[#787878]">
                Phone Call:
              </p>
            </div>
            <p className="font-semibold pl-11 text-[48px] text-[#787878]">
              02177111258
            </p>
          </div>
        </div>
        <p></p>
      </footer>
    </div>
  );
}
