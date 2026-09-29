import {
  Shield,
  ShieldCheck,
  HeartPulse,
  Flame,
  FileText,
  ClipboardCheck,
  Users,
  Monitor,
  BuildingIcon,
  Book,
} from 'lucide-react';

export const personal = {
  name: 'Aykel Daely',
  role: 'Occupational Health & Safety Enthusiast',
  program: 'D4 Keselamatan dan Kesehatan Kerja',
  specialization:
    'Spesialisasi pada Identifikasi Bahaya (HIRADC), Inspeksi Lapangan, Audit ISO 45001, dan Ergonomi.',
  location: 'Medan, Indonesia',
  email: 'kontak@namamu.my.id',
  whatsapp: '6281234567890',
  whatsappLabel: '+62 812-3456-7890',
  linkedin: 'https://linkedin.com/in/aykel-daely',
  profileImage:
    '/public/images/foto-profil.jpg',
  avatarImage:
    '/public/images/foto-profil.jpg',
};

export const headline = {
  title: 'Safe Minds. Safe Hands. Safe Plans.',
  subtitle:
    'D4 Keselamatan dan Kesehatan Kerja | Spesialisasi pada Identifikasi Bahaya (HIRADC), Inspeksi Lapangan, Audit ISO 45001, dan Ergonomi.',
  badge: 'Occupational Health & Safety Enthusiast',
};

export const stats = [
  { label: 'Sertifikasi', value: '5+', icon: ShieldCheck },
  { label: 'Bln Magang', value: '7+', icon: FileText },
  { label: 'Temuan CAPA', value: '100+', icon: ClipboardCheck },
  ];

