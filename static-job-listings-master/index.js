const view = document.querySelector('.main')

window.onload = () => {
        const data = fetch('data.json')
            .then(Response => Response.json())
            .then(data => {
                    let display = data.map((contact) => {
                        return `
    <ul class="list">
        <li>
            <div class="profile">
                <img src="${contact.logo}" alt="Loading">
                <div class="text-box">
                    <div class="btn">
                        <span class="company">${contact.company}</span>
                        <span class="new">${contact.new}</span>
                        <span class="featured">${contact.featured}</span>
                    </div>
                    <div class="position">
                        <h2>${contact.position}</h2>
                    </div>
                    <div class="posted">
                        <span>${contact.postedAt}</span>
                        <span>.</span>
                        <span>${contact.contract}</span>
                        <span>.</span>
                        <span>${contact.location}</span>
                    </div>
                </div>
            </div>
            <div class="role">
                <h2>${contact.role}</h2>
                <h2>${contact.languages}</h2>
                <h2>${contact.tools}</h2>
            </div>
        </li>
    </ul>
    `
                    });
                    display = display.join(' ')
                    view.innerHTML = display
                    const level = document.querySelectorAll('.role')
                    const positionEdit = document.querySelector('.popup')
                    const clear = document.getElementById('clear'

                        level.forEach((btn) => {
                            btn.onclick = () => {
                                positionEdit.classList.add('show')
                            }
                        }) clear.onclick = () => {
                            positionEdit.classList.remove('show')
                        }
                    })

            }