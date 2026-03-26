type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type Section = {
  id: string;
  title: string;
  eyebrow?: string;
  body: string[];
  images?: GalleryItem[];
};

type NavigationItem = {
  label: string;
  tabId?: string;
  href?: string;
  external?: boolean;
};

const facebookUrl = 'https://www.facebook.com/people/NM-Lap-Robes-for-Veterans/61576165091710/';

const navigation: NavigationItem[] = [
/*  { label: 'Home', tabId: 'home' },
  { label: 'Recipients', tabId: 'recipients' },
  { label: 'Events', tabId: 'events' },
  { label: 'Volunteers', tabId: 'volunteers' },
  { label: 'Supporters', tabId: 'supporters' },
  { label: 'Contact', tabId: 'contact' },*/
  {
    label: 'Visit Our Facebook Page',
    href: facebookUrl,
    external: true,
  },
];

const newestRecipients: GalleryItem[] = [
  {
    src: 'src/images/vetern_recipients/ray bonda 101 years old on July 31st.jpg',
    alt: 'Veteran recipient Ray Bonda celebrating his 101st birthday',
    caption: 'Newest veteran recipient spotlight',
  },
  {
    src: 'src/images/vetern_recipients/ben garcia 2.JPG',
    alt: 'Veteran recipient receiving a lap robe',
    caption: 'Delivered with gratitude in New Mexico',
  },
  {
    src: 'src/images/vetern_recipients/af wc vet.jpg',
    alt: 'Wheelchair veteran recipient with an Air Force lap robe',
    caption: 'Branch-specific lap robes for deserving veterans',
  },
];

