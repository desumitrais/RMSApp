import { connect } from 'react-redux';
import EmployeeSearchComponent  from '../components/employee-search.component';

const mapStateToProps = (state) => ({
    savedSearch: state.searchEmployee
})

const mapDispatchToProps = {
    
}

const EmployeeSearchContainer = connect(
  mapStateToProps, mapDispatchToProps
)(EmployeeSearchComponent)

export default EmployeeSearchContainer