import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

import './date-dropdown.scss';

// let apply = {
//   content: 'Применить',
//   className: 'air-datepicker-button--apply',
//   onClick: dp => {
//     dpMin.hide();
//   },
// };

// dpMin = new AirDatepicker('.date-dropdown--start', {
//   onSelect({ date }) {
//     dpMax.update({
//       minDate: date,
//     });
//   },
// });
// dpMax = new AirDatepicker('.date-dropdown--end', {
//   onSelect({ date }) {
//     dpMin.update({
//       maxDate: date,
//     });
//   },
// });

new AirDatepicker('.date-dropdown--start', {
  inline: true,
  // range: true,
  // minDate: new Date(),
  multipleDatesSeparator: '-',
  // buttons: ['clear', apply],
  onSelect(fd) {
    console.log(fd);
    document.querySelector('.date-dropdown--start').value = fd.formattedDate[0];
    document.querySelector('.date-dropdown--end').value = fd.formattedDate[1]
      ? fd.formattedDate[1]
      : '';
  },
});

// new Litepicker({
//   element: document.querySelector('.date-dropdown--start'),
//   elementEnd: document.querySelector('.date-dropdown--end'),
//   singleMode: false,
//   lang: 'ru-RU',
//   autoApply: false,
//   buttonText: {
//     apply: 'Применить',
//     cancel: 'Очистить',
//     previousMonth: `<svg transform="rotate(180)" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path  d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="#BC9CFF"/>
//     </svg>
//     `,
//     nextMonth: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path  d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="#BC9CFF"/>
//     </svg>
//     `,
//   },
// });
