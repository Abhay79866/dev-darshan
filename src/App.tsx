import React from 'react';
import { Landmark, Calendar, Users, Search, Smile, Headset, Menu } from 'lucide-react';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root bg-background-light dark:bg-background-dark font-display text-maroon dark:text-gray-100 antialiased overflow-x-hidden mandala-bg">
      {/* Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-sand/30 px-6 py-4 lg:px-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm fixed w-full z-50 transition-all">
        <div className="flex items-center gap-3 text-maroon dark:text-primary">
          <div className="size-8 text-primary flex items-center justify-center">
            <Landmark className="w-8 h-8" />
          </div>
          <h2 className="text-maroon dark:text-white text-xl font-bold leading-tight tracking-tight">Spiritual Yatra</h2>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-8">
            <a className="text-maroon dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors font-sans" href="#">Destinations</a>
            <a className="text-maroon dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors font-sans" href="#">Packages</a>
            <a className="text-maroon dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors font-sans" href="#">About Us</a>
            <a className="text-maroon dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors font-sans" href="#">Contact</a>
          </nav>
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-orange-600 transition-colors text-white text-sm font-bold leading-normal tracking-wide shadow-lg shadow-orange-200 dark:shadow-none">
            <span className="truncate font-sans">Book Now</span>
          </button>
        </div>
        <button className="lg:hidden text-maroon dark:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgQbAvezNBxwg0ho94k7M-hP8N3cRgnYadalRL5VURz0bKwW35Z0WATX6yIUAvU7WELyi-G3rZTB_iNfknOh4-3u6uMS-4fM4kyYZYtA5-j4wrWkxB7wv_zCOX-2t-f_rroEjxxS8ctJi2fA3bgKgfCZHFhB6GchERiJfzoF_gobXTBhWoqxfepihZUqxqcu05T0PjCFMBVR9T3WY9QHIKHQM6J0m8E7e5yZLQbMEWkwaWYZU-RoLBNHLDGgeVzJhD8jfLonQqunmF")' }}
            ></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-[-40px]">
            <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-lg mb-4 font-display text-gold">
              Experience the Divine,<br/>Effortlessly
            </h1>
            <h2 className="text-white/90 text-lg lg:text-xl font-normal leading-normal font-sans tracking-wide mb-10 drop-shadow-md">
              श्रद्धा का सफर, हमारे साथ
            </h2>
          </div>

          {/* Floating Search Bar */}
          <div className="absolute bottom-[-60px] lg:bottom-[-40px] left-0 right-0 z-30 px-4">
            <div className="max-w-[1080px] mx-auto bg-white dark:bg-[#2a2018] rounded-2xl shadow-xl shadow-orange-900/10 p-4 lg:p-6 border border-sand/30">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-end">
                {/* Destination Input */}
                <label className="flex flex-col w-full flex-1">
                  <p className="text-maroon dark:text-gray-300 text-sm font-semibold leading-normal pb-2 ml-1 font-sans">Select Destination</p>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <input 
                      className="form-input flex w-full rounded-xl text-maroon dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-sand dark:border-gray-700 bg-background-light dark:bg-background-dark h-12 lg:h-14 pl-12 pr-4 text-base font-normal placeholder:text-maroon/40 dark:placeholder:text-gray-500 transition-all font-sans" 
                      placeholder="e.g. Varanasi, Rishikesh" 
                      defaultValue=""
                    />
                  </div>
                </label>

                {/* Date Input */}
                <label className="flex flex-col w-full lg:w-1/4">
                  <p className="text-maroon dark:text-gray-300 text-sm font-semibold leading-normal pb-2 ml-1 font-sans">Travel Date</p>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <input 
                      className="form-input flex w-full rounded-xl text-maroon dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-sand dark:border-gray-700 bg-background-light dark:bg-background-dark h-12 lg:h-14 pl-12 pr-4 text-base font-normal placeholder:text-maroon/40 dark:placeholder:text-gray-500 transition-all font-sans" 
                      type="date"
                    />
                  </div>
                </label>

                {/* Devotees Input */}
                <label className="flex flex-col w-full lg:w-1/4">
                  <p className="text-maroon dark:text-gray-300 text-sm font-semibold leading-normal pb-2 ml-1 font-sans">No. of Devotees</p>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                      <Users className="w-5 h-5" />
                    </div>
                    <input 
                      className="form-input flex w-full rounded-xl text-maroon dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-sand dark:border-gray-700 bg-background-light dark:bg-background-dark h-12 lg:h-14 pl-12 pr-4 text-base font-normal placeholder:text-maroon/40 dark:placeholder:text-gray-500 transition-all font-sans" 
                      min="1" 
                      placeholder="2 Adults" 
                      type="number"
                    />
                  </div>
                </label>

                {/* Search Button */}
                <button className="w-full lg:w-auto flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 lg:h-14 px-8 bg-primary hover:bg-orange-600 text-white gap-2 font-bold leading-normal tracking-wide shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <Search className="w-5 h-5" />
                  <span className="truncate font-sans uppercase text-sm">Search Yatra</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="pt-24 pb-16 px-4 lg:px-40 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-maroon/10 dark:divide-white/10">
              {/* Stat 1 */}
              <div className="flex flex-col items-center gap-4 py-4 md:py-0 group">
                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Smile className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-3xl font-bold text-maroon dark:text-primary font-display">5000+</h3>
                  <p className="text-maroon/70 dark:text-gray-300 font-medium font-sans">Happy Pilgrims</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center gap-4 py-4 md:py-0 group">
                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Landmark className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-3xl font-bold text-maroon dark:text-primary font-display">108+</h3>
                  <p className="text-maroon/70 dark:text-gray-300 font-medium font-sans">Sacred Destinations</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center gap-4 py-4 md:py-0 group">
                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Headset className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-3xl font-bold text-maroon dark:text-primary font-display">24/7</h3>
                  <p className="text-maroon/70 dark:text-gray-300 font-medium font-sans">Spiritual Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
