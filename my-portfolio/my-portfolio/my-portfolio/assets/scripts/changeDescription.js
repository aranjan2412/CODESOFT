// Mudar a Descrição

const changeDescription = (nameCard, text) => {
    let infoSkills = document.querySelector('#info-skills')
    let cardName = document.querySelector('.card-name')

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        infoSkills.innerHTML = text
        if(nameCard === '.html') {
            cardName.innerHTML = ' Html '
        } 
        if(nameCard === '.css') {
            cardName.innerHTML = ' Css '
        }
        if(nameCard === '.js') {
            cardName.innerHTML = ' JavaScript '
        }
        if(nameCard === '.git') {
            cardName.innerHTML = ' Git '
        } 
        if(nameCard === '.responsive') {
            cardName.innerHTML = ' Responsividade '
        } 
        if(nameCard === '.accessibility') {
            cardName.innerHTML = ' java '
        } 
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = '* Hover icons to know more. *'
        cardName.innerHTML = ""
    })
}

changeDescription(
    '.html',
    'Structure of layouts, main tags, Semantic HTML, creation of tables and forms.'
)

changeDescription(
    '.css',
    'Layout styling, class reuse, box model, CSS Grid, FlexBox and pseudo-classes.'
)

changeDescription(
    '.js',
    'DOM manipulation, API consumption, data types, methods, functions and events.'
)

changeDescription(
    '.git',
    'Code versioning and main commands.'
)

changeDescription(
    '.responsive',
    'Responsiveness using BreakPoints and element easing properties.'   
)

changeDescription(
    '.accessibility',
    'Designing, planning, developing, and managing Java-based software and applications.'   
)

