import React, { useState, useEffect } from 'react';

const StyleGuide = () => {
  const [brandData, setBrandData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching brand data
    const fetchBrandData = async () => {
      try {
        // In a real app, this would be an API call
        const mockData = {
          brandNames: [
            { name: 'Brandify', rationale: 'Modern and tech-savvy', domain_check_hint: 'brandify.com' },
            { name: 'InnovateX', rationale: 'Creative and forward-thinking', domain_check_hint: 'innovatex.io' }
          ],
          taglines: [
            'Transform Your Ideas Into Reality',
            'Where Innovation Meets Excellence'
          ],
          brandVoice: {
            personality: 'Innovative and approachable',
            dos: ['Use clear language', 'Be optimistic', 'Show enthusiasm'],
            donts: ['Use jargon', 'Be overly formal', 'Ignore customer feedback']
          },
          colorPalette: [
            { hex: '#3B82F6', name: 'Blue', usage: 'Primary brand color', psychology: 'Trust and reliability' },
            { hex: '#10B981', name: 'Green', usage: 'Success and growth', psychology: 'Health and harmony' }
          ],
          typography: {
            primaryFont: 'Inter',
            secondaryFont: 'Merriweather',
            rationale: 'Clean and professional with good readability'
          },
          styleGuideMarkdown: '# Brand Style Guide\n\n## Color Palette\n- Blue (#3B82F6) - Trust\n- Green (#10B981) - Growth\n\n## Typography\nPrimary: Inter\nSecondary: Merriweather'
        };
        
        setBrandData(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching brand data:', error);
        setIsLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  if (isLoading) {
    return <div className="p-6 text-center">Loading brand identity...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Brand Identity</h1>
      
      {brandData && (
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Brand Names</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {brandData.brandNames.map((brand, index) => (
                <div key={index} className="border p-4 rounded-lg bg-gray-50">
                  <h3 className="font-bold text-lg">{brand.name}</h3>
                  <p className="text-sm text-gray-600">{brand.rationale}</p>
                  <p className="text-xs mt-2">Domain hint: {brand.domain_check_hint}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Taglines</h2>
            <ul className="space-y-2">
              {brandData.taglines.map((tagline, index) => (
                <li key={index} className="p-3 border rounded bg-gray-50">{tagline}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Brand Voice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Personality</h3>
                <p>{brandData.brandVoice.personality}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Dos</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {brandData.brandVoice.dos.map((doItem, index) => (
                    <li key={index}>{doItem}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Don'ts</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {brandData.brandVoice.donts.map((dontItem, index) => (
                    <li key={index}>{dontItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {brandData.colorPalette.map((color, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div 
                    className="w-full h-16 rounded mb-2" 
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <h3 className="font-medium">{color.name}</h3>
                  <p className="text-sm text-gray-600">Usage: {color.usage}</p>
                  <p className="text-xs mt-1">Psychology: {color.psychology}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Typography</h2>
            <div className="border p-4 rounded-lg bg-gray-50">
              <p><span className="font-medium">Primary:</span> {brandData.typography.primaryFont}</p>
              <p><span className="font-medium">Secondary:</span> {brandData.typography.secondaryFont}</p>
              <p className="mt-2">{brandData.typography.rationale}</p>
            </div>
          </section>

          <div className="text-center">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Export as PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleGuide;