import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-grid-system';

//material ui depedencies
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';

export default class EmployeeSearchComponent extends React.Component{

    constructor(props) {
		super(props);
		this.state = {
            search: [],
        }
	}

    handleResetSearch(){
	    this.setState({
	        searchMode: false,
	        searchQuery: ''
        });
    }

    handleChangeSearchQueryValue(event, type) {
        var nextState = {};
        nextState[type] = event.target.value;
        this.setState(nextState);
    }

    handleUnSearchEmployee(event){
        if (event.target.value.length < 3){
            this.setState({
                searchMode: false,
            });
        }
    }

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
                    <ActionSearch color={'white'} style={svgStyle}></ActionSearch>
                </Col>
                <Col xs={10} style={colStyle}>
                    <TextField
                        value={this.state.searchQuery}
                        hintText="Search"
                        onChange={event => this.handleChangeSearchQueryValue(event, 'searchQuery')}
                        onBlur={this.handleUnSearchEmployee.bind(this)}
                        underlineStyle={{display: 'none'}}
                        style ={{width: '300px'}}
                        inputStyle={{color: white}}
                        hintStyle={{color: white}}/>
                </Col>
            </Row>
        )
    }
}