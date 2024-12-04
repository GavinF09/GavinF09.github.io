var PROFILEPATH = "profile/"
$.getJSON(PROFILEPATH + "education.json", (data) => {
    data.forEach((edu) => {
        let educationEntry = `
            <div class="education-block d-flex align-items-center">
                <img src="images/education/${edu.image}" alt="${edu.school}">
                <div class="education-body flex-grow-1">
                    <h3>${edu.school}</h3>
                    <span class="education-date">${edu.date.start} - ${edu.date.end}</span>
                    <h4>${edu.course}</h4>
                    ${edu.body != undefined ? "<p>" + edu.body + "</p>" : ""}
                    ${edu.points.length != 0 ? "<ul><li>" + edu.points.join("</li><li>") + "</li></ul>" : ""}
                </div>
            </div>
        `
        $("#education").append(educationEntry)
    })
})
