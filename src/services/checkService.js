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

const removeCheckHabit = obj => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE habits SET habitIsChecked=? WHERE habitArea=?;',
        [obj.habitIsChecked, obj.habitArea],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject('Error updating obj');
        },
        (_, error) => reject(error),
      );
    });
  });
};

const removeCheck = (mindHabit, moneyHabit, bodyHabit, funHabit) => {
  const date = new Date();
  const DAILY = 'Diário';
  const WEEKLY = 'Semanal';
  const MONTHLY = 'Mensal';

  const mindLastCheck =
    date.getDate() - (new Date(mindHabit?.lastCheck).getDate() + 1);

  if (
    (mindHabit?.habitFrequency === DAILY && mindLastCheck > 0) ||
    (mindHabit?.habitFrequency === WEEKLY && mindLastCheck > 7) ||
    (mindHabit?.habitFrequency === MONTHLY && mindLastCheck > 30)
  ) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: mindHabit?.habitArea,
    });
  }

  const moneyLastCheck =
    date.getDate() - (new Date(moneyHabit?.lastCheck).getDate() + 1);

  if (
    (moneyHabit?.habitFrequency === DAILY && moneyLastCheck > 0) ||
    (moneyHabit?.habitFrequency === WEEKLY && moneyLastCheck > 7) ||
    (moneyHabit?.habitFrequency === MONTHLY && moneyLastCheck > 30)
  ) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: moneyHabit?.habitArea,
    });
  }

  const BodyLastCheck =
    date.getDate() - (new Date(bodyHabit?.lastCheck).getDate() + 1);

  if (
    (bodyHabit?.habitFrequency === DAILY && BodyLastCheck > 0) ||
    (bodyHabit?.habitFrequency === WEEKLY && BodyLastCheck > 7) ||
    (bodyHabit?.habitFrequency === MONTHLY && BodyLastCheck > 30)
  ) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: bodyHabit?.habitArea,
    });
  }

  const FunLastCheck =
    date.getDate() - (new Date(funHabit?.lastCheck).getDate() + 1);
  if (
    (funHabit?.habitFrequency === DAILY && FunLastCheck > 0) ||
    (funHabit?.habitFrequency === WEEKLY && FunLastCheck > 7) ||
    (funHabit?.habitFrequency === MONTHLY && FunLastCheck > 30)
  ) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: funHabit?.habitArea,
    });
  }
};

export default {
  checkHabit,
  removeCheckHabit,
  removeCheck,
};
