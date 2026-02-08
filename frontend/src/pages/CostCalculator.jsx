import React, { useState } from 'react';
import { Calculator, Home, MapPin, Palette, ArrowRight } from 'lucide-react';
import SEO, { pageSEO } from '../components/SEO';
import { getWhatsAppUrl } from '../utils/whatsapp';

const CostCalculator = () => {
  const [bhkType, setBhkType] = useState('2bhk');
  const [customization, setCustomization] = useState('standard');
  const [city, setCity] = useState('pune');
  const [showResult, setShowResult] = useState(false);

  const calculateCost = () => {
    // Base costs
    const baseCosts = {
      '1bhk': 450000,
      '2bhk': 680000,
      '3bhk': 900000
    };

    // Customization multipliers
    const customMultipliers = {
      'basic': 0.85,
      'standard': 1.0,
      'premium': 1.3,
      'luxury': 1.6
    };

    // City multipliers
    const cityMultipliers = {
      'pune': 1.0,
      'mumbai': 1.15,
      'nashik': 0.9,
      'dhule': 0.85,
      'other': 0.95
    };

    const baseCost = baseCosts[bhkType];
    const customMultiplier = customMultipliers[customization];
    const cityMultiplier = cityMultipliers[city];

    const estimatedCost = baseCost * customMultiplier * cityMultiplier;
    const minCost = estimatedCost * 0.9;
    const maxCost = estimatedCost * 1.1;

    return {
      min: Math.round(minCost / 10000) * 10000,
      max: Math.round(maxCost / 10000) * 10000,
      estimated: Math.round(estimatedCost / 10000) * 10000
    };
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  const result = showResult ? calculateCost() : null;

  const formatCurrency = (amount) => {
    return `₹${(amount / 100000).toFixed(1)} Lakhs`;
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={pageSEO.costCalculator.title}
        description={pageSEO.costCalculator.description}
        keywords={pageSEO.costCalculator.keywords}
        canonicalUrl="https://nakshtrainterior.com/cost-calculator"
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#E7D49E]/20 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interior Design <span className="text-[#047C74]">Cost Calculator</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get an instant estimate for your home interior project in just 3 simple steps!
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-[#E7D49E]/10 border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
            {/* Step 1: BHK Type */}
            <div className="mb-8">
              <label className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                <Home className="w-5 h-5 mr-2 text-[#047C74]" />
                Step 1: Select Your Home Type
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['1bhk', '2bhk', '3bhk'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setBhkType(type)}
                    className={`py-4 px-6 rounded-xl font-semibold text-center transition-all duration-200 ${
                      bhkType === type
                        ? 'bg-[#047C74] text-white shadow-lg scale-105'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#047C74]'
                    }`}
                  >
                    {type.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Customization Level */}
            <div className="mb-8">
              <label className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                <Palette className="w-5 h-5 mr-2 text-[#047C74]" />
                Step 2: Choose Customization Level
              </label>
              <div className="space-y-3">
                {[
                  { value: 'basic', label: 'Basic', desc: 'Essential interiors, good quality finishes' },
                  { value: 'standard', label: 'Standard', desc: 'Popular choice, balanced quality & design' },
                  { value: 'premium', label: 'Premium', desc: 'High-end materials, custom designs' },
                  { value: 'luxury', label: 'Luxury', desc: 'Top-tier finishes, designer elements' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setCustomization(option.value)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                      customization === option.value
                        ? 'bg-[#047C74] text-white shadow-lg'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#047C74]'
                    }`}
                  >
                    <div className="font-semibold mb-1">{option.label}</div>
                    <div className={`text-sm ${customization === option.value ? 'text-white/90' : 'text-gray-600'}`}>
                      {option.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: City */}
            <div className="mb-8">
              <label className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                <MapPin className="w-5 h-5 mr-2 text-[#047C74]" />
                Step 3: Select Your City
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'pune', label: 'Pune' },
                  { value: 'mumbai', label: 'Mumbai' },
                  { value: 'nashik', label: 'Nashik' },
                  { value: 'dhule', label: 'Dhule' },
                  { value: 'other', label: 'Other' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setCity(option.value)}
                    className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                      city === option.value
                        ? 'bg-[#047C74] text-white shadow-lg'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#047C74]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-[#047C74] to-[#C68D28] hover:from-[#036860] hover:to-[#B07A20] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Calculator className="w-6 h-6" />
              <span>Calculate Estimated Cost</span>
            </button>
          </div>

          {/* Result Section */}
          {showResult && result && (
            <div className="mt-8 bg-gradient-to-br from-[#047C74] to-[#036860] text-white rounded-2xl p-8 shadow-2xl animate-slideUp">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Your Estimated Cost</h3>
                <p className="text-white/90">Based on your selections</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">
                    {formatCurrency(result.estimated)}
                  </div>
                  <div className="text-white/80 text-sm">
                    Range: {formatCurrency(result.min)} - {formatCurrency(result.max)}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Home Type:</span>
                  <span className="font-semibold">{bhkType.toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Customization:</span>
                  <span className="font-semibold capitalize">{customization}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Location:</span>
                  <span className="font-semibold capitalize">{city}</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                <p className="text-sm text-white/90 text-center">
                  ⚠️ This is an approximate estimate. Final cost depends on specific requirements, materials chosen, and project complexity.
                </p>
              </div>

              <a
                href={getWhatsAppUrl(`Hi Nakshatra Interiors, I used your cost calculator. I'm interested in ${bhkType.toUpperCase()} ${customization} interiors in ${city}. My estimated budget is ${formatCurrency(result.estimated)}. Please provide a detailed quote.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-[#047C74] hover:bg-gray-100 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Detailed Quote on WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#E7D49E]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What's Included in Our Packages?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Complete 3D design visualization',
              'Modular kitchen with accessories',
              'Wardrobes with internal fittings',
              'TV unit and entertainment center',
              'False ceiling with lighting',
              'Electrical work and switches',
              'Complete painting and finishes',
              'Flooring (tiles/wood/vinyl)',
              'Door and window treatments',
              'Hardware and accessories',
              'Project management',
              'Post-handover support'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#047C74] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostCalculator;
