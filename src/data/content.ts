// ─── PCD – Prestige Creative Displays ─────────────────────────────────────────
// Tüm metinler ve görseller burada düzenlenebilir.

export const brand = {
  name: 'PCD',
  fullName: 'Prestige Creative Displays',
  tagline: 'Uçuruyoruz',
  headline: 'Ürünlerinizi Havada Sergileyin',
  description:
    'PCD manyetik levitasyon stantları ile vitrinlerinizi, fuar alanlarınızı ve ürün lansmanlarınızı daha dikkat çekici hale getirin.',
  short:
    'PCD, ürünlerinizi manyetik levitasyon teknolojisiyle havada sergileyen premium vitrin ve stant sistemleri geliştirir.',
  ctaPrimary: 'Teklif Al',
  ctaSecondary: 'Modelleri Keşfet',
  instagram: '@pcd.lab',
  instagramUrl: 'https://instagram.com/pcd.lab',
  email: 'info@pcd.lab',
  // Formspree, Netlify Forms veya kendi endpoint'iniz: 'https://formspree.io/f/XXXX'
  formEndpoint: '',
}

// Levitasyonun faydaları (Problem bölümünün yerine — "Neden Havada?")
export const benefits = [
  {
    icon: '✨',
    title: 'Anında Dikkat Çeker',
    description:
      'Havada dönen ürün, klasik bir stanta göre vitrininize bakan müşterinin dikkatini ilk saniyede yakalar.',
  },
  {
    icon: '🌀',
    title: '360° Sergileme',
    description:
      'Ürün yavaşça döner, her açıdan görünür. Müşteri ürünü kavramak için elini uzatmadan tüm detayları görür.',
  },
  {
    icon: '💎',
    title: 'Premium Algı',
    description:
      'Havada asılı ürün, markanıza lüks ve yenilikçi bir algı katar. Vitriniz prestijli bir sahneye dönüşür.',
  },
  {
    icon: '🧲',
    title: 'Temassız Sunum',
    description:
      'Ürün hiçbir yüzeye temas etmez. Hassas ve değerli ürünler için temiz, izsiz bir sergileme alanı sağlar.',
  },
]

// "Neden PCD?" — hizmet/avantaj kartları
export const features = [
  {
    icon: '🎯',
    title: 'Markaya Özel Tasarım',
    description:
      'Stantlar markanızın renkleri, vitrin yapısı ve ürün formuna göre kadife, ahşap, pleksi veya ışıklı kaplamalarla özelleştirilir.',
  },
  {
    icon: '🛒',
    title: 'Satış ve Kiralama',
    description:
      'Cihazları satın alabilir ya da fuar, lansman ve kısa süreli kampanyalar için kiralayabilirsiniz.',
  },
  {
    icon: '🇹🇷',
    title: "Türkiye'de Öncü",
    description:
      "PCD, Türkiye'de manyetik levitasyon stantları alanında öncü bir markadır. Yerel destek, hızlı teslim, profesyonel kurulum.",
  },
  {
    icon: '🔋',
    title: 'Güçlü Kaldırma Kapasitesi',
    description:
      "PCD200'den PCD2000'e kadar geniş ürün yelpazesi. 2 cm'den 8 cm'ye kadar farklı yükseklik seçenekleri.",
  },
  {
    icon: '🛠️',
    title: 'Anahtar Teslim Çözüm',
    description:
      'Konsept, tasarım, üretim, kurulum ve teslim — tüm süreci tek elden yönetiyoruz. Siz sadece ürününüzü yerleştirin.',
  },
  {
    icon: '🏆',
    title: 'Premium Vitrin Deneyimi',
    description:
      'Kuyumcudan kozmetiğe, fuardan kafeye — lüks markaların tercih ettiği yenilikçi sunum çözümleri.',
  },
]

// Nasıl çalışır?
export const steps = [
  {
    number: '01',
    title: 'Elektromanyetik Modül',
    description:
      'Standın içinde özel bir elektromanyetik levitasyon modülü bulunur. Cihaz prize takıldığında manyetik alan oluşur.',
  },
  {
    number: '02',
    title: 'Manyetik Denge',
    description:
      'Ürünün altına veya içine yerleştirilen özel mıknatıs, standın manyetik alanı sayesinde havada dengede kalır.',
  },
  {
    number: '03',
    title: 'Hava ve Hareket',
    description:
      'Ürün 2–8 cm yükseklikte havada asılı durur ve yavaşça döner. Her açıdan görünür, vitrine hareket katar.',
  },
]