const sections: Section[] = [
  {
    id: 'about',
    title: 'About NM Lap Robes For Veterans',
    eyebrow: 'Our Story',
    body: [
      'WE ARE NM LAP ROBES FOR VETERANS. WHILE VISITING NEW YORK IN THE SUMMER OF 2024, JOHN BAERMAN MET A GROUP DONATING LAP ROBES TO VETERANS IN THE LOCAL AREA. HE FELT THAT VETERANS, ESPECIALLY WHEELCHAIR AND INFIRMED VETERANS, IN NEW MEXICO DESERVED THE SAME. WITH THE ASSISTANCE OF 3 OTHER VFW MEMBERS HE FILED FOR INCORPORATION IN DECEMBER OF 2024. THE ORGANIZATION RECEIVED OUR NON PROFIT STATUS FROM THE STATE IN FEBRUARY 2025 AND NM LAP ROBES FOR VETERANS WAS BORN. WE WERE GRANTED OUR 501c3 FROM THE IRS IN JULY 2025.',
      'OUR MISSION IS TO PROVIDE FREE LAP ROBES TO NEW MEXICO VETS IN WHEELCHAIRS, BED RIDDEN AT THE VA, AT ASSISTED LIVING HOMES AND VETS THAT ARE HOMEBOUND. IN 2025 WE HAVE DONATED OVER 200 LAP ROBES IN NEW MEXICO.',
      "AS A NON PROFIT, ALL OUR FUNDING IS THROUGH PRIVATE AND BUSINESS SPONSORSHIPS. FUNDRAISER AT VETERAN AND COMMUNITY FUNCTIONS ARE TO OBTAIN SPONSORS BUT WE WILL TAKE DONATIONS. ALL MATERIAL IS PURCHASED SOLELY WITH THIS FUNDING. MOST OF THE INITIAL OPERATING EXPENSES HAVE BEEN COVERED BY THE DIRECTORS. ALL PRODUCT ARE MANUFACTURED AND DISTRIBUTED BY VOLUNTEERS. WE DON'T SELL OUR LAP ROBES.",
      'ALL THE LAP ROBES ARE SERVICE SPECIFIC FOR THE VET: ARMY, NAVY, MARINES, AIR FORCE AND COAST GUARD. WE ARE HOPING TO HAVE A SPACE FORCE ONE WITHIN THE COMING YEARS.',
    ],
    images: [
      { src: 'src/images/info/AF VET.jpg', alt: 'Air Force veteran with lap robe' },
      { src: 'src/images/info/ARMY VET.jpg', alt: 'Army veteran with lap robe' },
      { src: 'src/images/info/USMC2.jpg', alt: 'Marine Corps veteran with lap robe' },
      { src: 'src/images/info/vet home 1.JPG', alt: 'Veteran home visit with lap robe' },
      { src: 'src/images/info/vet scarf.JPG', alt: 'Veteran scarf presentation' },
      { src: 'src/images/info/vet scarf2.JPG', alt: 'Veteran with a customized scarf' },
    ],
  },
  {
    id: 'veteran-recipients',
    title: 'Veteran Recipients',
    eyebrow: 'Honoring Service',
    body: [
      'Each lap robe is created for the veteran receiving it, with branch-specific details that show gratitude for their service.',
      'We deliver lap robes to wheelchair veterans, veterans in assisted living, veterans at the VA, and veterans who are homebound across New Mexico.',
    ],
    images: [
      { src: 'src/images/vetern_recipients/el patron 1.jpg', alt: 'Veteran recipients at an event' },
      { src: 'src/images/vetern_recipients/el patron 2.jpg', alt: 'Veteran recipient receiving a lap robe' },
      { src: 'src/images/vetern_recipients/el patron 3.jpg', alt: 'Volunteer and veteran recipient together' },
      { src: 'src/images/vetern_recipients/el patron 4.jpg', alt: 'Lap robe distribution moment' },
      { src: 'src/images/vetern_recipients/fair1.jpeg', alt: 'Community fair veteran recipient photo' },
      { src: 'src/images/vetern_recipients/fair3.jpg', alt: 'Veteran recipient at a local fair' },
      { src: 'src/images/vetern_recipients/fair4.jpg', alt: 'Veterans and volunteers at outreach event' },
      { src: 'src/images/vetern_recipients/fair5.jpg', alt: 'Veteran recipient community photo' },
    ],
  },
  {
    id: 'events',
    title: 'Events',
    eyebrow: 'Community Outreach',
    body: [
      'We participate in veteran and community events throughout New Mexico to meet supporters, raise awareness, and gather the funding needed to keep making lap robes.',
      'These booths and local appearances help us connect with donors, volunteers, and veterans who need our support.',
    ],
    images: [
      { src: 'src/images/honors/honor10.jpg', alt: 'Veteran event booth' },
      { src: 'src/images/honors/honor2.jpg', alt: 'Community event support' },
      { src: 'src/images/honors/honor3.jpg', alt: 'Local outreach with veterans' },
      { src: 'src/images/honors/honor4.jpg', alt: 'Veteran recognition event' },
      { src: 'src/images/honors/honor5.jpg', alt: 'Community event volunteers' },
      { src: 'src/images/honors/honor6.jpg', alt: 'Event table display' },
      { src: 'src/images/honors/honor9.jpg', alt: 'Veteran community presentation' },
      { src: 'src/images/honors/honorflt.jpg', alt: 'Honor flight related event photo' },
    ],
  },
  {
    id: 'our-volunteers',
    title: 'Our Volunteers',
    eyebrow: 'Hands Behind Every Lap Robe',
    body: [
      'Our organization is made up strictly of volunteers in the manufacture of our lap robes. Without these unselfish men and women we would not have lap robes to distribute to our deserving veterans. These volunteers put in long hours to get these lap robes made and distributed.',
      'Recently one of our volunteers was recognized by KOB Channel 4 "Pay It Forward" for her volunteer work.',
    ],
    images: [
      { src: 'src/images/voluteer/sewing.jpg', alt: 'Volunteer sewing lap robes' },
      { src: 'src/images/voluteer/sew2.jpg', alt: 'Volunteer working on a lap robe' },
      { src: 'src/images/voluteer/sew3.jpg', alt: 'Volunteers making lap robes' },
      { src: 'src/images/voluteer/sew4.jpg', alt: 'Volunteer sewing materials' },
      { src: 'src/images/voluteer/robes gallup.jpg', alt: 'Completed lap robes prepared for distribution' },
    ],
  },
  {
    id: 'our-supporters',
    title: 'Our Supporters',
    eyebrow: 'Powered By Generosity',
    body: [
      'We are a 501c3 non profit organization. All material needed to make these lap robes are purchased through donations from individuals and corporations in New Mexico and from outside the state.',
      'We have set up fund raising booths at local community and veterans events to help raise the needed funds to continue our endeavors. Without the generous contributions we would not be able distribute the lap robes to the veterans.',
    ],
    images: [
      { src: 'src/images/supporters/CAR SHOW.jpg', alt: 'Supporter event at a car show' },
      { src: 'src/images/supporters/CHECK.jpg', alt: 'Donation check from a supporter' },
      { src: 'src/images/supporters/DONOR 2 ABQ.jpg', alt: 'Albuquerque donor support photo' },
      { src: 'src/images/supporters/DONOR ABQ 2.jpg', alt: 'Additional Albuquerque donor photo' },
      { src: 'src/images/supporters/GALLUP2.jpg', alt: 'Gallup supporter photo' },
      { src: 'src/images/supporters/hshow1.jpeg', alt: 'Supporter booth display' },
      { src: 'src/images/supporters/hshow5.jpeg', alt: 'Community supporter engagement' },
      { src: 'src/images/supporters/hshow6.jpeg', alt: 'Supporter recognition event' },
      { src: 'src/images/supporters/stuck lizard.jpg', alt: 'Supporter contribution from local business' },
    ],
  },
];

const missionText =
  'Our vision is to ensure all wheelchair, bedridden and nursing home veterans in New Mexico to understand our gratitude for their service to this country with a hand crafted branch specific lap robe.';

const donationAddress = [
  'NM Lap Robes For Veterans',
  '1852 Smarty Jones Street SE',
  'Albuquerque, NM, United States, New Mexico',
];

const contactLines = [
  'NM Lap Robes For Veterans',
  '1852 Smarty Jones Street SE',
  'Albuquerque, NM, United States, New Mexico',
  'nmlaprobesforveterans@gmail.com',
  '(505) 355-9801',
];

const donationInstructions = [
  'To make a donation please make check payable to and mail to:',
  'NM Lap Robes For Veterans',
  '1852 Smarty Jones Street SE',
  'Albuquerque, NM, United States, New Mexico',
];

const donationQrImage = 'src/images/donation-qr.png';
const contactSupportImage = 'src/images/contact-support.png';

const currentYear = new Date().getFullYear();

const sectionMap = sections.reduce<Record<string, Section>>((acc, section) => {
  acc[section.id] = section;
  return acc;
}, {});

