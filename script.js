const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {

        faqs.forEach(item => {
            if (item !== faq) {
                item.classList.remove("active");
            }
        });

        faq.classList.toggle("active");

    });
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav__items li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(li => {
    li.classList.remove("active");

    const link = li.querySelector("a");

    if (link.getAttribute("href").includes(current)) {
      li.classList.add("active");
    }
  });
});