import Image from "next/image";

export default function Portifolio() {
  return (
    <section className="bg-[#021227] px-7 sm:px-14 py-16 max-w-screen-xl mx-auto" id="projects">
    <div className="flex items-center justify-center gap-12 pb-12">
      <div className="h-px flex-1 bg-[#309543] hidden sm:block"></div>
      <h2 className="text-4xl font-bold text-center">Portifolio</h2>
      <div className="h-px flex-1 bg-[#309543] hidden sm:block"></div>
    </div>

    <div>

      <div className="flex flex-col sm:flex-row sm:gap-12 mt-20">

        <div className="mockup-window border border-base-300 sm:w-1/2 h-[300px] order-2	sm:order-none">
          <div className="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
            <div className="featured-project-img-01  transition-all	duration-500  ">
              <Image width={300} height={100} src="/paytm-screenshot.webp" alt="paytm clone" className="" />
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 h-[300px] flex flex-col justify-center order-1 sm:order-none">
          <h2 className="sm:text-end text-3xl font-bold mb-8 sm:relative sm:right-[10%] lg:right-1/4">01. Paytm.com Clone
          </h2>
          <p
            className="bg-[#051830] pl-8 pr-2 py-4 mb-2 rounded shadow-sm sm:relative sm:right-[10%] lg:right-1/4 text-[#ffffff78]">
            This is an assignment given in - JavaScript Full Stack Web Developer Bootcamp - by iNeuron, built using HTML5,
            CSS3 and Tailwind CSS.
            <span className="text-[#309543] font-medium">This Site is Fully Responsive</span>
          </p>
          <div className="sm:relative sm:right-[10%] lg:right-1/4">
            <ul className="flex gap-4 sm:justify-end text-sm">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="flex gap-4 mt-2 sm:justify-end sm:relative sm:right-[10%] lg:right-1/4">
            <a href="https://github.com/prakash-naikwadi/paytm-clone" target="_blank" rel="noreferrer" className="w-9 h-9">
              <ion-icon name="logo-github" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
            <a href="https://paytm-clone-01.netlify.app/" target="_blank" rel="noreferrer" className="w-9 h-9">
              <ion-icon name="desktop-outline" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
          </div>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row sm:gap-12 mt-20 sm:mt-20">

        <div className="sm:w-1/2 h-[300px] flex flex-col justify-center">
          <h2 className=" text-3xl font-bold mb-8 sm:relative sm:left-[10%] lg:left-1/4">02. Rode.com Clone</h2>
          <p
            className="bg-[#051830] pl-8 pr-2 py-4 mb-2 rounded shadow-sm sm:relative sm:left-[10%] lg:left-1/4 z-40 text-[#ffffff78]">
            This is an assignment given in - JavaScript Full Stack Web Developer Bootcamp - by iNeuron, built using HTML5,
            CSS3 and Tailwind CSS.
            <span className="text-[#309543] font-medium">This Site is Fully Responsive</span>
          </p>
          <div className="sm:relative sm:left-[10%] lg:left-1/4">
            <ul className="flex gap-4 justify-start text-sm">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="flex gap-4 mt-2 justify-start sm:relative sm:left-[10%] lg:left-1/4">
            <a href="https://github.com/prakash-naikwadi/rode-website-clone" target="_blank" rel="noreferrer" className="w-9 h-9">
              <ion-icon name="logo-github" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
            <a href="https://rode-website-clone.netlify.app/" target="_blank" rel="noreferrer" className="w-9 h-9">
              <ion-icon name="desktop-outline" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
          </div>
        </div>
        
        <div className="mockup-window border border-base-300 sm:w-1/2 h-[300px]">
          <div className="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
            <div className="featured-project-img-01  transition-all	duration-500  ">
              <Image width={300} height={100} src="/rode-website-clone.webp" alt="rode website clone" className="" />
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row sm:gap-12 mt-20 sm:mt-20">

        <div className="mockup-window border border-base-300 sm:w-1/2 h-[300px] order-2 sm:order-none	">
          <div className="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
            <div className="featured-project-img-01  transition-all	duration-500  ">
              <Image width={300} height={100} src="/shopify.webp" alt="shopify clone" />
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 h-[300px] flex flex-col justify-center">
          <h2 className="sm:text-end text-3xl font-bold mb-8 sm:relative sm:right-[10%] lg:right-1/4">03. Shopify.in Clone
          </h2>
          <p
            className="bg-[#051830] pl-8 pr-2 py-4 mb-2 rounded shadow-sm sm:relative sm:right-[10%] lg:right-1/4 text-[#ffffff78]">
            This is an assignment given in - JavaScript Full Stack Web Developer Bootcamp - by iNeuron, built using HTML5,
            CSS3 and Tailwind CSS.
            <span className="text-[#309543] font-medium">This Site is Fully Responsive</span>
          </p>
          <div className="sm:relative sm:right-[10%] lg:right-1/4">
            <ul className="flex gap-4 sm:justify-end text-sm">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="flex gap-4 mt-2 sm:justify-end sm:relative sm:right-[10%] lg:right-1/4">
            <a href="https://github.com/prakash-naikwadi/shopify-clone" target="_blank" rel="noreferrer" className="w-9 h-9">
              <ion-icon name="logo-github" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
            <a href="https://shopify-website-clone.netlify.app/" target="_blank" rel="noreferrer" className="w-9 h-9">
              <ion-icon name="desktop-outline" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
          </div>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row sm:gap-12 mt-20 sm:mt-20">

        <div className="sm:w-1/2 h-[300px] flex flex-col justify-center">
          <h2 className=" text-3xl font-bold mb-8 sm:relative sm:left-[10%] lg:left-1/4">04. Omnifood</h2>
          <p
            className="bg-[#051830] pl-8 pr-2 py-4 mb-2 rounded shadow-sm sm:relative sm:left-[10%] lg:left-1/4 z-40 text-[#ffffff78]">
            A Food Delivery AI Startup Fully Responsive website, built using HTML5, CSS3, and JavaScript.
            <span className="text-[#309543] font-medium">This Site is Fully Responsive</span>
          </p>
          <div className="sm:relative sm:left-[10%] lg:left-1/4">
            <ul className="flex gap-4 justify-start text-sm">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="flex gap-4 mt-2 justify-start sm:relative sm:left-[10%] lg:left-1/4">
            <a href="https://github.com/prakash-naikwadi/omnifood-start-up-html-css-js" target="_blank" rel="noreferrer" className="w-9 h-9">
              <ion-icon name="logo-github" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
            <a href="https://omnifood-ai-startup.netlify.app/" target="_blank" rel="noreferrer" className="w-9 h-9">
              <ion-icon name="desktop-outline" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
          </div>
        </div>

        <div className="mockup-window border border-base-300 sm:w-1/2 h-[300px]">
          <div className="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
            <div className="featured-project-img-01  transition-all	duration-500  ">
              <Image width={300} height={100} src="/omnifood.webp" alt="omnifood" />
            </div>
          </div>
        </div>


      </div>

    </div>

    <div className="mt-20">
      <h2 className="text-center text-3xl font-semibold">Honorable Mentions</h2>


      <div className=" px-5 py-24">
        <div className="flex flex-wrap gap-y-4 -m-4">

          <div className=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div className="flex relative mentions-project rounded-md">
              <Image width={300} height={100} alt="roduct-designer-landing-page"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="/project-15.webp" />
              <div className="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 className="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Product Designer Landing Page</h1>
                <p className="leading-relaxed">
                  This is a assignment given in - JavaScript Full Stack Web Developer Bootcamp - by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div className="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/product-designer-landing-page" target="_blank" rel="noreferrer"
                    className="w-9 h-9">
                    <ion-icon name="logo-github" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://product-designer-landing-page-15.netlify.app/" target="_blank" rel="noreferrer" className="w-9 h-9">
                    <ion-icon name="desktop-outline" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div className="flex relative mentions-project rounded-md">
              <Image width={300} height={100} alt="ance-home-landing-page"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="/project-14.webp" />
              <div className="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 className="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Dance Home Landing Page</h1>
                <p className="leading-relaxed">
                  This is a assignment given in - JavaScript Full Stack Web Developer Bootcamp - by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div className="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/dance-home-landing-page" target="_blank" rel="noreferrer" className="w-9 h-9">
                    <ion-icon name="logo-github" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://dance-home-page-014.netlify.app/" target="_blank" rel="noreferrer" className="w-9 h-9">
                    <ion-icon name="desktop-outline" className="w-8 h-8 transition-all hover:text-[#309543]">
                    </ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div className="flex relative mentions-project rounded-md">
              <Image width={300} height={100} alt="aas-landing-page" className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="/project-13.webp" />
              <div className="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 className="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Saas Landing Page</h1>
                <p className="leading-relaxed">
                  This is a assignment given in - JavaScript Full Stack Web Developer Bootcamp - by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div className="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/saas-landing-page" target="_blank" rel="noreferrer" className="w-9 h-9">
                    <ion-icon name="logo-github" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://saas-landing-page-0013.netlify.app/" target="_blank" rel="noreferrer" className="w-9 h-9">
                    <ion-icon name="desktop-outline" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div className="flex relative mentions-project rounded-md">
              <Image width={300} height={100} alt="usiness-landing-page"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="/project-12.webp" />
              <div className="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 className="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Business Landing Page</h1>
                <p className="leading-relaxed">
                  This is a assignment given in - JavaScript Full Stack Web Developer Bootcamp - by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div className="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/business-landing-page" target="_blank" rel="noreferrer" className="w-9 h-9">
                    <ion-icon name="logo-github" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://business-landing-page-0012.netlify.app/" target="_blank" rel="noreferrer" className="w-9 h-9">
                    <ion-icon name="desktop-outline" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div className="flex relative mentions-project rounded-md">
              <Image width={300} height={100} alt="eb-hosting-landing-page"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="/project-11.webp" />
              <div className="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HTML CSS</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Web Hosting Landing Page</h1>
                <p className="leading-relaxed">
                  This is a assignment given in - JavaScript Full Stack Web Developer Bootcamp - by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div className="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/web-hosting-landing-page" target="_blank" rel="noreferrer"
                    className="w-9 h-9">
                    <ion-icon name="logo-github" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://web-hosting-landing-page-11.netlify.app/" target="_blank" rel="noreferrer" className="w-9 h-9">
                    <ion-icon name="desktop-outline" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div className="flex relative mentions-project rounded-md">
              <Image width={300} height={100} alt="eveloper-landing-page"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="/project-09.webp" />
              <div className="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HTML CSS</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Developer Landing Page</h1>
                <p className="leading-relaxed">
                  This is a assignment given in - JavaScript Full Stack Web Developer Bootcamp - by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div className="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/omnifood-start-up-html-css-js" target="_blank" rel="noreferrer"
                    className="w-9 h-9">
                    <ion-icon name="logo-github" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://developer-landing-page-009.netlify.app/" target="_blank" rel="noreferrer" className="w-9 h-9">
                    <ion-icon name="desktop-outline" className="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </section>

  )
}
