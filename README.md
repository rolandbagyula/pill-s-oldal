# PillArt Studio – Műszempilla Stúdió Landing Page

Egy modern, elegáns, minimalista landing oldal műszempilla stúdió számára. Pastell színek, finom animációk, teljes reszponzivitás, gyors betöltés és egyszerű bővíthetőség.

## Fő jellemzők
- **Reszponzív dizájn** minden képernyőméretre (mobil, tablet, desktop)
- **Szekciók**: Hero, Szolgáltatások, Galéria (slider + lightbox), Rólam, Vélemények (slider), Árak, Kapcsolat (űrlap + Google Térkép), Lábléc
- **Interakciók**: hamburger menü, sima görgetés, automatikus galéria és vélemény slider, lightbox megnyitás
- **Gyors**: optimalizált képek (srcset/sizes az Unsplash képeknél), lusta betöltés (loading="lazy")
- **SEO & hozzáférhetőség**: leíró alt szövegek, címsor hierarchia, aria-címkék
- **Vanilla JS**: külső JS keretrendszer nélkül

## Fájlstruktúra
```
projektek/pillás/
├─ index.html        # Oldal szerkezete
├─ styles.css        # Stílusok, reszponzív szabályok
├─ script.js         # Interakciók, slider, lightbox, űrlap
├─ szempilla hosszabítás.jpg  # Helyi galéria kép
└─ README.md         # Ez a leírás
```

## Futatás helyben
1. Nyisd meg a projekt mappát.
2. Dupla kattintás az `index.html`-re (vagy jobb klikk → Open With → böngésző).
3. Alternatíva: indíts egy egyszerű webszervert (pl. VS Code Live Server).

## Testreszabás
- **Színek**: a `styles.css` tetején lévő CSS változókban (`:root`) módosíthatóak (pl. `--primary`, `--bg`, `--text`).
- **Betűtípusok**: Google Fonts link az `index.html`-ben (Playfair Display, Poppins). Cserélhető más fontokra.
- **Galéria képek**: 
  - 3 kép Unsplashről jön (`index.html` `#galeria`), `srcset`/`sizes` támogatással.
  - 1 kép helyi fájl: `szempilla hosszabítás.jpg`. Ha átnevezed, frissítsd az `index.html`-t is.
- **Gombok**: `.btn-primary` pasztell gradiensre állítva a jó kontraszt miatt. Igény szerint sötétíthető/világosítható.
- **Képarány/magasság**: Galéria kártyáknál reszponzív magasság clamp-elve (`styles.css` → `.slide img` és media query-k). Igény szerint finomítható.

## Képek és jogok
- Unsplash képek azonosító alapján kerülnek be. Az `unsplash.com/photos/{id}/download?force=true` végpont kerül használatra.
- Néhány Unsplash+ / Getty kép letöltése korlátozott lehet; ilyenkor a kódban található hibaeset-feldolgozás placeholder képet tölt be.
- Ha saját képeket használsz, ajánlott 1600–2000px széles, tömörített (WebP/JPEG) verziókat készíteni.

## Teljesítmény tippek
- Tömörítsd a saját képeket (pl. Squoosh.app), készíts több méretet és használj `srcset` + `sizes`-t.
- Minimalizáld a CSS/JS-t build során (opcionális, nem kötelező ehhez a projekt‑mérethez).

## Telepítés / Publikálás
- **Netlify**: húzd be a mappát a Netlify-ba (Drag & Drop). Build nem szükséges.
- **GitHub Pages**: töltsd fel a repo-ba, majd engedélyezd a Pages-t a main branch / root mappára.
- **Bármely statikus tárhely** kompatibilis (Nginx, Apache, stb.).

## Funkciók rövid leírása
- **Hamburger menü**: `script.js` kezeli a nyitást/zárást, fókuszálható elemekkel.
- **Simított görgetés**: belső hivatkozásokra.
- **Galéria slider**: automatikus lejátszás, nyilakkal/dot-okkal vezérelhető, érintéses lapozás, lightbox.
- **Vélemények slider**: automata rotáció, dot navigáció.
- **Űrlap**: alap kliensoldali validáció, visszajelzés; beküldés demó jellegű (nincs backend).
- **Lábléc év**: automatikusan frissítve JavaScriptből.

## Ismert beállítások
- A galéria kártyák magassága több breakpointra optimalizált. Ha túl magas/alacsony, a `styles.css` media query-kben állítható.
- A helyi fájlnévben ékezetek vannak: a HTML hivatkozás URL-kódolva lett. Ha gondot okoz, átnevezhető egyszerű névre (pl. `szempilla-hosszabitas.jpg`).

## További fejlesztési ötletek
- Cookie banner / GDPR értesítés
- Egyszerű backend / email küldés (pl. Formspree, Netlify Forms)
- Google Analytics / Search Console integráció
- Strukturált adatok (JSON-LD) az üzleti információkhoz

---
Ha kérdésed van, vagy szeretnél bővítést (pl. új szekció, több galéria kép, online időpontfoglalás), szólj nyugodtan!
