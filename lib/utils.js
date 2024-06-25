function reload(array,) {
    container.innerHTML = ""

    for (let user of array) {
        const tr = createTD(user)

        container.append(tr)
    }

}
