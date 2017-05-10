import { connect } from 'react-redux';
import EmployeeCountComponent  from '../components/employee-count.component';

const mapStateToProps = (state) => ({
    employees: state.employees
})

const mapDispatchToProps = {
    
}

const EmployeeCountContainer = connect(
  mapStateToProps, mapDispatchToProps
)(EmployeeCountComponent)

export default EmployeeCountContainer