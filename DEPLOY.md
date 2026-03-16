# QuickContact – Canlıya Alma (Deployment)

Proje hem **Vercel** hem **Netlify** ile yayına alınabilir. Aşağıda her iki seçenek için adımlar var.

---

## Gereksinimler

- Proje GitHub, GitLab veya Bitbucket’ta bir repoda olmalı
- Vercel veya Netlify hesabı (ücretsiz yeterli)

---

## Seçenek 1: Vercel ile Deployment

1. [vercel.com](https://vercel.com) adresine git ve GitHub ile giriş yap (veya GitLab/Bitbucket).
2. **Add New** → **Project** ile yeni proje oluştur.
3. Repo listesinden `quickcontact` (veya projenin adı) reponu seç.
4. **Root Directory** boş bırak (proje kökü).
5. **Build and Output Settings** genelde otomatik gelir:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. **Deploy** butonuna tıkla.
7. Birkaç dakika sonra sitenin adresi verilir (örn. `quickcontact.vercel.app`).

### Vercel CLI (isteğe bağlı)

```bash
npm i -g vercel
cd quickcontact
vercel
```

Komutlar sırasında sorulan sorulara cevap ver; proje linki terminalde görünür.

---

## Seçenek 2: Netlify ile Deployment

1. [netlify.com](https://netlify.com) adresine git ve GitHub ile giriş yap.
2. **Add new site** → **Import an existing project**.
3. Repo listesinden `quickcontact` reponu seç.
4. Build ayarları `netlify.toml` sayesinde otomatik dolar:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. **Deploy site** butonuna tıkla.
6. Birkaç dakika sonra sitenin adresi verilir (örn. `random-name-123.netlify.app`).

### Netlify CLI (isteğe bağlı)

```bash
npm i -g netlify-cli
cd quickcontact
npm run build
netlify deploy --prod --dir=dist
```

Komutlar sırasında site adı ve (istersen) domain seçebilirsin.

---

## Özel domain (isteğe bağlı)

- **Vercel:** Project → **Settings** → **Domains** → kendi domainini ekle; ekrandaki DNS talimatlarını uygula.
- **Netlify:** **Site configuration** → **Domain management** → **Add custom domain**; yönlendirme için verilen DNS kayıtlarını ekle.

---

## Notlar

- Her `main` (veya seçtiğin branch) push’unda otomatik yeni bir deploy alırsın.
- Proje kökündeki `vercel.json` ve `netlify.toml` bu ayarları projeye gömeceği için ekstra panel ayarı gerekmez; sadece repoyu bağlaman yeterli.
