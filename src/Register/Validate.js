export default function Validate(values) {
    let errors = {}

    if (!values.email) {
        errors.email = 'Email required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more'
    } else if (!/[0-9]/g.test(values.password)) {
        errors.password = 'Password must contain numbers'
    } else if (!/[a-z]/g.test(values.password)) {
        errors.password = 'Password must contain lowercase and uppercase letters'
    } else if (!/[A-Z]/g.test(values.password)) {
        errors.password = 'Password must contain lowercase and uppercase letters'
    }

    return errors;
}