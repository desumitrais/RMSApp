import React from 'react';
import ReactDOM from 'react-dom';

import Chip from 'material-ui/Chip';

export default class EmployeeCountComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const styles = {
            chip: {
                margin: 2,
                position: 'absolute',
                top: '50%',
                marginTop: '-12px'
            },
            count: {
                minWidth: '45px',
                height: '24px',
                lineHeight: '24px',
                textAlign: 'center'
            }
        };
        return (
            <Chip style={styles.chip}>
                <div style={styles.count}>{this.props.employees? this.props.employees.length : 0}</div>
            </Chip>
        )
    }
}
