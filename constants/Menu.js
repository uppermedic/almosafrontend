export default [
  {
    isDropDown: true,
    label: 'about',
    icon: 'fas fa-info-circle',
    options: [
      {
        path: '/about/overview',
        label: 'overview'
      },
      {
        path: '/about/vision-mission',
        label: 'vision and mission'
      },
      {
        path: '/about/values',
        label: 'core values'
      },

      {
        path: '/about/strategic-priorities',
        label: 'strategic priorities'
      },
      {
        path: '/about/awards',
        label: 'awards'
      },
      {
        path: '/about/our-history',
        label: 'history'
      },

      {
        path: '/about/board-directors-and-executive-team',
        label: 'board governers and leadership team'
      },
      {
        path: '/about/fast-facts',
        label: 'fast facts'
      },
      {
        path: '/about/almoosa-medical-group',
        label: 'almoosa medical group'
      }
    ]
  },
  {
    isDropDown: true,
    label: 'services',
    icon: 'fab fa-servicestack',
    options: [
      {
        path: '/services',
        label: 'all services'
      },
      {
        path: '/services/medical-centers',
        label: 'medical centers'
      },
      {
        path: '/services/medical-programs',
        label: 'medical programs'
      },
      {
        path: '/services/supportive-services',
        label: 'support services'
      },
      {
        path: '/services/inpatient-units',
        label: 'inpatient'
      },
      {
        path: '/services/nursing-department',
        label: 'nursing department'
      }
    ]
  },
  {
    path: '/for-patient',
    label: 'for patient',
    icon: 'fas fa-file-medical-alt'
  },
  {
    path: '/for-visitors',
    label: 'for visitors',
    icon: 'fas fa-file-medical-alt'
  },
  {
    isDropDown: true,
    path: '/training-education',
    label: 'training education',
    icon: 'fas fa-calendar-check',
    options: [
      {
        path: '/training-education/events',
        label: 'events'
      },
      {
        path: '/training-education/courses',
        label: 'courses'
      },
      {
        path: '/training-education/academic-affairs',
        label: 'academic affairs'
      }
    ]
  },

  {
    isDropDown: true,
    path: '/media-center',
    label: 'media center',
    icon: 'fas fa-images',
    options: [
      {
        path: '/media-center/video-gallery',
        label: 'video gallery'
      },
      {
        path: '/media-center/photo-gallery',
        label: 'photo gallery'
      },
      {
        path: '/media-center/podcast',
        label: 'podcast'
      },
      {
        path: '/media-center/hakeem-magazine',
        label: 'hakeem magazine'
      },
      {
        path: '/media-center/blog',
        label: 'blog'
      }
    ]
  },
  {
    path: '/community',
    label: 'community',
    icon: 'fas fa-people-carry'
  }
];
