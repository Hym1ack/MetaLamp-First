import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';

import './date-dropdown.scss';
// Masked
new AirDatepicker('.date-dropdown__field--masked', {
  maxDate: new Date(),
  prevHtml: `<svg transform="rotate(180)" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path  d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="#BC9CFF"/>
  </svg>`,
  nextHtml: `<svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path  d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="#BC9CFF"/>
  </svg>`,
  navTitles: {
    days: `MMMM yyyy`,
  },
});

// Range
let apply = {
  content: 'Применить',
  className: 'air-datepicker-button--apply',
  onClick: dp => {
    dp.hide();
  },
};

new AirDatepicker('.date-dropdown--start', {
  range: true,
  inline: true,
  multipleDates: true,
  minDate: new Date(),
  multipleDatesSeparator: '-',
  buttons: ['clear', apply],
  onSelect(fd) {
    document.querySelector('.date-dropdown--start').value = fd.formattedDate[0];
    document.querySelector('.date-dropdown--end').value = fd.formattedDate[1]
      ? fd.formattedDate[1]
      : '';
  },
  prevHtml: `<svg transform="rotate(180)" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path  d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="#BC9CFF"/>
  </svg>`,
  nextHtml: `<svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path  d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="#BC9CFF"/>
  </svg>`,
  navTitles: {
    days: `MMMM yyyy`,
  },
});
// Filter

import localeRu from 'air-datepicker/locale/ru';

new AirDatepicker('.date-dropdown__field--filter', {
  range: true,
  locale: localeRu,
  multipleDates: true,
  multipleDatesSeparator: ' - ',
  dateFormat: `dd MMM`,
  prevHtml: `<svg transform="rotate(180)" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path  d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="#BC9CFF"/>
  </svg>`,
  nextHtml: `<svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path  d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="#BC9CFF"/>
  </svg>`,
  navTitles: {
    days: `MMMM yyyy`,
  },
});
