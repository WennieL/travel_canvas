const fs = require('fs');
let content = fs.readFileSync('src/data/templates.ts', 'utf8');
const hideIds = ['mel-coffee', 'mel-bars', 'mel-girls', 'mel-night', 'mel-flash', 'tyo-classic', 'tyo-foodie', 'kyo-zen', 'osa-fun', 'tpe-slow', 'tnn-food', 'hun-nature', 'tw-mich-2day', 'tw-night-2day'];
hideIds.forEach(id => {
    const regex = new RegExp(`(id: '${id}',)`, 'g');
    content = content.replace(regex, `$1\n        isHidden: true,`);
});
fs.writeFileSync('src/data/templates.ts', content);
console.log('Successfully hidden non-core templates.');
