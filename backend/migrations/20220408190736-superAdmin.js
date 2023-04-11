const {
  account,
  profile
} = require('./seeds/superAdmin');

module.exports = {
  async up(db, client) {
    try {

      const m = await db.collection('accounts').insertMany(account);
      const o = await db.collection('profiles').insertMany(profile);

      console.log(m);
      console.log(o);

    } catch (e) {
      console.log(e);
    }
  },

  async down(db, client) {
    try {
      account.map(async acc => {
        let m = await db.collection('accounts').deleteOne({
          email: acc.email
        });
        console.log(m);
      })
      profile.map(async prof => {
        const prf = await db.collection('profiles').deleteOne({
          email: prof.email
        });
        console.log(prf);
      })

    } catch (e) {
      console.log(e);
    }
  }
};