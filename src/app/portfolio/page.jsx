"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "../../styles/navbar.css"

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Chat App",
    desc: " 𝐁𝐮𝐢𝐥𝐭 𝐚 𝐅𝐞𝐚𝐭𝐮𝐫𝐞-𝐑𝐢𝐜𝐡 𝐂𝐡𝐚𝐭 𝐀𝐩𝐩 𝐰𝐢𝐭𝐡 𝐑𝐞𝐚𝐜𝐭 & 𝐅𝐢𝐫𝐞𝐛𝐚𝐬𝐞: 𝐑𝐞𝐚𝐥-𝐭𝐢𝐦𝐞 𝐌𝐞𝐬𝐬𝐚𝐠𝐢𝐧𝐠, 𝐒𝐞𝐜𝐮𝐫𝐞 𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧, 𝐚𝐧𝐝 𝐒𝐥𝐞𝐞𝐤 𝐔𝐈",
    img: "/p1.png",
    link: "https://www.linkedin.com/posts/md-shakeel-71b415265_reactjs-mern-react-activity-7214257096626688000-diB0?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Admin Dashboard",
    desc: "omprehensive admin dashboard offering real-time analytics, user management, and customizable reports for efficient oversight.",
    img: "/p5.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7228068678972362753?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Restaurant Website",
    desc: " A visually stunning restaurant website.From concept to execution, my passion for design and commitment to excellence is reflected in every detail.",
    img: "/p2.png",
    link: "https://www.linkedin.com/posts/md-shakeel-71b415265_webdesign-projectshowcase-webdeveloper-activity-7177411573873799168-M4My?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "Apple Website",
    desc: "I have created a clone website that reimagines the essence of Apple's design and functionality. Utilizing HTML, CSS, and JavaScript, this project showcases a sleek and modern interface, paying homage to Apple's iconic aesthetic and user experience.",
    img: "/p3.png",
    link: "https://www.linkedin.com/posts/md-shakeel-71b415265_appleclone-webdesign-webdevelopment-activity-7132457339298746368-DsGQ?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Cake website",
    desc: "Developed a dynamic cake website with responsive design, seamless user experience, and efficient backend integration. Proud of this delicious project!",
    img: "/p4.png",
    link: "https://www.linkedin.com/posts/md-shakeel-71b415265_website-design-developer-activity-7217510089815904256-URxa?utm_source=share&utm_medium=member_desktop",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const handleArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center">
          <div>
            My Works
          </div>
          <div className="mt-8 flex flex-col items-center space-y-0">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="text-5xl"
                initial={{ y: 0 }}
                animate={{ y: 20 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2,
                }}
                onClick={handleArrowClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <a href={item.link} className="flex justify-end" target="_blank">

                    <button class="linkedin" >
                      <span class="icon"><svg fill="none" height="33" viewBox="0 0 120 120" width="33" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m120 60.0002c0 33.1366-26.8633 59.9998-60 59.9998-33.138 0-60-26.8632-60-59.9998 0-33.1376 26.8617-60.0002 60-60.0002 33.1364.00031715 60 26.8626 60 60.0002z" fill="#2867b2"></path><g fill="#fff"><path d="m63.8771 54.3451c.2959-.3181.411-.4154.4938-.5356 4.0325-5.884 9.7919-7.6141 16.5119-6.5811 7.7657 1.1953 12.7354 6.6312 14.004 14.949.3009 1.9723.4506 3.9525.449 5.9464-.0047 8.2817-.0177 16.563.0178 24.844.0054.9327-.2242 1.2067-1.1801 1.195-4.3386-.052-8.6787-.0514-13.0179 0-.9493.0104-1.1925-.2601-1.1874-1.1944.0352-7.7238.0228-15.4472.0152-23.1703-.0029-1.7554-.1234-3.4997-.6169-5.1996-1.5816-5.4524-7.7846-7.3664-12.2018-3.7408-2.3866 1.9581-3.3196 4.5473-3.3015 7.5947.0386 7.2858.0114 14.5713.0114 21.8571 0 .9558-.0533 1.9146.0162 2.8647.0608.8259-.2766.9848-1.0248.98-4.4194-.0298-8.8379-.033-13.2567.0019-.8017.0063-1.09-.1567-1.0808-1.038.0647-6.5672.091-13.1375.0939-19.7052.0012-8.0822-.0149-16.1637-.0714-24.2455-.006-.8848.1792-1.1465 1.0932-1.1363 4.4194.0495 8.8383.0422 13.2571.0051.7957-.0073 1.0177.2321.9923 1.0063-.0549 1.6656-.0165 3.3335-.0165 5.3026z"></path><path d="m40.1241 71.1028c0 7.2826-.0155 14.5659.0187 21.8491.0038.9045-.1785 1.2264-1.1645 1.2134-4.377-.0584-8.7549-.0447-13.1324-.0079-.8129.0066-1.0869-.1963-1.086-1.0507.0213-14.6861.0178-29.3712-.0041-44.0569-.0009-.765.1856-1.0209.9882-1.0133 4.4579.038 8.9154.0428 13.3722-.0032.8896-.0098 1.0279.3149 1.0244 1.1008-.027 7.3235-.0152 14.6458-.0165 21.9687z"></path><path d="m32.5678 25.8388c5.8726.0064 9.6878 4.6579 8.2959 10.1135-1.0517 4.1194-5.3122 6.491-10.2299 5.6924-5.2234-.8477-8.1348-5.9452-6.21-10.8714 1.2013-3.0767 4.2757-4.9392 8.144-4.9345z"></path></g></g></svg></span>
                      <span class="text1">ViewProject</span>
                      <span class="text2">linkdn</span>
                    </button>

                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl md:text-6xl lg:text-8xl xl:text-7xl" style={{ paddingTop: "2rem" }}>
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-74 h-64 md:w-[500px] md:h-[500px] text-4xl"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web Developer and UI/UX Designer✨
              </textPath>
            </text>
          </motion.svg>
          {/* <Link
            href="/contact"
            passHref
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          > */}
          {/* <Link href="/contact" passHref className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center" style={{padding:"10px"}}  > */}
          <Link href="/contact" passHref className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center" style={{ padding: "10px" }}>
            Hire Me

          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;