const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCQWGUcednRaLpw_PCvkETAg&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '54d8ea2b7emshfb8e273e8933549p1fcd58jsn8e5a90a78c39',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fectchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async ()=>{
    try {
        const videos = await fectchData(url);
        let view = `${videos.items.map(video =>`
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.tittle}
                </h3>
            </div>
        </div>
            `).slice(0,3).join('')}
       `;
       content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }