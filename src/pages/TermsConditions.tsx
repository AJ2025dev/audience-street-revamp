import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 29, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using The Audience Street's services, website, or mobile applications ("Services"), 
              you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of 
              these Terms, you may not access or use our Services.
            </p>
            <p className="text-muted-foreground mb-4">
              These Terms apply to all visitors, users, and others who access or use the Services. By using our 
              Services, you represent that you are at least 18 years old and have the legal capacity to enter 
              into a binding agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Description of Services</h2>
            <p className="text-muted-foreground mb-4">
              The Audience Street provides AI-powered marketing solutions, ad-tech platforms, and related digital 
              marketing services. Our Services may include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>AI and machine learning solutions for marketing optimization</li>
              <li>Ad-tech platform access and management</li>
              <li>Predictive analytics and data insights</li>
              <li>Custom automation solutions</li>
              <li>Related consulting and support services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              When you create an account with us, you must provide accurate, complete, and current information. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of 
              your account.
            </p>
            <p className="text-muted-foreground mb-4">
              You are responsible for safeguarding the password used to access the Services and for any activities 
              or actions under your password. You agree not to disclose your password to any third party and to 
              notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Subscriptions and Payments</h2>
            <p className="text-muted-foreground mb-4">
              Some parts of the Services are billed on a subscription basis. You will be billed in advance on a 
              recurring and periodic basis ("Billing Cycle"). Billing cycles are set on a monthly or annual basis.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Auto-Renewal:</strong> Your subscription will automatically renew at the end of each Billing 
              Cycle unless you cancel auto-renewal through your account settings or by contacting us before the 
              renewal date.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>In-App Purchases:</strong> Our mobile applications may offer in-app purchases. All in-app 
              purchases are processed through the respective app store (Apple App Store or Google Play Store) and 
              are subject to their terms and conditions.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Refunds:</strong> Refunds for subscriptions purchased through the Apple App Store or Google 
              Play Store must be requested through the respective platform. For direct purchases, refund requests 
              should be submitted within 14 days of purchase by contacting our support team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cancellation Policy</h2>
            <p className="text-muted-foreground mb-4">
              You may cancel your subscription at any time through:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Your account settings on our website or app</li>
              <li>The subscription management section of the Apple App Store or Google Play Store</li>
              <li>Contacting our support team at support@theaudiencestreet.com</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Upon cancellation, your subscription will remain active until the end of the current Billing Cycle. 
              You will not receive a refund for any unused portion of the subscription period unless required by 
              applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              The Services and their original content, features, and functionality are and will remain the exclusive 
              property of The Audience Street and its licensors. The Services are protected by copyright, trademark, 
              and other laws of both the United Arab Emirates and foreign countries.
            </p>
            <p className="text-muted-foreground mb-4">
              Our trademarks and trade dress may not be used in connection with any product or service without the 
              prior written consent of The Audience Street.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. User Content</h2>
            <p className="text-muted-foreground mb-4">
              Our Services may allow you to post, link, store, share, and otherwise make available certain 
              information, text, graphics, or other material ("User Content"). You are responsible for the User 
              Content you post and its legality, reliability, and appropriateness.
            </p>
            <p className="text-muted-foreground mb-4">
              By posting User Content, you grant us the right to use, modify, publicly perform, publicly display, 
              reproduce, and distribute such content on and through the Services. You retain all rights to your 
              User Content and are responsible for protecting those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Prohibited Uses</h2>
            <p className="text-muted-foreground mb-4">
              You agree not to use the Services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To interfere with or circumvent the security features of the Services</li>
              <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              <li>To collect or track personal information of others without consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">
              Our Services may contain links to third-party websites or services that are not owned or controlled 
              by The Audience Street. We have no control over and assume no responsibility for the content, privacy 
              policies, or practices of any third-party websites or services.
            </p>
            <p className="text-muted-foreground mb-4">
              You acknowledge and agree that The Audience Street shall not be responsible or liable for any damage 
              or loss caused by or in connection with the use of any such third-party content, goods, or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground mb-4">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS 
              OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
              PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>
            <p className="text-muted-foreground mb-4">
              The Audience Street does not warrant that the Services will function uninterrupted, secure, or 
              available at any particular time or location, that any errors or defects will be corrected, or that 
              the Services are free of viruses or other harmful components.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              IN NO EVENT SHALL THE AUDIENCE STREET, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR 
              AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
              INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, 
              RESULTING FROM:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Your access to or use of or inability to access or use the Services</li>
              <li>Any conduct or content of any third party on the Services</li>
              <li>Any content obtained from the Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Indemnification</h2>
            <p className="text-muted-foreground mb-4">
              You agree to defend, indemnify, and hold harmless The Audience Street and its licensees, licensors, 
              employees, contractors, agents, officers, and directors from and against any and all claims, damages, 
              obligations, losses, liabilities, costs, or debt and expenses arising from:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Your use of and access to the Services</li>
              <li>Your violation of any term of these Terms</li>
              <li>Your violation of any third-party right, including any copyright, property, or privacy right</li>
              <li>Any claim that your User Content caused damage to a third party</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Termination</h2>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your account and access to the Services immediately, without prior notice 
              or liability, for any reason, including if you breach the Terms.
            </p>
            <p className="text-muted-foreground mb-4">
              Upon termination, your right to use the Services will immediately cease. If you wish to terminate 
              your account, you may simply discontinue using the Services or contact us to request account deletion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates, 
              without regard to its conflict of law provisions.
            </p>
            <p className="text-muted-foreground mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those 
              rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the 
              remaining provisions will remain in effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">15. Dispute Resolution</h2>
            <p className="text-muted-foreground mb-4">
              Any disputes arising out of or relating to these Terms or the Services shall first be attempted to 
              be resolved through good-faith negotiations between the parties. If such negotiations fail, the 
              dispute shall be submitted to binding arbitration in Dubai, UAE, in accordance with the rules of 
              the Dubai International Arbitration Centre.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">16. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a 
              revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. 
              What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-muted-foreground mb-4">
              By continuing to access or use our Services after any revisions become effective, you agree to be 
              bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to 
              use the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">17. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>Email:</strong> support@theaudiencestreet.com</li>
              <li><strong>Phone:</strong> +91 9014426692</li>
              <li><strong>Address:</strong> Wework Krishemerald, Kondapur Main Road, Hyderabad 500081, India</li>
              <li><strong>UAE Office:</strong> 18th Floor, Creative Tower, Hamad Ben Mohammed St., P.O Box 4422, Fujairah, UAE</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
