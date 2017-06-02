import { connect } from 'react-redux';
import EmployeeSortComponent  from '../components/employee-sort.component';

const mapStateToProps = (state) => ({
    savedSort: state.sortEmployee
})

const mapDispatchToProps = {
    
}

const EmployeeSortContainer = connect(
  mapStateToProps, mapDispatchToProps
)(EmployeeSortComponent)

export default EmployeeSortContainer