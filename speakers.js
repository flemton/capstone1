const speakers = document.createElement('section');
speakers.className = 'speakers';

const Speakers = [
    {
        img: './images/speaker_01.png',
        speakerDetails: {
            speakerName: 'Yochai Benkler',
            speakerProf: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
            hr: 'grayLine',
            speakerText: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
        },
    },
    {
        img: './images/speaker_02.png',
        speakerDetails: {
            speakerName: 'SohYeong Noh',
            speakerProf: 'Director of Art Centre Nabi and a board member of CC Korea',
            hr: 'grayLine',
            speakerText: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
        },
    },
    {
        img: './images/speaker_03.png',
        speakerDetails: {
            speakerName: 'Lila Tretikov',
            speakerProf: 'Executive Director of the Wikimedia Foundation',
            hr: 'grayLine',
            speakerText: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
        },
    },
    {
        img: './images/speaker_04.png',
        speakerDetails: {
            speakerName: 'Kilnam Chon',
            speakerProf: '',
            hr: 'grayLine',
            speakerText: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
        },
    },
    {
        img: './images/speaker_05.png',
        speakerDetails: {
            speakerName: 'Julia Leda',
            speakerProf: 'President of Young Pirates of Europe',
            hr: 'grayLine',
            speakerText: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
        },
    },
    {
        img: './images/speaker_01.png',
        speakerDetails: {
            speakerName: 'Ryan Merkley',
            speakerProf: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
            hr: 'grayLine',
            speakerText: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
        },
    },
];

Speakers.forEach((Speakers) => {
    const content = `
    <span class="speaker">
        <img src="${Speakers.img}" alt="Speaker Picture">
        <div class="speaker-details">
            <p class="speaker-name">${Speakers.speakerDetails.speakerName}</p>
            <p class="speaker-prof">${Speakers.speakerDetails.speakerProf}</p>
            <hr class="gray-line">
            <p class="speaker-text">${Speakers.speakerDetails.speakerText}</p>
        </div>
    </span>
    `;
    speakers.innerHTML += content;
});

document.body.insertBefore(speakers, document.body.children[4]);