const renderGallery = (items: GalleryItem[]) => {
  if (!items.length) {
    return '';
  }

  return `
    <div class="gallery">
      ${items
        .map(
          (item) => `
            <figure class="gallery-card">
              <img src="${item.src}" alt="${item.alt}" />
              <figcaption>${item.caption ?? item.alt}</figcaption>
            </figure>
          `,
        )
        .join('')}
    </div>
  `;
};

const renderEventCarousel = (items: GalleryItem[]) => {
  if (!items.length) {
    return '';
  }

  return `
    <div class="event-carousel" data-carousel>
      <div class="event-carousel-track">
        ${items
          .map(
            (item, index) => `
              <figure class="gallery-card event-slide" data-slide="${index}" ${index === 0 ? '' : 'hidden'}>
                <img src="${item.src}" alt="${item.alt}" />
                <figcaption>${item.caption ?? item.alt}</figcaption>
              </figure>
            `,
          )
          .join('')}
      </div>
      <div class="event-carousel-dots" role="tablist" aria-label="Event images">
        ${items
          .map(
            (_, index) => `
              <button
                type="button"
                class="carousel-dot${index === 0 ? ' is-active' : ''}"
                data-carousel-dot="${index}"
                aria-label="Show event image ${index + 1}"
                aria-selected="${index === 0 ? 'true' : 'false'}"
              ></button>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
};

const renderSectionPanel = (section: Section) => `
  <section id="${section.id}" class="section">
    <div class="section-panel">
      <div class="section-layout">
        <div class="section-copy">
          ${section.eyebrow ? `<p class="eyebrow">${section.eyebrow}</p>` : ''}
          <h2>${section.title}</h2>
          ${section.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </div>
        ${section.id === 'events' ? renderEventCarousel(section.images ?? []) : renderGallery(section.images ?? [])}
      </div>
    </div>
  </section>
`;

const renderHeroPanel = () => `
   <section class="hero hero-home">
    <div class="hero-card hero-copy">
      <div class="hero-logo-wrap">
        <img src="src/images/Logo.jpg" alt="NM Lap Robes For Veterans logo" class="hero-logo-image" />
      </div>
      <p class="eyebrow">Hand Crafted Gratitude For New Mexico Veterans</p>
      <h1>Comfort, dignity, and gratitude for veterans across New Mexico</h1>
      <p>${missionText}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="#tab-contact">Support Our Mission</a>
        <a class="button button-secondary" href="https://www.facebook.com/people/NM-Lap-Robes-for-Veterans/61576165091710/" target="_blank" rel="noreferrer">Visit Our Facebook Page</a>
      </div>
    </div>
    <div class="hero-card hero-visual">
      <img src="src/images/info/vet home 1.JPG" alt="Members of NM Lap Robes For Veterans" />
      <div class="hero-badge">
        Use the large tabs below to view recipients, events, volunteer work, supporters, and contact information.
      </div>
    </div>
  </section>
`;

const renderFeatureHighlights = () => `
  <section class="feature-grid" aria-label="Highlights">
    <article class="feature-card">
      <strong>Vision Statement</strong>
      <span>${missionText}</span>
    </article>
    <article class="feature-card">
      <strong>Newest Veteran Recipients</strong>
      <span>Browse the Recipients tab to revisit recent deliveries.</span>
    </article>
    <article class="feature-card">
      <strong>Donate or Connect</strong>
      <span>Find donation instructions and points of contact inside the Contact tab.</span>
    </article>
  </section>
`;

const renderRecipientsIntro = () => `
  <section class="section">
    <div class="section-panel">
      <div class="section-layout">
        <div class="section-copy">
          <p class="eyebrow">Recipients Tab</p>
          <h2>Newest Veteran Recipients</h2>
          <p>Their gratitude keeps us committed to crafting branch-specific lap robes on demand.</p>
        </div>
        <div class="mini-gallery">
          ${newestRecipients
            .map(
              (item) => `
                <figure class="gallery-card">
                  <img src="${item.src}" alt="${item.alt}" />
                  <figcaption>${item.caption ?? item.alt}</figcaption>
                </figure>
              `,
            )
            .join('')}
        </div>
      </div>
    </div>
  </section>
`;

const sanitizePhone = (value: string) => value.replace(/[^\d+]/g, '');

const renderContactTab = () => `
  <section class="section">
    <div class="section-panel">
      <div class="contact-page-grid">
        <section class="contact-page-card" aria-label="Organization contact details">
          <h3 class="footer-title">Contact Information</h3>
          <ul class="footer-list contact-page-list">
            <li><strong>NM Lap Robes For Veterans</strong></li>
            ${donationAddress.map((line) => `<li>${line}</li>`).join('')}
            <li><a href="tel:+15053559801">(505) 355-9801</a></li>
            <li><a href="mailto:nmlaprobesforveterans@gmail.com">nmlaprobesforveterans@gmail.com</a></li>
          </ul>
        </section>
        <section class="contact-page-card" aria-label="Support mission details">
          <h3 class="footer-title">Support Our Mission</h3>
          <p class="footer-note contact-page-note">
            Hand-crafted, branch-specific lap robes are provided free to veterans across New Mexico through donations and volunteer work.
          </p>
          <img class="contact-page-image" src="${contactSupportImage}" alt="QR code image for supporting NM Lap Robes For Veterans" />
        </section>
      </div>
    </div>
  </section>
`;

