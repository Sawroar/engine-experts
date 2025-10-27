import React from 'react';
import Image from 'next/image';
import { Wrench, Users, Award, Clock } from 'lucide-react';
import img from '../../../public/assets/images/team/1.jpg'
import Image2 from '../../../public/assets/images/banner/2.jpg'
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Engine Experts</h1>
          <p className="text-xl md:text-2xl opacity-90">Precision Engine Services Since 2005</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Images Section */}

            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-gray-900 opacity-80"></div>
                <div className="absolute bottom-4 left-4 text-white ">
                  <Image src={Image2} width={400} height={200} alt='Image-1' className='rounded-2xl max-w-3xl h-52'></Image>
                  <p className="text-lg font-semibold">Engine Diagnostics</p>
                </div>
              </div>

              {/* Stats Card Overlay */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">5,000+</div>
                  <div className="text-gray-600">Engines Serviced</div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted Engine Specialists with Decades of Experience
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                For over 18 years, Engine Experts has been the premier destination for comprehensive
                engine repair, maintenance, and performance optimization. Our certified technicians
                bring unparalleled expertise to every job, no matter how complex.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                We specialize in both domestic and import vehicles, offering cutting-edge diagnostic
                technology and old-fashioned attention to detail that sets us apart from the competition.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Award className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-semibold">ASE Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-semibold">24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-semibold">Family Owned</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Wrench className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-semibold">Warranty Included</span>
                </div>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                Schedule Service
              </button>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold mb-3">Precision Work</h4>
                <p className="text-gray-600">
                  Every engine receives meticulous attention to detail and factory-spec precision.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold mb-3">Honest Service</h4>
                <p className="text-gray-600">
                  Transparent pricing and honest assessments you can trust. No surprises.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold mb-3">Proven Excellence</h4>
                <p className="text-gray-600">
                  Award-winning service with thousands of satisfied customers.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Meet Our Expert Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Mike Johnson", role: "Head Technician", exp: "25 years" },
                { name: "Sarah Chen", role: "Engine Diagnostics", exp: "15 years" },
                { name: "David Rodriguez", role: "Performance Specialist", exp: "20 years" },
                { name: "Emily Watson", role: "Service Manager", exp: "12 years" }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Image src={img} width={150} height={80} alt='Image-1' className='rounded-full w-20 h-20'></Image>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-red-600 mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">Experience: {member.exp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Service Your Engine?</h3>
            <p className="text-xl mb-6 opacity-90">
              Contact us today for a comprehensive engine inspection and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
                Call Now: (555) 123-4567
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition duration-300">
                Schedule Online
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;