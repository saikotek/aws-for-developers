function convertJsonToMarkdown(jsonData, skipColumns = []) {
    let markdown = "";

    jsonData.categories.forEach(category => {
        markdown += `## ${category.name}\n\n`;
        
        // Get headers excluding the skipped ones
        const headers = Object.keys(category.services[0])
        .filter(header => !skipColumns.includes(header));
        
        // Create table header
        markdown += "| " + headers.join(" | ") + " |\n";
        
        // Add separator line with alignment
        markdown += "|" + headers.map(() => "---").join("|") + "|\n";
        
        // Add table rows
        category.services.forEach(service => {
        const row = headers.map(header => {
            // Handle null, undefined, or empty values
            const value = service[header] || "-";
            // Escape pipe characters in content
            return value.replace(/\|/g, "\\|")
            // Replace newlines with space to prevent table breaking
            .replace(/\n/g, " ")
            // Trim whitespace
            .trim();
        });
        markdown += "| " + row.join(" | ") + " |\n";
        });
        
        markdown += "\n"; // Add space between categories
    });

    return markdown;
}

function getTotalServices(jsonData) {
    return jsonData.categories.reduce((total, category) => total + category.services.length, 0);
}



// load data from json
const data = require('./services.json');
console.log(`Total services: ${getTotalServices(data)}`);
const markdown = convertJsonToMarkdown(data, ['Type']);
const fs = require('fs');
fs.writeFileSync('SERVICES.md', markdown);