const renderDonationTab = () => `
  <section class="section">
    <div class="section-panel">
      <div class="section-layout donation-layout">
        <div class="section-copy donation-copy">
          <p class="eyebrow">Donation Options</p>
          <h2>Support NM Lap Robes For Veterans</h2>
          <p>Your donation helps purchase materials so volunteers can continue creating branch-specific lap robes for veterans across New Mexico.</p>
          <p>Use the QR codes in the image for Venmo, Cash App, Zelle, or PayPal, or mail a check to the address below.</p>
          <ul class="footer-list donation-mailing-list">
            ${donationAddress.map((line) => `<li>${line}</li>`).join('')}
          </ul>
          <p class="donation-panel-note">
            Checks should be payable to <strong>NM Lap Robes For Veterans</strong>.
          </p>
        </div>
        <figure class="donation-poster-card">
          <img src="${donationQrImage}" alt="Donation poster with QR codes for Venmo, Cash App, Zelle, and PayPal" class="donation-poster-image" />
        </figure>
      </div>
    </div>
  </section>
`;

const renderPersistentFooterBand = () => {
  const contactEmail = contactLines[3] ?? '';
  const contactPhone = contactLines[4] ?? '';
  const emailHref = contactEmail ? `mailto:${contactEmail}` : '#';
  const phoneHref = contactPhone ? `tel:${sanitizePhone(contactPhone)}` : '#';
  const donationLink = 'https://www.cnbank.com/PLACE/';

  return `
    <section class="contact-band" aria-label="Donation and contact information">
      <div class="footer-reference-layout">
        <div class="footer-visual-block" aria-label="Lap robe image">
          <div class="footer-image-frame">
            <img class="contact-image" src="src/images/img.png" alt="Lap robes ready for delivery" />
          </div>
        </div>
        <div class="footer-copy-block" aria-label="Donation information">
          <p class="contact-copy">${donationInstructions[0]}</p>
          <ul class="contact-list contact-list--donation">
            ${donationAddress.map((line) => `<li>${line}</li>`).join('')}
          </ul>
          <p class="contact-note contact-note--center">or go to</p>
          <p class="contact-note contact-note--center">
            <a class="donation-link" href="${donationLink}" target="_blank" rel="noreferrer">
              https://www.cnbank.com/PLACE/
            </a>
          </p>
          <p class="contact-note contact-note--center">
            and choose NM Lap Robes for Veterans and make your donation.
          </p>
        </div>
        <div class="footer-contact-block" aria-label="Contact information">
          <h3 class="footer-heading">Contact Information</h3>
          <ul class="contact-list contact-list--info">
            <li>1852 Smarty Jones Street SE</li>
            <li>Albuquerque, NM</li>
            ${contactEmail ? `<li><a href="${emailHref}">${contactEmail}</a></li>` : ''}
            ${contactPhone ? `<li><a href="${phoneHref}">${contactPhone}</a></li>` : ''}
          </ul>
          <h3 class="footer-heading footer-heading--secondary">Interested in Volunteering?</h3>
          ${contactEmail ? `<p class="footer-volunteer">email: <a href="${emailHref}">${contactEmail}</a></p>` : ''}
        </div>
      </div>
    </section>
  `;
};

const tabs = [
  {
    id: 'home',
    label: 'Home',
    description: 'Mission overview',
    content: `
      ${renderHeroPanel()}
      ${renderFeatureHighlights()}
      ${renderSectionPanel(sectionMap['about'])}
    `,
  },
  {
    id: 'recipients',
    label: 'Recipients',
    description: 'Veteran galleries',
    content: `
      ${renderRecipientsIntro()}
      ${renderSectionPanel(sectionMap['veteran-recipients'])}
    `,
  },
  {
    id: 'events',
    label: 'Events',
    description: 'Community outreach',
    content: `
      ${renderSectionPanel(sectionMap['events'])}
    `,
  },
  {
    id: 'volunteers',
    label: 'Volunteers',
    description: 'Hands behind the robes',
    content: `
      ${renderSectionPanel(sectionMap['our-volunteers'])}
    `,
  },
  {
    id: 'supporters',
    label: 'Supporters',
    description: 'Partners & donors',
    content: `
      ${renderSectionPanel(sectionMap['our-supporters'])}
    `,
  },
  {
    id: 'donation',
    label: 'Donation',
    description: 'Ways to give',
    content: `
      ${renderDonationTab()}
    `,
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Donate or reach out',
    content: `
      ${renderContactTab()}
    `,
  },
];

const tabTriggerMarkup = tabs
  .map(
    (tab) => `
      <button type="button" class="tab-trigger" data-tab-target="${tab.id}" aria-controls="tab-${tab.id}" role="tab">
        <span>${tab.label}</span>
        <small>${tab.description}</small>
      </button>
    `,
  )
  .join('');

const tabPanelsMarkup = tabs
  .map(
    (tab) => `
      <section id="tab-${tab.id}" class="tab-panel" data-tab="${tab.id}" role="tabpanel" hidden>
        ${tab.content}
      </section>
    `,
  )
  .join('');

