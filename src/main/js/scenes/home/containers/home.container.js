import { connect } from 'react-redux';
import HomeScreen from '../../home';

const mapStateToProps = (state) => ( {
    selectedEmployee: state.selectedEmployee,
    selectedEmployeeTab: state.selectedEmployeeTab,
    savedSort : state.sortEmployee
})

const mapDispatchToProps = {
    
}

const HomeScreenContainer = connect(
  mapStateToProps, mapDispatchToProps
)(HomeScreen)

export default HomeScreenContainer