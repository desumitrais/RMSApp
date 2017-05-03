import { connect } from 'react-redux';
import HomeScreen from '../../home';

const mapStateToProps = (state) => ( {
    selectedEmployee: state.selectedEmployee
})

const mapDispatchToProps = {
    
}

const HomeScreenContainer = connect(
  mapStateToProps, mapDispatchToProps
)(HomeScreen)

export default HomeScreenContainer