const fs = require('fs');
const path = require('path');

// Load your current products
const filePath = path.join(__dirname, 'products.json');
const products = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const fixedProducts = products.map(p => {
    return {
        ...p,
        // Add default values for required fields if they are missing
        color: p.color || "Multi",
        flake: p.flake || "No flakes",
        glitter: p.glitter || "No glitter",
        // Add category defaults
        chain: p.category === "keychain" ? (p.chain || "Golden") : undefined,
        tassle: p.category === "bookmark" ? (p.tassle || "Gold") : undefined,
        handle: p.category === "kitchenware" ? (p.handle || "Golden") : undefined
    };
});

fs.writeFileSync(filePath, JSON.stringify(fixedProducts, null, 2));
console.log("✅ products.json has been updated with required fields!");