const submitButton = document.querySelector('.metadata-submit-button')


class checkin {

    checkFunction(lang) {
        if (lang == 'en-US') {
            window.location = '../en-US/'
        } else if (lang == 'pt-BR') {
            window.location = '../pt-BR/'
        }
    }
}

const clickSubmit = () => {
    const languageSelector = document.querySelector('.language-selector')
    console.log(languageSelector.value)
   
    const clickAction = new checkin().checkFunction(languageSelector.value)
    return clickAction
}