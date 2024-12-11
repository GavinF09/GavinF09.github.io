var PROFILEPATH = "profile/"

$.getJSON(PROFILEPATH + "experience.json", (data) => {
    data.forEach((position) => {
        let positionEntry = `
            <div data-date="${position.date.start} - ${position.date.end}">
                <h3>${position.title}</h3>
                <h4>${position.company}</h4>
                <!-- <p>
                    ${position.body}
                </p> -->
            </div>
        `
        $("#experience-timeline").append(positionEntry)
    })
})