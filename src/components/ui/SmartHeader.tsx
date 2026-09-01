"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ContactTrigger } from "./ContactTrigger";

export function SmartHeader() {
  const easePremium: [number, number, number, number] = [0.76, 0, 0.24, 1];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > (previous ?? 0) && latest > 150) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

      const navLinks = [
    { label: "Desarrollo", href: "/desarrollo" },
    { label: "Agentes", href: "/agentes" },
    { label: "Identidad", href: "/identidad" },
    { label: "Ecosistema", href: "/ecosistema" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: isHeaderHidden ? "-100%" : 0 }} 
        transition={{ duration: 1, ease: easePremium, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isScrolled ? "bg-black/60 backdrop-blur-md border-b border-white/5" : "bg-transparent mix-blend-difference"}`}
      >
        <div className="px-6 md:px-12 py-5 flex items-center justify-between w-full">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: easePremium }} className="flex justify-start">
            <Link href="/" aria-label="espin" className="flex items-center text-white transition-colors">
              <svg aria-hidden="true" className="h-10 md:h-10 w-auto" viewBox="0 0 1606 564" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1277.06 469.262V188.012H1323.94V225.365C1330.94 215.925 1339.56 208.031 1349.82 201.684C1360.23 195.336 1374.07 190.616 1391.32 187.523C1408.74 184.268 1431.52 182.641 1459.68 182.641C1496.46 182.641 1525.43 186.221 1546.59 193.383C1567.92 200.544 1583.05 213.321 1592 231.713C1600.96 250.105 1605.43 276.146 1605.43 309.838V469.262H1558.31V309.838C1558.31 290.632 1556.68 275.17 1553.43 263.451C1550.17 251.732 1544.56 242.862 1536.58 236.84C1528.77 230.818 1517.95 226.83 1504.11 224.877C1490.28 222.761 1472.7 221.703 1451.38 221.703C1418.83 221.703 1393.27 224.389 1374.72 229.76C1356.16 235.131 1343.06 243.594 1335.41 255.15C1327.76 266.544 1323.94 281.436 1323.94 299.828V469.262H1277.06Z" fill="currentColor"/>
                <path d="M1170.71 469.262V203.637H1217.59V469.262H1170.71ZM1139.46 141.625L1123.84 118.188L1264.46 1L1293.27 42.9922L1139.46 141.625Z" fill="currentColor"/>
                <path d="M1138.77 142L1123 118.333L1264.93 0L1294 42.4028L1138.77 142Z" fill="#F5B700"/>
                <path d="M1065.15 327.172C1065.15 303.897 1063.93 285.261 1061.49 271.264C1059.21 257.266 1054.08 246.768 1046.11 239.77C1038.13 232.608 1025.68 227.807 1008.75 225.365C991.988 222.924 969.038 221.703 939.904 221.703C913.374 221.703 891.89 222.924 875.451 225.365C859.012 227.807 846.398 232.608 837.609 239.77C828.82 246.768 822.798 257.266 819.543 271.264C816.288 285.261 814.66 303.897 814.66 327.172C814.66 351.26 816.288 370.548 819.543 385.033C822.798 399.519 828.82 410.424 837.609 417.748C846.398 424.91 859.012 429.711 875.451 432.152C891.89 434.431 913.374 435.57 939.904 435.57C969.038 435.57 991.988 434.431 1008.75 432.152C1025.68 429.711 1038.13 424.91 1046.11 417.748C1054.08 410.424 1059.21 399.519 1061.49 385.033C1063.93 370.548 1065.15 351.26 1065.15 327.172ZM767.785 563.012V188.012H814.66V219.994C826.542 204.206 842.818 194.034 863.488 189.477C884.322 184.919 909.794 182.641 939.904 182.641C971.48 182.641 998.173 184.268 1019.98 187.523C1041.96 190.779 1059.7 197.289 1073.21 207.055C1086.71 216.82 1096.56 231.306 1102.75 250.512C1108.93 269.717 1112.02 295.271 1112.02 327.172C1112.02 360.049 1108.93 386.335 1102.75 406.029C1096.56 425.723 1086.71 440.535 1073.21 450.463C1059.7 460.229 1041.96 466.658 1019.98 469.75C998.173 473.005 971.48 474.633 939.904 474.633C909.794 474.633 884.322 472.354 863.488 467.797C842.818 463.24 826.542 452.986 814.66 437.035V563.012H767.785Z" fill="currentColor"/>
                <path d="M547.561 474.633C513.381 474.633 485.874 473.493 465.041 471.215C444.37 468.936 428.664 464.704 417.922 458.52C407.342 452.335 400.181 443.546 396.438 432.152C392.857 420.759 391.066 405.948 391.066 387.719H435.988C435.988 397.973 436.721 406.273 438.186 412.621C439.65 418.806 443.801 423.607 450.637 427.025C457.473 430.281 468.54 432.559 483.84 433.861C499.302 435.001 520.949 435.57 548.781 435.57C578.241 435.57 601.109 435.001 617.385 433.861C633.824 432.559 645.624 430.281 652.785 427.025C659.947 423.607 664.26 418.725 665.725 412.377C667.352 406.029 668.166 397.647 668.166 387.23C668.166 374.535 667.027 365.014 664.748 358.666C662.469 352.318 657.098 348.087 648.635 345.971C640.171 343.692 626.662 342.471 608.107 342.309L496.291 341.088C467.482 340.762 445.51 338.321 430.373 333.764C415.236 329.206 404.901 321.231 399.367 309.838C393.833 298.282 391.066 281.924 391.066 260.766C391.066 241.072 394.077 225.854 400.1 215.111C406.285 204.369 415.887 196.719 428.908 192.162C441.929 187.605 458.856 184.919 479.689 184.105C500.523 183.129 525.669 182.641 555.129 182.641C589.797 182.641 617.303 183.699 637.648 185.814C658.156 187.93 673.456 191.918 683.547 197.777C693.801 203.637 700.474 212.182 703.566 223.412C706.822 234.48 708.449 248.965 708.449 266.869H663.527C663.527 256.29 662.795 247.989 661.33 241.967C659.865 235.782 655.878 231.306 649.367 228.539C643.02 225.609 632.603 223.738 618.117 222.924C603.794 222.11 583.612 221.703 557.57 221.703C527.948 221.703 504.917 222.029 488.479 222.68C472.04 223.331 460.158 224.877 452.834 227.318C445.51 229.76 441.034 233.666 439.406 239.037C437.779 244.245 436.965 251.488 436.965 260.766C436.965 270.206 437.453 277.693 438.43 283.227C439.569 288.598 442.417 292.667 446.975 295.434C451.532 298.201 458.938 300.072 469.191 301.049C479.608 301.863 494.094 302.351 512.648 302.514L609.084 303.49C638.055 303.816 660.028 306.257 675.002 310.814C690.139 315.209 700.393 323.428 705.764 335.473C711.298 347.354 714.064 364.607 714.064 387.23C714.064 407.576 711.053 423.607 705.031 435.326C699.172 447.045 689.732 455.753 676.711 461.449C663.69 466.983 646.519 470.564 625.197 472.191C604.038 473.819 578.16 474.633 547.561 474.633Z" fill="currentColor"/>
                <path d="M329.834 386.766C329.834 407.762 326.66 424.282 320.312 436.326C314.128 448.37 304.606 457.16 291.748 462.693C278.89 468.227 262.451 471.727 242.432 473.191C222.575 474.819 198.893 475.633 171.387 475.633C139.974 475.633 113.281 474.005 91.3086 470.75C69.4987 467.658 51.8392 461.229 38.3301 451.463C24.9837 441.535 15.2181 426.723 9.0332 407.029C3.01107 387.335 0 361.049 0 328.172C0 296.271 2.92969 270.717 8.78906 251.512C14.8112 232.306 24.4954 217.82 37.8418 208.055C51.1882 198.289 68.6849 191.779 90.332 188.523C112.142 185.268 138.753 183.641 170.166 183.641C206.136 183.641 235.921 186.163 259.521 191.209C283.122 196.255 300.7 205.857 312.256 220.018C323.975 234.178 329.834 254.93 329.834 282.273V342.576H47.1191C47.2819 363.41 48.7467 380.092 51.5137 392.625C54.2806 405.158 59.8145 414.598 68.1152 420.945C76.416 427.293 88.7858 431.525 105.225 433.641C121.826 435.594 143.88 436.57 171.387 436.57C196.126 436.57 216.064 436.082 231.201 435.105C246.501 434.129 258.057 432.013 265.869 428.758C273.844 425.34 279.215 420.294 281.982 413.621C284.749 406.948 286.133 397.996 286.133 386.766H329.834ZM170.166 222.703C143.636 222.703 122.233 223.68 105.957 225.633C89.8438 227.586 77.5553 231.411 69.0918 237.107C60.6283 242.641 54.8503 250.942 51.7578 262.01C48.8281 273.077 47.2819 287.645 47.1191 305.711H284.912V282.273C284.912 270.555 283.529 260.87 280.762 253.221C278.158 245.408 272.949 239.305 265.137 234.91C257.324 230.353 245.768 227.179 230.469 225.389C215.332 223.598 195.231 222.703 170.166 222.703Z" fill="currentColor"/>
              </svg>
            </Link>
          </motion.div>
          
          {/* Nav Right (CTA + Hamburger) */}
          <div className="flex justify-end items-center gap-4 md:gap-8 relative z-[110]">
            <ContactTrigger className="!hidden md:!inline-flex">
            <button type="button" className="rings-btn small">
              
              <i></i><i></i><i></i>
              <span>SOLICITAR AUDITORÍA</span>
              <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
            
            </button>
          </ContactTrigger>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-4 focus:outline-none transition-colors relative w-12 h-12 flex items-center justify-center bg-transparent group"
              aria-label="Toggle menu"
            >
              <div className="relative w-8 h-5">
                <span className={`absolute left-0 w-8 h-[2px] bg-white group-hover:bg-[#F5B700] transition-all duration-300 ${isMobileMenuOpen ? 'top-2.5 rotate-45' : 'top-0'}`}></span>
                <span className={`absolute left-0 w-8 h-[2px] bg-white group-hover:bg-[#F5B700] transition-all duration-300 top-2.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 w-8 h-[2px] bg-white group-hover:bg-[#F5B700] transition-all duration-300 ${isMobileMenuOpen ? 'top-2.5 -rotate-45' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: "-100%" }} 
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#111110] z-[100] flex flex-col justify-center overflow-y-auto"
          >
            <div className="flex items-center justify-between w-full px-6 md:px-12 absolute top-6 left-0 right-0 z-[120]">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#F5B700] p-4 text-4xl transition-colors font-light ml-auto" aria-label="Cerrar menú">×</button>
            </div>
            <div className="w-full max-w-7xl mx-auto flex flex-col px-6 py-24 md:px-16 md:py-32 mt-12 md:mt-0">
              {navLinks.map((link, index) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={(e) => handleSmoothScroll(e, link.href)} 
                    className="group block py-6 md:py-10 border-t border-zinc-800 transition-colors"
                  >
                    <div className="flex flex-row items-baseline gap-4 md:gap-10 transform group-hover:translate-x-3 md:group-hover:translate-x-6 transition-transform duration-300 ease-out">
                      <span className="font-space-mono text-sm md:text-xl text-[#F5B700]">0{index + 1}</span>
 <span className="font-clash font-semibold font-bold uppercase text-white group-hover:text-[#F5B700] transition-colors duration-300" style={{ fontSize: 'clamp(1.8rem, 6vw, 6rem)', lineHeight: 1 }}> 
                        {link.label}
                      </span>
                    </div>
                  </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
