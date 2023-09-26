export default [
  {
    isDropDown: true,
    label: 'about',
    icon: 'fas fa-info-circle',
    options: [
      {
        path: 'about/overview',
        label: 'overview'
      },
      {
        path: 'about/vision-mission',
        label: 'vision_and_mission'
      },
      {
        path: 'about/values', 
        label: 'core_values'
      },

      {
        path: 'about/strategic-priorities',
        label: 'strategic_priorities'
      },
      {
        path: 'about/awards',
        label: 'awards'
      },
      {
        path: 'about/our-history',
        label: 'history'
      },

      {
        path: 'about/board-directors-and-executive-team',
        label: 'board_governers_and_leadership_team'
      },
      {
        path: 'about/fast-facts',
        label: 'fast_facts'
      },
      {
        path: 'about/almoosa-medical-group',
        label: 'almoosa_medical_group'
      },
      {
        path: 'about/annual-report',
        label: 'annual_report'
      }
    ]
  },
  {
    isDropDown: true,
    label: 'services',
    path: 'services',
    icon: 'fab fa-servicestack',
    options: [
      {
        path: 'services',
        label: 'all_services'
      },
      {
        path: 'services/medical-centers',
        label: 'medical_centers'
      },
      {
        path: 'services/medical-programs',
        label: 'medical_programs'
      },
      {
        path: 'services/supportive-services',
        label: 'support_services'
      },
      {
        path: 'services/inpatient-units',
        label: 'inpatient'
      },
      {
        path: 'services/nursing-department',
        label: 'nursing_department'
      }
    ]
  },
  {
    path: 'for-patient',
    label: 'for_patient',
    icon: 'fas fa-file-medical-alt'
  },
  {
    path: 'for-visitors',
    label: 'for_visitors',
    icon: 'fas fa-file-medical-alt'
  },
  {
    isDropDown: true,
    // path: 'training-education',
    label: 'training_education',
    icon: 'fas fa-calendar-check',
    options: [
      {
        path: 'training-education/events',
        label: 'events'
      },
      {
        path: 'training-education/courses',
        label: 'courses'
      },
      {
        path: 'training-education/academic-affairs',
        label: 'academic_affairs'
      }
    ]
  },

  {
    isDropDown: true,
    path: 'media-center',
    label: 'media_center',
    icon: 'fas fa-images',
    options: [
      {
        path: 'media-center/video-gallery',
        label: 'video_gallery'
      },
      {
        path: 'media-center/photo-gallery',
        label: 'photo_gallery'
      },
      {
        path: 'media-center/podcast',
        label: 'podcast'
      },
      {
        path: 'media-center/hakeem-magazine',
        label: 'hakeem_magazine'
      },
      {
        path: 'media-center/news',
        label: 'news'
      },
      {
        path: 'media-center/medical-articles',
        label: 'medical_articles'
      }
    ]
  },
  {
    path: 'community',
    label: 'community',
    icon: 'fas fa-people-carry'
  }
];
