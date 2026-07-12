const asset = (path: string) => new URL(`../../${path}`, import.meta.url).href;

export const site = {
  name: 'Soe Pyae Sone',
  alternateName: 'Nway Oo Pyae Zo',
  title: 'Data Analyst and Front-End Developer',
  description: 'A portfolio focused on data storytelling, dashboards, and polished front-end experiences.',
  email: 'nwayoopyaezo@outlook.com',
  alternateEmail: 'nwayoopyaezo@gmail.com',
  phone: '+6680 520 6594',
  address: 'บ้านเลขที่ 3 Phahon Yothin 24 Alley, Lane 2-3, Chom Phon, Chatuchak, Bangkok 10900',
  resume: asset('assets/uploads/Resume.pdf'),
  logo: asset('assets/img/logo.svg'),
  heroImage: asset('assets/uploads/portfolio10.png'),
  aboutImage: asset('assets/uploads/portfolio10.png'),
  galleryImages: [
    asset('assets/uploads/gallery_img-01.jpg'),
    asset('assets/uploads/gallery_img-02.jpg'),
    asset('assets/uploads/gallery_img-03.jpg'),
    asset('assets/uploads/gallery_img-04.jpg'),
    asset('assets/uploads/gallery_img-05.jpg'),
    asset('assets/uploads/gallery_img-06.jpg'),
  ],
  testimonialImages: [asset('assets/uploads/testi_01.png'), asset('assets/uploads/testi_02.png'), asset('assets/uploads/testi_03.png')],
  socials: [
    { label: 'Facebook', href: 'https://web.facebook.com/nway.oo.pyae.zo.2025' },
    { label: 'Line', href: 'https://line.me/ti/p/pzGtX07TrQ' },
    { label: 'GitHub', href: 'https://github.com/nwayoopyaezo' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nwayoopyaezo/' },
  ],
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
];
