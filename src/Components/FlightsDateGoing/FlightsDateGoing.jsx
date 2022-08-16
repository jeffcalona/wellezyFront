import { Calendar, SearchNormal1 } from 'iconsax-react';
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { Calendar as CalendarNew } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Assets/styles.css'
import { Link } from 'react-router-dom';

const FlightsDateGoing = ({ oneWay, roundTrip, cardRef, setDateGoingSelected, setDateSreturnSelected, searcherFlight }) => {
  
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [aaa, setAaa] = useState(false)
  const [dateOneWay, setDateOneWay] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    aaa: aaa,
    key: 'selection'
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setDateGoingSelected(ranges.selection.startDate.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}))
    setAaa(!ranges.selection.aaa)
    setEndDate(ranges.selection.endDate)
    setDateSreturnSelected(ranges.selection.endDate.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}))
  }

  const onChangeOnlyDate = (item) => {
    setDateOneWay(item)
    setDateGoingSelected(item.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}))
  }
  return (
    <div className='flightsDateGoing_container' ref={cardRef}>
      {oneWay ? 
        <div className='flightsDateGoing'>
          <div className='flightsDateGoing_'>
            <div className='flightsDateGoing_date' style={{ border: '1px solid #004274' }}>
              <div className='flightsDateGoing_date_'>
                <div>
                  <h2>ida</h2>
                  <p>{dateOneWay.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</p>
                </div>
                <div>
                  <Calendar size="20" color="#004274" variant="Bold"/>
                </div>
              </div>
            </div>
            <button className='flightDate_searcher' onClick={searcherFlight}>
              <div>
                <SearchNormal1 size="45" color="#004274"/>
              </div>
            </button>
          </div>
          <div className='dateRangeOnly'>
            <CalendarNew editableDateInputs={true} months={2} direction="horizontal" onChange={onChangeOnlyDate} date={dateOneWay} />
          </div>
        </div>
        :
        <div className='flightsDateGoing'>
          <div className='flightsDateGoing_'>
            {aaa ? 
              <div className='flightsDateGoing_date' style={{ border: '1px solid #004274' }}>
                <div className='flightsDateGoing_date_'>
                  <div>
                    <h2>ida</h2>
                    <p>{startDate.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</p>
                  </div>
                  <div>
                    <Calendar size="20" color="#004274" variant="Bold"/>
                  </div>
                </div>
              </div>
              :
              <div className='flightsDateGoing_date'>
                <div className='flightsDateGoing_date_'>
                  <div>
                    <h2>ida</h2>
                    <p>{startDate.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</p>
                  </div>
                  <div>
                    <Calendar size="20" color="#004274" variant="Bold"/>
                  </div>
                </div>
              </div>
            }
            {!aaa ? 
              <div className='flightsDateGoing_date' style={{ border: '1px solid #004274' }}>
                <div className='flightsDateGoing_date_'>
                  <div>
                    <h2>vuelta</h2>
                    <p>{endDate.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</p>
                  </div>
                  <div>
                    <Calendar size="20" color="#004274" variant="Bold"/>
                  </div>
                </div>
              </div>
              :
              <div className='flightsDateGoing_date'>
                <div className='flightsDateGoing_date_'>
                  <div>
                    <h2>vuelta</h2>
                    <p>{endDate.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</p>
                  </div>
                  <div>
                    <Calendar size="20" color="#004274" variant="Bold"/>
                  </div>
                </div>
              </div>
            }
            <button className='flightDate_searcher' onClick={searcherFlight}>
              <div>
                  <SearchNormal1 size="45" color="#004274"/>
              </div>
            </button>
          </div>
          <div className='dateRange'>
            <DateRange editableDateInputs={true} onChange={handleSelect} moveRangeOnFirstSelection={false} ranges={[selectionRange]} months={2} direction="horizontal" />
          </div>
        </div>
      }
    </div>
  )
}

export default FlightsDateGoing