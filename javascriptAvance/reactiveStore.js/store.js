// store.js
/*
Read data from a common store
Update the store
React automatically (optionally) when the store changes
*/
/*export*/ const store = (() => {
    const state = {
        requests: [],
        jwtToken: ''
    };

    const listeners = new Set();

    function get() {
        // return a copy of the state
        return structuredClone(state);
    }

    // a chaque changement d'état, on appelle tous les listeners
    function set(newState) {
        Object.assign(state, newState);
        listeners.forEach(fn => fn(get()));
    }

    function subscribe(fn) {
        listeners.add(fn);
        fn(get()); // initial call
        return () => listeners.delete(fn);
    }

    return { get, set, subscribe };
})();
