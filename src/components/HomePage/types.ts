export type BorderColorProps = {
  borderColor: string;
};

export type HabitProps = {
  habitName?: string;
  habitTime?: string;
  habitFrequency?: string;
  habitArea?: string;
  habitNotificationTime: string | null;
  progressBar: number;
  habitChecks: number;
};
