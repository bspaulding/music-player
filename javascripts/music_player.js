(function() {
  var MusicPlayer, root;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  MusicPlayer = (function() {
    MusicPlayer.prototype.i18n = {
      'name': 'Name',
      'artist': 'Artist',
      'album': 'Album',
      'play': '&play.start;',
      'pause': '||',
      'next': '>>',
      'previous': '<<'
    };
    function MusicPlayer(library) {
      this.library = library;
      this.handle_load_progress = __bind(this.handle_load_progress, this);
      this.handle_load_start = __bind(this.handle_load_start, this);
      this.handle_volume_change = __bind(this.handle_volume_change, this);
      this.previous_track_id = __bind(this.previous_track_id, this);
      this.next_track_id = __bind(this.next_track_id, this);
      this.handle_track_ended = __bind(this.handle_track_ended, this);
      this.scrub = __bind(this.scrub, this);
      this.handle_time_update = __bind(this.handle_time_update, this);
      this.handle_duration_change = __bind(this.handle_duration_change, this);
      this.previous = __bind(this.previous, this);
      this.next = __bind(this.next, this);
      this.pause = __bind(this.pause, this);
      this.play = __bind(this.play, this);
      this.play_pause = __bind(this.play_pause, this);
      this.play_track_with_id = __bind(this.play_track_with_id, this);
      this.play_selected_track = __bind(this.play_selected_track, this);
      this.render_active_playlist = __bind(this.render_active_playlist, this);
      this.audio_element = document.createElement('audio');
      this.audio_element.setAttribute('id', 'MusicPlayer');
      this.audio_element.src = this.library[0].url;
      this.audio_element.addEventListener('durationchange', this.handle_duration_change);
      this.audio_element.addEventListener('timeupdate', this.handle_time_update);
      this.audio_element.addEventListener('ended', this.handle_track_ended);
      this.audio_element.addEventListener('loadstart', this.handle_load_start);
      this.audio_element.addEventListener('progress', this.handle_load_progress);
      document.body.appendChild(this.audio_element);
      this.currentTrackId = 0;
      this.controls = {};
      this.controls.play_pause = document.getElementById('play_pause');
      this.controls.play_pause.setAttribute('value', this.i18n.play);
      this.controls.play_pause.addEventListener('click', this.play_pause);
      this.controls.next = document.getElementById('next');
      this.controls.next.setAttribute('value', this.i18n.next);
      this.controls.next.addEventListener('click', this.next);
      this.controls.previous = document.getElementById('previous');
      this.controls.previous.setAttribute('value', this.i18n.previous);
      this.controls.previous.addEventListener('click', this.previous);
      console.log(document.getElementById('progress'));
      this.progress = document.getElementById('progress');
      this.progress.addEventListener('change', this.scrub);
      this.volume = document.getElementById('volume');
      this.volume.addEventListener('change', this.handle_volume_change);
      this.render_active_playlist();
    }
    MusicPlayer.prototype.render_active_playlist = function() {
      var active_playlist, header, headers, i, table, tbody, td, th, thead, tr, track, _i, _j, _len, _len2, _ref;
      console.log('render_active_playlist');
      active_playlist = document.getElementById('active_playlist');
      table = document.createElement('table');
      thead = document.createElement('thead');
      headers = ['name', 'artist', 'album'];
      for (_i = 0, _len = headers.length; _i < _len; _i++) {
        header = headers[_i];
        th = document.createElement('th');
        th.textContent = this.i18n[header];
        thead.appendChild(th);
      }
      tbody = document.createElement('tbody');
      for (i = 0, _ref = this.library.length; 0 <= _ref ? i < _ref : i > _ref; 0 <= _ref ? i++ : i--) {
        tr = document.createElement('tr');
        tr.setAttribute('data-MusicPlayer-id', i);
        track = this.library[parseInt(i)];
        for (_j = 0, _len2 = headers.length; _j < _len2; _j++) {
          header = headers[_j];
          td = document.createElement('td');
          td.textContent = track[header];
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
        tr.addEventListener('click', this.play_selected_track);
      }
      table.appendChild(thead);
      table.appendChild(tbody);
      return active_playlist.appendChild(table);
    };
    MusicPlayer.prototype.play_selected_track = function(event) {
      var id;
      id = event.target.getAttribute('data-MusicPlayer-id');
      return this.play_track_with_id(id);
    };
    MusicPlayer.prototype.play_track_with_id = function(id) {
      var track;
      console.log('id => ' + id);
      track = this.library[id];
      console.log('track => ');
      console.log(track);
      if (this.audio_element.getAttribute('data-MusicPlayer-track_id') !== id) {
        this.audio_element.pause();
        this.audio_element.src = track.url;
        this.currentTrackId = parseInt(id);
        this.audio_element.setAttribute('data-MusicPlayer-track_id', MusicPlayer.currentTrackId);
        $('tr.selected').removeClass('selected');
        $('tr[data-MusicPlayer-id="' + id + '"]').addClass('selected');
        if (track.artwork) {
          document.getElementById('currentArtwork').setAttribute('src', track.artwork);
        }
      }
      return this.audio_element.play();
    };
    MusicPlayer.prototype.play_pause = function() {
      if (this.audio_element.paused) {
        return this.play();
      } else {
        return this.pause();
      }
    };
    MusicPlayer.prototype.play = function() {
      var play_pause;
      this.play_track_with_id(this.currentTrackId);
      play_pause = document.getElementById('play_pause');
      return play_pause.setAttribute('value', this.i18n.pause);
    };
    MusicPlayer.prototype.pause = function() {
      var play_pause;
      this.audio_element.pause();
      play_pause = document.getElementById('play_pause');
      return play_pause.setAttribute('value', this.i18n.play);
    };
    MusicPlayer.prototype.next = function() {
      return this.play_track_with_id(this.next_track_id());
    };
    MusicPlayer.prototype.previous = function() {
      return this.play_track_with_id(this.previous_track_id());
    };
    MusicPlayer.prototype.handle_duration_change = function(event) {
      console.log('durationchange');
      console.log(this.progress);
      this.progress.setAttribute('min', 0);
      this.progress.setAttribute('max', this.audio_element.duration);
      return this.progress.setAttribute('value', this.audio_element.currentTime);
    };
    MusicPlayer.prototype.handle_time_update = function(event) {
      return this.progress.value = this.audio_element.currentTime;
    };
    MusicPlayer.prototype.scrub = function() {
      return this.audio_element.currentTime = event.target.value;
    };
    MusicPlayer.prototype.handle_track_ended = function(event) {
      return this.play_track_with_id(this.next_track_id());
    };
    MusicPlayer.prototype.next_track_id = function() {
      if (this.currentTrackId === this.library.length - 1) {
        return 0;
      } else {
        return this.currentTrackId + 1;
      }
    };
    MusicPlayer.prototype.previous_track_id = function() {
      if (this.currentTrackId === 0) {
        return this.library.length - 1;
      } else {
        return this.currentTrackId - 1;
      }
    };
    MusicPlayer.prototype.handle_volume_change = function(event) {
      return this.audio_element.volume = event.target.value;
    };
    MusicPlayer.prototype.handle_load_start = function(event) {
      return document.getElementById('loading_progress').textContent = 'Loading...';
    };
    MusicPlayer.prototype.handle_load_progress = function(event) {
      var buffered, buffered_percent, progress;
      buffered = this.audio_element.buffered.end(0);
      buffered_percent = parseInt((buffered / this.audio_element.duration) * 100);
      progress = document.getElementById('loading_progress');
      return progress.textContent = 'Loading... ' + buffered_percent + '%';
    };
    return MusicPlayer;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.MusicPlayer = MusicPlayer;
}).call(this);
