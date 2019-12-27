import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';

let refs = {};

export const setRef = (path, ref) => {
  refs = set(path, ref, refs);
};
export const getRef = path => getOr({}, path, refs);
export const getRefs = () => refs
;