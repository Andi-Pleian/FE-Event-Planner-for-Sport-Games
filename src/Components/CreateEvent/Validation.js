const valitation = (values) => {
    let errors = {};
    if (!values.select) {
        errors.select = "Select the type of the event!"
    }
    if (!values.fullname) {
        errors.fullname = "Name is required!"
    }
    if (!values.date) {
        errors.date = "Date is required!"
    }
    if (!values.location) {
        errors.location = "Location is required!"
    }
}
export default valitation;
