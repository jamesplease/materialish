// This code is from the qhistory library:
// https://github.com/pshrmn/qhistory
// It didn't seem like big enough code to justify a new dep

/* eslint-disable */

export default function historyWithQuery(history, stringify, parse) {
  const addSearch = location => {
    if (typeof location === 'object') {
      location.search = location.query
        ? stringify(location.query)
        : location.search || '';
    }
  };

  const addQuery = location => {
    const { search } = location;
    if (search) {
      location.query = parse(
        search.charAt(0) === '?' ? search.substring(1) : search
      );
    } else {
      location.query = {};
    }
  };

  const updateProperties = (history, queryHistory) => {
    const properties = ['location', 'length', 'entries', 'index', 'action'];
    properties.forEach(prop => {
      if (history.hasOwnProperty(prop)) {
        queryHistory[prop] = history[prop];
      }
    });
  };

  // make sure that the initial location has query support
  addQuery(history.location);

  const queryHistory = {
    ...history,
    push: (location, state) => {
      addSearch(location);
      history.push(location, state);
    },
    replace: (location, state) => {
      addSearch(location);
      history.replace(location, state);
    },
    createHref: location => {
      addSearch(location);
      return history.createHref(location);
    },
  };

  // This relies on being the first listener called by
  // the actual history instance. If you register a
  // listener on the history instance before modifying
  // it with qhistory, the location object will not have
  // the query property set on it when that listener
  // is called.
  history.listen(location => {
    addQuery(location);
    updateProperties(history, queryHistory);
  });

  return queryHistory;
}
