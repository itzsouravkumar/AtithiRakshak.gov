import React from "react";

export default function AboutUs() {
  return (
    <div className="w-full bg-gray-50">
      {/* About + Vision */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {/* About Us */}
        <div className="md:col-span-2 bg-white p-6">
          <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2">
            About Us
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At Smart Tourist Safety Monitoring & Incident Response System
            (STSIRS), our mission is simple yet powerful: To make tourism safer,
            smarter, and more trustworthy. Tourism is not just about
            destinations-it’s about people, experiences, and peace of mind.
            Unfortunately, in remote and high-risk areas, traditional safety
            measures fall short. We aim to bridge this gap by combining AI,
            Blockchain, Geo-fencing, and IoT to create a secure ecosystem where
            tourists can travel freely and authorities can respond instantly.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6">
          <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2">
            Our Vision
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            To transform India’s tourism into a technology-driven safe space,
            ensuring that every visitor-domestic or international-feels secure,
            supported, and connected.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white py-12">
        <h2 className="text-center text-xl md:text-2xl font-bold text-blue-900 mb-10">
          Key Features
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="bg-white rounded-lg border shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-blue-700 text-4xl mb-4">🆔</span>
            <h3 className="font-semibold">Digital Tourist ID</h3>
            <p className="text-sm text-gray-600 mt-2">
              Secure blockchain-based IDs store KYC, itinerary, and emergency
              details. Tamper-proof & private.
            </p>
          </div>

          <div className="bg-white rounded-lg border shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-blue-700 text-4xl mb-4">📱</span>
            <h3 className="font-semibold">Mobile App with SOS</h3>
            <p className="text-sm text-gray-600 mt-2">
              Real-time safety alerts when entering restricted zones. SOS shares
              live location instantly.
            </p>
          </div>

          <div className="bg-white rounded-lg border shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-blue-700 text-4xl mb-4">🔍</span>
            <h3 className="font-semibold">AI Anomaly Detection</h3>
            <p className="text-sm text-gray-600 mt-2">
              Detects unusual activity via blockchain IDs ensuring trust & quick
              response.
            </p>
          </div>

          <div className="bg-white rounded-lg border shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-blue-700 text-4xl mb-4">📊</span>
            <h3 className="font-semibold">Detailed Dashboard</h3>
            <p className="text-sm text-gray-600 mt-2">
              Real-time heatmaps, alerts, and clusters help authorities act
              quickly.
            </p>
          </div>

          <div className="bg-white rounded-lg border shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-blue-700 text-4xl mb-4">🌐</span>
            <h3 className="font-semibold">Multilingual Support</h3>
            <p className="text-sm text-gray-600 mt-2">
              Available in 10+ Indian languages with voice/text support for
              accessibility.
            </p>
          </div>

          <div className="bg-white rounded-lg border shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-blue-700 text-4xl mb-4">🔒</span>
            <h3 className="font-semibold">Data Privacy</h3>
            <p className="text-sm text-gray-600 mt-2">
              Strong encryption safeguards all travel & personal data, preventing
              tampering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
