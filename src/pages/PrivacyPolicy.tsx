import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 29, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              The Audience Street ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
              Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website, use our mobile applications, or use our services (collectively, the "Services").
            </p>
            <p className="text-muted-foreground mb-4">
              Please read this Privacy Policy carefully. By using our Services, you consent to the practices 
              described in this policy. If you do not agree with this Privacy Policy, please do not access or 
              use our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">2.1 Personal Information You Provide</h3>
            <p className="text-muted-foreground mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Register for an account or create a user profile</li>
              <li>Make a purchase or subscribe to our services</li>
              <li>Contact us through our website forms or customer support</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Participate in surveys, contests, or promotions</li>
              <li>Connect your social media accounts</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              This information may include: name, email address, phone number, billing address, payment 
              information, company name, job title, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-foreground">2.2 Information Collected Automatically</h3>
            <p className="text-muted-foreground mb-4">
              When you access our Services, we automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, browser type and version</li>
              <li><strong>Log Information:</strong> Access times, pages viewed, IP address, referring URL</li>
              <li><strong>Location Information:</strong> General location based on IP address, and with your consent, precise location from your mobile device</li>
              <li><strong>Usage Information:</strong> Features used, actions taken, time spent on pages, interaction data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">2.3 Information from Third Parties</h3>
            <p className="text-muted-foreground mb-4">
              We may receive information about you from third parties, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Social media platforms when you connect your accounts</li>
              <li>Business partners and advertising networks</li>
              <li>Analytics providers</li>
              <li>Payment processors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>To provide, operate, and maintain our Services</li>
              <li>To process transactions and send related information</li>
              <li>To create and manage your account</li>
              <li>To send you technical notices, updates, security alerts, and support messages</li>
              <li>To respond to your comments, questions, and customer service requests</li>
              <li>To send you marketing and promotional communications (with your consent)</li>
              <li>To personalize and improve your experience with our Services</li>
              <li>To analyze usage patterns and trends to improve our Services</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, data analysis, email delivery, hosting, customer service)</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> To comply with legal obligations, respond to lawful requests, or protect rights and safety</li>
              <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
              <li><strong>Aggregated Data:</strong> We may share aggregated or de-identified information that cannot reasonably be used to identify you</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes for which it 
              was collected, including to satisfy legal, accounting, or reporting requirements. The retention 
              period may vary depending on the context of the processing and our legal obligations.
            </p>
            <p className="text-muted-foreground mb-4">
              When we no longer need your personal information, we will securely delete or anonymize it. If 
              deletion is not possible (for example, because your information is stored in backup archives), 
              we will securely store your information and isolate it from further processing until deletion 
              is possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              However, please note that no method of transmission over the internet or electronic storage is 
              100% secure. While we strive to protect your personal information, we cannot guarantee its 
              absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              To exercise any of these rights, please contact us at support@theaudiencestreet.com. We will 
              respond to your request within the timeframe required by applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to collect and track information about your 
              activity on our Services. Types of cookies we use:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the operation of our Services</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our Services</li>
              <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
              <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. 
              However, some features of our Services may not function properly without cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Third-Party Links and Services</h2>
            <p className="text-muted-foreground mb-4">
              Our Services may contain links to third-party websites, services, or applications. We are not 
              responsible for the privacy practices or content of these third parties. We encourage you to 
              read the privacy policies of any third-party services you access.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. International Data Transfers</h2>
            <p className="text-muted-foreground mb-4">
              Your information may be transferred to and processed in countries other than your country of 
              residence. These countries may have data protection laws that are different from your country. 
              We take appropriate safeguards to ensure that your personal information remains protected in 
              accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Children's Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Some of our apps and games may be designed for or include features suitable for children. For these 
              apps, we are committed to complying with applicable child protection laws, including the Children's 
              Online Privacy Protection Act (COPPA) in the United States and similar regulations worldwide.
            </p>
            <p className="text-muted-foreground mb-4">
              For apps not specifically designed for children, our Services are not intended for individuals under 
              the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly 
              collect personal information from children without parental consent. If we become aware that we have 
              collected personal information from a child without appropriate consent, we will take steps to delete 
              such information promptly.
            </p>
            <p className="text-muted-foreground mb-4">
              If you are a parent or guardian and believe that your child has provided us with personal 
              information, please contact us at support@theaudiencestreet.com so we can take appropriate action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Google Play Families Policy Compliance</h2>
            <p className="text-muted-foreground mb-4">
              For our apps that target children or families and are distributed through Google Play, we comply with 
              the Google Play Families Policy. This includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>No Behavioral Advertising:</strong> We do not display personalized or behavioral advertising to children</li>
              <li><strong>Age-Appropriate Content:</strong> All content, including user-generated content and ads, is appropriate for the intended audience</li>
              <li><strong>Parental Controls:</strong> Where applicable, we provide parental controls and consent mechanisms</li>
              <li><strong>Limited Data Collection:</strong> We minimize data collection from children and only collect what is necessary for the app to function</li>
              <li><strong>No Account Requirements:</strong> Children are not required to create accounts or provide personal information to use core app features</li>
              <li><strong>Compliant Ad SDKs:</strong> We only use advertising SDKs that are certified for use with child-directed content</li>
              <li><strong>Clear Privacy Practices:</strong> Our privacy practices are transparent and easy to understand for parents and guardians</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              We are committed to providing a safe and age-appropriate experience for all users, including children. 
              If you have any questions about our family-friendly apps or our compliance with the Google Play 
              Families Policy, please contact us at support@theaudiencestreet.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. California Privacy Rights (CCPA)</h2>
            <p className="text-muted-foreground mb-4">
              If you are a California resident, you have specific rights under the California Consumer Privacy 
              Act (CCPA), including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>The right to know what personal information we collect and how we use it</li>
              <li>The right to delete personal information we have collected</li>
              <li>The right to opt-out of the sale of personal information (we do not sell your personal information)</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. GDPR Compliance</h2>
            <p className="text-muted-foreground mb-4">
              If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have 
              additional rights under the General Data Protection Regulation (GDPR). Our legal bases for 
              processing your personal information include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Performance of a contract with you</li>
              <li>Your consent</li>
              <li>Compliance with legal obligations</li>
              <li>Our legitimate interests (where not overridden by your rights)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">15. Account and Data Deletion</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to request deletion of your account and all associated personal data. To submit 
              a deletion request, please use one of the following methods:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>
                <strong>Email Request:</strong> Send an email to{" "}
                <a 
                  href="mailto:delete@theaudiencestreet.com?subject=Account%20Deletion%20Request" 
                  className="text-primary hover:underline"
                >
                  delete@theaudiencestreet.com
                </a>{" "}
                with the subject line "Account Deletion Request"
              </li>
              <li><strong>In-App Request:</strong> If available in your app, navigate to Settings &gt; Account &gt; Delete Account</li>
              <li><strong>Contact Form:</strong> Submit a request through our contact form specifying "Account Deletion" as the subject</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              When you request account deletion, we will:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Verify your identity to protect against unauthorized requests</li>
              <li>Delete your account and personal data within 30 days of verification</li>
              <li>Send you a confirmation once the deletion is complete</li>
              <li>Retain only data that we are legally required to keep (e.g., transaction records for tax purposes)</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Please note that account deletion is permanent and cannot be undone. Any purchased content, 
              in-app progress, or subscriptions associated with your account will be lost.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">16. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date. For material 
              changes, we may also send you an email notification.
            </p>
            <p className="text-muted-foreground mb-4">
              We encourage you to review this Privacy Policy periodically to stay informed about how we are 
              protecting your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">17. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
              practices, please contact us:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>Email:</strong> support@theaudiencestreet.com</li>
              <li><strong>Phone:</strong> +91 9014426692</li>
              <li><strong>Address:</strong> Wework Krishemerald, Kondapur Main Road, Hyderabad 500081, India</li>
              <li><strong>UAE Office:</strong> 18th Floor, Creative Tower, Hamad Ben Mohammed St., P.O Box 4422, Fujairah, UAE</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              For data protection inquiries, you may also contact our Data Protection Officer at 
              dpo@theaudiencestreet.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
