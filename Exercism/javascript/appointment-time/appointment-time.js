// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const appointment = now !== undefined ? new Date(now) : new Date();
  appointment.setDate(appointment.getDate() + days);
  return appointment;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp);

  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date. getMinutes()
  }
}

/**
 * Update an appointment with given options
*
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
*/
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);

  const settings = {
    year: date.setFullYear.bind(date),
    month: date.setMonth.bind(date),
    date: date.setDate.bind(date),
    hour: date.setHours.bind(date),
    minute: date.setMinutes.bind(date)
  }

  for ( const [key, value] of Object.entries(options)){
    settings[key]?.(value);
  }
  
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date. getMinutes()
  }
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const timeA = new Date(timestampA).getTime();
  const timeB = new Date(timestampB).getTime();
  const timeDiff = Math.abs(timeA - timeB);
  return Math.round(timeDiff / 1000);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const present = new Date(currentTimestamp);
  const appointment = new Date(appointmentTimestamp);

  return appointment.getTime() > present.getTime();
}
