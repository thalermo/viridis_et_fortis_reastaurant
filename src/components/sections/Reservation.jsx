import React, { useState } from 'react';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './reservation.style.scss';
import PersonIcon from "../../assets/icons/frame@2x.png";
import CalendarIcon from "../../assets/icons/calendar@2x.png";
import clockIcon from "../../assets/icons/clock@2x.png";
import { RxChevronDown } from 'react-icons/rx';
import '../../sass/base/_utilities.scss';
import Button from '../ui/Button';

function Reservation() {

  //  destructure reservation data
  // const { title, subtitle, midelImg, btnText } = reservationData;

  // data state 
  // const [startDate, setStartDate] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [date, setDate] = useState('6 Mar 2023');
  const [time, setTime] = useState('8:00 PM');


  const handleChangeNumberOfPeople = (e) => {
    const value = e.target.value;
    setNumberOfPeople(value);
  }
  const handleChangeDate = (e) => {
    const value = e.target.value;
    setDate(value);
  }

  // clock state 
  // const onChangeDateHandler = (value) => {
  //   setStartDate(value)
  // }

  return (
    <section id='reservation' className='section u-padding-m'>

      <form className='form'>
        <h3 className='u-section-title'>make a reservation</h3>

        <div className="form__inputs">

          <div class="form__group">
            <label for="numberOfPeople" class="form__group__label">
              <img src={PersonIcon} alt="" className='form__group__icon' />
              <input
                className='form__group__input'
                type="number"
                name="numberOfPeople"
                placeholder="2 persons"
                value={numberOfPeople}
                onChange={handleChangeNumberOfPeople}
                id="numberOfPeople"
              />
              <RxChevronDown className='form__group__arrow' />
            </label>
          </div>

          <div class="form__group">
            <label for="calendar" class="form__group__label">
              <img src={CalendarIcon} alt="" className='form__group__icon' />
              <input
                className='form__group__input'
                type="number"
                name="calendar"
                placeholder={date}
                value={date}
                onChange={handleChangeDate}
                id="numberOfPeople"
              />
              <RxChevronDown className='form__group__arrow' />
            </label>
          </div>

          <div class="form__group">
            <label for="calendar" class="form__group__label">
              <img src={clockIcon} alt="" className='form__group__icon' />
              <input
                className='form__group__input'
                type="number"
                name="calendar"
                placeholder={time}
                value={time}
                onChange={handleChangeDate}
                id="numberOfPeople"
              />
              <RxChevronDown className='form__group__arrow' />
            </label>
          </div>
        </div>

        <Button
          className="btn"
          text="reserve table"
          color="white"
          background="#3fb13d"
          padding=" 1.5rem 5rem"
          fontWeight="400"
        />
      </form>
    </section>

  );
}

export default Reservation;