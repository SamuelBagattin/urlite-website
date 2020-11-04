import { UrlCreationResponse } from './models';

export async function createShortUrl(longUrl: string): Promise<UrlCreationResponse> {
    const response: Response = await fetch('https:///urlite.cc', {
        method: 'POST',
        headers: {
            'x-api-key': 'xV7lvur40E23uzU9123bw7moIRj01whhaEgzHsdD',
        },
        body: JSON.stringify({
            url: longUrl,
        }),
    });
    return (await response.json()) as UrlCreationResponse;
}
