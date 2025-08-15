# 💄 BeautyLash - Műszempilla Építés Landing Page

Professzionális műszempilla építés és szempilla hosszabbítás szolgáltatások bemutató weboldala. Modern, reszponzív design pasztell színekkel és elegáns animációkkal.

## 🌟 Funkciók

### ✨ Szolgáltatások
- **Klasszikus Építés** - Természetes megjelenés (15.000 Ft-tól)
- **Volume Technika** - Dúsabb, látványosabb eredmény (18.000 Ft-tól)
- **Mega Volume** - Extrém dús, glamour megjelenés (22.000 Ft-tól)
- **Feltöltés** - 2-3 hetente ajánlott karbantartás (8.000 Ft-tól)

### 🎨 Design Jellemzők
- **Pasztell színpaletta** - Rózsaszín és lila árnyalatok
- **Reszponzív design** - Minden eszközön tökéletes megjelenés
- **Smooth animációk** - Hover effektek és scroll animációk
- **Modern UI/UX** - Felhasználóbarát interfész

### 📱 Funkcionális Elemek
- **Interaktív navigáció** - Smooth scroll és hamburger menü
- **Időpont foglalás** - Teljes körű foglalási form validációval
- **Galéria** - Előtte/utána képek showcase
- **Kapcsolat** - Elérhetőségek és social media linkek

## 🛠️ Technológiák

- **HTML5** - Szemantikus markup
- **CSS3** - Modern styling, Grid, Flexbox
- **JavaScript (ES6+)** - Interaktivitás és form kezelés
- **Font Awesome** - Ikonok
- **Google Fonts** - Poppins betűtípus

## 📁 Projekt Struktúra

```
pillás/
├── index.html          # Fő HTML fájl
├── styles.css          # CSS stílusok
├── script.js           # JavaScript funkciók
└── README.md           # Dokumentáció
```

## 🚀 Telepítés és Futtatás

1. **Klónozd a repository-t:**
   ```bash
   git clone https://github.com/[felhasználónév]/beautylash-landing.git
   cd beautylash-landing
   ```

2. **Nyisd meg böngészőben:**
   - Egyszerűen nyisd meg az `index.html` fájlt böngészőben
   - Vagy használj egy helyi szervert (pl. Live Server VS Code-ban)

3. **Helyi szerver (opcionális):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server
   ```

## 🎯 Használat

### Navigáció
- **Főoldal** - Hero szekció szolgáltatás bemutatóval
- **Szolgáltatások** - Részletes árak és leírások
- **Galéria** - Munkák bemutatása előtte/utána képekkel
- **Rólam** - Szakmai háttér és referenciák
- **Kapcsolat** - Elérhetőségek és nyitvatartás
- **Időpont foglalás** - Online foglalási rendszer

### Időpont Foglalás
1. Töltsd ki a kötelező mezőket (név, telefon, szolgáltatás, dátum, idő)
2. Opcionálisan adj meg email címet és üzenetet
3. A rendszer validálja az adatokat
4. Sikeres küldés után értesítést kapsz

### Reszponzív Breakpointok
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** 320px - 767px

## 🎨 Színpaletta

```css
--primary-color: #f8b5d1      /* Rózsaszín */
--secondary-color: #e8d5ff    /* Lila */
--accent-color: #ffd6e8       /* Világos rózsaszín */
--text-dark: #2d3748          /* Sötét szürke */
--text-light: #4a5568         /* Világos szürke */
--background-light: #fef7f0   /* Krém háttér */
```

## 📱 Reszponzív Funkciók

- **Hamburger menü** mobil eszközökön
- **Adaptív grid rendszer** minden szekciónban
- **Optimalizált képméretek** különböző eszközökre
- **Touch-friendly** gombok és interakciók

## 🔧 Testreszabás

### Színek Módosítása
A `:root` szelektorban található CSS változók módosításával:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
}
```

### Szolgáltatások Hozzáadása
1. Adj hozzá új service-card-ot az `index.html`-ben
2. Frissítsd a JavaScript-ben a `timeSlots` objektumot
3. Adj hozzá új opciót a szolgáltatás selecthez

### Animációk Testreszabása
Az animációs időzítések a CSS-ben módosíthatók:

```css
.service-card {
    transition: all 0.3s ease; /* Módosítsd az időzítést */
}
```

## 🌐 Hosting Lehetőségek

### Ingyenes Hosting
- **GitHub Pages** - Automatikus deploy GitHub repository-ból
- **Netlify** - Drag & drop vagy Git integration
- **Vercel** - Modern JAMstack hosting

### Fizetős Hosting
- **Saját domain + hosting** - Teljes kontroll
- **WordPress hosting** - Ha CMS-re van szükség

## 📈 SEO Optimalizáció

- **Meta tagek** - Title, description, keywords
- **Szemantikus HTML** - Proper heading structure
- **Alt tagek** - Képek leírása
- **Schema markup** - Strukturált adatok (hozzáadható)

## 🤝 Közreműködés

1. Fork-old a projektet
2. Hozz létre feature branch-et (`git checkout -b feature/AmazingFeature`)
3. Commit-old a változásokat (`git commit -m 'Add some AmazingFeature'`)
4. Push-old a branch-re (`git push origin feature/AmazingFeature`)
5. Nyiss Pull Request-et

## 📄 Licenc

Ez a projekt MIT licenc alatt áll. Lásd a `LICENSE` fájlt a részletekért.

## 📞 Kapcsolat

**BeautyLash Műszempilla Szalon**
- 📍 1234 Budapest, Példa utca 12.
- 📱 +36 30 123 4567
- 📧 info@beautylash.hu
- 🕒 Hétfő-Péntek: 9:00-18:00, Szombat: 9:00-15:00

---

⭐ Ha tetszik a projekt, adj neki egy csillagot a GitHubon!
