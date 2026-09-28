import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";

/* ------------------------------------------------------------------
   FILL THESE IN: these were blank ("__________") in your original
   Termly-generated terms. Replace each value with the real detail
   and it will update everywhere it appears on the page.
------------------------------------------------------------------- */
const BLANK = "__________";
const DETAILS = {
  registeredIn: BLANK,        // e.g. "Delaware"
  mailAddress: BLANK,         // company mailing address
  governingLaw: BLANK,        // e.g. "the State of Delaware"
  courts: BLANK,              // courts with exclusive jurisdiction
  negotiationDays: BLANK,     // days of informal negotiation before arbitration
  arbitrators: BLANK,         // number of arbitrators
  arbitrationSeat: BLANK,     // seat / legal place of arbitration
  arbitrationLanguage: BLANK, // language of proceedings
};

const TOC = [
  { id: "services", title: "Our services" },
  { id: "ip", title: "Intellectual property rights" },
  { id: "userreps", title: "User representations" },
  { id: "prohibited", title: "Prohibited activities" },
  { id: "ugc", title: "User generated contributions" },
  { id: "license", title: "Contribution license" },
  { id: "reviews", title: "Guidelines for reviews" },
  { id: "sitemanage", title: "Services management" },
  { id: "privacy", title: "Privacy policy" },
  { id: "terms", title: "Term and termination" },
  { id: "modifications", title: "Modifications and interruptions" },
  { id: "law", title: "Governing law" },
  { id: "disputes", title: "Dispute resolution" },
  { id: "corrections", title: "Corrections" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "liability", title: "Limitations of liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "userdata", title: "User data" },
  { id: "electronic", title: "Electronic communications, transactions, and signatures" },
  { id: "sms", title: "SMS text messaging" },
  { id: "california", title: "California users and residents" },
  { id: "misc", title: "Miscellaneous" },
  { id: "contact", title: "Contact us" },
];

const linkCls = "text-teal-600 underline underline-offset-2 hover:text-teal-500 break-words";

function Section({ n, children }) {
  const { id, title } = TOC[n - 1];
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold text-slate-950">
        {n}. {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function H3({ children }) {
  return <h3 className="pt-2 text-lg font-semibold text-slate-950">{children}</h3>;
}

function List({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-teal-500">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Email() {
  return (
    <a href="mailto:contact@techintel.tech" className={linkCls}>
      contact@techintel.tech
    </a>
  );
}

function PrivacyLink() {
  return (
    <Link to="/privacy" className={linkCls}>
      https://techintel.tech/privacy
    </Link>
  );
}

function ProhibitedLink() {
  return (
    <a href="#prohibited" className={linkCls}>
      PROHIBITED ACTIVITIES
    </a>
  );
}

const PROHIBITED = [
  "Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
  "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
  "Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.",
  "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.",
  "Use any information obtained from the Services in order to harass, abuse, or harm another person.",
  "Make improper use of our support services or submit false reports of abuse or misconduct.",
  "Use the Services in a manner inconsistent with any applicable laws or regulations.",
  "Engage in unauthorized framing of or linking to the Services.",
  "Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.",
  "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
  "Delete the copyright or other proprietary rights notice from any Content.",
  "Attempt to impersonate another user or person or use the username of another user.",
  "Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).",
  "Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.",
  "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.",
  "Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.",
  "Copy or adapt the Services’ software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
  "Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.",
  "Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.",
  "Use a buying agent or purchasing agent to make purchases on the Services.",
  "Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.",
  "Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.",
  "Use the Services to advertise or offer to sell goods and services.",
  "Sell or otherwise transfer your profile.",
];

const CONTRIBUTION_WARRANTIES = [
  "The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.",
  "You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.",
  "You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.",
  "Your Contributions are not false, inaccurate, or misleading.",
  "Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.",
  "Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).",
  "Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.",
  "Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.",
  "Your Contributions do not violate any applicable law, regulation, or rule.",
  "Your Contributions do not violate the privacy or publicity rights of any third party.",
  "Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.",
  "Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.",
  "Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.",
];

function Terms() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 pt-40 text-white">
        <div className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
          <SectionLabel>Legal</SectionLabel>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            TERMS AND CONDITIONS
          </h1>

          <p className="mt-6 text-sm text-slate-400">Last updated December 09, 2025</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-20 lg:py-28">
        <article className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12 text-base leading-8 text-slate-600">
            {/* Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                Agreement to our legal terms
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  We are TechIntel (“<strong>Company</strong>,” “<strong>we</strong>,” “
                  <strong>us</strong>,” “<strong>our</strong>”), a company registered in{" "}
                  {DETAILS.registeredIn}, United States, {DETAILS.mailAddress}.
                </p>
                <p>
                  We operate the website{" "}
                  <a
                    href="https://techintel.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkCls}
                  >
                    https://techintel.tech
                  </a>{" "}
                  (the “<strong>Site</strong>”), as well as any other related products and
                  services that refer or link to these legal terms (the “
                  <strong>Legal Terms</strong>”) (collectively, the “<strong>Services</strong>”).
                </p>
                <p>
                  We are a technology-first company built on innovation and driven by
                  results. We stay ahead by embracing changing consumer behavior and staying
                  compliant with modern data regulations. Our customer-first philosophy
                  enables us to support Marketing Agencies, Publishers, and Enterprises with
                  confidence and consistency.
                </p>
                <p>
                  You can contact us by email at <Email /> or by mail to{" "}
                  {DETAILS.mailAddress}, United States.
                </p>
                <p>
                  These Legal Terms constitute a legally binding agreement made between you,
                  whether personally or on behalf of an entity (“<strong>you</strong>”), and
                  TechIntel, concerning your access to and use of the Services. You agree
                  that by accessing the Services, you have read, understood, and agreed to be
                  bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE
                  LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND
                  YOU MUST DISCONTINUE USE IMMEDIATELY.
                </p>
                <p>
                  We will provide you with prior notice of any scheduled changes to the
                  Services you are using. The modified Legal Terms will become effective upon
                  posting or notifying you by {BLANK}, as stated in the email message. By
                  continuing to use the Services after the effective date of any changes, you
                  agree to be bound by the modified terms.
                </p>
                <p>
                  The Services are intended for users who are at least 13 years of age. All
                  users who are minors in the jurisdiction in which they reside (generally
                  under the age of 18) must have the permission of, and be directly
                  supervised by, their parent or guardian to use the Services. If you are a
                  minor, you must have your parent or guardian read and agree to these Legal
                  Terms prior to you using the Services.
                </p>
                <p>We recommend that you print a copy of these Legal Terms for your records.</p>
              </div>
            </section>

            {/* Table of contents */}
            <section aria-labelledby="toc-heading">
              <h2 id="toc-heading" className="text-2xl font-bold text-slate-950">
                Table of contents
              </h2>
              <ol className="mt-4 grid gap-x-8 gap-y-2 text-[15px] sm:grid-cols-2">
                {TOC.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className={linkCls}>
                      {i + 1}. {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            {/* 1 */}
            <Section n={1}>
              <p>
                The information provided when using the Services is not intended for
                distribution to or use by any person or entity in any jurisdiction or country
                where such distribution or use would be contrary to law or regulation or
                which would subject us to any registration requirement within such
                jurisdiction or country. Accordingly, those persons who choose to access the
                Services from other locations do so on their own initiative and are solely
                responsible for compliance with local laws, if and to the extent local laws
                are applicable.
              </p>
            </Section>

            {/* 2 */}
            <Section n={2}>
              <H3>Our intellectual property</H3>
              <p>
                We are the owner or the licensee of all intellectual property rights in our
                Services, including all source code, databases, functionality, software,
                website designs, audio, video, text, photographs, and graphics in the
                Services (collectively, the “Content”), as well as the trademarks, service
                marks, and logos contained therein (the “Marks”).
              </p>
              <p>
                Our Content and Marks are protected by copyright and trademark laws (and
                various other intellectual property rights and unfair competition laws) and
                treaties in the United States and around the world.
              </p>
              <p>
                The Content and Marks are provided in or through the Services “AS IS” for
                your personal, non-commercial use or internal business purpose only.
              </p>

              <H3>Your use of our Services</H3>
              <p>
                Subject to your compliance with these Legal Terms, including the “
                <ProhibitedLink />” section below, we grant you a non-exclusive,
                non-transferable, revocable license to:
              </p>
              <List
                items={[
                  "access the Services; and",
                  "download or print a copy of any portion of the Content to which you have properly gained access,",
                ]}
              />
              <p>solely for your personal, non-commercial use or internal business purpose.</p>
              <p>
                Except as set out in this section or elsewhere in our Legal Terms, no part of
                the Services and no Content or Marks may be copied, reproduced, aggregated,
                republished, uploaded, posted, publicly displayed, encoded, translated,
                transmitted, distributed, sold, licensed, or otherwise exploited for any
                commercial purpose whatsoever, without our express prior written permission.
              </p>
              <p>
                If you wish to make any use of the Services, Content, or Marks other than as
                set out in this section or elsewhere in our Legal Terms, please address your
                request to: <Email />. If we ever grant you the permission to post, reproduce,
                or publicly display any part of our Services or Content, you must identify us
                as the owners or licensors of the Services, Content, or Marks and ensure that
                any copyright or proprietary notice appears or is visible on posting,
                reproducing, or displaying our Content.
              </p>
              <p>
                We reserve all rights not expressly granted to you in and to the Services,
                Content, and Marks.
              </p>
              <p>
                Any breach of these Intellectual Property Rights will constitute a material
                breach of our Legal Terms and your right to use our Services will terminate
                immediately.
              </p>

              <H3>Your submissions</H3>
              <p>
                Please review this section and the “<ProhibitedLink />” section carefully
                prior to using our Services to understand the (a) rights you give us and (b)
                obligations you have when you post or upload any content through the
                Services.
              </p>
              <p>
                <strong>Submissions:</strong> By directly sending us any question, comment,
                suggestion, idea, feedback, or other information about the Services (“
                Submissions”), you agree to assign to us all intellectual property rights in
                such Submission. You agree that we shall own this Submission and be entitled
                to its unrestricted use and dissemination for any lawful purpose, commercial
                or otherwise, without acknowledgment or compensation to you.
              </p>
              <p>
                <strong>You are responsible for what you post or upload:</strong> By sending
                us Submissions through any part of the Services you:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-teal-500">
                <li>
                  confirm that you have read and agree with our “<ProhibitedLink />” and will
                  not post, send, publish, upload, or transmit through the Services any
                  Submission that is illegal, harassing, hateful, harmful, defamatory,
                  obscene, bullying, abusive, discriminatory, threatening to any person or
                  group, sexually explicit, false, inaccurate, deceitful, or misleading;
                </li>
                <li>
                  to the extent permissible by applicable law, waive any and all moral rights
                  to any such Submission;
                </li>
                <li>
                  warrant that any such Submission are original to you or that you have the
                  necessary rights and licenses to submit such Submissions and that you have
                  full authority to grant us the above-mentioned rights in relation to your
                  Submissions; and
                </li>
                <li>
                  warrant and represent that your Submissions do not constitute confidential
                  information.
                </li>
              </ul>
              <p>
                You are solely responsible for your Submissions and you expressly agree to
                reimburse us for any and all losses that we may suffer because of your breach
                of (a) this section, (b) any third party’s intellectual property rights, or
                (c) applicable law.
              </p>
            </Section>

            {/* 3 */}
            <Section n={3}>
              <p>
                By using the Services, you represent and warrant that: (1) you have the legal
                capacity and you agree to comply with these Legal Terms; (2) you are not
                under the age of 13; (3) you are not a minor in the jurisdiction in which you
                reside, or if a minor, you have received parental permission to use the
                Services; (4) you will not access the Services through automated or non-human
                means, whether through a bot, script or otherwise; (5) you will not use the
                Services for any illegal or unauthorized purpose; and (6) your use of the
                Services will not violate any applicable law or regulation.
              </p>
              <p>
                If you provide any information that is untrue, inaccurate, not current, or
                incomplete, we have the right to suspend or terminate your account and refuse
                any and all current or future use of the Services (or any portion thereof).
              </p>
            </Section>

            {/* 4 */}
            <Section n={4}>
              <p>
                You may not access or use the Services for any purpose other than that for
                which we make the Services available. The Services may not be used in
                connection with any commercial endeavors except those that are specifically
                endorsed or approved by us.
              </p>
              <p>As a user of the Services, you agree not to:</p>
              <List items={PROHIBITED} />
            </Section>

            {/* 5 */}
            <Section n={5}>
              <p>
                The Services does not offer users to submit or post content. We may provide
                you with the opportunity to create, submit, post, display, transmit, perform,
                publish, distribute, or broadcast content and materials to us or on the
                Services, including but not limited to text, writings, video, audio,
                photographs, graphics, comments, suggestions, or personal information or
                other material (collectively, “Contributions”). Contributions may be viewable
                by other users of the Services and through third-party websites. As such, any
                Contributions you transmit may be treated in accordance with the Services’
                Privacy Policy. When you create or make available any Contributions, you
                thereby represent and warrant that:
              </p>
              <List items={CONTRIBUTION_WARRANTIES} />
              <p>
                Any use of the Services in violation of the foregoing violates these Legal
                Terms and may result in, among other things, termination or suspension of
                your rights to use the Services.
              </p>
            </Section>

            {/* 6 */}
            <Section n={6}>
              <p>
                You and Services agree that we may access, store, process, and use any
                information and personal data that you provide following the terms of the
                Privacy Policy and your choices (including settings).
              </p>
              <p>
                By submitting suggestions or other feedback regarding the Services, you agree
                that we can use and share such feedback for any purpose without compensation
                to you.
              </p>
              <p>
                We do not assert any ownership over your Contributions. You retain full
                ownership of all of your Contributions and any intellectual property rights
                or other proprietary rights associated with your Contributions. We are not
                liable for any statements or representations in your Contributions provided
                by you in any area on the Services. You are solely responsible for your
                Contributions to the Services and you expressly agree to exonerate us from
                any and all responsibility and to refrain from any legal action against us
                regarding your Contributions.
              </p>
            </Section>

            {/* 7 */}
            <Section n={7}>
              <p>
                We may provide you areas on the Services to leave reviews or ratings. When
                posting a review, you must comply with the following criteria: (1) you should
                have firsthand experience with the person/entity being reviewed; (2) your
                reviews should not contain offensive profanity, or abusive, racist,
                offensive, or hateful language; (3) your reviews should not contain
                discriminatory references based on religion, race, gender, national origin,
                age, marital status, sexual orientation, or disability; (4) your reviews
                should not contain references to illegal activity; (5) you should not be
                affiliated with competitors if posting negative reviews; (6) you should not
                make any conclusions as to the legality of conduct; (7) you may not post any
                false or misleading statements; and (8) you may not organize a campaign
                encouraging others to post reviews, whether positive or negative.
              </p>
              <p>
                We may accept, reject, or remove reviews in our sole discretion. We have
                absolutely no obligation to screen reviews or to delete reviews, even if
                anyone considers reviews objectionable or inaccurate. Reviews are not
                endorsed by us, and do not necessarily represent our opinions or the views of
                any of our affiliates or partners. We do not assume liability for any review
                or for any claims, liabilities, or losses resulting from any review. By
                posting a review, you hereby grant to us a perpetual, non-exclusive,
                worldwide, royalty-free, fully paid, assignable, and sublicensable right and
                license to reproduce, modify, translate, transmit by any means, display,
                perform, and/or distribute all content relating to review.
              </p>
            </Section>

            {/* 8 */}
            <Section n={8}>
              <p>
                We reserve the right, but not the obligation, to: (1) monitor the Services
                for violations of these Legal Terms; (2) take appropriate legal action
                against anyone who, in our sole discretion, violates the law or these Legal
                Terms, including without limitation, reporting such user to law enforcement
                authorities; (3) in our sole discretion and without limitation, refuse,
                restrict access to, limit the availability of, or disable (to the extent
                technologically feasible) any of your Contributions or any portion thereof;
                (4) in our sole discretion and without limitation, notice, or liability, to
                remove from the Services or otherwise disable all files and content that are
                excessive in size or are in any way burdensome to our systems; and (5)
                otherwise manage the Services in a manner designed to protect our rights and
                property and to facilitate the proper functioning of the Services.
              </p>
            </Section>

            {/* 9 */}
            <Section n={9}>
              <p>
                We care about data privacy and security. Please review our Privacy Policy:{" "}
                <PrivacyLink />. By using the Services, you agree to be bound by our Privacy
                Policy, which is incorporated into these Legal Terms. Please be advised the
                Services are hosted in India. If you access the Services from any other
                region of the world with laws or other requirements governing personal data
                collection, use, or disclosure that differ from applicable laws in India,
                then through your continued use of the Services, you are transferring your
                data to India, and you expressly consent to have your data transferred to and
                processed in India. Further, we do not knowingly accept, request, or solicit
                information from children or knowingly market to children. Therefore, in
                accordance with the U.S. Children’s Online Privacy Protection Act, if we
                receive actual knowledge that anyone under the age of 13 has provided
                personal information to us without the requisite and verifiable parental
                consent, we will delete that information from the Services as quickly as is
                reasonably practical.
              </p>
            </Section>

            {/* 10 */}
            <Section n={10}>
              <p>
                These Legal Terms shall remain in full force and effect while you use the
                Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE
                RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY,
                DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP
                ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED
                IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
                YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR
                INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
                DISCRETION.
              </p>
              <p>
                If we terminate or suspend your account for any reason, you are prohibited
                from registering and creating a new account under your name, a fake or
                borrowed name, or the name of any third party, even if you may be acting on
                behalf of the third party. In addition to terminating or suspending your
                account, we reserve the right to take appropriate legal action, including
                without limitation pursuing civil, criminal, and injunctive redress.
              </p>
            </Section>

            {/* 11 */}
            <Section n={11}>
              <p>
                We reserve the right to change, modify, or remove the contents of the
                Services at any time or for any reason at our sole discretion without notice.
                However, we have no obligation to update any information on our Services. We
                will not be liable to you or any third party for any modification, price
                change, suspension, or discontinuance of the Services.
              </p>
              <p>
                We cannot guarantee the Services will be available at all times. We may
                experience hardware, software, or other problems or need to perform
                maintenance related to the Services, resulting in interruptions, delays, or
                errors. We reserve the right to change, revise, update, suspend, discontinue,
                or otherwise modify the Services at any time or for any reason without notice
                to you. You agree that we have no liability whatsoever for any loss, damage,
                or inconvenience caused by your inability to access or use the Services
                during any downtime or discontinuance of the Services. Nothing in these Legal
                Terms will be construed to obligate us to maintain and support the Services
                or to supply any corrections, updates, or releases in connection therewith.
              </p>
            </Section>

            {/* 12 */}
            <Section n={12}>
              <p>
                These Legal Terms shall be governed by and defined following the laws of{" "}
                {DETAILS.governingLaw}. TechIntel and yourself irrevocably consent that the
                courts of {DETAILS.courts} shall have exclusive jurisdiction to resolve any
                dispute which may arise in connection with these Legal Terms.
              </p>
            </Section>

            {/* 13 */}
            <Section n={13}>
              <H3>Informal negotiations</H3>
              <p>
                To expedite resolution and control the cost of any dispute, controversy, or
                claim related to these Legal Terms (each a “Dispute” and collectively, the
                “Disputes”) brought by either you or us (individually, a “Party” and
                collectively, the “Parties”), the Parties agree to first attempt to negotiate
                any Dispute (except those Disputes expressly provided below) informally for
                at least {DETAILS.negotiationDays} days before initiating arbitration. Such
                informal negotiations commence upon written notice from one Party to the
                other Party.
              </p>

              <H3>Binding arbitration</H3>
              <p>
                Any dispute arising out of or in connection with these Legal Terms, including
                any question regarding its existence, validity, or termination, shall be
                referred to and finally resolved by the International Commercial Arbitration
                Court under the European Arbitration Chamber (Belgium, Brussels, Avenue
                Louise, 146) according to the Rules of this ICAC, which, as a result of
                referring to it, is considered as the part of this clause. The number of
                arbitrators shall be {DETAILS.arbitrators}. The seat, or legal place, or
                arbitration shall be {DETAILS.arbitrationSeat}. The language of the
                proceedings shall be {DETAILS.arbitrationLanguage}. The governing law of
                these Legal Terms shall be substantive law of {DETAILS.governingLaw}.
              </p>

              <H3>Restrictions</H3>
              <p>
                The Parties agree that any arbitration shall be limited to the Dispute
                between the Parties individually. To the full extent permitted by law, (a) no
                arbitration shall be joined with any other proceeding; (b) there is no right
                or authority for any Dispute to be arbitrated on a class-action basis or to
                utilize class action procedures; and (c) there is no right or authority for
                any Dispute to be brought in a purported representative capacity on behalf of
                the general public or any other persons.
              </p>

              <H3>Exceptions to informal negotiations and arbitration</H3>
              <p>
                The Parties agree that the following Disputes are not subject to the above
                provisions concerning informal negotiations binding arbitration: (a) any
                Disputes seeking to enforce or protect, or concerning the validity of, any of
                the intellectual property rights of a Party; (b) any Dispute related to, or
                arising from, allegations of theft, piracy, invasion of privacy, or
                unauthorized use; and (c) any claim for injunctive relief. If this provision
                is found to be illegal or unenforceable, then neither Party will elect to
                arbitrate any Dispute falling within that portion of this provision found to
                be illegal or unenforceable and such Dispute shall be decided by a court of
                competent jurisdiction within the courts listed for jurisdiction above, and
                the Parties agree to submit to the personal jurisdiction of that court.
              </p>
            </Section>

            {/* 14 */}
            <Section n={14}>
              <p>
                There may be information on the Services that contains typographical errors,
                inaccuracies, or omissions, including descriptions, pricing, availability,
                and various other information. We reserve the right to correct any errors,
                inaccuracies, or omissions and to change or update the information on the
                Services at any time, without prior notice.
              </p>
            </Section>

            {/* 15 */}
            <Section n={15}>
              <p>
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT
                YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT
                PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN
                CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT
                LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
                REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES’ CONTENT
                OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES
                AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
                MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
                PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND
                USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
                SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
                STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM
                THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
                TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY
                ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
                ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED,
                OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE,
                GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
                OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR
                ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
                ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
                MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF
                PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH
                ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND
                EXERCISE CAUTION WHERE APPROPRIATE.
              </p>
            </Section>

            {/* 16 */}
            <Section n={16}>
              <p>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU
                OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY,
                INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST
                REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE
                SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO
                YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL
                AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US. CERTAIN US
                STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED
                WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS
                APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT
                APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
              </p>
            </Section>

            {/* 17 */}
            <Section n={17}>
              <p>
                You agree to defend, indemnify, and hold us harmless, including our
                subsidiaries, affiliates, and all of our respective officers, agents,
                partners, and employees, from and against any loss, damage, liability, claim,
                or demand, including reasonable attorneys’ fees and expenses, made by any
                third party due to or arising out of: (1) use of the Services; (2) breach of
                these Legal Terms; (3) any breach of your representations and warranties set
                forth in these Legal Terms; (4) your violation of the rights of a third
                party, including but not limited to intellectual property rights; or (5) any
                overt harmful act toward any other user of the Services with whom you
                connected via the Services. Notwithstanding the foregoing, we reserve the
                right, at your expense, to assume the exclusive defense and control of any
                matter for which you are required to indemnify us, and you agree to
                cooperate, at your expense, with our defense of such claims. We will use
                reasonable efforts to notify you of any such claim, action, or proceeding
                which is subject to this indemnification upon becoming aware of it.
              </p>
            </Section>

            {/* 18 */}
            <Section n={18}>
              <p>
                We will maintain certain data that you transmit to the Services for the
                purpose of managing the performance of the Services, as well as data relating
                to your use of the Services. Although we perform regular routine backups of
                data, you are solely responsible for all data that you transmit or that
                relates to any activity you have undertaken using the Services. You agree
                that we shall have no liability to you for any loss or corruption of any such
                data, and you hereby waive any right of action against us arising from any
                such loss or corruption of such data.
              </p>
            </Section>

            {/* 19 */}
            <Section n={19}>
              <p>
                Visiting the Services, sending us emails, and completing online forms
                constitute electronic communications. You consent to receive electronic
                communications, and you agree that all agreements, notices, disclosures, and
                other communications we provide to you electronically, via email and on the
                Services, satisfy any legal requirement that such communication be in
                writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
                ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
                AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.
                You hereby waive any rights or requirements under any statutes, regulations,
                rules, ordinances, or other laws in any jurisdiction which require an
                original signature or delivery or retention of non-electronic records, or to
                payments or the granting of credits by any means other than electronic means.
              </p>
            </Section>

            {/* 20 */}
            <Section n={20}>
              <H3>Program description</H3>
              <p>
                By opting into any TechIntel Tech text messaging program, you expressly
                consent to receive text messages (SMS) to your mobile number. TechIntel Tech
                text messages may include: responses to inquiries.
              </p>

              <H3>Opting out</H3>
              <p>
                If at any time you wish to stop receiving SMS messages from us, simply reply
                to the text with “STOP.” You may receive an SMS message confirming your opt
                out. After this, you will no longer receive SMS messages from us. If you want
                to join again, please sign up as you did the first time and we will start
                sending SMS messages to you again.
              </p>

              <H3>Message and data rates</H3>
              <p>
                Please be aware that message and data rates may apply to any SMS messages
                sent or received. The rates are determined by your carrier and the specifics
                of your mobile plan. Carriers are not liable for delayed or undelivered
                messages. If you have any questions about your text plan or data plan,
                contact your wireless provider.
              </p>

              <H3>Support</H3>
              <p>
                If you have any questions or need assistance regarding our SMS
                communications, please reply with the keyword HELP. You can also email us at{" "}
                <Email />. If you have any questions regarding privacy, please read our
                Privacy Policy: <PrivacyLink />.
              </p>
            </Section>

            {/* 21 */}
            <Section n={21}>
              <p>
                If any complaint with us is not satisfactorily resolved, you can contact the
                Complaint Assistance Unit of the Division of Consumer Services of the
                California Department of Consumer Affairs in writing at 1625 North Market
                Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800)
                952-5210 or (916) 445-1254.
              </p>
            </Section>

            {/* 22 */}
            <Section n={22}>
              <p>
                These Legal Terms and any policies or operating rules posted by us on the
                Services or in respect to the Services constitute the entire agreement and
                understanding between you and us. Our failure to exercise or enforce any
                right or provision of these Legal Terms shall not operate as a waiver of such
                right or provision. These Legal Terms operate to the fullest extent
                permissible by law. We may assign any or all of our rights and obligations to
                others at any time. We shall not be responsible or liable for any loss,
                damage, delay, or failure to act caused by any cause beyond our reasonable
                control. If any provision or part of a provision of these Legal Terms is
                determined to be unlawful, void, or unenforceable, that provision or part of
                the provision is deemed severable from these Legal Terms and does not affect
                the validity and enforceability of any remaining provisions. There is no
                joint venture, partnership, employment or agency relationship created between
                you and us as a result of these Legal Terms or use of the Services. You agree
                that these Legal Terms will not be construed against us by virtue of having
                drafted them. You hereby waive any and all defenses you may have based on the
                electronic form of these Legal Terms and the lack of signing by the parties
                hereto to execute these Legal Terms.
              </p>
            </Section>

            {/* 23 */}
            <Section n={23}>
              <p>
                In order to resolve a complaint regarding the Services or to receive further
                information regarding use of the Services, please contact us at:
              </p>
              <address className="not-italic">
                <strong className="text-slate-950">TechIntel</strong>
                <br />
                United States
                <br />
                <Email />
              </address>
            </Section>
          </div>
        </article>
      </section>
    </>
  );
}

export default Terms;