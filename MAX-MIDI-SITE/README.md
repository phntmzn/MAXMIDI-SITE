


# 🎹 MaxMIDI Site

A clean, responsive static website for MaxMIDI — a MIDI generation and export toolkit. This site is designed with a unique dark color palette and deploys easily on Netlify.

## 🌐 Live Demo

You can deploy or preview the site using [Netlify Drop](https://app.netlify.com/drop) or link it to a GitHub repo.

## 📁 Folder Structure

```
maxmidi-site/
├── public/                   # Assets like logo, images, favicon
│   └── assets/
│       ├── logo.svg
│       └── hero.jpg
├── src/
│   ├── index.html            # Main entry point
│   ├── styles/
│   │   └── main.css          # Custom CSS
│   └── components/           # Optional reusable HTML blocks
├── netlify.toml              # Netlify config
├── package.json              # Optional (if needed for scripts or tools)
└── README.md
```

## 🎨 Color Palette

| Color Name     | Hex Code | Usage                              |
|----------------|----------|-------------------------------------|
| Black          | `#000000` | Background, navbar, footer          |
| Deep Plum      | `#291528` | Header text, buttons, highlights    |
| Charcoal Green | `#3A3E3B` | Section backgrounds, borders        |
| Soft White     | `#F0EFF4` | Body text background, cards         |
| Lavender Mauve | `#9E829C` | Accent color, buttons, links        |

## ⚙️ Netlify Deployment

No build step required. Just drag the `src/` folder into Netlify Drop or configure it as your publish directory in a GitHub-linked Netlify site.

```
[build]
publish = "src"
command = ""

[dev]
framework = "#static"
```

## 📝 License

All rights reserved. Not open source.