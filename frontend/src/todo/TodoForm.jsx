import Grid from '../template/Grid';
import React from 'react';
import IconButton from '../template/IconButton';

export default props => (
    <div role={'form'} className={'todoForm'}>
        <Grid cols={'12 9 10'}>
            <input 
                type="text" 
                id="description"
                className="form-control"
                value={props.description}
                onChange={props.handleChange}
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
        </Grid>
    </div>
);