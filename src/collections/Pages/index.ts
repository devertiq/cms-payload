import type { CollectionConfig } from 'payload'

import { ensureUniqueSlug } from './hooks/ensureUniqueSlug'
import { superAdminOrTenantAdminAccess } from '@/collections/Pages/access/superAdminOrTenantAdmin'
import { ensureUniqueBlockIdentifier } from './hooks/ensureUniqueBlockName'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: superAdminOrTenantAdminAccess,
    delete: superAdminOrTenantAdminAccess,
    read: () => true,
    update: superAdminOrTenantAdminAccess,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      defaultValue: '',
      hooks: {
        beforeValidate: [ensureUniqueSlug],
      },
      index: true,
    },
    {
      name: 'contents',
      type: 'blocks',
      blocks: [
        {
          slug: 'blocksList',
          fields: [
            {
              name: 'identifier',
              type: 'text',
              defaultValue: '',
              hooks: {
                beforeValidate: [ensureUniqueBlockIdentifier],
              },
              index: true,
            },
            {
              name: 'content',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
