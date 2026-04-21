const fs = require('fs');

const tpFile = 'src/data/assets/taiwan/taipei.ts';
let tpContent = fs.readFileSync(tpFile, 'utf8');

tpContent = tpContent.replace("addressEn: 'Taipei City',", "addressEn: 'Dihua St., Datong Dist., Taipei City',");
tpContent = tpContent.replace("address: '台北市士林區至善路二段221號',\r\n        addressEn: 'Taipei City',", "address: '台北市士林區至善路二段221號',\n        addressEn: 'No. 221, Sec. 2, Zhishan Rd., Shilin Dist., Taipei City',");
tpContent = tpContent.replace("address: '台北市信義區信義路五段7號',\r\n        addressEn: 'Taipei City',", "address: '台北市信義區信義路五段7號',\n        addressEn: 'No. 7, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei City',");

fs.writeFileSync(tpFile, tpContent, 'utf8');

const tnFile = 'src/data/assets/taiwan/tainan.ts';
let tnContent = fs.readFileSync(tnFile, 'utf8');

tnContent = tnContent.replace("address: '台南市中西區海安路一段63號',\r\n        addressEn: 'Tainan City',", "address: '台南市中西區海安路一段63號',\n        addressEn: 'No. 63, Sec. 1, Hai\\'an Rd., West Central Dist., Tainan City',");
tnContent = tnContent.replace("address: '台南市中西區國華街三段',\r\n        addressEn: 'Tainan City',", "address: '台南市中西區國華街三段',\n        addressEn: 'Sec. 3, Guohua St., West Central Dist., Tainan City',");
tnContent = tnContent.replace("address: '台南市中西區神農街',\r\n        addressEn: 'Tainan City',", "address: '台南市中西區神農街',\n        addressEn: 'Shennong St., West Central Dist., Tainan City',");
tnContent = tnContent.replace("address: '台南市安平區國勝路82號',\r\n        addressEn: 'Tainan City',", "address: '台南市安平區國勝路82號',\n        addressEn: 'No. 82, Guosheng Rd., Anping Dist., Tainan City',");

fs.writeFileSync(tnFile, tnContent, 'utf8');
console.log('Fixed translations!');
