window.dom = {
    cerate(String) {
        const container = document.createElement('template')

        container.innerHTML = String.trim()

        return container.content.firstChild
    }
}