// Ürün modelleri — Pricing yerine kullanılıyor
export const products = [
  {
    name: 'PCD200',
    height: '2 cm',
    capacity: 'Hafif',
    description: 'Küçük ve hafif ürünler için giriş seviyesi model.',
    uses: ['Yüzük', 'Küçük takı', 'Mini obje', 'Hafif promosyon ürünü'],
    image: '/products/PCD200/PCD200_1.png',
    highlighted: false,
  },
  {
    name: 'PCD350-L',
    height: '2 cm',
    capacity: 'Orta-Hafif',
    description: 'Orta seviye küçük ürünler için ekonomik çözüm.',
    uses: ['Takı', 'Küçük kutular', 'Hafif kozmetik', 'Küçük ambalajlar'],
    image: '/products/PCD350L/PCD350L_1.png',
    highlighted: false,
  },
  {
    name: 'PCD350-H',
    height: '4 cm',
    capacity: 'Orta-Hafif',
    description: 'Daha yüksek uçuş mesafesiyle dikkat çeken bir sunum.',
    uses: ['Takı', 'Gözlük', 'Küçük kutular', 'Hafif kozmetik'],
    image: '/products/PCD350H/PCD350H_1.png',
    highlighted: false,
  },
  {
    name: 'PCD500',
    height: '4 cm',
    capacity: 'Orta',
    description: 'Daha güçlü ve geniş kullanım alanına sahip popüler model.',
    uses: ['Parfüm', 'Küçük maketler', 'Kuyumcu ürünleri', 'Ayakkabı'],
    image: '/products/PCD500/PCD500_1.png',
    highlighted: true,
  },
  {
    name: 'PCD1000',
    height: '4 cm',
    capacity: 'Orta-Ağır',
    description: 'Ağır ürünler ve geniş vitrin uygulamaları için.',
    uses: ['Çanta', 'Ürün maketi', 'Orta boy tanıtım objesi', 'Özel fuar uygulamaları'],
    image: '/products/PCD1000/PCD1000_1.png',
    highlighted: false,
  },
  {
    name: 'PCD2000',
    height: '5 cm',
    capacity: 'Ağır',
    description: 'Yüksek taşıma kapasitesine sahip büyük model.',
    uses: ['Büyük maketler', 'Fuar stantları', 'Özel marka projeleri', 'Dikkat çekici kurulumlar'],
    image: '/products/PCD2000/PCD2000_1.png',
    highlighted: false,
  },
  {
    name: 'PCD500-H',
    height: '8 cm',
    capacity: '500g – Premium',
    description: 'En güçlü ve en yüksek uçuşlu model. Fark yaratan sunumlar için.',
    uses: ['Fuar stantları', 'Pahalı çanta', 'Özel marka projeleri', 'Dikkat çekici vitrinler'],
    image: '/products/PCD2000/PCD2000_2.png',
    highlighted: false,
  },
]

