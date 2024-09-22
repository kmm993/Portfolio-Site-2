export interface Dimensions {
  width: number;
  height: number;
}

export interface PortfolioItem {
  image: string;
  title: string;
  dimensions: Dimensions;
  alt: string;
}

export interface PortfolioSection {
  section: string;
  sectonImage: string;
  id: string;
  alt?: string;
  dimensions: Dimensions;
  portfolioItems: PortfolioItem[];
}

export const PORTFOLIO_SECTIONS: PortfolioSection[] = [
  {
    section: 'Design Portfolio',
    id: 'design',
    sectonImage: '../assets/images/graphics/Design Portfolio title.png',
    dimensions: {
      width: 2,
      height: 2,
    },
    portfolioItems: [
      {
        image: '../assets/images/fitness_unbound_branding.jpg',
        title: 'Fitness Unbound Logo Design',
        alt: 'Fitness Unbound Logo Design',
        dimensions: {
          height: 2,
          width: 3,
        },
      },
      {
        image: '../assets/images/brand_package.jpg',
        title: 'Fitness Unbound Brand Package',
        alt: 'Fitness Unbound Brand Package',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/AAIS Views.jpg',
        title: 'AAIS Views Blog Site',
        alt: 'AAIS Views Blog Site',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/delicate_decadence_card.jpg',
        title: 'Delicate Decadence Business Card',
        alt: 'Delicate Decadence Business Card',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/vt_medic_alert_brochure.jpg',
        title: 'VT Medic Alert Brochure',
        alt: 'VT Medic Alert Brochure',
        dimensions: {
          height: 2,
          width: 3,
        },
      },
      {
        image: '../assets/images/Muse Logo display.jpg',
        title: 'Muse Logo Design',
        alt: 'Muse Logo Design',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/VME_Email_campaign.jpg',
        title: 'AAIS Virtual Main Event Email Campaign',
        alt: 'AAIS Virtual Main Event Email Campaign',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/cherished_moments_doula_services.jpg',
        title: 'Cherished Moments Doula Services Logo',
        alt: 'Cherished Moments Doula Services Logo',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/Viewpoint-2020 Edition-Print_Page_01.jpg',
        title: 'AAIS Viewpoint Magazine 2020',
        alt: 'AAIS Viewpoint Magazine 2020',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/bloo_eyed_spazz_branding.jpg',
        title: 'Bloo Eyed Spazz Branding',
        alt: 'Bloo Eyed Spazz Branding',
        dimensions: {
          height: 2,
          width: 1,
        },
      },
      {
        image: '../assets/images/Fitness Unbound-PostcardBack-20213.jpg',
        title: 'Fitness Unbound 2021 Postcard',
        alt: 'Fitness Unbound 2021 Postcard',
        dimensions: {
          height: 2,
          width: 3,
        },
      },
    ],
  },
  {
    section: 'Illustration Portfolio',
    id: 'illustration',
    dimensions: {
      height: 3,
      width: 2,
    },
    sectonImage: '../assets/images/graphics/Illustration Portfolio title.png',
    portfolioItems: [
      {
        image: '../assets/images/illustration/Commission process.jpg',
        title: 'Skye Commission',
        alt: 'Skye Commission',
        dimensions: {
          height: 2,
          width: 1,
        },
      },
      {
        image: '../assets/images/illustration/little_talks_cover.jpg',
        title: 'Little Talks Book Cover',
        alt: 'Little Talks Book Cover',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/illustration/rogue.jpg',
        title: 'Rogue Character Commission',
        alt: 'Rogue Character Commission',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/illustration/strange_fellows.jpg',
        title: 'Strange Fellows Commission',
        alt: 'Strange Fellows Commission',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/illustration/skeleton_mage_t-shirt.jpg',
        title: 'D&D 214 T-shirt Design',
        alt: 'D&D 214 T-shirt Design',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/illustration/CadxBeau_complete.jpg',
        title: 'Critical Role: Healing Hug',
        alt: 'Critical Role: Healing Hug',
        dimensions: {
          height: 2,
          width: 2,
        },
      },
      {
        image: '../assets/images/illustration/sheepii_emotes.jpg',
        title: 'Sheepii Emotes',
        alt: 'Sheepii Emotes',
        dimensions: {
          height: 2,
          width: 1,
        },
      },
    ],
  },
];
