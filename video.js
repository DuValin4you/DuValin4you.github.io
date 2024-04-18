const video = document.getElementById('video');

video.addEventListener('timeupdate', function() {
  const bufferedEnd = video.buffered.end(0);
  const duration = video.duration;
  if (duration > 0) {
    const percentage = (bufferedEnd / duration) * 100;
    console.log(percentage);
  }
});
