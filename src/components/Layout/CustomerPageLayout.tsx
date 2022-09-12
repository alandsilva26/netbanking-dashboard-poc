import { PageLayout, PageLayoutProps } from './PageLayout';
import { Roles } from 'features/users';

interface CustomerPageLayoutProps
  extends Omit<PageLayoutProps, 'allowedRoles'> {}

/**
 *
 * Allow only customer to view page
 */
export const CustomerPageLayout = ({
  title,
  children = null,
  ...rest
}: CustomerPageLayoutProps) => {
  return (
    <PageLayout title={title} allowedRoles={[Roles.CUSTOMER]}>
      {children}
    </PageLayout>
  );
};
