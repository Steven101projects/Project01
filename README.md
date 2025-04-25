# SOUNDPEACE 🎧📻

*A vinyl‑inspired web app that lets you spin, store & share your own digital record collection right in the browser.*

---

## 🚀 Features

|   | What it does |
|---|--------------|
| **🎛️ Drag‑and‑drop turntable** | Drop an album cover onto the spinning platter & the track starts playing — complete with a rotating vinyl animation.
| **🆕 Add‑a‑Track workflow** | Upload an audio file & cover art, fill in title / artist / year, and press **Create** — your record appears instantly on the shelf.
| **💾 Local persistence** | Your collection is saved to `localStorage`, so the record shelf survives page refreshes.
| **🎚️ Live playback controls** | Play / pause, skip left & right, and scrub with a custom range slider that shows real‑time position & duration.
| **📱 Responsive design** | Pure HTML + CSS thermals that glide from desktop to mobile without missing a beat.
| **💡 Vanilla JS only** | No frameworks, just modern JavaScript modules for clarity & hackability.

---

## 🏁 Quick Start

```bash
# 1. Clone the repo
$ git clone https://github.com/Steven101projects/Project01.git

# 2. Open in your browser
$ cd Project01/Project01
$ open index.html   # macOS
# OR
$ start index.html  # Windows
```
That’s it!  The site is 100 % client‑side — no build tools, servers, or installs required.

---

## 🗂️ Project Structure

```
Project01/
├─ index.html          # Main page & turntable layout
├─ record.js           # Record shelf, player controls, navigation logic
├─ track.js            # Track class, add‑a‑track UI & localStorage I/O
├─ record.css          # Turntable, vinyl, button & modal styles
├─ track.css           # Add‑a‑track form & record shelf styling
├─ *.mp3 / *.png / jpg # Demo audio files & artwork
└─ .vscode/            # Recommended editor settings
```

---

## 🔍 Technical Highlights

* **Drag‑and‑Drop API** for moving records to the platter.
* **`<audio>` element** driven by custom JS for play/pause & timeline scrubbing.
* **CSS keyframe animations** spin the vinyl & animate UI hints.
* **`localStorage`** keeps your track list as prettified JSON — refresh‑safe and export‑friendly.
* **Modular code**:  Two focused scripts (`record.js` & `track.js`) keep UI and data concerns tidy.

---

## 📸 Screenshots

> *Add your own screenshots or a GIF here to show SOUNDPEACE in action.*

---

## 🌱 Roadmap

- [ ] Playlist queue & shuffle
- [ ] Waveform visualizer
- [ ] Service‑worker powered offline mode
- [ ] Dark mode (vinyl looks cooler under neon!)

Pull requests & ideas welcome — spin me a line! 🎶

---

## 📝 License

MIT — do what you want, sample what you need, and remember to credit the artist.

---

### Author

**Nico Steven**  
Software Engineering Technician @ Centennial College  
> *"Testing the limits of art by weaving it into software & web experiences."*

