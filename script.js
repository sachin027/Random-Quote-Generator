const quotes=[
    {
        quote:`Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.`,
        writer:`- APJ Abdul Kalam`
    },
    {
        quote:`The greatest religion is to be true to your own nature. Have faith in yourselves.`,
        writer:`- Swami Vivekananda`
    },
    {
        quote:`You can’t cross the sea merely by standing and staring at the water.`,
        writer:`- Rabindranath Tagore `
    },
    {
        quote:`Desire, ignorance, and inequality – this is the trinity of bondage.`,
        writer:`- Swami Vivekananda`
    },
    {
        quote:`You have to dream before your dreams can come true.`,
        writer:`- APJ Abdul Kalam`
    },
    {
        quote:`A person who cannot decide his goal, simply cannot win`,
        writer:`- Chanakya`
    },
    {
        quote:`None can destroy iron, but its own rust can. Likewise, none can destroy a person but his own mindset can.`,
        writer:`- Ratan Tata`
    },
    {
        quote:`Stay hungry. Stay foolish.`,
        writer:`- Steve Jobs`
    },
]

const moreQuote = document.getElementById('more-quote');
const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');
moreQuote.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML=quotes[random].quote;
    writer.innerHTML=quotes[random].writer;
})