import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component {
  state = {
    events: this.props.availableDate.map((el) => {
      if (
        new Date(el).getTime() - new Date().getTime() > 0 &&
        new Date(new Date(el).getTime() - new Date().getTime()).getUTCDate() >=
          10
      )
        return {
          start: el,
          end: el,
          title: 'Còn chỗ',
          allDay: true,
        };
    }),
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div
        id='detail-content-sticky-nav-03'
        class='fullwidth-horizon-sticky-section'
      >
        <h4 class='heading-title'>
          <i class='fas fa-map-marker-alt'></i> Lịch khởi hành
        </h4>
        <div className='d-flex justify-content-center'>
          <DnDCalendar
            defaultDate={moment().toDate()}
            defaultView='month'
            events={this.state.events}
            localizer={localizer}
            onEventDrop={this.onEventDrop}
            style={{ height: '60vh', width: '100%' }}
          />
        </div>
        <div className='mb-50'></div>
      </div>
    );
  }
}

export default App;
