class MusicPlayer
  i18n:
    'name': 'Name'
    'artist': 'Artist'
    'album': 'Album'
    'play': '&play.start;'
    'pause': '||'
    'next': '>>'
    'previous': '<<'

  constructor: (@library) ->
    @audio_element = document.createElement 'audio'
    @audio_element.setAttribute 'id', 'MusicPlayer'
    @audio_element.src = @library[0].url
    @audio_element.addEventListener 'durationchange', @handle_duration_change
    @audio_element.addEventListener 'timeupdate', @handle_time_update
    @audio_element.addEventListener 'ended', @handle_track_ended
    @audio_element.addEventListener 'loadstart', @handle_load_start
    @audio_element.addEventListener 'progress', @handle_load_progress
    document.body.appendChild @audio_element

    @currentTrackId = 0

    @controls = {}

    @controls.play_pause = document.getElementById 'play_pause'
    @controls.play_pause.setAttribute 'value', @i18n.play
    @controls.play_pause.addEventListener 'click', @play_pause

    @controls.next = document.getElementById 'next'
    @controls.next.setAttribute 'value', @i18n.next
    @controls.next.addEventListener 'click', @next

    @controls.previous = document.getElementById 'previous'
    @controls.previous.setAttribute 'value', @i18n.previous 
    @controls.previous.addEventListener 'click', @previous 

    console.log document.getElementById 'progress' 
    @progress = document.getElementById 'progress' 
    @progress.addEventListener 'change', @scrub 

    @volume = document.getElementById 'volume' 
    @volume.addEventListener 'change', @handle_volume_change 

    @render_active_playlist() 

  render_active_playlist: =>
    console.log 'render_active_playlist'
    active_playlist = document.getElementById 'active_playlist' 
    table = document.createElement 'table' 

    thead = document.createElement 'thead' 
    headers = ['name', 'artist', 'album']
    for header in headers
      th = document.createElement 'th' 
      th.textContent = @i18n[header]
      thead.appendChild th 

    tbody = document.createElement 'tbody' 
    for i in [0...@library.length]
      tr = document.createElement 'tr' 
      tr.setAttribute 'data-MusicPlayer-id', i 
      
      track = @library[parseInt(i)]
      for header in headers
        td = document.createElement 'td' 
        td.textContent = track[header]
        tr.appendChild td

      tbody.appendChild tr 
      tr.addEventListener 'click', @play_selected_track 

    table.appendChild thead 
    table.appendChild tbody 

    active_playlist.appendChild table 

  play_selected_track: (event) =>
    id = event.target.getAttribute 'data-MusicPlayer-id' 
    @play_track_with_id id 

  play_track_with_id: (id) =>
    console.log 'id => ' + id
    track = @library[id]
    console.log 'track => '
    console.log track
    if @audio_element.getAttribute('data-MusicPlayer-track_id') != id
      @audio_element.pause() 
      @audio_element.src = track.url
      @currentTrackId = parseInt id 
      @audio_element.setAttribute 'data-MusicPlayer-track_id', MusicPlayer.currentTrackId

      $('tr.selected').removeClass('selected')
      $('tr[data-MusicPlayer-id="' + id + '"]').addClass('selected')

      document.getElementById('currentArtwork').setAttribute('src', track.artwork) if track.artwork
    @audio_element.play()

  play_pause: => 
    if @audio_element.paused
      @play()
    else
      @pause()

  play: =>
    @play_track_with_id @currentTrackId 
    play_pause = document.getElementById 'play_pause' 
    play_pause.setAttribute 'value', @i18n.pause

  pause: =>
    @audio_element.pause()
    play_pause = document.getElementById 'play_pause' 
    play_pause.setAttribute 'value', @i18n.play

  next: => @play_track_with_id @next_track_id()

  previous: => @play_track_with_id @previous_track_id()

  handle_duration_change: (event) =>
    console.log 'durationchange' 
    console.log @progress
    @progress.setAttribute 'min', 0 
    @progress.setAttribute 'max', @audio_element.duration 
    @progress.setAttribute 'value', @audio_element.currentTime 

  handle_time_update: (event) => @progress.value = @audio_element.currentTime

  scrub: => @audio_element.currentTime = event.target.value

  handle_track_ended: (event) => @play_track_with_id @next_track_id()  

  next_track_id: => 
    if @currentTrackId == @library.length - 1
      0
    else
      @currentTrackId + 1

  previous_track_id: => 
    if @currentTrackId == 0 
      @library.length - 1
    else
      @currentTrackId - 1

  handle_volume_change: (event) => @audio_element.volume = event.target.value

  handle_load_start: (event) => document.getElementById('loading_progress').textContent = 'Loading...'

  handle_load_progress: (event) =>
    buffered = @audio_element.buffered.end 0 
    buffered_percent = parseInt( (buffered / @audio_element.duration) * 100 )
    progress = document.getElementById 'loading_progress' 
    progress.textContent = 'Loading... ' + buffered_percent + '%'

root = exports ? this
root.MusicPlayer = MusicPlayer