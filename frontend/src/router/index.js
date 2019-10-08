import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Social from '../pages/Social.vue';
import Media from '../pages/Media.vue';
import Snackbar from '../pages/Snackbar.vue';
import Chart from '../pages/Chart.vue';
import Mailbox from '../pages/Mailbox.vue';
import Calendar from '../pages/Calendar.vue';
import Login from '../pages/core/Login.vue';
import Error from '../pages/core/Error.vue';
import TimeLine from '../components/TimeLine.vue';
import ClientTable from '../components/clienttable.vue';
import ProjectTable from '../components/projecttable.vue';
import EditProject from '../components/project/EditProject.vue';
import ProjectBasic from '../components/project/tabs/ProjectBasic.vue';
import ProjectClient from '../components/project/tabs/ProjectClient.vue';
import ProjectContract from '../components/project/tabs/ProjectContract.vue';
import ProjectFormular from '../components/project/tabs/ProjectFormular.vue';
import ProjectMounting from '../components/project/tabs/ProjectMounting.vue';
import ProjectObject from '../components/project/tabs/ProjectObject.vue';
import ProjectPayment from '../components/project/tabs/ProjectPayment.vue';

import ProjectStatus from '../components/dictionary/ProjectStatus.vue';
import PropertyType from '../components/dictionary/PropertyType.vue';
import ServiceType from '../components/dictionary/ServiceType.vue';
import ObjectType from '../components/dictionary/ObjectType.vue';
import PaymentType from '../components/dictionary/PaymentType.vue';
import MainContractors from '../components/dictionary/MainContractors.vue';
import ClientType from '../components/dictionary/ClientType.vue';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'Dashboard' }
        ]
      }
    },
    {
      path: '/mailbox',
      name: 'Mailbox',
      component: Mailbox,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Mailbox' }
        ]
      }
    },
    {
      path: '/projecttable',
      name: 'ProjectTable',
      component: ProjectTable,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'ProjectTable' }
        ]
      }
    },
    {
      path: '/snackbar',
      name: 'Snackbar',
      component: Snackbar,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Snackbar' }
        ]
      }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Calendar' }
        ]
      }
    },
    {
      path: '/social',
      name: 'Social',
      component: Social,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Social' }
        ]
      }
    },
    {
      path: '/timeline',
      name: 'TimeLine',
      component: TimeLine,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'TimeLine'}
        ]
      }
    },
    {
      path: '/clienttable',
      name: 'ClientTable',
      component: ClientTable,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'ClientTable'}
        ]
      }
    },
    {
      path: '/media',
      name: 'Media',
      component: Media,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Media' }
        ]
      }
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Chart' }
        ]
      }
    },
    {
      path: '/project-status',
      name: 'ProjectStatus',
      component: ProjectStatus,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'ProjectStatus' }
        ]
      }
    },
    {
      path: '/property-type',
      name: 'PropertyType',
      component: PropertyType,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'PropertyType' }
        ]
      }
    },
    {
      path: '/service-type',
      name: 'ServiceType',
      component: ServiceType,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'ServiceType' }
        ]
      }
    },
    {
      path: '/object-type',
      name: 'ObjectType',
      component: ObjectType,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'ObjectType' }
        ]
      }
    },
    {
      path: '/payment-type',
      name: 'PaymentType',
      component: PaymentType,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'PaymentType' }
        ]
      }
    },
    {
      path: '/main-contractors',
      name: 'MainContractors',
      component: MainContractors,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'MainContractors' }
        ]
      }
    },
    {
      path: '/client-type',
      name: 'ClientType',
      component: ClientType,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'ClientType' }
        ]
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/edit-project',
      name: 'EditProject',
      component: EditProject,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'EditProject' }
        ]
      },
      children: [
        {
          path: 'basic',
          name: 'ProjectBasic',
          component: ProjectBasic
        },
        {
          path: 'client',
          name: 'ProjectClient',
          component: ProjectClient
        },
        {
          path: 'contract',
          name: 'ProjectContract',
          component: ProjectContract
        },
        {
          path: 'formular',
          name: 'ProjectFormular',
          component: ProjectFormular
        },
        {
          path: 'mounting',
          name: 'ProjectMounting',
          component: ProjectMounting
        },
        {
          path: 'object',
          name: 'ProjectObject',
          component: ProjectObject
        },
        {
          path: 'payment',
          name: 'ProjectPayment',
          component: ProjectPayment
        }
      ]
    }
  ],
  mode: 'history'
});
