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

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Newest Veteran Recipients', href: '#newest-veteran-recipients' },
  { label: 'About', href: '#about' },
  { label: 'Veteran Recipients', href: '#veteran-recipients' },
  { label: 'Events', href: '#events' },
  { label: 'Our Volunteers', href: '#our-volunteers' },
  { label: 'Our Supporters', href: '#our-supporters' },
  {
    label: 'Visit Our Facebook Page',
    href: 'https://www.facebook.com/people/NM-Lap-Robes-for-Veterans/61576165091710/',
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
      'Recently one of our volunteers was recognized by KOB channel 4 “Pay It Forward” as a recipient for the award for her volunteer work.',
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
  '(505) 604-2810',
];

const donationInstructions = [
  'To make a donation please make check payable to and mail to:',
  'NM Lap Robes For Veterans',
  '1852 Smarty Jones Street SE',
  'Albuquerque, NM, United States, New Mexico',
];

const app = document.createElement('div');
app.className = 'app-shell';

app.innerHTML = `
  <style>
    :root {
      --sand: #efe0c8;
      --clay: #bc6c43;
      --rust: #8f3e21;
      --ink: #1f2328;
      --cream: #fcf7ef;
      --sage: #596b53;
      --line: rgba(31, 35, 40, 0.12);
      --shadow: 0 18px 40px rgba(31, 35, 40, 0.12);
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
        radial-gradient(circle at top, rgba(188, 108, 67, 0.18), transparent 34%),
        linear-gradient(180deg, #f7f1e7 0%, #f3ead8 45%, #efe0c8 100%);
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
      background: rgba(252, 247, 239, 0.9);
      border-bottom: 1px solid var(--line);
    }

    .nav-wrap,
    .hero,
    .section,
    .contact-band,
    .site-footer {
      width: min(1180px, calc(100% - 32px));
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
      gap: 2px;
    }

    .brand-mark {
      font-size: 0.84rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--rust);
      font-weight: 700;
    }

    .brand-name {
      font-size: clamp(1.2rem, 2.5vw, 1.8rem);
      font-weight: 700;
    }

    .nav-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 10px;
    }

    .nav-links a {
      text-decoration: none;
      padding: 10px 14px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid var(--line);
      transition: transform 0.2s ease, background 0.2s ease;
      font-size: 0.94rem;
    }

    .nav-links a:hover,
    .nav-links a:focus-visible {
      background: white;
      transform: translateY(-1px);
    }

    .hero {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 28px;
      padding: 36px 0 24px;
    }

    .hero-card,
    .feature-card,
    .section-panel,
    .contact-card {
      background: rgba(252, 247, 239, 0.88);
      border: 1px solid rgba(31, 35, 40, 0.08);
      border-radius: 26px;
      box-shadow: var(--shadow);
    }

    .hero-copy {
      padding: clamp(24px, 5vw, 42px);
    }

    .hero-logo {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 110px;
      min-height: 110px;
      margin-bottom: 18px;
      border-radius: 28px;
      background: linear-gradient(135deg, var(--rust), var(--clay));
      color: white;
      text-align: center;
      padding: 16px;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .eyebrow {
      margin: 0 0 10px;
      color: var(--rust);
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-size: 0.78rem;
      font-weight: 700;
    }

    h1,
    h2 {
      margin: 0;
      line-height: 1.08;
    }

    h1 {
      font-size: clamp(2.3rem, 5vw, 4.6rem);
      max-width: 11ch;
    }

    h2 {
      font-size: clamp(1.8rem, 3vw, 2.8rem);
    }

    .hero-copy p,
    .section-copy p,
    .footer-card p,
    .footer-card li {
      font-size: 1.02rem;
      line-height: 1.7;
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
      padding: 12px 18px;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 700;
      border: 1px solid transparent;
    }

    .button-primary {
      background: var(--ink);
      color: white;
    }

    .button-secondary {
      background: transparent;
      border-color: var(--line);
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
      background: rgba(31, 35, 40, 0.84);
      color: white;
      padding: 14px 16px;
      border-radius: 18px;
      max-width: 230px;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .feature-grid {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      padding: 12px 0 28px;
    }

    .feature-card {
      padding: 24px;
    }

    .feature-card strong {
      display: block;
      margin-bottom: 10px;
      font-size: 1.05rem;
    }

    .section {
      padding: 28px 0;
    }

    .section-panel {
      padding: clamp(22px, 4vw, 34px);
    }

    .section-layout {
      display: grid;
      grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
      gap: 26px;
      align-items: start;
    }

    .section-copy {
      position: sticky;
      top: 112px;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
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
      font-size: 0.92rem;
      color: rgba(31, 35, 40, 0.82);
    }

    .contact-band {
      padding: 22px 0 18px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr) minmax(0, 1fr);
      gap: 24px;
      padding: 30px;
      background: #66625f;
      color: white;
      border-radius: 28px;
    }

    .contact-card {
      background: transparent;
      border: 0;
      box-shadow: none;
      padding: 0;
    }

    .contact-frame {
      display: inline-block;
      padding: 10px;
      border: 6px solid rgba(255, 255, 255, 0.35);
      box-shadow:
        inset 0 0 0 4px rgba(0, 0, 0, 0.14),
        0 12px 28px rgba(0, 0, 0, 0.16);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.08));
    }

    .contact-image {
      width: 100%;
      max-width: 380px;
      border-radius: 4px;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      display: block;
    }

    .contact-copy {
      font-size: clamp(1.15rem, 2vw, 1.5rem);
      line-height: 1.45;
    }

    .contact-copy p {
      margin: 0 0 12px;
    }

    .contact-copy .donation-link {
      display: inline-block;
      margin: 8px 0;
      color: #111;
      font-weight: 700;
      background: rgba(255, 255, 255, 0.88);
      padding: 4px 8px;
      border-radius: 8px;
      text-decoration: none;
    }

    .contact-title {
      margin: 0 0 12px;
      font-size: clamp(2rem, 3.4vw, 3.1rem);
      color: white;
    }

    .contact-list,
    .footer-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .contact-list li,
    .footer-list li {
      font-size: clamp(1.05rem, 1.8vw, 1.35rem);
      line-height: 1.6;
    }

    .contact-list li + li,
    .footer-list li + li {
      margin-top: 6px;
    }

    .contact-list a,
    .footer-list a {
      color: inherit;
      text-decoration: none;
    }

    .contact-list a:hover,
    .contact-list a:focus-visible,
    .footer-list a:hover,
    .footer-list a:focus-visible {
      text-decoration: underline;
    }

    .site-footer {
      padding: 0 0 42px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 18px;
    }

    .footer-card {
      padding: 22px;
      background: rgba(252, 247, 239, 0.88);
      border: 1px solid rgba(31, 35, 40, 0.08);
      border-radius: 26px;
      box-shadow: var(--shadow);
    }

    .footer-title {
      margin: 0 0 12px;
      font-size: 1.1rem;
      color: var(--rust);
    }

    .footer-note {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.6;
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

    @media (max-width: 960px) {
      .hero,
      .section-layout,
      .footer-grid,
      .feature-grid,
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .section-copy {
        position: static;
      }

      .mini-gallery,
      .gallery {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 640px) {
      .nav-wrap {
        align-items: start;
      }

      .nav-links {
        justify-content: start;
      }

      .hero-badge {
        position: static;
        margin: 16px;
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
        ${navigation
          .map((item) =>
            item.external
              ? `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`
              : `<a href="${item.href}">${item.label}</a>`,
          )
          .join('')}
      </nav>
    </div>
  </header>
  <main>
    <section id="home" class="hero">
      <div class="hero-card hero-copy">
        <div class="hero-logo">NM<br />Lap Robes</div>
        <p class="eyebrow">Hand Crafted Gratitude</p>
        <h1>Serving veterans across New Mexico</h1>
        <p>${missionText}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#our-supporters">Support Our Mission</a>
          <a class="button button-secondary" href="https://www.facebook.com/people/NM-Lap-Robes-for-Veterans/61576165091710/" target="_blank" rel="noreferrer">Visit Our Facebook Page</a>
        </div>
      </div>
      <div class="hero-card hero-visual">
        <img src="src/images/info/vet home 1.JPG" alt="Members of NM Lap Robes For Veterans" />
        <div class="hero-badge">
          Home page includes a members photo, your vision statement, and quick access to donations and Facebook.
        </div>
      </div>
    </section>
    <section class="feature-grid" aria-label="Highlights">
      <article class="feature-card">
        <strong>Vision Statement</strong>
        <span>${missionText}</span>
      </article>
      <article class="feature-card">
        <strong>Newest Veteran Recipients</strong>
        <span>Featured below on the home page as requested, with a dedicated page section in the navigation.</span>
      </article>
      <article class="feature-card">
        <strong>Donate or Connect</strong>
        <span>Support NM Lap Robes For Veterans by mailing a check, using your QR code, or reaching out directly.</span>
      </article>
    </section>
    <section id="newest-veteran-recipients" class="section">
      <div class="section-panel">
        <div class="section-layout">
          <div class="section-copy">
            <p class="eyebrow">Under Home Tab</p>
            <h2>Newest Veteran Recipients</h2>
            <p>This section is placed directly under the Home content and is also available from the navigation for easy access.</p>
            <p>These recent moments highlight the veterans we serve and the branch-specific lap robes made for them.</p>
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
    ${sections
      .map(
        (section) => `
          <section id="${section.id}" class="section">
            <div class="section-panel">
              <div class="section-layout">
                <div class="section-copy">
                  ${section.eyebrow ? `<p class="eyebrow">${section.eyebrow}</p>` : ''}
                  <h2>${section.title}</h2>
                  ${section.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}
                </div>
                <div class="gallery">
                  ${(section.images ?? [])
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
        `,
      )
      .join('')}
  </main>
  <section class="contact-band" aria-label="Donation and contact information">
    <div class="contact-grid">
      <section class="contact-card" aria-label="Support image">
        <div class="contact-frame">
          <img class="contact-image" src="src/images/img.png" alt="NM Lap Robes For Veterans donation image" />
        </div>
      </section>
      <section class="contact-card contact-copy" aria-label="Donation instructions">
        <p>${donationInstructions[0]}</p>
        <p>${donationInstructions[1]}<br />${donationInstructions[2]}<br />${donationInstructions[3]}</p>
        <p style="text-align:center;">or go to</p>
        <p style="text-align:center;">
          <a class="donation-link" href="https://www.cnbank.com/PLACE/" target="_blank" rel="noreferrer">https://www.cnbank.com/PLACE/</a>
        </p>
        <p style="text-align:center;">and choose Lap Robes for Veterans to make your donation.</p>
      </section>
      <section class="contact-card" aria-label="Primary contact information">
        <h2 class="contact-title">Contact Information</h2>
        <ul class="contact-list">
          <li>${contactLines[1]}, ${contactLines[2]}</li>
          <li><a href="mailto:${contactLines[3]}">${contactLines[3]}</a></li>
          <li><a href="tel:+15056042810">${contactLines[4]}</a></li>
        </ul>
      </section>
    </div>
  </section>
  <footer class="site-footer">
    <div class="footer-grid">
      <section class="footer-card" aria-label="Organization footer details">
        <h3 class="footer-title">NM Lap Robes For Veterans</h3>
        <ul class="footer-list">
          ${donationAddress.map((line) => `<li>${line}</li>`).join('')}
          <li><a href="tel:+15056042810">(505) 604-2810</a></li>
          <li><a href="mailto:nmlaprobesforveterans@gmail.com">nmlaprobesforveterans@gmail.com</a></li>
        </ul>
      </section>
      <section class="footer-card" aria-label="Footer note">
        <h3 class="footer-title">Support Our Mission</h3>
        <p class="footer-note">Hand-crafted, branch-specific lap robes are provided free to veterans across New Mexico through donations and volunteer work.</p>
      </section>
    </div>
  </footer>
`;

document.body.append(app);
