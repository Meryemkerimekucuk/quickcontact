# QuickContact – Görev Listesi (Task List)

PRD'ye göre oluşturulmuş geliştirme görevleri.

---

## Faz 1: Proje Kurulumu

- [x] **TASK-001** React + Vite projesi oluştur
- [x] **TASK-002** Tailwind CSS kurulumu ve yapılandırması
- [x] **TASK-003** `vcf` veya `vcard-generator` kütüphanesini kur
- [x] **TASK-004** `qrcode.react` kütüphanesini kur
- [x] **TASK-005** Temel proje yapısı ve tek sayfa (SPA) route yapısı

---

## Faz 2: Giriş Formu (Input Section)

- [x] **TASK-006** Temel alanlar: Ad, Soyad, Telefon, E-posta, Şirket, Unvan (hepsi opsiyonel)
- [x] **TASK-007** Sosyal medya alanları: WhatsApp, LinkedIn, Instagram, X (Twitter), GitHub link girişleri
- [x] **TASK-008** Hiçbir alan zorunlu olmayacak şekilde form validasyonu (boş gönderilebilir)
- [x] **TASK-009** Boş form gönderiminde kullanıcı uyarısı (boş VCF işlevsiz olacağı için)

---

## Faz 3: VCF (vCard) Motoru

- [x] **TASK-010** Form verilerini alan servis/utility katmanı
- [x] **TASK-011** vCard 3.0 veya 4.0 standartlarına uygun `.vcf` metin üretimi
- [x] **TASK-012** Sosyal medya ve iletişim alanlarının vCard alanlarına doğru eşlenmesi

---

## Faz 4: QR Kod Üretici

- [x] **TASK-013** VCF metnini QR koda dönüştüren bileşen (tarayıcı tarafında)
- [x] **TASK-014** Form verisi değiştikçe QR kodun anlık (dinamik) güncellenmesi

---

## Faz 5: İndirme Seçenekleri

- [x] **TASK-015** QR kodu görsel olarak indirme (.png veya .jpg)
- [x] **TASK-016** Doğrudan `.vcf` dosyasını indirme butonu

---

## Faz 6: UX/UI ve Tasarım

- [x] **TASK-017** Mobil öncelikli (responsive) layout – tüm ekran boyutlarına uyum
- [x] **TASK-018** Canlı önizleme: Formda yazı yazıldıkça QR kodun anlık güncellenmesi
- [x] **TASK-019** Tek sayfalık (Single Page) yapı, sade ve karmaşık menüsüz arayüz
- [x] **TASK-020** Erişilebilirlik (a11y): uygun aria-label, tabindex, klavye desteği

---

## Faz 7: MVP Doğrulama ve Deployment

- [ ] **TASK-021** Formun tüm alanlarla düzgün çalıştığının testi
- [ ] **TASK-022** QR kodun başka cihazda tarandığında rehbere ekleme tetiklemesinin testi
- [x] **TASK-023** Vercel veya Netlify üzerinde deployment yapılandırması ve canlıya alma

---

## Özet

| Faz | Açıklama | Görev Sayısı |
|-----|----------|--------------|
| 1 | Proje Kurulumu | 5 |
| 2 | Giriş Formu | 4 |
| 3 | VCF Motoru | 3 |
| 4 | QR Kod Üretici | 2 |
| 5 | İndirme Seçenekleri | 2 |
| 6 | UX/UI | 4 |
| 7 | MVP & Deployment | 3 |
| **Toplam** | | **23** |
