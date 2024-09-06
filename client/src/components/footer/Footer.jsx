import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebookF,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logoNav from "@/assets/converted/logoNav.webp";
import Form from "./form/Form";
import Icons from "./icons/Icons";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <footer
        className="w-full bg-bg-nav mt-[8rem] border border-transparent dark:border-t dark:border-t-[#292929]"
        id="contact"
      >
        <section className="py-16 px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-16 lg:gap-6">
          <div className="sm:w-11/12 w-[96%] mx-auto max-w-[1400px]">
            <div className="flex flex-col gap-12 lg:gap-8 items-center justify-center h-full container-icons">
              <div className="text-color-smoke-high flex flex-col justify-center items-center">
                <a
                  href="#"
                  className="flex items-center gap-4 flex-grow basis-0 relative z-50 text-white mx-auto"
                >
                  <p className="text-4xl dark:text-white">
                    High
                    <span className="text-White dark:text-white font-bold">Skill</span>
                  </p>
                  <img
                    src={logoNav}
                    alt="logo-img"
                    className="w-full max-w-10 invert-[1]"
                  />
                </a>
                <p className="italic mt-6 text-center sm:text-left">
                  " Combino creatividad y eficiencia para desarrollar soluciones
                  tecnológicas que no solo funcionan, sino que también marcan la
                  diferencia. Mi enfoque es simple: cada línea de código debe acercar a tu
                  empresa a su próximo gran logro "
                </p>
              </div>
              <div className=" flex flex-col gap-4 w-full">
                <h3 className="text-4xl text-[#ebebeb] text-center font-bold">Social</h3>
                <hr className="w-full h-[2px]" />
                <div className="flex gap-[0.85rem] sm:gap-4 justify-center items-center flex-wrap max-w-[450px] mx-auto w-full">
                  <Icons src={"https://facebook.com"} ico={faFacebookF} />
                  <Icons src={"https://facebook.com"} ico={faGithub} />
                  <Icons src={"https://facebook.com"} ico={faLinkedin} />
                  <Icons src={"https://facebook.com"} ico={faInstagram} />
                  <Icons src={"https://facebook.com"} ico={faWhatsapp} />
                  <Icons src={"https://facebook.com"} ico={faXTwitter} />
                </div>
              </div>
            </div>
          </div>
          <Form />
        </section>
        <section className="border-t border-t-[#3f3f3f] py-4">
          <h2 className="text-white text-center text-xl footer-text">
            High<span className="font-extrabold">Skill</span> &copy;{date}{" "}
            <span className="text-lg text-gray-400">version 1.0</span>
          </h2>
        </section>
      </footer>
    </>
  );
}

export default Footer;
