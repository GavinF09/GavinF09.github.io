var PROFILEPATH = "profile/"
$.getJSON(PROFILEPATH + "education.json", (data) => {
    data.forEach((edu) => {
        // TODO
        var eduImg = ""
        if (edu.image != null) {
            eduImg = `
                <div class="project-image">
                    <img src="images/education/${edu.image}"/>
                </div>
            `
        } 

        let educationEntry = `
            <div class="education-block">
                <h3>${edu.school}</h3>
                <span class="education-date">${edu.date.start} - ${edu.date.end}</span>
                <h4>${edu.course}</h4>
                ${edu.body != undefined ? "<p>" + edu.body + "</p>" : ""}
                ${edu.points.length != 0 ? "<ul><li>" + edu.points.join("</li><li>") + "</li></ul>" : ""}
            </div>
        `
        $("#education").append(educationEntry)
    })
})
