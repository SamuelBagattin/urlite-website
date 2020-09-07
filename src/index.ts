import './styles';
function component() {
    const element: HTMLDivElement = document.createElement('div');
    element.innerHTML = 'coucou';
    return element;
}

document.body.appendChild(component());
