var movie = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        src: 'https://i.wpimg.pl/O/406x600/i.wp.pl/a/f/film/008/88/40/0024088.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.6.jpg'
    },
    {
        id: 3,
        title: 'Shrek',
        desc: 'Film o ogrze',
        src: 'https://i.wpimg.pl/O/384x525/i.wp.pl/a/f/film/008/93/51/0025193.jpg'
    },
    {
        id: 4,
        title: 'Księga dzungli',
        desc: 'Film o Mowglim',
        src: 'https://ssl-gfx.filmweb.pl/po/63/75/106375/7175734.6.jpg'
    },
    {
        id: 5,
        title: 'Kung Fu Panda',
        desc: 'Film o pandzie-marzycielu',
        src: 'https://ssl-gfx.filmweb.pl/po/04/02/220402/7196255.6.jpg'
    },
    {
        id: 6,
        title: 'Mały Książe',
        desc: 'Film o marzeniach',
        src: 'https://i.wpimg.pl/O/441x600/i.wp.pl/a/f/film/008/25/67/0426725.jpg'
    },
    {
        id: 7,
        title: 'Toy story',
        desc: 'Film o ożywionych zabawkach',
        src: 'https://static.posters.cz/image/750/plakaty/toy-story-woody-buzz-i24759.jpg'
    }
];

var moviesElements = movie.map(function (movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('h3', {}, movie.desc),
        React.createElement('img', { src: movie.src })
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));


