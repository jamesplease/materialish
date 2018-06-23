import { warning } from './warning';

export default function validateOverConfig(config) {
  // The config object itself is required.
  if (!config) {
    if (process.env.NODE_ENV !== 'production') {
      warning(
        `You attempted to open an Over Element without passing a config.` +
          ` The config argument is required.`,
        'MISSING_CONFIG'
      );
    }

    return false;
  }

  // Configs must have an ID.
  if (typeof config.id !== 'string' && typeof config.id !== 'number') {
    if (process.env.NODE_ENV !== 'production') {
      warning(
        `You attempted to open an Over Element with an invalid config.id.` +
          ` The ID must be a string or a number.`,
        'INVALID_CONFIG_ID'
      );
    }

    return false;
  }

  return true;
}
