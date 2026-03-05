const axios = require('axios');

class LlamaClient {
  constructor() {
    this.baseUrl = process.env.LLAMA_API_URL || 'http://llama:8000';
  }

  async generate(prompt, options = {}) {
    try {
      const response = await axios.post(`${this.baseUrl}/generate`, {
        prompt,
        ...options
      });
      
      return response.data.response;
    } catch (error) {
      throw new Error(`LLaMA API error: ${error.message}`);
    }
  }

  async extractJSON(text) {
    // Simple regex to extract JSON from text
    const jsonMatch = text.match(/\{.*\}/s);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch (e) {
        throw new Error('Failed to parse JSON');
      }
    }
    throw new Error('No JSON found in response');
  }
}

const llamaClient = new LlamaClient();
module.exports = { llamaClient };