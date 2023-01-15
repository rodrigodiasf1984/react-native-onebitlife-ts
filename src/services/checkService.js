import db from '~/database';

const checkHabit = obj => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE habits SET lastCheck=?, habitIsChecked=?, habitChecks=? WHERE habitArea=?;',
        [obj.lastCheck, obj.habitIsChecked, obj.habitChecks, obj.habitArea],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else Promise.reject(new Error('Error updating obj'));
        },
        (_, error) => reject(error),
      );
    });
  });
};

export default {
  checkHabit,
};
