import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-grid-system';

//redux store
import appStore  from '../../../../../store/app.store';

//material ui depedencies
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';

//other
import * as _ from 'lodash';

export default class EmployeeSearchComponent extends React.Component{

    constructor(props) {
		super(props);
		this.state = {
            search: props.savedSearch
        }
	}

    componentWillReceiveProps(nextProps) {
        this.setState( nextProps.savedSearch ? { search: nextProps.savedSearch } : { search: []});
    }

    changeSearchTextField(object, value) {
        this.state.search = value;
        this.setState({search: _.cloneDeep(this.state.search)});
    }

    handleSaveSearch = () => {
        appStore.dispatch({
            type: 'SET_SEARCH',
            payload: _.cloneDeep(this.state.search)
        });
    };

    handleKeyPress(event, obj) {
        if(event.charCode === 13){
            appStore.dispatch({
                type: 'SET_SEARCH',
                payload: _.cloneDeep(this.state.search)
            });
        }
    };

    render(){
        const svgStyle={
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            marginTop: '-12px',
        }
        const colStyle={
            height: '50px'
        }
        return (
            <Row>
                <Col xs={2} style={colStyle}>
                    <ActionSearch color={'white'} style={svgStyle} onClick={(event, obj)=> this.handleSaveSearch(event, obj)}></ActionSearch>
                </Col>
                <Col xs={10} style={colStyle}>
                    <TextField
                        value={this.state.search}
                        hintText="Search"
                        onChange={(event, value)=>  this.changeSearchTextField(event, value)}
                        onKeyPress={(event, obj)=> this.handleKeyPress(event, obj)}
                        underlineStyle={{display: 'none'}}
                        style ={{width: '300px'}}
                        inputStyle={{color: white}}
                        hintStyle={{color: white}}/>
                </Col>
            </Row>
        )
    }
}