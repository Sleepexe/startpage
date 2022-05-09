const lists = [
    {
        heading: '~/dev',
        links: [
            {
                title: 'github',
                url: 'https://www.github.com/',
            },
            {
                title: 'stack overflow',
                url: 'https://www.stackoverflow.com/',
            },
		{
                title: 'replit',
                url: 'https://replit.com/~',
            },
            
        ],
    },
    {
        heading: '~/work',
        links: [
            {
                title: 'gmail',
                url: 'https://www.gmail.com/',
            },
            {
                title: 'drive',
                url: 'https://wwww.drive.google.com/',
            },
		{
                title: 'docs',
                url: 'https://www.docs.google.com/',
            },
		{
                title: 'synth',
                url: 'https://portal.synthesis.is/student/progression',
            },
        ],
    },
    {
      
    
        heading: '~/media',
        links: [
            {
                title: 'twitch',
                url: 'https://twitch.tv',
            },
            {
                title: 'youtube',
                url: 'https://www.youtube.com/',
            },
	{
                title: 'discord',
                url: 'https://www.discord.com/',
            },
	{
                title: 'spotify',
                url: 'https://www.spotify.com/',
            },
        ],
    },
    {
        heading: '~/reddit',
        links: [
           
            {
                title: 'unixporn',
                url: 'https://www.reddit.com/r/unixporn/',
            },
            {
                title: 'startpages',
                url: 'https://www.reddit.com/r/startpages/',
            },
        ],
    },
]

function renderLists() {
    const linksWrapper = document.querySelector('#links')

    lists.forEach(list => {
        const linksTemplate = list.links.map(link => {
            return `
				<li class="links__item">
					<a class="links__link" href="${link.url}">${link.title}</a>
				</li>
			`
        })

        const template = `
			<ul class="links">
				<li class="links__item">
					<span class="links__heading">${list.heading}</span>
				</li>
				${linksTemplate.join('')}
			</ul>
		`

        linksWrapper.insertAdjacentHTML('beforeend', template)
    })
}

renderLists()
