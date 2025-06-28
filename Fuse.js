const fuse = new Fuse(noticias, { keys: ['title', 'description'] });
const resultados = fuse.search("psychology");

const noticias = [
    {
    title: "Psychology Thesis-type Research",
    description: "A thesis-type research on the effect of film violence",
    link: "news/filmthesis.html",
    image: "css/img/film/film.png",
    class: "Psy"
    },
    {
    title: "Genetically modified babies with CRISPR",
    description: "Scientists create genetically modified babies using CRISPR.",
    link: "news/modif.html",
    image: "css/img/crispr/CSP.png",
    class: "Mdf"
    }, 
    {
    title: "DeepFakes: New threat?",
    description: "DeepFakes are a new technology that allows the creation of realistic fake videos.",
    link: "news/df.html",
    image: "css/img/deepfake/df.png",
    class: "df",
    tags: ["DeepFakes", "technology", "video", "fake", "threat", "AI"]
    }
    ,{
    title: "About GNews",
    description: "What is GNews and why it exists",
    link: "about.html",
    image: "css/img/GNews.png",
    class: "Psy"
    }
];