// Özel projeler galerisi (Showcase bölümü)
export const projects = [
  {
    label: 'Kuyumcu Vitrinleri',
    description: 'Kadife kaplı lüks stantlar üzerinde havada dönen yüzük, kolye ve pırlantalar.',
    src: '/showcase/kuyumcu.png',
    alt: 'Kuyumcu için manyetik levitasyon vitrini — havada dönen yüzük standı',
  },
  {
    label: 'Parfüm & Kozmetik',
    description: 'Parfüm şişeleri ve kozmetik ürünleri havada dönerek müşterinin dikkatini çeker.',
    src: '/showcase/parfum.png',
    alt: 'Parfüm için manyetik levitasyon standı — PCD500',
  },
  {
    label: 'Fuar Stantları',
    description: 'Markaya özel konsept tasarımlarla fuar alanında öne çıkan sergileme çözümleri.',
    src: '/showcase/fuar.png',
    alt: 'Fuar standı için manyetik levitasyon kurulumu — PCD2000',
  },
  {
    label: 'Diş Klinikleri',
    description: 'Uçan diş maketleri ile fark yaratan ve eğitici klinik sunumları.',
    src: '/showcase/dis.png',
    alt: 'Diş kliniği için uçan diş maketi',
  },
  {
    label: 'Kurumsal & Promosyon',
    description: 'Logolu özel maketler ve kurumsal tanıtım objeleri ile markanızı sahneye taşıyın.',
    src: '/showcase/kafe.png',
    alt: 'Kurumsal promosyon için manyetik levitasyon standı — PCD1000',
  },
  {
    label: 'Optik & Gözlük',
    description: 'Yüksek uçuş mesafesi ile gözlük çerçevelerini her açıdan sergileyin.',
    src: '/showcase/optik.png',
    alt: 'Optik mağaza için manyetik levitasyon standı — PCD350H',
  },
]

// Hedef sektörler (Testimonials yerine)
export const sectors = [
  { icon: '💍', name: 'Kuyumcular', detail: 'Yüzük, kolye, pırlanta sergileme' },
  { icon: '🌸', name: 'Parfüm & Kozmetik', detail: 'Lüks vitrin ve lansman' },
  { icon: '🏛️', name: 'Fuar Stantları', detail: 'Tanıtım ve etkinlikler' },
  { icon: '🦷', name: 'Diş Klinikleri', detail: 'Uçan diş maketi sunumu' },
  { icon: '👓', name: 'Optik Mağazaları', detail: 'Gözlük çerçeve teşhiri' },
  { icon: '☕', name: 'Kafe & Tatlı', detail: 'Yenilikçi ürün sunumu' },
  { icon: '🛍️', name: 'AVM Mağazaları', detail: 'Dikkat çekici vitrinler' },
  { icon: '🏢', name: 'Kurumsal Promosyon', detail: 'Logolu özel maketler' },
  { icon: '🎨', name: 'Reklam & Mimarlık', detail: 'Konsept tasarım iş birlikleri' },
]

// SSS
export const faqs = [
  {
    question: 'Ürünüm havada gerçekten asılı duruyor mu?',
    answer:
      'Evet. PCD stantları, elektromanyetik levitasyon teknolojisiyle ürününüzü hiçbir yüzeye temas etmeden 2 cm ile 8 cm arasında havada asılı tutar. Üstüne ek olarak ürün yavaşça döner.',
  },
  {
    question: 'Hangi modeli seçmeliyim?',
    answer:
      'Seçim, ürününüzün ağırlığına ve sergilemek istediğiniz yüksekliğe bağlıdır. Yüzük gibi hafif ürünler için PCD200 veya PCD350 yeterlidir. Parfüm, çanta veya maket gibi ürünler için PCD500, PCD1000 veya PCD500-H önerilir. Size en uygun modeli birlikte belirleyebiliriz.',
  },
  {
    question: 'Markama özel tasarım yapıyor musunuz?',
    answer:
      'Evet. Yalnızca cihaz satmıyoruz. Kadife, ahşap, pleksi, ışıklı veya logolu kaplamalarla markanızın renklerine ve vitrin yapısına özel stantlar tasarlıyoruz.',
  },
  {
    question: 'Kiralık olarak da alabilir miyim?',
    answer:
      'Evet. Fuar, lansman, mağaza açılışı, AVM etkinliği ve vitrin kampanyaları için kiralama hizmetimiz mevcuttur. Kurulum ve teslim dahildir.',
  },
  {
    question: 'Kurulum ve teslim hizmeti veriyor musunuz?',
    answer:
      'Veriyoruz. Anahtar teslim çözüm sunuyoruz: konsept, üretim, kurulum, denge ayarı ve teslim — tüm süreci tek elden yönetiyoruz.',
  },
  {
    question: 'Sipariş süreci nasıl ilerliyor?',
    answer:
      'Aşağıdaki formu doldurmanız yeterli. Ürün ağırlığınıza ve sergileme amacınıza göre en uygun modeli ve tasarımı öneriyor, fiyat ve teslim süresini paylaşıyoruz.',
  },
]

