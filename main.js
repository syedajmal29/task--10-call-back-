let mcontainer = document.createElement("div");
mcontainer.classList.add(
  "container-fluid",
  "d-flex",
  "justify-content-center",
  "align-items-center"
);
mcontainer.style.minHeight = "100vh";
document.body.append(mcontainer);

let container = document.createElement("div");
container.classList.add("container", "d-flex", "justify-content-center");
container.style.background = "black";
container.style.height = "100px";
mcontainer.appendChild(container);

let heading = document.createElement("h1");
heading.classList.add(
  "container-fluid",
  "text-center",
  "text-light",
  "d-flex",
  "justify-content-center",
  "align-items-center"
);
heading.setAttribute("id", "run");
heading.style.background = "blue";
heading.style.height = "100px";
heading.style.width = "10%";
container.appendChild(heading);

setTimeout(() => {
  heading.textContent = "10";
  setTimeout(() => {
    heading.textContent = "9";
    setTimeout(() => {
      heading.textContent = "8";
      setTimeout(() => {
        heading.textContent = "7";
        setTimeout(() => {
          heading.textContent = "6";
          setTimeout(() => {
            heading.textContent = "5";
            setTimeout(() => {
              heading.textContent = "4";
              setTimeout(() => {
                heading.textContent = "3";
                setTimeout(() => {
                  heading.textContent = "2";
                  setTimeout(() => {
                    heading.textContent = "1";
                    setTimeout(() => {
                      heading.textContent = "Happy Independence Day!!!";
                      heading.style.width = "50%";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
