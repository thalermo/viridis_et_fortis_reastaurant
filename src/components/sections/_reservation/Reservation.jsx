import React, { useState } from 'react';

import './reservation.style.scss';
import PersonIcon from "../../../assets/icons/frame@2x.png";
import CalendarIcon from "../../../assets/icons/calendar@2x.png";
import clockIcon from "../../../assets/icons/clock@2x.png";
import { RxChevronDown } from 'react-icons/rx';
import '../../../scss/base/_utilities.scss';
import Button from '../../ui/_button/Button';



function Reservation(props) {

  const [steps, setSteps] = useState(0);

  const handleSubmit = (e) => {
    console.log(props.values);
    e.preventDefault();
    setSteps(steps + 1)
    console.log(steps);

  };

  const onChange = (e) => {
    props.setValues({ ...props.values, [e.target.name]: e.target.value })
  }



  return (
    <section id='reservation' className='section u-padding-m'>

      {steps === 0 &&

        <form className='form' onSubmit={handleSubmit}>
          <h3 className='u-section-title'>make a reservation</h3>

          <div className="form__inputs-container">
            <div className="input-wrapper">
              <label htmlFor="numberOfPeople" className="input-wrapper__label">
                <img src={PersonIcon} alt="" className='input-wrapper__icon' />
                <input
                  className='input-wrapper__input'
                  type="number"
                  placeholder="2 persons"
                  id="number"
                  onChange={onChange}
                  value={props.values.persons}
                  name="persons"
                />
                <RxChevronDown className='input-wrapper__arrow' />
              </label>
            </div>

            <div className="input-wrapper">
              <label htmlFor="calendar" className="input-wrapper__label">
                <img src={CalendarIcon} alt="" className='input-wrapper__icon' />
                <input
                  className='input-wrapper__input'
                  type="date"
                  name="date"
                  placeholder="2 March 2020"
                  value={props.values.date}
                  id="date"
                  onChange={onChange}
                />
                <RxChevronDown className='input-wrapper__arrow' />
              </label>
            </div>

            <div className="input-wrapper">
              <label htmlFor="calendar" className="input-wrapper__label">
                <img src={clockIcon} alt="" className='input-wrapper__icon' />
                <input
                  className='input-wrapper__input'
                  type="time"
                  name="time"
                  placeholder="20:20"
                  value={props.values.time}
                  id="time"
                  onChange={onChange}
                />
                <RxChevronDown className='input-wrapper__arrow' />
              </label>
            </div>
          </div>

          <Button
            className="btn btn-inverse"
            text="reserve table"
          />
        </form>}


      {steps === 1 &&

        <form className='form form--step1' onSubmit={handleSubmit}>
          <h3 className='u-section-title'>make a reservation</h3>

          <div className="form__inputs-container">
            <div className="input-wrapper">
              <label htmlFor="numberOfPeople" className="input-wrapper__label">
                <img src={PersonIcon} alt="" className='input-wrapper__icon' />
                <input
                  className='input-wrapper__input'
                  type="name"
                  placeholder="Write your name"
                  id="name"
                  onChange={onChange}
                  value={props.values.name}
                  name="name"
                />
                <RxChevronDown className='input-wrapper__arrow' />
              </label>
            </div>

            <div className="input-wrapper">
              <label htmlFor="name" className="input-wrapper__label">
                <img src={CalendarIcon} alt="" className='input-wrapper__icon' />
                <input
                  className='input-wrapper__input'
                  type="email"
                  name="email"
                  placeholder="write your email"
                  value={props.values.email}
                  id="email"
                  onChange={onChange}
                />
                <RxChevronDown className='input-wrapper__arrow' />
              </label>
            </div>

            <div className="input-wrapper">
              <label htmlFor="calendar" className="input-wrapper__label">
                <img src={clockIcon} alt="" className='input-wrapper__icon' />
                <input
                  className='input-wrapper__input'
                  type="number"
                  name="phone"
                  placeholder="write your phone number"
                  value={props.values.phone}
                  id="phone"
                  onChange={onChange}
                />
                <RxChevronDown className='input-wrapper__arrow' />
              </label>
            </div>

            <div className="input-wrapper">
              <label htmlFor="note" className="input-wrapper__label">

                <textarea
                  className='input-wrapper__input'
                  rows="4"
                  cols="50"
                  type="text"
                  name="note"
                  placeholder="additional information... "
                  value={props.values.note}
                  id="note"
                  onChange={onChange}>
                </textarea>

              </label>
            </div>
          </div>

          <Button
            className="btn btn-inverse"
            text="Confirm Reservation"
          />
        </form>}


    </section>


  );
}

export default Reservation;

