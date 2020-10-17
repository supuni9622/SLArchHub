import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { extend, L10n} from '@syncfusion/ej2-base';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { SampleBase } from './utils/samplebase';
import { PropertyPane } from './utils/property-pane';
import * as dataSource from './utils/datasource.json';
import axios from 'axios';

L10n.load({
    'en-US' : {
        'schedule' : {
            'saveButton' : 'Submit',
            'newEvent' : 'New Booking'
        }
    }
})

/**
 * Schedule Default sample
 */
class Work extends SampleBase {
    constructor(props) {
        super(...arguments, props);
        this.data = extend([], dataSource.scheduleData, null, true);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            name: '',
            startTime: '',
            endTime: '',
            description: '',
            isBlocked: false
        }
    }
     change(args) {
        this.scheduleObj.selectedDate = args.value;
        this.scheduleObj.dataBind();
    }
    
    onDragStart(args) {
        args.navigation.enable = true;
    }  

    onChangeName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeDescription(e) {
        this.setState({description: e.target.value})
      }

      onChangeStartTime(e) {
        this.setState({startTime: e.target.value})
      }

      onChangeEndTime(e) {
        this.setState({endTime: e.target.value})
      }

      onSubmit(e) {
        e.preventDefault()
      /*
        if (this.props.user.userData && !this.props.user.userData.isAuth) {
          return alert('Please Log in First')
      } */
      
        const bookingObject = {
            name: this.state.name,
            description: this.state.description,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            isBlocked: true,
            bookingFrom: this.props.user.userData._id,
            bookingTo: this.props.userId
        }

        
        axios.post('http://localhost:5000/booking/saveBooking', bookingObject)
        .then(res => console.log(res.data.result));

        this.setState({
            name: '', 
            description: '',
            startTime: '',
            endTime: ''
        })
    }

    editorTemplate(props) {
        return ((props !== undefined) ? <form onSubmit={this.onSubmit}>
              <div>
                  <p className="e-textlabel">Name of the Client</p>
                <div class="name-item">
                    <input id="Name" className="e-field e-input" type="text" name="name" value={this.state.name} onChange={this.onChangeName} style={{ width: '100%' }}/>
                </div>
            </div>
            <div class="item">
                <p className="e-textlabel">From</p>
                <div>
                    <DateTimePickerComponent id="StartTime" format='dd/MM/yy hh:mm a' data-name="startTime" value={new Date(props.startTime || props.StartTime)} className="e-field"  onChange={this.onChangeStartTime}></DateTimePickerComponent>
                </div>
            </div>
            <div>
                <p className="e-textlabel">To</p>
                <div>
                    <DateTimePickerComponent id="EndTime" format='dd/MM/yy hh:mm a' data-name="endTime" value={new Date(props.endTime || props.EndTime)} className="e-field" onChange={this.onChangeEndTime}></DateTimePickerComponent>
                </div>
            </div>
            <div>
                <p className="e-textlabel">Briefly explain about your project </p>
                <div>
                <textarea id="Description" className="e-field e-input" name="description" value={this.state.description} onChange={this.onChangeDescription} rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form> : <div></div>);
    }

    render() {
        return (<div className='schedule-control-section'>
        <div className='col-lg-12 control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent height='550px' ref={schedule => this.scheduleObj = schedule} selectedDate={new Date(2019, 0, 10)} 
                     eventSettings={{ dataSource: this.data }} 
                    dragStart={(this.onDragStart.bind(this))} 
                editorTemplate={this.editorTemplate.bind(this)}>
              <ViewsDirective>
                <ViewDirective option='Day'/>
                <ViewDirective option='Week'/>
                 <ViewDirective option='WorkWeek'/>
                <ViewDirective option='Month'/>
                <ViewDirective option='Agenda'/>
              </ViewsDirective>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
            </ScheduleComponent>
          </div>
        </div>
        {/*<div className='col-lg-3 property-section'>
          <PropertyPane title='Properties'>
            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
              <tbody>
                <tr style={{ height: '50px' }}>
                  <td style={{ width: '30%' }}>
                    <div className='col-md-4' style={{ paddingTop: '8px' }}>Current Date</div>
                  </td>
                  <td style={{ width: '70%' }}>
                    <div className='datepicker-control-section'>
                      <DatePickerComponent value={new Date(2019, 0, 10)} showClearButton={false} change={this.change.bind(this)}></DatePickerComponent>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </PropertyPane>
        </div> */}
      </div>);
    }
}

export default Work
//render(<Default />, document.getElementById('sample'));