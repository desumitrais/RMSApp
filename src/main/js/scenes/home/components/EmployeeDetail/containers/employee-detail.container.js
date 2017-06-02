import { connect } from 'react-redux';
import EmployeeDetailComponent from '../../EmployeeDetail';

const mapStateToProps = (state) => ({
    selectedEmployee: state.selectedEmployee
})

const mapDispatchToProps = {
    
}

const EmployeeDetailContainer = connect(
  mapStateToProps, mapDispatchToProps
)(EmployeeDetailComponent)

export default EmployeeDetailContainer