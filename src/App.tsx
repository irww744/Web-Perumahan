import React, { useState } from 'react';
import { 
  MapPin, 
  Home, 
  Trees, 
  Shield, 
  Car, 
  Droplets, 
  DollarSign,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Camera,
  Play
} from 'lucide-react';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryImages = [
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const features = [
    { icon: MapPin, title: 'Lokasi Strategis', desc: 'Dekat pusat kota dan fasilitas umum' },
    { icon: Home, title: 'Desain Modern Minimalis', desc: 'Tata ruang efisien dan elegan' },
    { icon: Trees, title: 'Lingkungan Asri & Nyaman', desc: 'Banyak area hijau dan taman bermain' },
    { icon: Shield, title: 'Keamanan 24 Jam', desc: 'CCTV & Satpam siaga penuh' },
    { icon: Car, title: 'Akses Mudah', desc: 'Dekat tol dan transportasi umum' },
    { icon: Droplets, title: 'Bebas Banjir', desc: 'Sistem drainase terencana' },
    { icon: DollarSign, title: 'Harga Kompetitif', desc: 'Cicilan ringan dan fleksibel' }
  ];

  const unitTypes = [
    {
      type: 'Tipe 36/72',
      price: 'Mulai 350 Juta',
      description: 'Cocok untuk keluarga kecil',
      specs: ['2 Kamar Tidur', '1 Kamar Mandi', 'Ruang Tamu', 'Dapur', 'Carport'],
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      type: 'Tipe 45/90',
      price: 'Mulai 450 Juta',
      description: 'Ruang lebih luas untuk kenyamanan ekstra',
      specs: ['3 Kamar Tidur', '2 Kamar Mandi', 'Ruang Tamu', 'Dapur', 'Taman Belakang'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      type: 'Tipe 60/120',
      price: 'Mulai 650 Juta',
      description: 'Desain premium untuk gaya hidup modern',
      specs: ['4 Kamar Tidur', '3 Kamar Mandi', 'Ruang Keluarga', 'Dapur Premium', 'Garasi'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const testimonials = [
    {
      name: 'Ibu Rina Setyawati',
      text: 'Kami sangat puas tinggal di Cluster Kalita. Lingkungannya tenang, aman, dan dekat dengan sekolah anak-anak.',
      year: 'Penghuni sejak 2023',
      rating: 5
    },
    {
      name: 'Bapak Ahmad Wijaya',
      text: 'Investasi terbaik untuk keluarga. Fasilitasnya lengkap dan harga masih terjangkau.',
      year: 'Penghuni sejak 2022',
      rating: 5
    },
    {
      name: 'Ibu Sari Dewi',
      text: 'Lokasi strategis dan desain rumahnya modern. Sangat cocok untuk keluarga muda.',
      year: 'Penghuni sejak 2023',
      rating: 5
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Temukan Hunian Nyaman di <span className="text-emerald-300">Cluster Kalita</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-4 opacity-90">
              Modern, Aman, dan Strategis untuk Keluarga Anda
            </p>
            <p className="text-lg lg:text-xl mb-8 opacity-80 max-w-3xl mx-auto">
              Kombinasi sempurna antara desain elegan, lingkungan asri, dan fasilitas lengkap untuk kehidupan yang lebih baik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Lihat Unit Tersedia
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Hubungi Marketing
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Tentang Cluster Kalita</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Cluster Kalita adalah pilihan tepat bagi Anda yang mencari hunian nyaman dan aman di lokasi strategis. 
              Dengan konsep modern minimalis, lingkungan yang asri, dan fasilitas yang lengkap, kami menghadirkan 
              rumah yang bukan hanya tempat tinggal, tapi juga tempat terbaik untuk tumbuh bersama keluarga.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Lokasi Premium</h3>
                <p className="text-gray-600">Strategis dekat pusat kota, sekolah, rumah sakit, dan pusat perbelanjaan</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Keamanan Terjamin</h3>
                <p className="text-gray-600">Sistem one gate, CCTV 24 jam, dan tim keamanan profesional</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Trees className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Lingkungan Asri</h3>
                <p className="text-gray-600">Area hijau luas, bebas banjir, dan udara segar untuk keluarga</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Fitur & Keunggulan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mengapa Cluster Kalita menjadi pilihan terbaik untuk hunian keluarga Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tipe Unit Tersedia</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih tipe rumah yang sesuai dengan kebutuhan dan gaya hidup keluarga Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {unitTypes.map((unit, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={unit.image} 
                    alt={unit.type}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {unit.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-emerald-600">{unit.price}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{unit.description}</p>
                  <div className="space-y-2">
                    {unit.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Galeri Foto & Video</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lihat keindahan dan kenyamanan Cluster Kalita melalui galeri kami
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Main Image */}
            <div className="relative mb-8">
              <img 
                src={galleryImages[currentImageIndex]} 
                alt="Gallery"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.slice(0, 6).map((image, index) => (
                <div key={index} className="relative group cursor-pointer" onClick={() => setCurrentImageIndex(index)}>
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300"
                  />
                  {index === 5 && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimoni Penghuni</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dengar langsung pengalaman keluarga yang sudah merasakan kenyamanan hidup di Cluster Kalita
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Penawaran Khusus Bulan Ini!</h2>
            <p className="text-xl mb-8 opacity-90">
              Kesempatan terbatas untuk memiliki rumah impian dengan benefit maksimal
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl">
                <CheckCircle className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">DP 0% + Cicilan Ringan</h3>
                <p className="opacity-90">Tanpa uang muka, langsung KPR dengan cicilan terjangkau</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl">
                <CheckCircle className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cashback 25 Juta</h3>
                <p className="opacity-90">Untuk 10 pembeli pertama bulan ini</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl">
                <CheckCircle className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Free Biaya Administrasi</h3>
                <p className="opacity-90">Biaya balik nama & notaris ditanggung developer</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl">
                <CheckCircle className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bonus Kitchen Set</h3>
                <p className="opacity-90">Kitchen set senilai 15 juta untuk setiap pembelian</p>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4">Miliki Rumah Impian Anda di Cluster Kalita Sekarang!</h3>
              <p className="text-lg mb-6 opacity-90">
                Jangan lewatkan kesempatan emas ini. Hubungi tim marketing kami untuk informasi lengkap dan jadwalkan kunjungan lokasi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Hubungi Marketing Sekarang
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  <Camera className="w-5 h-5 inline mr-2" />
                  Jadwalkan Site Visit
                </button>
              </div>
            </div>
            
            <p className="text-lg opacity-80">
              *Syarat dan ketentuan berlaku. Promo terbatas hingga akhir bulan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Kontak & Lokasi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hubungi kami untuk informasi lebih lanjut atau kunjungi langsung lokasi Cluster Kalita
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">WhatsApp Marketing</h4>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                    <p className="text-gray-600">+62 821-9876-5432</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@clusterkalita.com</p>
                    <p className="text-gray-600">marketing@clusterkalita.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Alamat Lokasi</h4>
                    <p className="text-gray-600">
                      Jl. Raya Kalita No. 123<br />
                      Kelurahan Kalita Indah<br />
                      Kecamatan Kalita Sejahtera<br />
                      Kota Kalita, 12345
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-2">Jam Operasional Marketing Office</h4>
                <p className="text-emerald-700">Senin - Minggu: 08.00 - 18.00 WIB</p>
                <p className="text-emerald-600 text-sm mt-2">*Tim marketing siap melayani di luar jam operasional via WhatsApp</p>
              </div>
            </div>
            
            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Lokasi Cluster Kalita</h3>
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-600">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Peta Lokasi</p>
                  <p>Google Maps akan ditampilkan di sini</p>
                  <button className="mt-4 bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                    Buka di Google Maps
                  </button>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
                <h4 className="font-semibold text-gray-800 mb-2">Akses Mudah ke:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>• Tol Kalita: 5 menit</div>
                  <div>• RSU Kalita: 10 menit</div>
                  <div>• Mall Kalita: 8 menit</div>
                  <div>• Sekolah Unggulan: 7 menit</div>
                  <div>• Stasiun KRL: 12 menit</div>
                  <div>• Bandara: 25 menit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Cluster Kalita</h3>
              <p className="text-gray-300 mb-4">
                Hunian modern, aman, dan strategis untuk keluarga Indonesia. 
                Wujudkan impian memiliki rumah idaman bersama kami.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">@</span>
                </div>
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Tipe Unit</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Fasilitas</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Galeri</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
              <div className="space-y-2 text-gray-300">
                <p>📱 +62 812-3456-7890</p>
                <p>✉️ info@clusterkalita.com</p>
                <p>📍 Jl. Raya Kalita No. 123, Kota Kalita</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cluster Kalita. All rights reserved. | Developed with ❤️ for Indonesian Families</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;