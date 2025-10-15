import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              TAS Technology and Automation Services ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Contact us through our website forms</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Engage with our services</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              This information may include: name, email address, phone number, company name, and any other 
              information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-4">
              When you visit our website, we may automatically collect certain information about your device, 
              including information about your web browser, IP address, time zone, and some of the cookies installed 
              on your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>To provide, operate, and maintain our services</li>
              <li>To improve, personalize, and expand our services</li>
              <li>To communicate with you, including customer service and support</li>
              <li>To send you updates, marketing communications, and other information</li>
              <li>To process your transactions and manage your orders</li>
              <li>To detect, prevent, and address technical issues and security concerns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information in the following situations:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent or at your direction</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational security measures to protect your personal 
              information. However, please note that no method of transmission over the internet or electronic 
              storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to or restrict certain processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Links</h2>
            <p className="text-muted-foreground mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these third-party sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Children's Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children under 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>Email: info@tas-tech.ae</li>
              <li>Phone: +971 4 123 4567</li>
              <li>Address: Dubai, United Arab Emirates</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