const navMarkup = navigation
  .map((item) => {
    if (item.external) {
      return `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`;
    }

    if (!item.tabId) {
      return '';
    }

    return `<button type="button" class="tab-link" data-tab-target="${item.tabId}" aria-controls="tab-${item.tabId}">${item.label}</button>`;
  })
  .join('');

const app = document.createElement('div');
app.className = 'app-shell';

app.innerHTML = `
  <style>
    :root {
      --sand: #ebe0cc;
      --clay: #a76d49;
      --rust: #7f4b2a;
      --ink: #1f2328;
      --cream: #fffaf3;
      --sage: #596b53;
      --navy: #264653;
      --line: rgba(31, 35, 40, 0.12);
      --shadow: 0 18px 40px rgba(31, 35, 40, 0.12);
      --page-width: min(1200px, calc(100% - 32px));
      --content-width: min(1180px, calc(100% - 32px));
    }

    .tabs-shell {
      width: var(--page-width);
      margin: 0 auto;
      padding: 24px 0 40px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .tabs-nav {
      display: grid;
      grid-template-columns: repeat(${tabs.length}, minmax(0, 1fr));
      gap: 10px;
      align-items: stretch;
      overflow-x: auto;
      scrollbar-width: thin;
      scroll-snap-type: x proximity;
    }

    .tabs-content {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .tab-trigger,
    .tab-link {
      font-family: inherit;
      font-size: 0.92rem;
      background: rgba(255, 255, 255, 0.96);
      border: 2px solid rgba(31, 35, 40, 0.16);
      border-radius: 18px;
      padding: 12px 12px;
      cursor: pointer;
      transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      scroll-snap-align: start;
    }

    .tab-trigger {
      flex-direction: column;
      gap: 3px;
      min-height: 86px;
      text-align: center;
    }

    .tab-trigger span {
      font-weight: 700;
      font-size: 0.92rem;
    }

    .tab-trigger small {
      font-size: 0.72rem;
      opacity: 0.82;
      letter-spacing: 0.02em;
      line-height: 1.25;
    }

    .tab-link {
      text-transform: uppercase;
      letter-spacing: 0.04em;
      border-radius: 18px;
    }

    .tab-trigger.is-active,
    .tab-link.is-active {
      background: var(--navy);
      border-color: var(--navy);
      color: white;
    }

    .tab-panel {
      animation: fadeIn 0.4s ease;
    }

    .tab-panel[hidden] {
      display: none;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: Georgia, 'Times New Roman', serif;
      color: var(--ink);
      background:
        radial-gradient(circle at top, rgba(167, 109, 73, 0.14), transparent 34%),
        linear-gradient(180deg, #faf7f0 0%, #f3ecdf 48%, #ebe0cc 100%);
    }

    a {
      color: inherit;
    }

    .app-shell {
      min-height: 100vh;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 10;
      backdrop-filter: blur(12px);
      background: rgba(250, 247, 240, 0.96);
      border-bottom: 1px solid var(--line);
    }

    .nav-wrap,
    .hero,
    .section {
      width: var(--content-width);
      margin: 0 auto;
    }
    .nav-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding: 16px 0;
    }

    .brand {
      display: grid;
      gap: 4px;
    }

    .brand-mark {
      font-size: 0.88rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--navy);
      font-weight: 700;
    }

    .brand-name {
      font-size: clamp(1.3rem, 2.5vw, 1.95rem);
      font-weight: 700;
    }

    .nav-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 10px;
    }

    .nav-links a,
    .nav-links button {
      text-decoration: none;
      padding: 12px 16px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.82);
      border: 2px solid var(--line);
      transition: transform 0.2s ease, background 0.2s ease;
      font-size: 1rem;
      font-weight: 600;
    }

    .nav-links a:hover,
    .nav-links a:focus-visible,
    .nav-links button:hover,
    .nav-links button:focus-visible {
      background: white;
      transform: translateY(-1px);
    }

    .hero {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 24px;
      padding: 12px 0 24px;
      align-items: stretch;
    }

    .hero-card,
    .feature-card,
    .section-panel,
    .contact-card {
      background: rgba(255, 252, 247, 0.95);
      border: 1px solid rgba(31, 35, 40, 0.08);
      border-radius: 28px;
      box-shadow: var(--shadow);
    }

    .hero-copy {
      padding: clamp(28px, 5vw, 44px);
    }

    .hero-logo-wrap {
      width: min(100%, 420px);
      margin-bottom: 20px;
      padding: 14px;
      border-radius: 24px;
      background: #fff;
      border: 1px solid rgba(38, 70, 83, 0.12);
      box-shadow: 0 12px 28px rgba(31, 35, 40, 0.08);
    }

    .hero-logo-image {
      width: 100%;
      height: auto;
      display: block;
      object-fit: contain;
      border-radius: 16px;
    }

    .eyebrow {
      margin: 0 0 10px;
      color: var(--navy);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.88rem;
      font-weight: 700;
    }

    h1,
    h2 {
      margin: 0;
      line-height: 1.08;
    }

    h1 {
      font-size: clamp(2.3rem, 4.8vw, 4.2rem);
      max-width: 14ch;
    }

    h2 {
      font-size: clamp(1.8rem, 3vw, 2.8rem);
    }

    .hero-copy p,
    .section-copy p,
    .contact-band p,
    .footer-card p,
    .footer-card li {
      font-size: 1rem;
      line-height: 1.8;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 24px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 52px;
      padding: 14px 20px;
      border-radius: 18px;
      text-decoration: none;
      font-weight: 700;
      border: 2px solid transparent;
      font-size: 1rem;
    }

    .button-primary {
      background: var(--navy);
      color: white;
    }

    .button-secondary {
      background: #fff;
      border-color: rgba(38, 70, 83, 0.2);
    }

    .hero-visual {
      overflow: hidden;
      position: relative;
      min-height: 100%;
    }

    .hero-visual img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .hero-badge {
      position: absolute;
      right: 20px;
      bottom: 20px;
      background: rgba(38, 70, 83, 0.9);
      color: white;
      padding: 16px 18px;
      border-radius: 18px;
      max-width: 280px;
      font-size: 1rem;
      line-height: 1.6;
    }

    .feature-grid {
      width: var(--content-width);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      padding: 8px 0 24px;
    }

    .feature-card {
      padding: 24px;
      border-top: 6px solid #8b5e3c;
    }

    .feature-card strong {
      display: block;
      margin-bottom: 10px;
      font-size: 1.12rem;
    }

    .feature-card span {
      font-size: 1.02rem;
      line-height: 1.7;
    }

    .section {
      padding: clamp(36px, 0vw, 72px) 0;
    }

    .section-panel {
      width: 100%;
      margin: 0 auto;
      padding: clamp(28px, 4vw, 42px);
      background: rgba(255, 252, 247, 0.97);
      border: 1px solid rgba(31, 35, 40, 0.08);
      border-radius: 36px;
      box-shadow: var(--shadow);
    }

    .section-layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 32px;
      align-items: stretch;
    }

    .contact-page-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
      align-items: stretch;
    }

    .contact-page-card {
      padding: 28px 30px;
      border-radius: 24px;
      background: #fff;
      border: 1px solid rgba(31, 35, 40, 0.08);
      box-shadow: 0 12px 28px rgba(31, 35, 40, 0.08);
    }

    .contact-page-list li strong {
      font-size: 1.08rem;
      font-weight: 700;
    }

    .contact-page-note {
      max-width: 44ch;
      margin: 0;
    }

    .contact-page-image {
      width: min(100%, 220px);
      margin: 18px auto 0;
      display: block;
      border-radius: 16px;
      border: 1px solid rgba(31, 35, 40, 0.1);
      background: #fff;
    }

    .donation-layout {
      grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
      align-items: center;
    }

    .donation-copy {
      display: grid;
      gap: 16px;
    }

    .donation-copy p {
      margin: 0;
    }

    .donation-mailing-list {
      padding: 18px 20px;
      border-radius: 20px;
      background: rgba(38, 70, 83, 0.06);
      border: 1px solid rgba(38, 70, 83, 0.12);
    }

    .donation-panel-note {
      font-size: 0.98rem;
      line-height: 1.7;
    }

    .donation-poster-card {
      margin: 0;
      padding: 18px;
      border-radius: 26px;
      background: #fff;
      border: 1px solid rgba(31, 35, 40, 0.08);
      box-shadow: 0 18px 40px rgba(31, 35, 40, 0.12);
    }

    .donation-poster-image {
      width: 100%;
      display: block;
      border-radius: 18px;
      object-fit: contain;
      background: #fff;
    }

    .section-copy {
      position: static;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      align-items: start;
    }

    .gallery-card {
      margin: 0;
      overflow: hidden;
      border-radius: 20px;
      background: white;
      border: 1px solid rgba(31, 35, 40, 0.08);
    }

    .gallery-card img {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      display: block;
    }

    .gallery-card figcaption {
      padding: 12px 14px 14px;
      font-size: 1rem;
      color: rgba(31, 35, 40, 0.82);
      line-height: 1.5;
    }

    .event-carousel {
      display: grid;
      gap: 16px;
      align-content: start;
    }

    .event-carousel-track {
      position: relative;
    }

    .event-slide {
      margin: 0;
    }

    .event-slide[hidden] {
      display: none;
    }

    .event-slide img {
      aspect-ratio: 4 / 3;
    }

    .event-carousel-dots {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .carousel-dot {
      width: 14px;
      height: 14px;
      border-radius: 999px;
      border: 2px solid rgba(38, 70, 83, 0.28);
      background: rgba(255, 255, 255, 0.9);
      cursor: pointer;
      padding: 0;
    }

    .carousel-dot.is-active {
      background: var(--navy);
      border-color: var(--navy);
    }

    .mini-gallery {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      margin-top: 18px;
    }

    .mini-gallery .gallery-card img {
      aspect-ratio: 1 / 1;
    }

    .contact-band {
      padding: 14px 0 10px;
      background: #c4c8cc;
    }

    .contact-card {
      background: transparent;
      border: 0;
      box-shadow: none;
      padding: 0;
    }

    .contact-image {
      width: 100%;
      max-width: 220px;
      border-radius: 16px;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      display: block;
    }

    .contact-copy {
      font-size: clamp(1.02rem, 1.7vw, 1.16rem);
      line-height: 1.55;
      color: #111;
      margin: 0 0 12px;
      font-weight: 400;
    }

    .contact-copy p {
      margin: 0 0 12px;
    }

    .contact-copy .donation-link,
    .donation-link {
      display: inline-block;
      color: #111;
      font-weight: 500;
      background: rgba(255, 255, 255, 0.45);
      padding: 4px 8px;
      border-radius: 8px;
      text-decoration: none;
      word-break: break-word;
    }

    .contact-note {
      text-align: left;
      color: #111;
      margin: 10px 0;
    }

    .contact-list,
    .footer-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .contact-list li,
    .footer-list li {
      font-size: clamp(1rem, 1.55vw, 1.14rem);
      line-height: 1.65;
      font-weight: 400;
      margin-left: 0;
      word-break: break-word;
    }

    .contact-list li + li,
    .footer-list li + li {
      margin-top: 10px;
    }

    .footer-card,
    .footer-card a {
      color: inherit;
    }

    .contact-list a,
    .footer-list a {
      color: #111;
      text-decoration: none;
      font-weight: 300;
    }

    .contact-list a:hover,
    .contact-list a:focus-visible,
    .footer-list a:hover,
    .footer-list a:focus-visible {
      text-decoration: underline;
    }

    .site-footer {
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      width: 100vw;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #6f6f6f;
      color: #fff;
    }

    .footer-reference-layout {
      width: min(1680px, calc(100% - 70px));
      display: grid;
      grid-template-columns: 0.9fr 1fr 1fr;
      gap: 40px;
      align-items: start;
      padding: 24px 24px 28px;
    }

    .footer-visual-block,
    .footer-copy-block,
    .footer-contact-block {
      min-width: 0;
    }

    .footer-visual-block {
      display: flex;
      justify-content: center;
    }

    .footer-image-frame {
      display: inline-block;
      padding: 10px;
      background: linear-gradient(135deg, #d9d9d9, #8f8f8f);
      border: 8px solid #a9a9a9;
      box-shadow:
        inset 0 0 0 2px #f2f2f2,
        inset 0 0 0 8px #737373;
    }

    .contact-image {
      width: min(100%, 360px);
      max-width: 360px;
      border-radius: 0;
      aspect-ratio: 16 / 9;
      margin: 0;
    }

    .contact-copy {
      font-size: clamp(0.92rem, 1.3vw, 1.08rem);
      line-height: 1.35;
      color: #000;
      margin: 0 0 12px;
      font-weight: 400;
      max-width: 24ch;
    }

    .contact-list--donation li,
    .contact-list--info li,
    .footer-volunteer {
      font-size: clamp(0.9rem, 1.15vw, 1rem);
      line-height: 1.35;
      font-weight: 400;
      color: #000;
    }

    .contact-list--donation li + li,
    .contact-list--info li + li {
      margin-top: 2px;
    }

    .contact-note {
      color: #000;
      margin: 10px 0 0;
    }

    .contact-note--center,
    .footer-copy-block {
      text-align: center;
    }

    .donation-link {
      color: #000;
      font-weight: 700;
      background: transparent;
      padding: 0;
      border-radius: 0;
      text-decoration: none;
    }

    .footer-contact-block {
      padding-top: 0;
    }

    .footer-heading {
      margin: 0 0 12px;
      font-size: clamp(1.5rem, 2vw, 1.95rem);
      line-height: 1.05;
      color: #000;
      font-weight: 400;
    }

    .footer-heading--secondary {
      margin-top: 18px;
      font-size: clamp(1.35rem, 1.8vw, 1.75rem);
    }

    .footer-volunteer {
      margin: 0;
    }

    .footer-volunteer a,
    .contact-list--info a {
      color: #000;
      text-decoration: none;
      font-weight: 400;
    }

    .footer-foot {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 24px;
      padding: 2px 0px;
      background: #020202;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 400;
    }

    .footer-service {
      justify-self: start;
      display: flex;
      flex-direction: column;
      gap: 14px;
      color: #fff;
    }

    .footer-service-label {
      display: inline-block;
      min-width: 240px;
      padding: 4px 8px 6px;
      background: #f4f4f4;
      color: #6f6f6f;
      font-size: 0.88rem;
    }

    .footer-service-link {
      color: #204bff;
      text-decoration: none;
    }

    .footer-copyright {
      justify-self: center;
      font-size: 0.98rem;
      color: #fff;
    }

    .footer-social {
      justify-self: end;
      width: 62px;
      height: 62px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 3px solid rgba(255, 255, 255, 0.65);
      border-radius: 999px;
      color: #fff;
      text-decoration: none;
    }

    .footer-icon {
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    @media (max-width: 960px) {
      .tabs-nav {
        grid-template-columns: repeat(${tabs.length}, minmax(140px, 1fr));
        padding-bottom: 6px;
      }

      .hero,
      .section-layout,
      .feature-grid,
      .contact-page-grid {
        grid-template-columns: 1fr;
      }

      .tabs-shell {
        padding: 18px 0 32px;
        gap: 18px;
      }

      .tab-trigger {
        min-height: 78px;
      }

      .nav-wrap {
        padding: 14px 0;
      }

      .hero {
        gap: 18px;
      }

      .hero-copy {
        padding: 28px;
      }

      .section {
        padding: 24px 0;
      }

      .section-panel,
      .contact-page-card {
        padding: 24px;
      }

      .feature-card {
        padding: 22px;
      }

      .mini-gallery,
      .gallery {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .donation-layout {
        grid-template-columns: 1fr;
      }

      .section-copy {
        position: static;
      }

      .footer-reference-layout {
        grid-template-columns: 1fr;
        gap: 28px;
        padding: 28px 24px 24px;
      }
    }

    @media (max-width: 640px) {
      :root {
        --page-width: min(100%, calc(100% - 20px));
        --content-width: min(100%, calc(100% - 20px));
      }

      .nav-wrap {
        align-items: start;
        flex-direction: column;
        gap: 14px;
      }

      .nav-links {
        justify-content: start;
        width: 100%;
      }

      .nav-links a,
      .nav-links button {
        width: 100%;
        justify-content: center;
      }

      .tabs-shell {
        padding: 16px 0 28px;
      }

      .tabs-nav {
        grid-template-columns: repeat(${tabs.length}, minmax(132px, 1fr));
        gap: 8px;
      }

      .tab-trigger,
      .tab-link {
        padding: 10px;
        border-radius: 16px;
      }

      .tab-trigger {
        min-height: 72px;
      }

      .tab-trigger span {
        font-size: 0.88rem;
      }

      .tab-trigger small {
        font-size: 0.68rem;
      }

      .hero-copy {
        padding: 22px;
      }

      .hero-actions,
      .button {
        width: 100%;
      }

      .button {
        min-height: 48px;
      }

      h1 {
        max-width: none;
        font-size: clamp(1.9rem, 9vw, 2.8rem);
      }

      h2 {
        font-size: clamp(1.5rem, 7vw, 2.1rem);
      }

      .feature-grid,
      .mini-gallery,
      .gallery {
        grid-template-columns: 1fr;
      }

      .section-panel,
      .contact-page-card {
        padding: 20px;
        border-radius: 24px;
      }

      .contact-page-image,
      .donation-poster-image,
      .contact-image {
        width: 100%;
        max-width: 100%;
      }

      .footer-reference-layout {
        width: min(100%, calc(100% - 24px));
        padding: 22px 16px 20px;
        gap: 22px;
      }

      .hero-badge {
        position: static;
        margin: 0;
        max-width: none;
      }

      .footer-heading {
        font-size: clamp(1.3rem, 7vw, 1.7rem);
      }

      .footer-heading--secondary {
        font-size: clamp(1.15rem, 6vw, 1.45rem);
      }

      .footer-foot {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
        gap: 18px;
        padding: 12px 16px;
      }
    }
  </style>
  <header class="site-header">
    <div class="nav-wrap">
      <div class="brand">
        <span class="brand-mark">New Mexico Veterans</span>
        <span class="brand-name">NM Lap Robes For Veterans</span>
      </div>
      <nav class="nav-links" aria-label="Primary">
        ${navMarkup}
      </nav>
    </div>
  </header>
  <main>
    <div class="tabs-shell">
      <div class="tabs-nav" role="tablist">
        ${tabTriggerMarkup}
      </div>
      <div class="tabs-content">
        ${tabPanelsMarkup}
      </div>
    </div>
  </main>
        <footer class="site-footer">
          ${renderPersistentFooterBand()}
          <div class="footer-foot">
            <span class="footer-copyright">&copy; ${currentYear} NM Lap Robes For Veterans</span>
            <a class="footer-social" href="${facebookUrl}" target="_blank" rel="noreferrer">
              <span class="footer-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" role="presentation">
              <path d="M14.5 2H18c.55 0 1 .45 1 1v4h-3c-.55 0-1 .45-1 1v3h4l-.56 4H15v6h-4v-6H9v-4h2v-3c0-2.2 
                1.2-3 3-3h1.5V3z" />
            </svg>
          </span>
          <span class="sr-only">Visit our Facebook page</span>
        </a>
      </div>
    </footer>
`;

