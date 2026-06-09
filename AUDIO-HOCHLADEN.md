# Audio privat hochladen

Die App lädt die MP3s jetzt über `audio-config.js`.

## Lokale/private Standard-Variante

Lege neben `index.html` diesen Ordner ab:

```text
audio/
  MP3 TSA1Plus LB1/
  MP3 TSA1Plus LB2/
  MP3 TSA1Plus UB/
```

In `audio-config.js` bleibt dann:

```js
window.SVENSKA_AUDIO_BASE_URL = "audio";
```

## Private externe Audio-URL

Wenn die Audio-Dateien auf einem privaten Server oder Storage liegen, ändere nur `audio-config.js`:

```js
window.SVENSKA_AUDIO_BASE_URL = "https://deine-private-domain.example/swedish-a1-audio";
```

Die App baut daraus automatisch Pfade wie:

```text
https://deine-private-domain.example/swedish-a1-audio/MP3%20TSA1Plus%20LB2/TSA1_LB_2_44.mp3
```

## GitHub-Hinweis

Wenn dein GitHub-Pages-Link öffentlich ist, sind hochgeladene MP3s ebenfalls öffentlich erreichbar. Für Buch-Audios bitte nur privat hochladen oder erst die Rechte klären.

Aktuell ist `audio/` absichtlich in `.gitignore`, damit die MP3s nicht aus Versehen öffentlich committed werden.
