import { connect } from 'react-redux';
import FamilyListComponent from '../components/family-list.component';

const mapStateToProps = (state) => ( {
    families: state.families,
    selectedEmployee: state.selectedEmployee
})

const mapDispatchToProps = {
    
}

const FamilyListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(FamilyListComponent)

export default FamilyListContainer