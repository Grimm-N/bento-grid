import { gsap } from "gsap";

// Создаем объект matchMedia для обработки медиа-запросов
const mm = gsap.matchMedia();

// Условие для экранов шириной более 37rem
mm.add("(min-width: 37rem)", () => {
  // Изменяем стиль сетки
  const bento = document.querySelector(".bento");
  if (bento) {
    bento.style.gridTemplateColumns = "repeat(2, 16rem)";
    bento.style.gridTemplateRows = "repeat(5, auto)";
    bento.style.gap = "2rem";
  }

  // Анимируем элементы
  gsap.to(".bento__item--1", { 
    gridColumn: "1 / span 2", 
    opacity: 1, 
    transform: "scale(1)", 
    duration: 0.5 
  });

  gsap.to(".bento__item--2", { 
    gridColumn: "1", 
    gridRow: "2", 
    opacity: 1, 
    transform: "scale(1)", 
    duration: 0.5 
  });

  gsap.to(".bento__item--3", { 
    gridColumn: "2", 
    gridRow: "2", 
    opacity: 1, 
    transform: "scale(1)", 
    duration: 0.5 
  });

  gsap.to(".bento__item--5", { 
    gridColumn: "1 / span 2", 
    gridRow: "5", 
    opacity: 1, 
    transform: "scale(1)", 
    duration: 0.5 
  });

  gsap.to(".bento__item--8", { 
    gridColumn: "2", 
    gridRow: "3", 
    opacity: 1, 
    transform: "scale(1)", 
    duration: 0.5 
  });
});

// Условие для экранов шириной менее 37rem (возвращаем в одну колонку)
mm.add("(max-width: 37rem)", () => {
  const bento = document.querySelector(".bento");
  if (bento) {
    bento.style.gridTemplateColumns = "1fr";
    bento.style.gap = "1rem";
  }

  // Анимация для всех элементов при уменьшении экрана
  gsap.to(".bento__item", { 
    opacity: 1, 
    transform: "scale(1)", 
    duration: 0.5 
  });
});
