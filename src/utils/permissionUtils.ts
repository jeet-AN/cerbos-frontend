export const hasRole = (resourceAccess: string[], currentRole: string): Boolean => {
    if(resourceAccess.includes('*') || resourceAccess.includes(currentRole)) return true;
    return false
};
  