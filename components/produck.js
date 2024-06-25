function createTD(user) {
    const thingsBox = document.createElement('div');
    thingsBox.classList.add('things_box');


    const imgBox = document.createElement('div');
    imgBox.classList.add('img_box');
    thingsBox.append(imgBox);


    const img = document.createElement('img');
    img.setAttribute('src', user.image);
    img.setAttribute('alt', '');
    imgBox.append(img);

    const textBox = document.createElement('div');
    textBox.classList.add('text_box');
    thingsBox.append(textBox);

    const span = document.createElement('span');
    span.textContent = user.category;
    textBox.append(span);

    const p = document.createElement('p');
    p.innerHTML = user.description.length > 100 ? user.description.slice(0, 70) + "..." : user.description
    textBox.append(p);

    const moneyBox = document.createElement('div');
    moneyBox.classList.add('mony_box');
    textBox.append(moneyBox);

    for (let i = 0; i < 3; i++) {
        const groupBox = document.createElement('div');
        groupBox.classList.add('group_box');
        moneyBox.append(groupBox);

        const imgGroup = document.createElement('img');
        const pGroup = document.createElement('p');
        switch (i) {
            case 0:
                imgGroup.setAttribute('src', './img/Group 7.svg');
                pGroup.textContent = user.price
                break;
            case 1:
                imgGroup.setAttribute('src', './img/Group 10 (1).svg');
                pGroup.textContent = user.rating.rate
                break;
            case 2:
                imgGroup.setAttribute('src', './img/Group 9.svg');
                pGroup.textContent = user.rating.count
                break;
        }

        groupBox.append(imgGroup);
        groupBox.append(pGroup);
    }

    const button = document.createElement('button');
    button.textContent = 'В избранное';
    textBox.append(button);

    return thingsBox
}
