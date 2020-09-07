import './styles';
function component(): HTMLDivElement {
    const element: HTMLDivElement = document.createElement('div');
    element.innerHTML = 'coucou';
    return element;
}

document.body.appendChild(component());
