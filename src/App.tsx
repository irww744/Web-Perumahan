import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  Play,
  Award,
  Users,
  Building
} from 'lucide-react';
import Navbar from './components/Navbar';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  const galleryImages = [
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const features = [
    { icon: MapPin, title: 'Lokasi Strategis', desc: 'Dekat pusat kota dan fasilitas umum', color: 'emerald' },
    { icon: Home, title: 'Desain Modern Minimalis', desc: 'Tata ruang efisien dan elegan', color: 'emerald' },
    { icon: Trees, title: 'Lingkungan Asri', desc: 'Area hijau luas dan udara segar', color: 'emerald' },
    { icon: Shield, title: 'Keamanan 24 Jam', desc: 'CCTV & Satpam profesional', color: 'emerald' },
    { icon: Car, title: 'Akses Mudah', desc: 'Dekat tol dan transportasi umum', color: 'emerald' },
    { icon: Droplets, title: 'Bebas Banjir', desc: 'Sistem drainase terencana', color: 'emerald' }
  ];

  const unitTypes = [
    {
      type: 'Tipe 36/72',
      price: 'Mulai Rp 350 Juta',
      originalPrice: 'Rp 400 Juta',
      description: 'Cocok untuk keluarga kecil dengan desain efisien',
      specs: ['2 Kamar Tidur', '1 Kamar Mandi', 'Ruang Tamu', 'Dapur', 'Carport'],
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false
    },
    {
      type: 'Tipe 45/90',
      price: 'Mulai Rp 450 Juta',
      originalPrice: 'Rp 520 Juta',
      description: 'Pilihan terpopuler dengan ruang yang nyaman',
      specs: ['3 Kamar Tidur', '2 Kamar Mandi', 'Ruang Tamu', 'Dapur', 'Taman Belakang'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true
    },
    {
      type: 'Tipe 60/120',
      price: 'Mulai Rp 650 Juta',
      originalPrice: 'Rp 750 Juta',
      description: 'Desain premium untuk gaya hidup mewah',
      specs: ['4 Kamar Tidur', '3 Kamar Mandi', 'Ruang Keluarga', 'Dapur Premium', 'Garasi'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Ibu Rina Setyawati',
      text: 'Cluster Kalita memberikan kenyamanan luar biasa. Lingkungannya tenang, aman, dan sangat cocok untuk keluarga.',
      year: 'Penghuni sejak 2023',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Bapak Ahmad Wijaya',
      text: 'Investasi terbaik yang pernah saya buat. Fasilitasnya lengkap dan nilai properti terus meningkat.',
      year: 'Penghuni sejak 2022',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ibu Sari Dewi',
      text: 'Desain rumahnya modern dan lokasi sangat strategis. Tim marketing juga sangat profesional.',
      year: 'Penghuni sejak 2023',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '500+', label: 'Unit Terjual', icon: Home },
    { number: '98%', label: 'Kepuasan Penghuni', icon: Star },
    { number: '15+', label: 'Fasilitas Premium', icon: Award },
    { number: '24/7', label: 'Keamanan', icon: Shield }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-300/15 rounded-full blur-2xl"
        />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1 
              className="font-playfair text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hunian Mewah di
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
                Cluster Kalita
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-4 opacity-90 font-inter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Kemewahan, Kenyamanan, dan Keamanan dalam Satu Lokasi
            </motion.p>
            
            <motion.p 
              className="text-lg lg:text-xl mb-12 opacity-80 max-w-3xl mx-auto font-inter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Rasakan pengalaman hidup yang berbeda dengan desain arsitektur modern, 
              fasilitas premium, dan lingkungan yang asri untuk keluarga Indonesia.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25"
              >
                <Camera className="w-5 h-5 inline mr-3" />
                Booking Visit Sekarang
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/80 text-white hover:bg-white hover:text-emerald-700 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 inline mr-3" />
                Hubungi Marketing
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-soft-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-soft-gray-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-soft-gray-600 font-inter">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-soft-gray-800 mb-6">
                Tentang Cluster Kalita
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-8"></div>
              <p className="text-lg text-soft-gray-600 leading-relaxed max-w-3xl mx-auto font-inter">
                Cluster Kalita menghadirkan konsep hunian premium yang memadukan kemewahan modern 
                dengan kearifan lokal. Setiap detail dirancang untuk memberikan pengalaman hidup 
                yang tak terlupakan bagi keluarga Indonesia.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Cluster Kalita"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Building className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Premium</p>
                      <p className="text-xs">Living</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-soft-gray-800 mb-4">
                    Visi Kami
                  </h3>
                  <p className="text-soft-gray-600 font-inter leading-relaxed">
                    Menjadi developer terdepan yang menghadirkan hunian berkualitas tinggi 
                    dengan standar internasional, namun tetap terjangkau untuk keluarga Indonesia.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-soft-gray-800 mb-4">
                    Komitmen Kualitas
                  </h3>
                  <p className="text-soft-gray-600 font-inter leading-relaxed">
                    Setiap unit dibangun dengan material premium, teknologi terkini, dan 
                    pengawasan ketat untuk memastikan kualitas terbaik bagi penghuni.
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-gray-800">Sertifikat ISO 9001:2015</h4>
                    <p className="text-soft-gray-600 text-sm">Standar kualitas internasional</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-soft-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-soft-gray-800 mb-6">
              Fitur & Keunggulan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg text-soft-gray-600 max-w-2xl mx-auto font-inter">
              Mengapa Cluster Kalita menjadi pilihan utama untuk hunian premium keluarga Anda
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-soft-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-soft-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-soft-gray-600 font-inter leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Types Section */}
      <section id="units" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-soft-gray-800 mb-6">
              Tipe Unit Premium
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg text-soft-gray-600 max-w-2xl mx-auto font-inter">
              Pilih tipe rumah yang sesuai dengan kebutuhan dan gaya hidup keluarga modern Anda
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {unitTypes.map((unit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  unit.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
                }`}
              >
                {unit.popular && (
                  <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Terpopuler
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img 
                    src={unit.image} 
                    alt={unit.type}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="font-playfair text-2xl font-bold">{unit.type}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="font-playfair text-3xl font-bold text-emerald-600">
                        {unit.price}
                      </span>
                      <span className="text-soft-gray-400 line-through text-lg">
                        {unit.originalPrice}
                      </span>
                    </div>
                    <p className="text-soft-gray-600 font-inter">{unit.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {unit.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-soft-gray-700 font-inter">{spec}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Lihat Detail & Booking
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-soft-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-soft-gray-800 mb-6">
              Galeri Foto & Video
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg text-soft-gray-600 max-w-2xl mx-auto font-inter">
              Saksikan keindahan dan kemewahan Cluster Kalita melalui dokumentasi visual kami
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-8"
            >
              <img 
                src={galleryImages[currentImageIndex]} 
                alt="Gallery"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-soft-gray-700" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-soft-gray-700" />
              </motion.button>
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.slice(0, 4).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-32 object-cover rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-soft-gray-800 mb-6">
              Testimoni Penghuni
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg text-soft-gray-600 max-w-2xl mx-auto font-inter">
              Dengar langsung pengalaman keluarga yang telah merasakan kemewahan hidup di Cluster Kalita
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-soft-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">"</span>
                </div>
                
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-soft-gray-700 font-inter leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-playfair font-semibold text-soft-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-soft-gray-500 text-sm font-inter">
                      {testimonial.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-8">
              Penawaran Eksklusif Bulan Ini!
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 font-inter">
              Kesempatan terbatas untuk memiliki hunian premium dengan benefit maksimal
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                { title: 'DP 0% + Cicilan Ringan', desc: 'Tanpa uang muka, langsung KPR dengan bunga kompetitif' },
                { title: 'Cashback 50 Juta', desc: 'Untuk 5 pembeli pertama bulan ini' },
                { title: 'Free Biaya Administrasi', desc: 'Biaya balik nama & notaris ditanggung developer' },
                { title: 'Bonus Kitchen Set Premium', desc: 'Kitchen set mewah senilai 25 juta untuk setiap pembelian' }
              ].map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-semibold mb-3">{offer.title}</h3>
                  <p className="opacity-90 font-inter">{offer.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-sm p-10 rounded-3xl mb-12 border border-white/30"
            >
              <h3 className="font-playfair text-3xl font-bold mb-6">
                Wujudkan Impian Hunian Mewah Anda di Cluster Kalita!
              </h3>
              <p className="text-lg mb-8 opacity-90 font-inter max-w-3xl mx-auto">
                Jangan sia-siakan kesempatan emas ini. Hubungi tim marketing profesional kami 
                untuk konsultasi gratis dan jadwalkan kunjungan eksklusif ke lokasi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-600 hover:bg-soft-gray-100 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl"
                >
                  <Phone className="w-5 h-5 inline mr-3" />
                  Hubungi Marketing Sekarang
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                >
                  <Camera className="w-5 h-5 inline mr-3" />
                  Jadwalkan Site Visit Premium
                </motion.button>
              </div>
            </motion.div>
            
            <p className="text-lg opacity-80 font-inter">
              *Syarat dan ketentuan berlaku. Promo terbatas hingga akhir bulan atau sampai unit habis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-24 bg-soft-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-soft-gray-800 mb-6">
              Kontak & Lokasi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg text-soft-gray-600 max-w-2xl mx-auto font-inter">
              Hubungi tim marketing profesional kami atau kunjungi langsung lokasi premium Cluster Kalita
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-2xl font-bold text-soft-gray-800 mb-8">
                Informasi Kontak
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: 'WhatsApp Marketing',
                    content: ['+62 812-3456-7890', '+62 821-9876-5432'],
                    subtitle: 'Respon cepat 24/7'
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: ['info@clusterkalita.com', 'marketing@clusterkalita.com'],
                    subtitle: 'Tim profesional siap membantu'
                  },
                  {
                    icon: MapPin,
                    title: 'Alamat Marketing Office',
                    content: ['Jl. Raya Kalita No. 123', 'Kelurahan Kalita Indah', 'Kota Kalita, 12345'],
                    subtitle: 'Lokasi strategis dan mudah diakses'
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-soft-gray-800 mb-2 text-lg">
                        {contact.title}
                      </h4>
                      {contact.content.map((item, i) => (
                        <p key={i} className="text-soft-gray-600 font-inter mb-1">
                          {item}
                        </p>
                      ))}
                      <p className="text-emerald-600 text-sm font-inter mt-2">
                        {contact.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-10 p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200"
              >
                <h4 className="font-playfair font-semibold text-emerald-800 mb-3 text-lg">
                  Jam Operasional Marketing Office
                </h4>
                <p className="text-emerald-700 font-inter mb-2">
                  Senin - Minggu: 08.00 - 18.00 WIB
                </p>
                <p className="text-emerald-600 text-sm font-inter">
                  *Tim marketing siap melayani di luar jam operasional via WhatsApp
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-2xl font-bold text-soft-gray-800 mb-8">
                Lokasi Premium Cluster Kalita
              </h3>
              
              <div className="bg-gradient-to-br from-soft-gray-200 to-soft-gray-300 rounded-3xl h-96 flex items-center justify-center shadow-xl mb-8">
                <div className="text-center text-soft-gray-600">
                  <MapPin className="w-20 h-20 mx-auto mb-6 text-emerald-600" />
                  <p className="text-xl font-playfair font-semibold mb-2">Peta Lokasi Interaktif</p>
                  <p className="font-inter mb-6">Google Maps akan ditampilkan di sini</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg"
                  >
                    Buka di Google Maps
                  </motion.button>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="font-playfair font-semibold text-soft-gray-800 mb-6 text-lg">
                  Akses Mudah ke Fasilitas Utama:
                </h4>
                <div className="grid grid-cols-2 gap-6 text-sm text-soft-gray-600 font-inter">
                  {[
                    { place: 'Tol Kalita', time: '5 menit' },
                    { place: 'RSU Kalita', time: '10 menit' },
                    { place: 'Mall Kalita Plaza', time: '8 menit' },
                    { place: 'Sekolah Unggulan', time: '7 menit' },
                    { place: 'Stasiun KRL', time: '12 menit' },
                    { place: 'Bandara Internasional', time: '25 menit' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-soft-gray-50 rounded-lg">
                      <span>• {item.place}</span>
                      <span className="font-semibold text-emerald-600">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-soft-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-emerald-400">
                    Cluster Kalita
                  </h3>
                  <p className="text-soft-gray-300 text-sm">Premium Living Experience</p>
                </div>
              </div>
              <p className="text-soft-gray-300 font-inter leading-relaxed mb-6 max-w-md">
                Hunian premium dengan standar internasional, dirancang khusus untuk keluarga Indonesia 
                yang menghargai kualitas, kenyamanan, dan kemewahan.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social, index) => (
                  <motion.div
                    key={social}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 rounded-xl flex items-center justify-center transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-white font-bold text-sm">
                      {social.charAt(0)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-6 text-emerald-400">
                Navigasi Cepat
              </h4>
              <ul className="space-y-3 text-soft-gray-300 font-inter">
                {['Tentang Kami', 'Tipe Unit', 'Fasilitas Premium', 'Galeri', 'Testimoni', 'Kontak'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-emerald-400 transition-colors duration-300 hover:translate-x-2 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-6 text-emerald-400">
                Hubungi Kami
              </h4>
              <div className="space-y-4 text-soft-gray-300 font-inter">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-emerald-400" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-emerald-400" />
                  <span>info@clusterkalita.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-emerald-400 mt-1" />
                  <span>Jl. Raya Kalita No. 123<br />Kota Kalita, 12345</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-soft-gray-700 pt-8 text-center">
            <p className="text-soft-gray-400 font-inter">
              &copy; 2024 Cluster Kalita. All rights reserved. | 
              <span className="text-emerald-400"> Developed with ❤️ for Indonesian Families</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;