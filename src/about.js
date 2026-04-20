export function AboutController(){
    const content = document.getElementById("content");
    content.textContent = "";

    const container = document.createElement("div");
    container.setAttribute("class", "about-container");

    const adressDiv = document.createElement("div");

    const adressHeader = document.createElement("p");
    adressHeader.setAttribute("class", "adress");
    adressHeader.textContent = "Adress";

    const adress = document.createElement("p");
    adress.textContent = "742 Evergreen Terrace, Springfield"

    const workingHoursDiv = document.createElement("div");
    
    const workingHoursHeader = document.createElement("p");
    workingHoursHeader.textContent = "Working hours";
    workingHoursHeader.setAttribute("class", "working-hours");

    const uList = document.createElement("ul");

    const listEl1 = document.createElement("li");
    listEl1.textContent = "Monday – Friday: 9:00 AM – 5:00 PM";

    const listEl2 = document.createElement("li");
    listEl2.textContent = "Saturday: 10:00 AM – 2:00 PM";

    const listEl3 = document.createElement("li");
    listEl3.textContent = "Sunday: Closed";

    uList.append(listEl1, listEl2, listEl3);
    workingHoursDiv.append(workingHoursHeader, uList);
    adressDiv.append(adressHeader, adress);
    container.append(adressDiv, workingHoursDiv);
    content.append(container);
}