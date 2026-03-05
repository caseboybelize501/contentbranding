const { Worker, Queue } = require('bullmq');
const { llamaClient } = require('../services/llamaClient');
const { saveBrand } = require('../services/brandService');

const brandQueue = new Queue('brand-generation');

const brandWorker = new Worker('brand-generation', async (job) => {
  const { description, audience, tone, userId } = job.data;
  
  // Prepare prompt
  const prompt = `Create a complete brand identity for this business:
Description: ${description}
Target audience: ${audience}
Tone: ${tone}
Industry: ${job.data.industry || 'General'}
Return JSON: {
brand_names: [{name, rationale, domain_check_hint}],
taglines: [string],
brand_voice: { personality: string, dos: [], donts: [] },
color_palette: [{ hex, name, usage, psychology }],
typography: { primary_font, secondary_font, rationale },
style_guide_markdown: string
}`;

  try {
    const response = await llamaClient.generate(prompt, {
      temperature: 0.85,
      max_tokens: 2048
    });
    
    // Parse and save brand
    const brandData = JSON.parse(response);
    return await saveBrand(brandData, userId);
  } catch (error) {
    throw new Error(`Failed to generate brand: ${error.message}`);
  }
}, {
  connection: {
    host: 'redis',
    port: 6379
  }
});

module.exports = brandWorker;