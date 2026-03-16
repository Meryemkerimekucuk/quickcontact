# 📝 PRD: QuickContact - Dijital Kartvizit & QR Oluşturucu

## 1. Ürün Özeti (Vision)
Kullanıcıların karmaşık kayıt süreçleriyle uğraşmadan; kendi iletişim bilgilerini ve sosyal medya linklerini içeren bir dijital dosya (**VCF**) oluşturmalarını ve bunu bir **QR kod** aracılığıyla hızlıca başkalarıyla paylaşmalarını sağlayan, mobil öncelikli bir mini web uygulamasıdır.

---

## 2. Hedef Kitle (Target Audience)
* Network etkinliklerine katılan profesyoneller.
* Fiziksel kartvizit taşımak istemeyen girişimciler.
* Sosyal medya hesaplarını tek bir kanaldan hızlıca paylaşmak isteyen kullanıcılar.

---

## 3. Kullanıcı Hikayeleri (User Stories)
* **Esneklik:** Bir kullanıcı olarak, hiçbir alanı doldurmak zorunda kalmadan sadece paylaşmak istediğim bilgileri girerek kartvizitimi oluşturabilmeliyim.
* **Hız:** Bir kullanıcı olarak, bilgilerimi girdiğim anda dinamik olarak QR kodumun oluştuğunu görebilmeliyim.
* **Paylaşım:** Bir kullanıcı olarak, oluşturulan QR kodu telefonumun kamerasından bir başkasına okuttuğumda, karşı tarafın rehberine "Kişiyi Ekle" uyarısının gitmesini sağlamalıyım.

---

## 4. Fonksiyonel Gereksinimler

### A. Giriş Formu (Input Section)
* **Temel Alanlar:** Ad, Soyad, Telefon, E-posta, Şirket, Unvan.
* **Sosyal Medya:** WhatsApp, LinkedIn, Instagram, X (Twitter), GitHub link girişleri.
* **Kural:** Hiçbir alan zorunlu değildir. Form "boş gönderilebilir" yapıda olmalıdır (ancak boş VCF işlevsiz olacağı için kullanıcı uyarılabilir).

### B. VCF (vCard) Motoru
* Giriş yapılan verileri standart `.vcf` formatına (vCard 3.0 veya 4.0) dönüştüren mantıksal katman.

### C. QR Kod Üretici
* Oluşturulan VCF metin içeriğini tarayıcı tarafında bir QR koda dönüştüren bileşen.

### D. İndirme Seçenekleri
* QR kodu görsel (`.png` veya `.jpg`) olarak kaydetme.
* Doğrudan `.vcf` dosyasını indirme butonu.

---

## 5. Teknik Yol Haritası (Tech Stack)

| Katman | Önerilen Teknoloji | Notlar |
| :--- | :--- | :--- |
| **Frontend** | React.js / Vite | Hızlı geliştirme ve bileşen yapısı için ideal. |
| **Styling** | Tailwind CSS | Mobil uyumlu (Responsive) tasarım için en hızlı yol. |
| **VCF Library** | `vcf` veya `vcard-generator` | Standartlara uygun dosya üretimi için. |
| **QR Library** | `qrcode.react` | SVG veya Canvas formatında QR üretimi. |
| **Deployment** | Vercel / Netlify | Ücretsiz ve anında canlıya alma. |

---

## 6. Kullanıcı Deneyimi ve Tasarım (UX/UI)
* **Mobil Öncelik:** Uygulama masaüstünden ziyade mobil ekranlara tam uyumlu olmalıdır.
* **Canlı Önizleme:** Kullanıcı formda yazı yazdıkça QR kodun anlık olarak güncellenmesi sağlanmalıdır.
* **Sadelik:** Karmaşık menüler yerine tek sayfalık (Single Page) bir yapı tercih edilmelidir.

---

## 7. Başarı Kriterleri (MVP)
1.  Form doldurulabilir olmalı.
2.  QR kod başarıyla üretilmeli.
3.  Üretilen QR kod başka bir cihazda tarandığında rehbere ekleme fonksiyonu tetiklenmeli.