document.body.append(app);

const tabTriggers = Array.from(app.querySelectorAll<HTMLButtonElement>('.tabs-nav [data-tab-target]'));
const navTabButtons = Array.from(app.querySelectorAll<HTMLButtonElement>('.tab-link'));
const tabPanels = Array.from(app.querySelectorAll<HTMLElement>('.tab-panel'));
const allTabButtons = [...tabTriggers, ...navTabButtons];
const carousels = Array.from(app.querySelectorAll<HTMLElement>('[data-carousel]'));

const setActiveTab = (tabId: string) => {
  tabPanels.forEach((panel) => {
    const isActive = panel.dataset.tab === tabId;
    panel.hidden = !isActive;
    panel.setAttribute('aria-hidden', (!isActive).toString());
  });

  allTabButtons.forEach((control) => {
    const isActive = control.dataset.tabTarget === tabId;
    control.classList.toggle('is-active', isActive);
    control.setAttribute('aria-expanded', String(isActive));
  });
};

allTabButtons.forEach((control) => {
  control.addEventListener('click', () => {
    const targetTab = control.dataset.tabTarget;
    if (targetTab) {
      setActiveTab(targetTab);
    }
  });
});

carousels.forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll<HTMLElement>('[data-slide]'));
  const dots = Array.from(carousel.querySelectorAll<HTMLButtonElement>('[data-carousel-dot]'));

  if (!slides.length) {
    return;
  }

  let activeIndex = 0;

  const renderCarousel = (index: number) => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== activeIndex;
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      renderCarousel(dotIndex);
    });
  });

  renderCarousel(0);
  window.setInterval(() => {
    renderCarousel(activeIndex + 1);
  }, 3000);
});

setActiveTab(tabs[0].id);

