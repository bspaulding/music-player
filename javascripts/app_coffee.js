function main() {
  music_library = [
    { name: 'Waves',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/01 Waves.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    { name: 'Erotic Cakes',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/02  Erotic Cakes.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    { name: 'Wonderful Slippery Thing',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/03 Wonderful Slippery Thing.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    { name: 'Ner Ner',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/04 Ner Ner.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    { name: 'Fives',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/05 Fives.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    { name: 'Uncle Skunk',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/06 Uncle Skunk.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    { name: 'Sevens',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/07 Sevens.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    { name: 'Eric',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/08 Eric.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    { name: 'Slidey Boy',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/09 Slidey Boy.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    { name: 'Rhode Island Shred',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/10 Rhode Island Shred.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    { name: 'Hangover',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/11 Hangover.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
    // { name: 'Pride and Joy (Key of E)',   artist: 'Stevie Ray Vaughn', album: '', url: 'http://dl.dropbox.com/u/970337/Stevie%20Ray%20Vaughn%20-%20Pride%20and%20Joy%20%28Key%20of%20E%29.m4a' }
    { name: 'Jaws of Life',   artist: 'John Petrucci', album: 'Suspended Animation', url: '../Music/Petrucci - Suspended Animation/01 - Jaws of Life.m4a', artwork: '../Music/Petrucci - Suspended Animation/220px-Album_Suspended_Animation_cover.jpg' },
    { name: 'Glasgow Kiss',   artist: 'John Petrucci', album: 'Suspended Animation', url: '../Music/Petrucci - Suspended Animation/02 - Glasgow Kiss.m4a', artwork: '../Music/Petrucci - Suspended Animation/220px-Album_Suspended_Animation_cover.jpg' },
    { name: 'Tunnel Vision',   artist: 'John Petrucci', album: 'Suspended Animation', url: '../Music/Petrucci - Suspended Animation/03 - Tunnel Vision.m4a', artwork: '../Music/Petrucci - Suspended Animation/220px-Album_Suspended_Animation_cover.jpg' },
    { name: 'Wishful Thinking',   artist: 'John Petrucci', album: 'Suspended Animation', url: '../Music/Petrucci - Suspended Animation/04 - Wishful Thinking.m4a', artwork: '../Music/Petrucci - Suspended Animation/220px-Album_Suspended_Animation_cover.jpg' },
    { name: 'Damage Control',   artist: 'John Petrucci', album: 'Suspended Animation', url: '../Music/Petrucci - Suspended Animation/05 - Damage Control.m4a', artwork: '../Music/Petrucci - Suspended Animation/220px-Album_Suspended_Animation_cover.jpg' },
    { name: 'Curve',   artist: 'John Petrucci', album: 'Suspended Animation', url: '../Music/Petrucci - Suspended Animation/06 - Curve.m4a', artwork: '../Music/Petrucci - Suspended Animation/220px-Album_Suspended_Animation_cover.jpg' },
    { name: 'Lost Without You',   artist: 'John Petrucci', album: 'Suspended Animation', url: '../Music/Petrucci - Suspended Animation/07 - Lost Without You.m4a', artwork: '../Music/Petrucci - Suspended Animation/220px-Album_Suspended_Animation_cover.jpg' },
    { name: 'Animate-Inanimate',   artist: 'John Petrucci', album: 'Suspended Animation', url: '../Music/Petrucci - Suspended Animation/08 - Animate-Inanimate.m4a', artwork: '../Music/Petrucci - Suspended Animation/220px-Album_Suspended_Animation_cover.jpg' },
  ];
  player = new MusicPlayer(music_library);
};

window.addEventListener('DOMContentLoaded', main);