import { adminRoot } from './defaultValues';
// import { UserRole } from "../helpers/authHelper"

const data = [
  {
    id: 'dashboards',
    icon: 'iconsminds-shop-4',
    label: 'menu.dashboards',
    to: `${adminRoot}/dashboards`,
    roles: ['admin', 'teacher'],
  },
  {
    id: 'pages',
    icon: 'iconsminds-digital-drawing',
    label: 'menu.pages',
    to: `${adminRoot}/pages/model/data-list`,
    roles: ['admin'],
  },
  {
    id: 'teacher',
    icon: 'simple-icon-trophy',
    label: 'menu.teacher',
    to: `${adminRoot}/teacher/list`,
    roles: ['admin'],
  },
  {
    id: 'blankpage',
    icon: 'simple-icon-book-open',
    label: 'menu.blank-page',
    to: `${adminRoot}/blank-page`,
    roles: ['admin'],
  },
  {
    id: 'user',
    icon: 'simple-icon-user',
    label: 'menu.master-user',
    to: `${adminRoot}/account-setting`,
    roles: ['admin', 'teacher'],
  },
];
export default data;