export const navItems = [
  { label: 'Tentang', href: '#hero' },
  { label: 'Sertifikasi', href: '#sertifikasi' },
  { label: 'Proyek K3', href: '#proyek' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Organisasi', href: '#organisasi' },
  { label: 'Kontak', href: '#kontak' },
];

export type Certification = {
  title: string;
  issuer: string;
  description: string;
  icon: typeof Shield;
  iconColor: string;
  iconBg: string;
};

export const certifications: Certification[] = [
  {
    title: 'Ahli K3 Umum',
    issuer: 'Kemnaker RI',
    description:
      'Lisensi profesional Ahli K3 Umum bersertifikat dari Kementerian Ketenagakerjaan Republik Indonesia.',
    icon: Shield,
    iconColor: 'text-safety-green',
    iconBg: 'bg-safety-green/10',
  },
  {
    title: 'Test of English Prophiciency',
    issuer: 'Pusat Layanan Tes Indonesia',
    description:
      'Lisensi profesional Ahli K3 Umum bersertifikat dari Kementerian Ketenagakerjaan Republik Indonesia.',
    icon: Book,
    iconColor: 'text-safety-green',
    iconBg: 'bg-safety-green/10',
  },
  {
    title: 'Internal Auditor ISO 45001:2018',
    issuer: 'Occupational Health & Safety',
    description:
      'Kompetensi sebagai Auditor Internal untuk sistem manajemen K3 berstandar ISO 45001:2018.',
    icon: ShieldCheck,
    iconColor: 'text-safety-amber',
    iconBg: 'bg-safety-amber/10',
  },
  {
    title: 'Pertolongan Pertama Pada Kecelakaan',
    issuer: 'First Aid Officer',
    description:
      'Sertifikasi sebagai Petugas Pertolongan Pertama (P3K) untuk penanganan kondisi darurat di tempat kerja.',
    icon: HeartPulse,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10',
  },
  {
    title: 'Petugas Pemadam Kebakaran',
    issuer: 'Fire Fighting & Tanggap Darurat',
    description:
      'Sertifikasi kompetensi sebagai Petugas Pemadam Kebakaran dan Tim Tanggap Darurat situasi krisis.',
    icon: Flame,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
  },
];

export type Project = {
  id: number;
  title: string;
  category: 'HIRADC & JSA' | 'Inspeksi & CAPA' | 'Safety Culture' | 'Ergonomi';
  image: string;
  summary: string;
  background: string;
  methodology: string;
  capaResult: string;
  regulation: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Penyusunan Dokumen HIRADC & JSA Pekerjaan Konstruksi / Industri',
    category: 'HIRADC & JSA',
    image:
      'https://images.pexels.com/photos/8961034/pexels-photo-8961034.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Identifikasi bahaya, penilaian risiko, dan penentukan pengendalian (HIRADC) serta Job Safety Analysis untuk pekerjaan konstruksi dan industri.',
    background:
      'Pekerjaan konstruksi memiliki tingkat risiko kecelakaan kerja yang tinggi. Diperlukan dokumen HIRADC dan JSA yang komprehensif untuk memetakan setiap potensi bahaya pada tiap tahapan pekerjaan.',
    methodology:
      'Melakukan observasi lapangan, wawancara dengan pekerja, dan kajian dokumentasi. Risiko dinilai menggunakan matriks risiko 5x5 dengan kategori likelihood dan severity.',
    capaResult:
      'Menghasilkan dokumen HIRADC mencakup 45 aktivitas kerja dengan 120+ identifikasi bahaya. JSA disusun untuk 8 pekerjaan berisiko tinggi dengan rekomendasi pengendalian hierarki kontrol.',
    regulation:
      'PP No. 50 Tahun 2012 tentang SMK3, Permenaker No. 5 Tahun 2018 tentang TKK Konstruksi, ISO 45001:2018.',
  },
  {
    id: 2,
    title: 'Pelaksanaan Safety Patrol & Pelaporan Unsafe Act / Unsafe Condition',
    category: 'Inspeksi & CAPA',
    image:
      'https://images.pexels.com/photos/8487401/pexels-photo-8487401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Inspeksi rutin lapangan untuk mengidentifikasi tindakan tidak aman (unsafe act) dan kondisi tidak aman (unsafe condition) serta pelaporan CAPA.',
    background:
      'Sebagian besar kecelakaan kerja disebabkan oleh perilaku tidak aman. Safety patrol bertujuan melakukan deteksi dini dan tindakan korektif sebelum insiden terjadi.',
    methodology:
      'Patroli harian menggunakan checklist inspeksi K3, dokumentasi foto temuan, klasifikasi tingkat risiko, dan input data ke sistem pelaporan untuk tracking CAPA.',
    capaResult:
      '100+ temuan CAPA terdokumentasi dalam 6 bulan. 85% temuan tertutup dalam tenggat waktu. Penurunan significant unsafe act melalui coaching dan toolbox talk berkelanjutan.',
    regulation:
      'PP No. 50 Tahun 2012, Permenaker No. 8 Tahun 2010 tentang Alat Pelindung Diri, SMK3 PP 50/2012.',
  },
  {
    id: 3,
    title: 'Program Safety Induction & Briefing Toolbox Talk (TBT)',
    category: 'Safety Culture',
    image:
      'https://images.pexels.com/photos/35082108/pexels-photo-35082108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Penyelenggaraan Safety Induction untuk pekerja baru dan Toolbox Talk harian untuk membangun budaya keselamatan kerja.',
    background:
      'Pekerja baru sering belum memahami prosedur K3 di lokasi. Safety Induction dan TBT berkelanjutan menjadi fondasi pembentukan safety culture di lingkungan kerja.',
    methodology:
      'Materi induction mencakup kebijakan K3, APD, prosedur darurat, dan izin kerja. TBT harian 10-15 menit membahas topik spesifik dengan metode interaktif dan studi kasus.',
    capaResult:
      '90+ pekerja telah mengikuti Safety Induction. Toolbox Talk berjalan konsisten 5x per minggu. Survei safety climate menunjukkan peningkatan awareness K3 sebesar 40%.',
    regulation:
      'PP No. 50 Tahun 2012, Permenaker No. 2 Tahun 1992 tentang Tata Cara Penunjukan, Kewajiban dan Wewenang Ahli K3.',
  },
  {
    id: 4,
    title: 'Evaluasi Beban Kerja & Risk Assessment Ergonomi (REBA / RULA)',
    category: 'Ergonomi',
    image:
      'https://images.pexels.com/photos/5301775/pexels-photo-5301775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Assessment postur kerja dan beban ergonomi menggunakan metode REBA dan RULA untuk pencegahan MSDs.',
    background:
      'Musculoskeletal Disorders (MSDs) menjadi gangguan kesehatan kerja tertinggi. Evaluasi ergonomi diperlukan untuk mengidentifikasi postur kerja berisiko dan memberikan rekomendasi perbaikan.',
    methodology:
      'Pengukuran postur kerja menggunakan aplikasi REBA/RULA. Analisis sudut sendi, frekuensi gerakan, dan beban otot. Dokumentasi video kerja untuk validasi penilaian.',
    capaResult:
      '12 stasiun kerja teridentifikasi dengan skor REBA tinggi (7-11). Rekomendasi redesign workstation, rotasi kerja, dan stretching exercise. Penurunan keluhan MSDs 30% pasca implementasi.',
    regulation:
      'Permenaker No. 5 Tahun 2018, ISO 45001:2018 Clause 6.1.2, Pedoman Ergonomi Kemnaker.',
  },
];

