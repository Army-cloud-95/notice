const bcrypt = require('bcrypt');

const plainPassword = 'ekp123';

bcrypt.hash(plainPassword, 10).then((hash) => {
    console.log('Generated hash:', hash);
});
