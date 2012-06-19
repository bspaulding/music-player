var MusicPlayer = {};

MusicPlayer.i18n = {
  'name': 'Name',
  'artist': 'Artist',
  'album': 'Album',
  'play': 'Play',
  'pause': 'Pause',
  'next': 'Next',
  'previous': 'Previous'
}

MusicPlayer.library = [
  { name: 'Waves',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/01 - Waves.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
  { name: 'Erotic Cakes',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/02 - Erotic Cakes.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
  { name: 'Wonderful Slippery Thing',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/03 - Wonderful Slippery Thing.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
  { name: 'Ner Ner',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/04 - Ner Ner.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
  { name: 'Fives',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/05 - Fives.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
  { name: 'Uncle Skunk',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/06 - Uncle Skunk.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
  { name: 'Sevens',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/07 - Sevens.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
  { name: 'Eric',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/08 - Eric.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
  { name: 'Slidey Boy',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/09 - Slidey Boy.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
  { name: 'Rhode Island Shred',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/10 - Rhode Island Shred.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
  { name: 'Hangover',   artist: 'Guthrie Govan', album: 'Erotic Cakes', url: '../Music/Guthrie Govan/Erotic Cakes/11 - Hangover.mp3', artwork: '../Music/Guthrie Govan/Erotic Cakes/folder.jpg' },
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

MusicPlayer.initialize = function() {
  MusicPlayer.audio_element = document.createElement('audio');
  MusicPlayer.audio_element.setAttribute('id', 'MusicPlayer');
  MusicPlayer.audio_element.src = MusicPlayer.library[0].url;
  MusicPlayer.audio_element.addEventListener('durationchange', MusicPlayer.handle_duration_change);
  MusicPlayer.audio_element.addEventListener('timeupdate', MusicPlayer.handle_time_update);
  MusicPlayer.audio_element.addEventListener('ended', MusicPlayer.handle_track_ended);
  MusicPlayer.audio_element.addEventListener('loadstart', MusicPlayer.handle_load_start);
  MusicPlayer.audio_element.addEventListener('progress', MusicPlayer.handle_load_progress);
  document.body.appendChild(MusicPlayer.audio_element);

  MusicPlayer.currentTrackId = 0;

  MusicPlayer.controls = {};

  MusicPlayer.controls.play_pause = document.getElementById('play_pause');
  MusicPlayer.controls.play_pause.setAttribute('value', MusicPlayer.i18n.play);
  MusicPlayer.controls.play_pause.addEventListener('click', MusicPlayer.play_pause)

  MusicPlayer.controls.next = document.getElementById('next');
  MusicPlayer.controls.next.setAttribute('value', MusicPlayer.i18n.next);
  MusicPlayer.controls.next.addEventListener('click', MusicPlayer.next);

  MusicPlayer.controls.previous = document.getElementById('previous');
  MusicPlayer.controls.previous.setAttribute('value', MusicPlayer.i18n.previous);
  MusicPlayer.controls.previous.addEventListener('click', MusicPlayer.previous);

  MusicPlayer.progress = document.getElementById('progress');
  MusicPlayer.progress.addEventListener('change', MusicPlayer.scrub);

  MusicPlayer.volume = document.getElementById('volume');
  MusicPlayer.volume.addEventListener('change', MusicPlayer.handle_volume_change);

  MusicPlayer.render_active_playlist();
};

MusicPlayer.render_active_playlist = function() {
  var active_playlist = document.getElementById('activePlaylist');
  var table = document.createElement('table');

  var thead = document.createElement('thead');
  var headers = ['name', 'artist', 'album'];
  for( var i in headers ) {
    var th = document.createElement('th');
    th.textContent = MusicPlayer.i18n[headers[i]];
    thead.appendChild(th);
  }

  var tbody = document.createElement('tbody');
  for( var i = 0; i < MusicPlayer.library.length; i++ ) {
    var tr = document.createElement('tr');
    tr.setAttribute('data-MusicPlayer-id', i);

    var track = MusicPlayer.library[i];
    for( var k in headers ) {
      var td = document.createElement('td');
      td.textContent = track[headers[k]];
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
    tr.addEventListener('click', MusicPlayer.play_selected_track);
  }

  table.appendChild(thead);
  table.appendChild(tbody);

  active_playlist.appendChild(table);
};

MusicPlayer.play_selected_track = function(event) {
  var id = event.target.getAttribute('data-MusicPlayer-id');
  MusicPlayer.play_track_with_id(id);
};

MusicPlayer.play_track_with_id = function(id) {
  var track = MusicPlayer.library[id];
  if( MusicPlayer.audio_element.getAttribute('data-MusicPlayer-track_id') != id ) {
    MusicPlayer.audio_element.pause();
    MusicPlayer.audio_element.src = track.url;
    MusicPlayer.currentTrackId = parseInt(id);
    MusicPlayer.audio_element.setAttribute('data-MusicPlayer-track_id', MusicPlayer.currentTrackId);

    $('tr.selected').removeClass('selected');
    $('tr[data-MusicPlayer-id="' + id + '"]').addClass('selected');

    if( 'undefined' != typeof track.artwork ) {
      document.getElementById('currentArtwork').setAttribute('src', track.artwork);
    }
  }
  MusicPlayer.audio_element.play();
}

MusicPlayer.play_pause = function() {
  MusicPlayer.audio_element.paused ? MusicPlayer.play() : MusicPlayer.pause();
}

MusicPlayer.play = function() {
  MusicPlayer.play_track_with_id(MusicPlayer.currentTrackId);
  var play_pause = document.getElementById('play_pause');
  play_pause.setAttribute('value', 'Pause');
};

MusicPlayer.pause = function() {
  MusicPlayer.audio_element.pause();
  var play_pause = document.getElementById('play_pause');
  play_pause.setAttribute('value', 'Play');
}

MusicPlayer.next = function() {
  MusicPlayer.play_track_with_id(MusicPlayer.next_track_id());
}

MusicPlayer.previous = function() {
  MusicPlayer.play_track_with_id(MusicPlayer.previous_track_id());
}

MusicPlayer.handle_duration_change = function() {
  console.log('durationchange')
  MusicPlayer.progress.setAttribute('min', 0);
  MusicPlayer.progress.setAttribute('max', MusicPlayer.audio_element.duration);
  MusicPlayer.progress.setAttribute('value', MusicPlayer.audio_element.currentTime);
}

MusicPlayer.handle_time_update = function() {
  MusicPlayer.progress.value = MusicPlayer.audio_element.currentTime;
}

MusicPlayer.scrub = function(event) {
  MusicPlayer.audio_element.currentTime = event.target.value;
}

MusicPlayer.handle_track_ended = function() {
  MusicPlayer.play_track_with_id(MusicPlayer.next_track_id());
}

MusicPlayer.next_track_id = function() {
  var next_id;
  if( MusicPlayer.currentTrackId == (MusicPlayer.library.length - 1) )
    next_id = 0;
  else
    next_id = MusicPlayer.currentTrackId + 1;

  return next_id;
}

MusicPlayer.previous_track_id = function() {
  var next_id;
  if( MusicPlayer.currentTrackId == 0 )
    next_id = MusicPlayer.library.length - 1;
  else
    next_id = MusicPlayer.currentTrackId - 1;

  return next_id;
}

MusicPlayer.handle_volume_change = function(event) {
  MusicPlayer.audio_element.volume = event.target.value;
}

MusicPlayer.handle_load_start = function(event) {
  console.log(event);
  var progress = document.getElementById('loading_progress');
  progress.textContent = 'Loading...'
}

MusicPlayer.handle_load_progress = function(event) {
  console.log(event);
  var buffered = MusicPlayer.audio_element.buffered.end(0);
  var buffered_percent = parseInt( (buffered / MusicPlayer.audio_element.duration) * 100 );
  var progress = document.getElementById('loading_progress');
  progress.textContent = 'Loading... ' + buffered_percent + '%';
}

window.addEventListener('DOMContentLoaded', MusicPlayer.initialize);