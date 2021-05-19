export default [
  {
    path: '/',
    label: 'Home',
    icon: 'fas fa-home'
  },
  {
    isDropDown: true,
    label: 'About',
    icon: 'fas fa-info-circle',
    options: [
      {
        path: '/about',
        label: 'About Us'
      },
      {
        path: '/why-choose-us',
        label: 'Why Choose Us'
      },
      {
        path: '/about/our-history',
        label: 'History'
      },
      {
        path: '/why-choose-us/overview',
        label: 'Over view'
      },
      {
        path: '/why-choose-us/awards',
        label: 'Awards'
      },
      {
        path: '/why-choose-us/our-doctors',
        label: 'Our doctors'
      },
      {
        path: '/why-choose-us/virtual-tour',
        label: 'Virtual tour'
      }
    ]
  },
  {
    isDropDown: true,
    label: 'Services',
    icon: 'fab fa-servicestack',
    options: [
      {
        path: '/services',
        label: 'All Services'
      },
      {
        path: '/services/medical-centers',
        label: 'Medical Centers'
      },
      {
        path: '/services/medical-programs',
        label: 'Medical Programs'
      },
      {
        path: '/services/support-services',
        label: 'Support Services'
      },
      {
        path: '/services/inpatient-units',
        label: 'Inpatient'
      },
      {
        path: '/services/day-surgery-unit',
        label: 'Day Surgery Unit'
      }
    ]
  },
  {
    isDropDown: true,
    label: 'patient guide & health information ',
    icon: 'fas fa-file-medical-alt',
    options: [
      {
        path: '/patient-guide',
        label: 'All'
      },
      {
        path: '/patient-guide/for-patients',
        label: 'For Patient'
      },
      {
        path: '/patient-guide/for-visitors',
        label: 'For Visitors'
      },
      {
        path: '/patient-guide/directions',
        label: 'Directions'
      },
      {
        path: '/patient-guide/hospital-aminities',
        label: 'Hospital Amenities'
      }
      // {
      //   path: '/ask-me',
      //   label: 'Ask Me'
      // },
      // {
      //   path: '/my-doctor-service',
      //   label: 'My Doctor Service'
      // }
    ]
  },
  {
    isDropDown: true,
    label: 'Training & Education',
    icon: 'fas fa-calendar-check',
    options: [
      {
        path: '/training-education',
        label: 'Events And Courses'
      },
      {
        path: '/faculty',
        label: 'Faculty'
      }
    ]
  },
  {
    path: '/media-center',
    label: 'Media Center',
    icon: 'fas fa-images'
  },
  {
    path: '/community',
    label: 'Community',
    icon: 'fas fa-people-carry'
  }
];
