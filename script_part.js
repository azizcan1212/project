document.getElementById('songSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const artist = document.getElementById('artistName').value;
    const song = document.getElementById('songName').value;

    const url = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`;

    document.getElementById('lyrics').innerText = "Şarkı sözleri aranıyor...";
    document.getElementById('lyrics').style.display = 'block';


    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Şarkı bulunamadı');
            }
            return response.json();
        })
        .then(data => {
            if (data.lyrics) {
                document.getElementById('lyrics').innerText = data.lyrics;
            } else {
                document.getElementById('lyrics').innerText = "Şarkı sözleri bulunamadı";
            }
        })
        .catch(error => {
            document.getElementById('lyrics').innerText = `Hata: ${error.message}`;
        });
});