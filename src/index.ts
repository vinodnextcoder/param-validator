/**
 * @author vinod khetade
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Check object contain all keys in keyList
 * @memberof utils
 * @param obj {object} object
 * @param keyList {array} array of object key
 */
export function findMissingKeyInObject(obj: { [x: string]: string }, keyList: any) {
  const missingKeys: any[] = [];
  if (keyList && keyList.length > 0) {
    keyList.forEach((key: any) => {
      if (typeof obj[key] === 'string') {
        obj[key] = obj[key].trim();
      }

      if (!hasOwnProperty.call(obj, key) || obj[key] === null || obj[key] === '') missingKeys.push(key);
    });
  }
  if (missingKeys.length === 0) return false;
  else return missingKeys.toString();
}

/**
 * check any required parameter is missing from request object or array object.
 * @memberof utils
 * @param request {object} request body
 * @param requiredParams {array} required params in request body
 * @return {*}
 */
export function checkRequiredMissingParam(request: any, requiredParams: any) {
  let missingRequiredParamMsg = null;
  if (requiredParams && requiredParams.length > 0) {
    if (isArray(request)) {
      if (request.length > 0) {
        for (const i of request) {
          const missingKeys = findMissingKeyInObject(request[i], requiredParams);
          if (missingKeys) {
            missingRequiredParamMsg = ' [' + missingKeys + '] is missing in array of object';
            break;
          }
        }
      } else {
        missingRequiredParamMsg = ' Empty array request found.';
      }
    } else if (!isEmpty(request)) {
      const missingKeys = findMissingKeyInObject(request, requiredParams);
      if (missingKeys) {
        missingRequiredParamMsg = 'Missing param [' + missingKeys + ']';
      }
    } else {
      missingRequiredParamMsg = ' Empty request found.';
    }
  }

  if (isEmpty(missingRequiredParamMsg)) return false;
  else return missingRequiredParamMsg;
}

/**
 * 'true' if object is empty otherwise 'false'
 * @memberof utils
 * @param obj {object} object can be 'object,string,number,array'
 * @returns {boolean}
 */
export function isEmpty(obj: any) {
  // null and undefined are "empty"
  if (obj === undefined || obj === null || obj === '') return true;

  if (typeof obj === 'number' || typeof obj === 'string') return false;
  // Assume if it has a length property with a non-zero value
  // that property is correct.
  if (obj.length > 0) return false;
  if (obj.length <= 0) return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

/**
 * 'true' if object is array otherwise 'false'
 * @memberof utils
 * @param arr {array} array object
 * @returns {boolean}
 */
export function isArray(arr: string | any[]) {
  try {
    return Array.isArray(arr);
  } catch (e) {
    return false;
  }
}
