import { getDiv } from './typed-elements';

export function showShortUrl(shortUrl: string): void {
    getDiv('div#longurl').innerText = shortUrl;
}
