import { PageLayout, PageLayoutProps } from './PageLayout';
import { Roles } from 'features/users';

interface ManagerPageLayoutProps
  extends Omit<PageLayoutProps, 'allowedRoles'> {}

/**
 *
 * Allow only manager to view page
 */
export const ManagerPageLayout = ({
  title,
  children = null,
  ...rest
}: ManagerPageLayoutProps) => {
  return (
    <PageLayout title={title} allowedRoles={[Roles.MANAGER]}>
      {children}
    </PageLayout>
  );
};
