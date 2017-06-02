import { connect } from 'react-redux';
import EmployeeFilterComponent  from '../components/employee-filter.component';

const mapStateToProps = (state) => ({
    savedFilter: state.filterEmployee
})

const mapDispatchToProps = {
    
}

const EmployeeFilterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(EmployeeFilterComponent)

export default EmployeeFilterContainer