import { connect } from 'react-redux';
import EmployeeListComponent from '../components/employee-list.component';

const mapStateToProps = (state) => ( {
    employees: state.employees,
    savedSort: state.sortEmployee
})

const mapDispatchToProps = {
    
}

const EmployeeListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(EmployeeListComponent)

export default EmployeeListContainer