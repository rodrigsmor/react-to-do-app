import React from 'react';
import Grid from '../template/Grid';
import { connect } from 'react-redux';
import IconButton from '../template/IconButton';

function TodoForm(props) {
    const keyHandler = (e) => {
        if(e.key == 'Enter') {
            e.shiftKey 
                ? props.handleSearch()
                : props.handleAdd()
        } else if(e.key === 'Escape') {
            props.handleClear();
        }
    }

    return (
        <div role={'form'} className={'todoForm'}>
            <Grid cols={'12 9 10'}>
                <input 
                    type="text" 
                    id="description"
                    className="form-control"
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    placeholder='Adicione uma tarefa...' 
                />
            </Grid>

            <Grid cols={'12 3 2'}>
                <IconButton
                    icon={'plus'}
                    style={'primary'}
                    onClick={props.handleAdd}
                />
                <IconButton
                    icon={'search'}
                    style={'info'}
                    onClick={props.handleSearch}
                />
                <IconButton
                    icon={'close'}
                    style={'default'}
                    onClick={props.handleClear}
                />
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => ({
    description: state.todo.description
})

export default connect(mapStateToProps)(TodoForm)