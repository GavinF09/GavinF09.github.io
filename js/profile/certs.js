var PROFILEPATH = "profile/"

$.getJSON(PROFILEPATH + "certs.json", (data) => {
    // swap position of first and second entry, so the first entry will be in the center of the carousel
    [data[0], data[1]] = [data[1], data[0]]
    // first entry need to have active class
    let firstCert = true
    data.forEach((cert) => {
        var certImg = ""
        if (cert.image != null) {
            // make cert that has not been obtained yet blurred
            certImg = `
                <div class="card-img-top">
                    <img src="images/certs/${cert.image}" class="img-thumbnail ${cert.obtained != null ? "" : "blur-cert"}">
                </div>
            `
        } 

        let certEntry = `
            <div class="carousel-item ${firstCert ? "active" : ""}">
                <div class="card">
                    ${certImg}
                    <div class="card-body">
                        <h3 class="card-title">${cert.name}</h3>
                        <p class="card-text">${cert.obtained != null ? "Obtained " + cert.obtained : "In Progress"}</p>
                    </div>
                </div>
            </div>
        `
        firstCert = false
        $(".carousel-inner").append(certEntry)
    })
})