export const projectFilters = ['Semua', 'HIRADC & JSA', 'Inspeksi & CAPA', 'Safety Culture', 'Ergonomi'] as const;

export type SkillCategory = {
  title: string;
  // emoji: string;
  icon: typeof Monitor;
  skills: { name: string; icon: typeof Shield }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Technical HSE Skills',
    //emoji: '🛠️',
    icon: Shield,
    skills: [
      { name: 'HIRADC & JSA', icon: FileText },
      { name: 'SMK3 PP 50/2012', icon: ShieldCheck },
      { name: 'ISO 45001 Audit', icon: ClipboardCheck },
      { name: 'Inspeksi K3', icon: Shield },
      { name: 'Investigasi Kecelakaan', icon: Shield },
      { name: 'Ergonomi (REBA/RULA)', icon: Monitor },
      { name: 'Tanggap Darurat', icon: Flame },
      { name: 'First Aid', icon: HeartPulse },
    ],
  },
  {
    title: 'Tools & Software',
    //emoji: '💻',
    icon: Monitor,
    skills: [
      { name: 'Microsoft Excel (HSE Analysis)', icon: FileText },
      { name: 'SPSS / R', icon: ClipboardCheck },
      { name: 'Canva (Safety Signage & Media)', icon: Monitor },
      { name: 'Google Workspace', icon: FileText },
    ],
  },
  {
    title: 'Soft Skills & Leadership',
    //emoji: '🗣️',
    icon: Users,
    skills: [
      { name: 'Toolbox Talk (TBT)', icon: Users },
      { name: 'Safety Induction', icon: ShieldCheck },
      { name: 'Public Speaking', icon: Users },
      { name: 'Pemecahan Masalah', icon: Shield },
      { name: 'Kerja Sama Tim', icon: Users },
    ],
  },
];

export type Organization = {
  id: number;
  title: string;
  role: string;
  description: string;
  gallery: string[];
  icon: typeof Users;
};

export const organizations: Organization[] = [
  {
    id: 1,
    title: 'Himpunan Mahasiswa K3 / BEM Kampus',
    role: 'Anggota Divisi K3 & Pengawasan Lingkungan',
    description:
      'Aktif dalam kepengurusan Himpunan Mahasiswa K3 sebagai anggota Divisi K3 dan Pengawasan Lingkungan. Menyusun program kerja kampanye keselamatan di lingkungan kampus dan mengawasi penerapan standar K3 pada kegiatan mahasiswa.',
    gallery: [
      'https://images.pexels.com/photos/8761640/pexels-photo-8761640.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      'https://images.pexels.com/photos/7648234/pexels-photo-7648234.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      'https://images.pexels.com/photos/8761303/pexels-photo-8761303.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    ],
    icon: Users,
  },
  {
    id: 2,
    title: 'Seminar & Campaign Bulan K3 Nasional',
    role: 'Koordinator Acara & Safety Officer Event',
    description:
      'Menjadi koordinator acara sekaligus Safety Officer pada peringatan Bulan K3 Nasional. Mengelola teknis acara, keselamatan peserta, dan kampanye edukasi K3 kepada komunitas kampus dan masyarakat umum.',
    gallery: [
      'https://images.pexels.com/photos/8761657/pexels-photo-8761657.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      'https://images.pexels.com/photos/7648233/pexels-photo-7648233.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    ],
    icon: Users,
  },
  {
    id: 3,
    title: 'Program Pengabdian Masyarakat K3',
    role: 'Tim Edukator K3 Lapangan / UMKM',
    description:
      'Berpartisipasi dalam program pengabdian masyarakat sebagai Tim Edukator K3 Lapangan. Memberikan edukasi penerapan K3 kepada pelaku UMKM, termasuk penggunaan APD, manajemen risiko kerja, dan pencegahan kecelakaan kerja.',
    gallery: [
      'https://images.pexels.com/photos/36979662/pexels-photo-36979662.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      'https://images.pexels.com/photos/8960942/pexels-photo-8960942.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      'https://images.pexels.com/photos/15109992/pexels-photo-15109992.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    ],
    icon: Users,
  },
];
