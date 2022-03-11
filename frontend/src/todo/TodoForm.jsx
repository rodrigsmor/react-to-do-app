import Grid from '../template/Grid';
import React from 'react';
import IconButton from '../template/IconButton';

export default props => {
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