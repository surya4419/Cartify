import React from 'react'

export const HeroBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white">
      {/* Main Hero Grid - Responsive Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-6">
          {/* Main Hero - Mobile */}
          <div className="h-80 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern shopping experience"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-center">
              <div className="text-white">
                <div className="text-sm font-medium mb-3 text-indigo-200">Smart Shopping Experience</div>
                <h2 className="text-3xl font-bold mb-6 leading-tight">
                  Discover Amazing<br />Products with AI
                </h2>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                  Start Shopping
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Cards - Mobile */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Electronics deals"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 leading-tight">
                    Electronics<br />Sale
                  </h2>
                  <button className="bg-white text-emerald-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Home decor"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white mb-3">
                    Home &<br />Garden
                  </h2>
                  <button className="bg-white text-amber-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-6 h-[500px]">
            {/* Left Column - Electronics */}
            <div className="col-span-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Electronics deals"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                    Electronics<br />Sale
                  </h2>
                  <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Center Large - Main Hero */}
            <div className="col-span-6 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Modern shopping experience"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                <div className="text-white max-w-lg">
                  <div className="text-lg font-medium mb-4 text-indigo-200">Smart Shopping Experience</div>
                  <h2 className="text-5xl font-bold mb-8 leading-tight">
                    Discover Amazing<br />Products with AI
                  </h2>
                  <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg">
                    Start Shopping
                  </button>
                  <div className="mt-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 inline-flex items-center">
                    <div className="text-emerald-400 mr-3 text-xl">🤖</div>
                    <span className="font-semibold">AI-Powered Recommendations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Split into 2 */}
            <div className="col-span-3 space-y-6">
              {/* Top Right - Fashion */}
              <div className="h-[235px] bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Fashion collection"
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3">
                      Fashion<br />Collection
                    </h2>
                    <button className="bg-white text-pink-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                      Explore Styles
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Right - Home & Garden */}
              <div className="h-[235px] bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Home decor"
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3">
                      Home &<br />Garden
                    </h2>
                    <button className="bg-white text-amber-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                      Shop Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-12 gap-6 mt-8 h-[250px]">
            {/* Sports & Outdoors */}
            <div className="col-span-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Sports equipment"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">
                    Sports &<br />Outdoors
                  </h2>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                    Shop Sports
                  </button>
                </div>
              </div>
            </div>

            {/* Beauty & Health */}
            <div className="col-span-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Beauty products"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">
                    Beauty &<br />Health
                  </h2>
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                    Explore Beauty
                  </button>
                  <div className="mt-3">
                    <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                      New Arrivals
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Offers */}
            <div className="col-span-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Special deals"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Up to 50% off
                  </h2>
                  <div className="text-3xl font-bold text-white mb-4">
                    Special<br />Offers
                  </div>
                  <button className="bg-white text-red-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                    View Deals
                  </button>
                </div>
              </div>
            </div>

            {/* Books & Media */}
            <div className="col-span-3 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Books and media"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">
                    Books &<br />Media
                  </h2>
                  <button className="bg-white text-teal-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                    Browse Books
                  </button>
                  <div className="mt-3">
                    <span className="bg-emerald-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                      Bestsellers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row - Large Banner */}
          <div className="mt-8 h-[200px] bg-gradient-to-r from-slate-800 to-gray-900 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1400" 
                alt="Premium delivery service"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative z-10 p-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">Premium Delivery Service</h2>
                <p className="text-xl mb-6 text-gray-300">Fast, reliable delivery to your doorstep. Join thousands of satisfied customers.</p>
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-600 transition-colors shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Second Row */}
        <div className="block lg:hidden grid grid-cols-2 gap-4">
          <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Beauty products"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="relative z-10 p-4 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-base font-bold text-white mb-3">
                  Beauty &<br />Health
                </h2>
                <button className="bg-white text-purple-600 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                  Explore
                </button>
              </div>
            </div>
          </div>

          <div className="h-40 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Special deals"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="relative z-10 p-4 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-base font-bold text-white mb-1">
                  Up to 50% off
                </h2>
                <div className="text-lg font-bold text-white mb-3">
                  Special Offers
                </div>
                <button className="bg-white text-red-600 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                  View Deals
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Banner */}
        <div className="block lg:hidden mt-6 h-48 bg-gradient-to-r from-slate-800 to-gray-900 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Premium delivery service"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 p-6 h-full flex items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">Premium Delivery Service</h2>
              <p className="text-sm mb-4 text-gray-300">Fast, reliable delivery to your doorstep.</p>
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}