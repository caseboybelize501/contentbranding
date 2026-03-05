import React, { useState } from 'react';

const Builder = () => {
  const [formData, setFormData] = useState({
    description: '',
    audience: '',
    tone: '',
    industry: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/brand/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      console.log('Job ID:', data.jobId);
      // Redirect to result page or poll for status
    } catch (error) {
      console.error('Error generating brand:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create Your Brand Identity</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your business..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
          <textarea
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Who are your customers?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tone</label>
          <select
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="creative">Creative</option>
            <option value="serious">Serious</option>
            <option value="playful">Playful</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What industry are you in?"
          />
        </div>

        <button
          type="submit"
          disabled={isGenerating}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isGenerating ? 'Generating...' : 'Generate Brand Identity'}
        </button>
      </form>
    </div>
  );
};

export default Builder;