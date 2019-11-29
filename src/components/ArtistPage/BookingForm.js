import React from 'react';
import './styles/bookingform.css';
import '../../res/fonts/futura.ttf'

class BookingForm extends React.Component {

    render() {
        return(
            <form method={"post"} className={"bookingForm"}>
                <h4 className={"bookingTitle"}>Book {this.props.name}</h4>
                <input type={"text"}
                       className={"bookingName"}
                       placeholder={"Navn"}
                       required={true}/>
                <br/>
                <input type={"text"}
                       className={"bookingArrangement"}
                       placeholder={"Navn på arrangement"}
                       required={true}/>
                <br/>
                <input type={"email"}
                       className={"bookingEmail"}
                       placeholder={"E-post"}
                       required={true}/>
                <br/>
                <input type={"text"}
                       className={"bookingPlace"}
                       placeholder={"Sted"}
                       required={true}/>
                <br/>
                <textarea required={true}
                          className={"bookingDesc"}
                          placeholder={"Fortell om arrangementet"}
                          rows={4}
                />
                <br/>
                <input type={"submit"}
                       id={"bookingSubmit"}
                       placeholder={"Submit"}
                />
            </form>
        )
    }
}

export default BookingForm;