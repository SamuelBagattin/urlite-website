import 'materialize-css/dist/js/materialize.min';
import './styles';
import { getButton, getInput } from './scripts/typed-elements';
import { createShortUrl } from './scripts/api';
import { showShortUrl } from './scripts/dom-manipulation';

getButton('button#create-short-url').addEventListener(
    'click',
    async (): Promise<void> => {
        const input: HTMLInputElement = getInput('input.form-input');
        showShortUrl((await createShortUrl(input.value)).shortUrl);
    },
);