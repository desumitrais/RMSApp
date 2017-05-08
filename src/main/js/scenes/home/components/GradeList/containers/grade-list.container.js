import { connect } from 'react-redux';
import GradeListComponent from '../components/grade-list.component';

const mapStateToProps = (state) => ( {
    grades: state.grades,
    selectedEmployee: state.selectedEmployee
})

const mapDispatchToProps = {

}

const GradeListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(GradeListComponent)

export default GradeListContainer