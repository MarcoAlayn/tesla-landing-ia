import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetRecommendedModel } from "../../redux/actions";

const Header = () => {
  const recommendedModel = useSelector((state) => state.recommendedModel);
  const dispatch = useDispatch();

  useEffect(() => {
    const header = document.querySelector("#landing-header");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const color = entry.target.getAttribute("data-header-color");
          header.style.color = color;
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll(".landing-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const headerRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    const listItem = headerRef.current.querySelectorAll("li");
    const menuBackdrop = backdropRef.current;

    const handleMouseEnter = (event) => {
      const { left, top, width, height } = event.target.getBoundingClientRect();
      menuBackdrop.style.setProperty("--left", `${left}px`);
      menuBackdrop.style.setProperty("--top", `${top}px`);
      menuBackdrop.style.setProperty("--width", `${width}px`);
      menuBackdrop.style.setProperty("--height", `${height}px`);
      menuBackdrop.style.opacity = "1";
      menuBackdrop.style.visibility = "visible";
    };

    const handleMouseLeave = () => {
      menuBackdrop.style.opacity = "0";
      menuBackdrop.style.visibility = "hidden";
    };

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      listItem.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const listItem = document.querySelectorAll("#landing-header li");
  const menuBackdrop = document.querySelector("#menu-backdrop");

  listItem.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const { left, top, width, height } = item.getBoundingClientRect();
      menuBackdrop.style.setProperty("--left", `${left}px`);
      menuBackdrop.style.setProperty("--top", `${top}px`);
      menuBackdrop.style.setProperty("--width", `${width}px`);
      menuBackdrop.style.setProperty("--height", `${height}px`);
      menuBackdrop.style.opacity = "1";
      menuBackdrop.style.visibility = "visible";
    });
    item.addEventListener("mouseleave", () => {
      menuBackdrop.style.opacity = "0";
      menuBackdrop.style.visibility = "hidden";
    });
  });

  const handlerResetRecommendationModel = () => {
    dispatch(resetRecommendedModel());
  };

  return (
    <header
      ref={headerRef}
      id='landing-header'
      className='font-sans py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white flex-col sm:flex-row'
    >
      <a href='/' className='flex flex-grow basis-0'>
        <Logo />
      </a>
      <nav>
        <ul className='flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-300 [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
          <li>
            <Link to='/models'>Model S</Link>
          </li>
          <li>
            <Link to='/model3'>Model 3</Link>
          </li>
          <li>
            <Link to='/modelx'>Model X</Link>
          </li>
          <li>
            <Link to='/modely'>Model Y</Link>
          </li>
        </ul>
      </nav>
      <nav className='flex flex-grow basis-0 justify-end '>
        <ul className='flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-300 [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
          <li>
            {recommendedModel.length !== 0 ? (
              <Link onClick={handlerResetRecommendationModel} to='/profile'>
                Reintentar Recomendación
              </Link>
            ) : (
              <Link to='/choose'>Ayúdame a elegir</Link>
            )}
          </li>
        </ul>
      </nav>

      <div
        ref={backdropRef}
        id='menu-backdrop'
        className={`
      absolute bg-black/30 backdrop-blur-sm rounded
      left-0 top-0
      translate-x-[var(--left)] translate-y-[var(--top)]
      w-[var(--width)] h-[var(--height)]
      transition-all duration-300
      ease-in-out opacity-0 -z-10
      `}
      ></div>
    </header>
  );
};

export default Header;
