import { getUserTenantIDs } from '@/utilities/getUserTenantIDs'
import { isSuperAdmin } from '../../../access/isSuperAdmin'
import { Access } from 'payload'

/**
 * Tenant admins and super admins can will be allowed access
 */
export const superAdminOrTenantAdminAccess: Access = ({ req }) => {
  if (!req.user) {
    return false
  }

  if (isSuperAdmin(req.user)) {
    return true
  }

  const adminTenantAccessIDs = getUserTenantIDs(req.user, 'tenant-admin')
  // const requestedTenant = req?.data?.tenant || req.user?.tenant

  if (/*requestedTenant &&*/ adminTenantAccessIDs.length > 0) {
    return true
  }

  return false
}
